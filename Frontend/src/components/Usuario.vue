<template>
  <div id="root">
    <h2>
      Usuarios
      <a
        class="btn-floating btn-small btn tooltipped -red"
        data-position="top"
        data-delay="50"
        id="boton"
        data-tooltip="Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
      >
        <i class="material-icons left">help</i>Update
      </a>
    </h2>
    <p>Pagina Actual: {{currentPage}}</p>
    <button v-on:click="anterior()" class="waves-effect waves-teal btn-large">Anterior</button>
    <button v-on:click="siguiente()" class="waves-effect waves-teal btn-large">Siguiente</button>
    <br />
    <table class="table centered">
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Scope</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in data" v-bind:key="usuario">
          <td>{{usuario.usuario}}</td>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.telefono}}</td>
          <td>{{usuario.scope}}</td>
          <td>
            <a
              v-on:click="startToModifyUsuario(usuario)"
              class="btn-floating btn-small waves-effect waves-green green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteUsuario(usuario._id)"
              class="btn-floating btn-small waves-effect waves-red red"
            >
              <i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <ul id="tabs-swipe-demo" class="tabs">
      <li class="tab col s3">
        <a class="active" v-on:click="tabControl('test-swipe-1')" href="#test-swipe-1">Crear</a>
      </li>
      <li class="tab col s3">
        <a v-on:click="tabControl('test-swipe-2')" href="#test-swipe-2">Modificar</a>
      </li>
    </ul>
    <div class="row">
      <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="usuario.usuario = $event.target.value"
          type="text"
          v-model="usuario.usuario"
          :disabled="loading"
          id="usuario"
        />
        <label for="usuario">Usuario</label>
      </div>
      <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="usuario.contrasena = $event.target.value"
          type="text"
          v-model="usuario.contrasena"
          :disabled="loading"
          id="contrasena"
        />
        <label for="contrasena">Contraseña</label>
      </div>
      <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="usuario.nombre = $event.target.value"
          type="text"
          v-model="usuario.nombre"
          :disabled="loading"
          id="nombre"
        />
        <label for="nombre">Nombre</label>
      </div>
      <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="usuario.telefono = $event.target.value"
          type="text"
          v-model="usuario.telefono"
          :disabled="loading"
          id="telefono"
        />
        <label for="telefono">Telefono</label>
      </div>
    </div>
    <label for="scope">Seleccione el tipo de usuario:</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          v-on:input="usuario.scope = $event.target.value"
          type="text"
          v-model="usuario.scope"
          :disabled="loading"
          id="scope"
        >
          <option value="Cliente">Cliente</option>
          <option value="Administrador">Administrador</option>
          <option value="Cajero">Cajero</option>
          <option value="Mesero">Mesero</option>
        </select>
      </div>
    </div>

    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-teal btn-large"
        v-on:click="createUsuario"
        :disabled="loading"
        id="boton"
      >
        <i class="material-icons left">create</i>Crear
      </a>
    </div>
    <div id="test-swipe-2" class="col s12">
      <div
        class="card"
      >Atención: Los cambios realizados no se guardan hasta que haga click en el botón de update.</div>
      <a
        class="waves-effect waves-teal btn-large"
        v-on:click="modifyUsuario"
        :disabled="loading"
        id="boton"
      >
        <i class="material-icons left">update</i>Update
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "usuario",
  data() {
    return {
      usuarios: [],
      usuario: {},
      loading: false,
      idModificar: "",
      selectedTab: "test-swipe-1",
      data: [],
      inicio: 0,
      final: 5,
      currentPage: 1,
      size: 1,
      ordenes: []
    };
  },

  methods: {
    siguiente() {
      if (this.currentPage < this.size) {
        this.currentPage = this.currentPage + 1;
        if (this.usuarios.length % 5 == 0) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.usuarios.slice(this.inicio, this.final);
        } else if (
          this.usuarios.length % 5 != 0 &&
          this.currentPage == this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + (this.usuarios.length % 5);
          this.data = this.usuarios.slice(this.inicio, this.final);
        } else if (
          this.usuarios.length % 5 != 0 &&
          this.currentPage < this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.usuarios.slice(this.inicio, this.final);
        }
      }
    },
    anterior() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        if (this.currentPage < this.size) {
          if (this.usuarios.length % 5 == 0) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.usuarios.slice(this.inicio, this.final);
          } else if (
            this.usuarios.length % 5 != 0 &&
            this.currentPage == this.size - 1
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - (this.usuarios.length % 5);
            this.data = this.usuarios.slice(this.inicio, this.final);
          } else if (
            this.usuarios.length % 5 != 0 &&
            this.currentPage < this.size
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.usuarios.slice(this.inicio, this.final);
          }
        }
      }
    },
    getUsuario() {
      this.$http.get("http://localhost:8000/usuarios").then(response => {
        this.usuarios = response.body;
        this.data = this.usuarios.slice(this.inicio, this.final);
        if (this.usuarios.length % 5 == 0) {
          this.size = this.usuarios.length / 5;
        } else {
          this.size = parseInt(this.usuarios.length / 5) + 1;
        }
      });
    },

    createUsuario() {
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      var patt1 = /[0-9]/g;
      var patt2 = /[a-z]/g;
      console.log(this.usuario.telefono.match(patt1) + " patron result patt1");
      console.log(this.usuario.telefono.match(patt2) + " patron result patt2");
      if (
        this.usuario.scope == undefined ||
        this.usuario.nombre == undefined ||
        this.usuario.telefono == undefined ||
        this.usuario.usuario == undefined ||
        this.usuario.contrasena == undefined
      ) {
        this.loading = false;
        sweetAlert("Oops...", "Hay un campo vacio", "error");
      } else if (this.usuario.usuario.length < 3) {
        this.loading = false;
        sweetAlert(
          "Oops...",
          "El usuario debe tener por lo menos 3 caracteres ",
          "error"
        );
      } else if (this.usuario.contrasena.match(patt1) == null) {
        this.loading = false;
        sweetAlert(
          "Oops...",
          "La contraseña debe tener por lo menos un numero ",
          "error"
        );
      } else if (!(this.usuario.telefono.toLowerCase().match(patt2) == null)) {
        this.loading = false;
        sweetAlert("Oops...", "El telefono contiene letras", "error");
      } else if (this.usuario.telefono.length < 8) {
        this.loading = false;
        sweetAlert(
          "Oops...",
          "El teléfono debe tener por lo menos 8 caracteres",
          "error"
        );
      } else if (this.usuario.nombre.length < 3) {
        this.loading = false;
        sweetAlert(
          "Oops...",
          "El nombre debe tener por lo menos 3 caracteres ",
          "error"
        );
      } else {
        this.$http
          .post("http://localhost:8000/usuarios/create", this.usuario)
          .then(response => {
            this.loading = false;
            if (!response.body.success) {
              this.usuario = {};
              sweetAlert(
                "Creado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.getUsuario();
            } else {
              sweetAlert("Oops...", "Error al crear", "error");
            }
          });
      }
    },
    probar(clave, num) {
      return clave.indexOf(num) != -1 ? false : true;
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.usuario = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyUsuario(usuario) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = usuario._id;
      this.usuario = usuario;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyUsuario() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.$http
          .put(
            "http://localhost:8000/usuarios/update/" + this.idModificar,
            this.usuario
          )
          .then(response => {
            if (response.body.success) {
              this.getUsuario();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
              this.usuario = {};
            } else {
              this.getUsuario();

              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );

              this.loading = false;
            }
          });
      }
    },
    deleteUsuario(idUsuario) {
      let _this = this;
      var entrar = true;
      for (let i = 0; i < _this.ordenes.length; i++) {
        const element = _this.ordenes[i];
        if (element.idUsuario == idUsuario) {
          entrar = false;
          sweetAlert(
          "Eliminación Bloqueada",
          "El usuario se encuentra relacionado con Ordenes",
          "warning"
        );
        }
      }
      if (entrar) {
        sweetAlert(
          {
            title: "¿Estás seguro?",
            text: "No podrás revertir los cambios",
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar",
            showCloseButton: true,
            showLoaderOnConfirm: true
          },
          function(inputValue) {
            setTimeout(function() {
              if (inputValue) {
                //****************************************************** */
                _this.loading = true;
                _this.$http
                  .delete("http://localhost:8000/usuarios/delete/" + idUsuario)
                  .then(response => {
                    this.loading = false;
                    if (response.body.success) {
                      sweetAlert("Oops...", "Error al eliminar", "error");
                      _this.getUsuario();
                    } else {
                      sweetAlert(
                        "Deleted!",
                        "Los cambios estan en la tabla",
                        "success"
                      );
                      _this.inicio = 0;
                      _this.final = 5;
                      _this.currentPage = 1;
                      _this.getUsuario();
                    }
                  });
                //****************************************************** */
              } else {
                sweetAlert("Cancelado", "Tus datos están a salvo", "info");
              }
            }, 500);
          }
        );
      } 
    },
    getOrdenes() {
      this.$http.get("http://localhost:8000/ordenes").then(response => {
        console.log(response);
        this.ordenes = response.body;
      });
    }
  },
  beforeMount() {
    this.getUsuario();
    this.getOrdenes();
  },
  mounted() {
    $("ul.tabs").tabs();
    $("select").material_select();
    $(".tooltipped").tooltip({ delay: 50 });
  }
};
</script>

<style scoped>
#importance {
  color: black !important;
  opacity: 0.7;
  text-align: center;
  font-family: "Roboto", sans-serif !important;
  font-weight: lighter;
}
.collection-item {
  color: black;
}
.card {
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  background-color: black;
  font-size: 15px;
  color: white;
}
#contenedorTablaExterna {
  border-radius: 5px;
}
td {
  font-family: "Source Sans Pro", sans-serif;
}
th {
  color: white;
  background: #5994aa;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 25px;
  font-weight: 100;
  padding: 24px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
}
.table thead {
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 30px;
}
.table {
  color: black;
  font-family: "Spectral", serif;
  font-size: 20px;
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 320px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

#homeCard {
  height: 230px;
  display: -webkit-box;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #06152f;
}
.-white {
  background-color: #f4f0ea;
  color: black;
}
.-lightblue {
  background-color: #5994aa;
  color: #fff;
}
.-blue {
  background-color: #06152f;
  color: #fff;
}
.-red {
  background-color: #ff0b00;
  color: #fff;
}
.-black {
  background-color: #262626;
  color: #fff;
}
#TOOLTIP-ID.backdrop {
  background-color: red;
}
h4 {
  text-align: center;
  color: black !important;
}
#root {
  font-family: "Playfair Display";
  font-weight: bold;
  color: white;
}

#test-swipe-1 {
  /*background-color: #E6E2AF;*/
  color: #4c1b1b;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center;
}

#test-swipe-2 {
  /*background-color: #F6E497;*/
  color: #4c1b1b;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center;
}

.tabs .indicator {
  background-color: #a7a37e !important;
  color: #4c1b1b !important;
}

.tabs {
  background-color: #ff0b00 !important;
  color: #4c1b1b !important;
  font-family: "Spectral", serif;
  font-weight: bold;

  border-radius: 3px;
}

.tabs .tab a.active {
  color: white;
}

.tabs .tab a:hover {
  color: gray;
}

.tabs .tab a {
  color: #4c1b1b;
}

#boton {
  background-color: #5994aa;
}

/* label focus color */
input {
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: normal;
  font-size: 17px;
}
textarea {
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: normal;
  font-size: 17px;
}
label {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
}
.input-field input:focus + label {
  color: #5994aa !important;
}
/* label underline focus color */

.row .input-field input:focus {
  border-bottom: 1px solid #5994aa !important;
  box-shadow: 0 1px 0 0 #5994aa !important;
}

.input-field input:focus + label {
  color: #5994aa !important;
}
/* label underline focus color */

.row .input-field input:focus {
  border-bottom: 1px solid #5994aa !important;
  box-shadow: 0 1px 0 0 #5994aa !important;
}

.input-field textarea:focus + label {
  color: #5994aa !important;
}
/* label underline focus color */

.row .input-field textarea:focus {
  border-bottom: 1px solid #5994aa !important;
  box-shadow: 0 1px 0 0 #5994aa !important;
}
</style>

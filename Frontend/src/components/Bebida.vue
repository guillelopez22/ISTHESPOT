<template>
  <div id="root">
    <h2>
      Bebidas
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
    <button v-on:click="anterior()" class="waves-effect waves-teal btn-large pulse">Anterior</button>
    <button v-on:click="siguiente()" class="waves-effect waves-teal btn-large">Siguiente</button>
    <br />
    <table class="table centered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Proveedor</th>
          <th>Tipo</th>
          <th>Inventario</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bebida, index) in data">
          <td>{{bebida.nombre}}</td>
          <td>{{proveedores2[index]}}</td>
          <td>{{bebida.tipo}}</td>
          <td>{{bebida.inventario}}</td>
          <td>{{bebida.descripcion}}</td>
          <td>{{bebida.precio}}</td>
          <td>
            <a
              v-on:click="startToModifyBebida(bebida)"
              class="btn-floating btn-small waves-effect waves-green green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteBebida(bebida._id)"
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
          placeholder
          v-on:input="bebida.nombre = $event.target.value"
          type="text"
          v-model="bebida.nombre"
          :disabled="loading"
          id="Nombre"
        />
        <label for="Nombre">Nombre</label>
      </div>
      <div class="input-field col s6">
        <input
          placeholder
          v-on:input="bebida.precio = $event.target.value"
          type="number"
          v-model="bebida.precio"
          :disabled="loading"
          id="Precio"
        />
        <label for="Precio">Precio</label>
      </div>

      <div class="input-field col s6">
        <h6>Seleccione el Tipo de Bebida</h6>
        <select
          style="color: black"
          class="browser-default"
          v-on:input="bebida.tipo = $event.target.value"
          type="text"
          v-model="bebida.tipo"
          :disabled="loading"
          id="Tipo"
          placeholder
        >
          <option value="Gaseosa">Gaseosa</option>
          <option value="Alcohol">Alcohol</option>
          <option value="Refresco Natural">Refresco Natural</option>
          <option value="Agua">Agua</option>
          <option value="BebidasABaseDeCafe">Bebidas A Base De Cafe</option>
        </select>
      </div>
      <div class="input-field col s6">
        <input
          placeholder
          v-on:input="bebida.inventario = $event.target.value"
          type="number"
          v-model="bebida.inventario"
          :disabled="loading"
          id="Inventario"
        />
        <label for="Inventario">Inventario</label>
      </div>

      <div class="input-field col s12">
        <textarea
          placeholder
          v-on:input="bebida.descripcion = $event.target.value"
          v-model="bebida.descripcion"
          :disabled="loading"
          id="Descripcion"
          type="text"
          class="materialize-textarea"
        ></textarea>

        <label for="Descripcion">Descripción</label>
      </div>
      <div class="row">
        <div class="input-field col s7">
          <input
            placeholder
            v-on:input="imagen = $event.target.value"
            type="text"
            v-model="imagen"
            :disabled="loading"
            id="imagen"
          />
          <label for="imagen">Imagen</label>
        </div>
        <div class="input-field col s5">
          <button
            v-on:click="cargarImagen()"
            class="waves-effect waves-teal btn-large"
          >Mostrar Imagen</button>
        </div>
      </div>

      <label for="proveedor">Seleccione el proveedor</label>
      <div class="row">
        <div class="input-field col s6">
          <select
            style="color: black"
            class="browser-default"
            :disabled="loading"
            id="idProveedor"
            v-on:input="bebida.idProveedor = $event.target.value"
            type="text"
            v-model="bebida.idProveedor"
          >
            <option v-for="p in proveedores" v-bind:key="p" :value="p._id">{{p.nombre}}</option>
          </select>
        </div>
      </div>
    </div>
    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-teal btn-large"
        v-on:click="createBebida"
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
        class="waves-effect waves-light-green btn-large"
        v-on:click="modifyBebida"
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
  name: "bebida",
  data() {
    return {
      bebidas: [],
      bebida: {},
      loading: false,
      idModificar: "",
      idProv: "N/A",
      nombreProv: "",
      selectedTab: "test-swipe-1",
      proveedor: {},
      proveedores: [],
      proveedores2: [],
      data: [],
      inicio: 0,
      final: 5,
      currentPage: 1,
      size: 1,
      ordenesbebidas: [],
      imagen: "",
      combosbebidas: []
    };
  },
  watch: {
    idProv: function(val) {
      if (val != "N/A") {
        this.nombreProv = "";
      } else {
        this.$http
          .get("http://localhost:8000/proveedor/searchbyid/{_id}")
          .then(response => {
            this.nombreProv = response.body.proveedor.nombre;
          });
      }
    }
  },
  methods: {
    cargarImagen() {
      if (this.imagen != "") {
        swal({
          title: "Imagen Cargada Exitosamente!",
          imageUrl: this.imagen
        });
      } else {
        sweetAlert("Imagen Vacia", "Debe ingresar un URL valido", "warning");
      }
    },
    siguiente() {
      if (this.currentPage < this.size) {
        this.currentPage = this.currentPage + 1;
        if (this.bebidas.length % 5 == 0) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.bebidas.slice(this.inicio, this.final);
        } else if (
          this.bebidas.length % 5 != 0 &&
          this.currentPage == this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + (this.bebidas.length % 5);
          this.data = this.bebidas.slice(this.inicio, this.final);
        } else if (
          this.bebidas.length % 5 != 0 &&
          this.currentPage < this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.bebidas.slice(this.inicio, this.final);
        }
      }
    },
    anterior() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        if (this.currentPage < this.size) {
          if (this.bebidas.length % 5 == 0) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.bebidas.slice(this.inicio, this.final);
          } else if (
            this.bebidas.length % 5 != 0 &&
            this.currentPage == this.size - 1
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - (this.bebidas.length % 5);
            this.data = this.bebidas.slice(this.inicio, this.final);
          } else if (
            this.bebidas.length % 5 != 0 &&
            this.currentPage < this.size
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.bebidas.slice(this.inicio, this.final);
          }
        }
      }
    },
    getBebida() {
      let _this = this;
      this.$http.get("http://localhost:8000/bebidas").then(response => {
        this.bebidas = response.body;
        //await(1);
        response.body.map(function(value, key) {
          var i;
          var p = _this.proveedores;
          for (i = 0; i < p.length; i++) {
            if (value.idProveedor == p[i]._id) {
              _this.proveedores2.push(p[i].nombre);
            }
          }
        });
        this.data = this.bebidas.slice(this.inicio, this.final);
        if (this.bebidas.length % 5 == 0) {
          this.size = this.bebidas.length / 5;
        } else {
          this.size = parseInt(this.bebidas.length / 5) + 1;
        }
      });
    },
    newProveedor(proveedor_id) {
      this.idProv = proveedor_id;
    },
    borrarProveedor() {
      this.idProv = "N/A";
    },
    createBebida() {
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      //this.bebida.idProveedor = this.idProv;
      if (
        this.bebida.nombre == undefined ||
        this.bebida.tipo == undefined ||
        this.bebida.inventario == undefined ||
        this.bebida.descripcion == undefined ||
        this.bebida.idProveedor == undefined ||
        this.bebida.precio == undefined ||
        this.imagen == ""
      ) {
        this.loading = false;
        this.getBebida();
        sweetAlert("Oops...", "Faltó seleccionar algo", "error");
      } else {
        this.bebida.imagen = this.imagen;
        this.$http
          .post("http://localhost:8000/bebidas/create", this.bebida)
          .then(response => {
            this.loading = false;
            if (response.body.success) {
              this.bebida = {};
              this.imagen = "";
              sweetAlert(
                "Creado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.getBebida();
            } else {
              sweetAlert("Oops...", "Error al crear", "error");
            }
          });
      }
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.bebida = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyBebida(bebida) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = bebida._id;
      this.bebida = bebida;
      this.bebida.idProveedor = bebida.idProveedor;
      this.imagen = bebida.imagen;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyBebida() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.bebida.imagen = this.imagen;
        this.$http
          .put(
            "http://localhost:8000/bebidas/update/" + this.idModificar,
            this.bebida
          )
          .then(response => {
            if (response.body.success) {
              this.getBebida();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.bebida = {};
              this.imagen = "";
              this.loading = false;
            }
          });
      }
      this.loading = true;
    },
    deleteBebida(idBebida) {
      let _this = this;
      var entrar = true;
      for (let i = 0; i < _this.ordenesbebidas.length; i++) {
        const element = _this.ordenesbebidas[i];
        if (element.idBebida == idBebida) {
          entrar = false;
          sweetAlert(
          "Eliminación Bloqueada",
          "La bebida se encuentra relacionada con Ordenes",
          "warning"
        );
        }
      }
      for (let i = 0; i < _this.combosbebidas.length; i++) {
        const element = _this.combosbebidas[i];
        if (element.idBebida == idBebida) {
          entrar = false;
          sweetAlert(
          "Eliminación Bloqueada",
          "La bebida se encuentra relacionada con Combos",
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
                _this.loading = false;
                _this.$http
                  .delete("http://localhost:8000/bebidas/delete/" + idBebida)
                  .then(response => {
                    this.loading = false;
                    if (!response.body.success) {
                      sweetAlert("Oops...", "Error al eliminar", "error");
                      _this.getBebida();
                    } else {
                      _this.loading = false;
                      sweetAlert(
                        "Deleted!",
                        "Los cambios estan en la tabla",
                        "success"
                      );
                      _this.inicio = 0;
                      _this.final = 5;
                      _this.currentPage = 1;
                      _this.getBebida();
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
    getProveedores() {
      this.$http.get("http://localhost:8000/proveedores").then(response => {
        console.log(response);
        this.proveedores = response.body;
      });
    },
    getOrdenesBebidas() {
      this.$http.get("http://localhost:8000/ordenesbebidas").then(response => {
        console.log(response);
        this.ordenesbebidas = response.body;
      });
    },
    getCombosBebidas() {
      this.$http.get("http://localhost:8000/combosbebidas").then(response => {
        console.log(response);
        this.combosbebidas = response.body;
      });
    }
  },
  beforeMount() {
    this.getProveedores();
    this.getBebida();
    this.getOrdenesBebidas();
    this.getCombosBebidas();
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
  background-color: #A93226 !important;
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
h6 {
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  color:rgb(158, 158, 158)
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

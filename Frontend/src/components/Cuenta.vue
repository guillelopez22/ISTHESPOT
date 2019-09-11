<template>
  <div id="root">
    <h2>
      Cuentas
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
          <th>Nombre</th>
          <th>Mesero</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Total</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="cuenta in data" v-bind:key="cuenta">
          <td>{{cuenta.idUsuario}}</td>
          <td>{{cuenta.fecha}}</td>
          <td>{{cuenta.estado}}</td>
          <td>{{cuenta.total}}</td>
          <td>
            <a
              v-on:click="startToModifycuenta(cuenta)"
              class="btn-floating btn-small waves-effect waves-green green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deletecuenta(cuenta._id)"
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
          v-on:input="cuenta.idUsuario = $event.target.value"
          type="text"
          v-model="cuenta.idUsuario"
          :disabled="loading"
          id="Nombre"
        />
        <label for="Nombre">Mesero</label>
      </div>

      <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="cuenta.fecha = $event.target.value"
          type="number"
          v-model="cuenta.fecha"
          :disabled="loading"
          id="Numero"
        />
        <label for="Numero">Fecha</label>
      </div>

        <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="cuenta.estado = $event.target.value"
          type="number"
          v-model="cuenta.estado"
          :disabled="loading"
          id="Numero"
        />
        <label for="Numero">Estado</label>
      </div>

      <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="cuenta.total = $event.target.value"
          type="number"
          v-model="cuenta.total"
          :disabled="loading"
          id="Numero"
        />
        <label for="Numero">Total</label>
      </div>
    </div>
    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-teal btn-large"
        v-on:click="createcuenta"
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
        v-on:click="modifycuenta"
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
  name: "cuenta",
  data() {
    return {
      cuentas: [],
      cuenta: {},
      loading: false,
      idModificar: "",
      idcuenta: "N/A",
      nombreProv: "",
      selectedTab: "test-swipe-1",
      orden: {},
      ordenes: [],
      data: [],
      inicio: 0,
      final: 5,
      currentPage: 1,
      size: 1,
    };
  },
  watch: {
      /*
    idcuenta: function(val) {
      if (val != "N/A") {
        this.nombreProv = "";
      } else {
        this.$http
          .get("http://localhost:8000/orden/searchbyid/{_id}")
          .then(response => {
            this.nombreProv = response.body.orden.nombre;
          });
      }
    }*/
  },
  methods: {
    siguiente() {
      if (this.currentPage < this.size) {
        this.currentPage = this.currentPage + 1;
        if (this.cuentas.length % 5 == 0) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.cuentas.slice(this.inicio, this.final);
        } else if (
          this.cuentas.length % 5 != 0 &&
          this.currentPage == this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + (this.cuentas.length % 5);
          this.data = this.cuentas.slice(this.inicio, this.final);
        } else if (this.cuentas.length % 5 != 0 && this.currentPage < this.size) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.cuentas.slice(this.inicio, this.final);
        }
      }
    },
    anterior() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        if (this.currentPage < this.size) {
          if (this.cuentas.length % 5 == 0) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.cuentas.slice(this.inicio, this.final);
          } else if (
            this.cuentas.length % 5 != 0 &&
            this.currentPage == this.size - 1
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - (this.cuentas.length % 5);
            this.data = this.cuentas.slice(this.inicio, this.final);
          } else if (
            this.cuentas.length % 5 != 0 &&
            this.currentPage < this.size
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.cuentas.slice(this.inicio, this.final);
          }
        }
      }
    },
    getcuenta() {
      this.$http.get("http://localhost:8000/cuentas").then(response => {
        this.cuentas = response.body;
        this.data = this.cuentas.slice(this.inicio, this.final);
        if (this.cuentas.length % 5 == 0) {
          this.size = this.cuentas.length / 5;
        } else {
          this.size = parseInt(this.cuentas.length / 5) + 1;
        }
      });

      this.$http.get("http://localhost:8000/usuarios").then(response => {
        console.log(response);
        this.empleados2 = response.body;
      });
    },
    revisarcuenta(idcuenta) {
      if ((this.cuenta.idOrden = this.idcuenta && this.cuenta.i)) {
      }
    },
    newProveedor(orden_id) {
      this.idcuenta = orden_id;
    },
    borrarProveedor() {
      this.idcuenta = "N/A";
    },
    createcuenta() {
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      let _this = this;

      if (this.cuenta.nombre == undefined || this.cuenta.numero == undefined) {
        this.loading = false;
        sweetAlert("Oops...", "Error al crear,esta vacio :(", "error");
      } else {
        this.$http
          .get("http://localhost:8000/cuentas/searchbyname/" + this.cuenta.nombre)
          .then(response => {
            if (!response.body.length == 0) {
              /*mirar si es el mismo nombre*/
              this.$http
                .get(
                  "http://localhost:8000/cuentas/searchbynumero/" +
                    this.cuenta.numero
                )
                .then(response => {
                  if (!response.body.length == 0) {
                    /*mirar si es el mismo numero*/

                    this.$http
                      .post("http://localhost:8000/cuentas/create", this.cuenta)
                      .then(response => {
                        this.loading = false;
                        if (!response.body.success) {
                          this.cuenta = {};
                          sweetAlert(
                            "Creado con exito!",
                            "Los cambios estan en la tabla",
                            "success"
                          );
                          this.getcuenta();
                        } else {
                          sweetAlert("Oops...", "Error al crear", "error");
                        }
                      });
                  } else {
                    sweetAlert(
                      //ya existe cuenta con ese numero
                      "Oops...",
                      "Error al crear,ya existe una cuenta con el mismo numero",
                      "error"
                    );
                    this.getcuenta();
                    this.loading = false;
                  }
                });
            } else {
              //ya existe cuenta con ese nombre
              sweetAlert(
                "Oops...",
                "Error al crear,ya existe una cuenta con el mismo nombre",
                "error"
              );
              this.getcuenta();
              this.loading = false;
              console.log("Ya existe la cuenta y el numero");
              console.log(response.body.length);
            }
          });

        setTimeout(function() {
        var i;
        for (i = 0; i < _this.empleados.length; i++) {
          _this.cuentaxempleado = {};
          _this.cuentaxempleado.idcuenta = _this.cuentas[_this.cuentas.length - 1]._id;
          _this.cuentaxempleado.idEmpleado = _this.empleados[i];
          
          console.log(_this.productoxinsumo);
          _this.$http
            .post("http://localhost:8000/cuentasempleados/create", _this.cuentaxempleado)
            .then(response => {
              _this.loading = false;
              if (response.body.success) {
                _this.cuentaxempleado = {};
                console.log("agregó");
              } else {
                console.log("tronó");
              }
            });
        }
        _this.empleados = [];
      }, 1000);
      }
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.cuenta = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifycuenta(cuenta) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = cuenta._id;
      this.cuenta = cuenta;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifycuenta() {
      this.loading = true;
      if (this.idModificar != "") {
        this.$http
          .put(
            "http://localhost:8000/cuentas/update/" + this.idModificar,
            this.cuenta
          )
          .then(response => {
            if (response.body.success) {
              this.getcuenta();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.getcuenta();
              this.cuenta = {};
              this.loading = false;
            }
          });
      } else {
        sweetAlert(
          "Oops...",
          "Error al crear,ya existe una cuenta con el mismo numero",
          "error"
        );
        this.getcuenta();
        this.loading = false;
      }
    },
    deletecuenta(idcuenta) {
      let _this = this;
      var entrar = true;
      for (let i = 0; i < _this.ordenes.length; i++) {
        const element = _this.ordenes[i];
        if (element.idcuenta == idcuenta) {
          entrar = false;
          sweetAlert(
          "Eliminación Bloqueada",
          "La cuenta se encuentra relacionada con Ordenes",
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
              _this.loading = true;
              _this.$http
                .delete("http://localhost:8000/cuentas/delete/" + idcuenta)
                .then(response => {
                  this.loading = false;
                  if (response.body.success) {
                    sweetAlert("Oops...", "Error al eliminar", "error");
                    _this.getcuenta();
                  } else {
                    sweetAlert(
                      "Deleted!",
                      "Los cambios estan en la tabla",
                      "success"
                    );
                    _this.inicio = 0;
                    _this.final = 5;
                    _this.currentPage = 1;
                    _this.getcuenta();
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
    this.getcuenta();
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

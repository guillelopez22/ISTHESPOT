<template>
  <div id="root">
    <h2>
      Insumo
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
    <button v-on:click="anterior()" class="waves-effect waves-light btn-large">Anterior</button>
    <button v-on:click="siguiente()" class="waves-effect waves-light btn-large">Siguiente</button>
    <br />
    <table class="table centered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Inventario</th>
          <th>Proveedor</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(insumo,index) in data">
          <td>{{insumo.nombre}}</td>
          <td>{{insumo.inventario}}</td>
          <td>
            <button v-on:click="getPrv(insumo)" class="waves-effect waves-light btn">Mostrar</button>
          </td>
          <td>
            <a
              v-on:click="startToModifyInsumo(insumo)"
              class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteInsumo(insumo._id)"
              class="btn-floating btn-small waves-effect waves-light red"
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
      <div class="input-field col s6" id="contenedorTablaExterna">
        <input
          v-on:input="insumo.nombre = $event.target.value"
          type="text"
          v-model="insumo.nombre"
          :disabled="loading"
          id="Nombre"
        />
        <label for="Nombre">Nombre</label>
      </div>
      <div class="input-field col s6" id="contenedorTablaExterna">
        <input
          v-on:input="insumo.inventario = $event.target.value"
          type="number"
          v-model="insumo.inventario"
          :disabled="loading"
          id="Inventario"
        />
        <label for="Inventario">Inventario</label>
      </div>
    </div>

    <button v-on:click="agregarProveedores()" class="waves-effect waves-light btn-large">Agregar</button>

    <label for="proveedor">Seleccione el proveedor</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idProveedor"
          v-on:click="proveedor_a = $event.target.value"
          type="text"
          v-model="proveedor_a"
        >
          <option v-for="p in proveedores" v-bind:key="p" :value="p._id">{{p.nombre}}</option>
        </select>
      </div>
    </div>
    <!--<div class="row -white" id="contenedorTablaExterna">
      <div class="col s6">
        <h5>Seleccionar ID Proveedor:</h5>
        <p>(hacer click en el nombre deseado)</p>
        <hr>
        <ul v-for="proveedor in proveedores">
          <li>
            <i class="material-icons left">pages</i>
            {{proveedor.nombre}}
            <a
              v-on:click="newProveedor(proveedor._id)"
              class="btn-floating btn-small waves-effect waves-light black secondary-content"
            >
              <i class="material-icons">done</i>
            </a>
          </li>
        </ul>
      </div>
      <div id="importance" class="input-field col s6 center">
        <br>
        <label id="idProveedor">
          <h4>
            <a v-on:click="borrarProveedor()" class="waves-effect waves-light">
              <i class="material-icons">delete</i>
            </a>
            {{idProv}} {{nombreProv}}
          </h4>
        </label>
      </div>
    </div>-->
    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createInsumo"
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
        class="waves-effect waves-light btn-large"
        v-on:click="modifyInsumo"
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
  name: "insumo",
  data() {
    return {
      insumos: [],
      insumo: {},
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
      proveedores_a: [],
      proveedor_a: "",
      prv: {},
      prvs: [],
      prvstemp: [],
      acum: "",
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
    siguiente() {
      if (this.currentPage < this.size) {
        this.currentPage = this.currentPage + 1;
        if (this.insumos.length % 5 == 0) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.insumos.slice(this.inicio, this.final);
        } else if (
          this.insumos.length % 5 != 0 &&
          this.currentPage == this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + (this.insumos.length % 5);
          this.data = this.insumos.slice(this.inicio, this.final);
        } else if (
          this.insumos.length % 5 != 0 &&
          this.currentPage < this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.insumos.slice(this.inicio, this.final);
        }
      }
    },
    anterior() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        if (this.currentPage < this.size) {
          if (this.insumos.length % 5 == 0) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.insumos.slice(this.inicio, this.final);
          } else if (
            this.insumos.length % 5 != 0 &&
            this.currentPage == this.size - 1
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - (this.insumos.length % 5);
            this.data = this.insumos.slice(this.inicio, this.final);
          } else if (
            this.insumos.length % 5 != 0 &&
            this.currentPage < this.size
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.insumos.slice(this.inicio, this.final);
          }
        }
      }
    },
    agregarProveedores() {
      this.proveedores_a.push(this.proveedor_a);
      console.log("Están los proveedores: ", this.proveedores_a);
      sweetAlert("¡Listo!", "Proveedor agregado", "success");
    },
    getPrv(insumo) {
      this.acum = "";
      let _this = this;
      this.$http
        .get("http://localhost:8000/insumosproveedores")
        .then(response => {
          this.prvs = response.body;
          var i = 0;
          for (i = 0; i < this.prvs.length; i++) {
            if (insumo._id == this.prvs[i].idInsumo) {
              this.prvstemp.push(this.prvs[i].idProveedor);
            }
          }
          var j = 0;
          for (j = 0; j < this.proveedores.length; j++){
            for (i = 0; i<this.prvstemp.length;i++){
              if(this.proveedores[j]._id == this.prvstemp[i]){
                this.acum += this.proveedores[j].nombre+"\n";
              }
            }
          }
          
          sweetAlert(
            "Proveedores",
            this.acum
          );
          this.acum = "";
        });
        this.acum = "";
        this.prvs = [];
        this.prvstemp= [];
    },
    getInsumo() {
      let _this = this;
      this.$http.get("http://localhost:8000/insumos").then(response => {
        this.insumos = response.body;
        response.body.map(function(value, key) {
          var i;
          var p = _this.proveedores;
          for (i = 0; i < p.length; i++) {
            if (value.idProveedor == p[i]._id) {
              _this.proveedores2.push(p[i].nombre);
            }
          }
        });
        this.data = this.insumos.slice(this.inicio, this.final);
        if (this.insumos.length % 5 == 0) {
          this.size = this.insumos.length / 5;
        } else {
          this.size = parseInt(this.insumos.length / 5) + 1;
        }
      });
    },
    newProveedor(proveedor_id) {
      this.idProv = proveedor_id;
    },
    borrarProveedor() {
      this.idProv = "N/A";
    },
    createInsumo() {
      let _this = this;
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      //this.insumo.idProveedor = this.idProv;
      this.$http
        .post("http://localhost:8000/insumos/create", this.insumo)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            this.insumo = {};
            sweetAlert(
              "Creado con exito!",
              "Los cambios estan en la tabla",
              "success"
            );

            this.getInsumo();
          } else {
            sweetAlert("Oops...", "Error al crear", "error");
            this.getInsumo();
          }
        });

      setTimeout(function() {
        var i;
        for (i = 0; i < _this.proveedores_a.length; i++) {
          _this.prv = {};
          _this.prv.idProveedor = _this.proveedores_a[i];
          _this.prv.idInsumo = _this.insumos[_this.insumos.length - 1]._id;
          _this.$http
            .post("http://localhost:8000/insumosproveedores/create", _this.prv)
            .then(response => {
              _this.loading = false;
              if (response.body.success) {
                _this.prv = {};
                console.log("agregó");
              } else {
                console.log("tronó");
              }
            });
        }
        _this.proveedores_a = [];
      }, 1000);
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.insumo = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyInsumo(insumo) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = insumo._id;
      this.insumo = insumo;
      this.insumo.idProveedor = insumo.idProveedor;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyInsumo() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        //this.insumo.idProveedor = this.idProv;
        this.$http
          .put(
            "http://localhost:8000/insumos/update/" + this.idModificar,
            this.insumo
          )
          .then(response => {
            if (response.body.success) {
              this.getInsumo();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.insumo = {};
              this.loading = false;
            }
          });
      }
    },
    deleteInsumo(idInsumo) {
      let _this = this;
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
                .delete("http://localhost:8000/insumos/delete/" + idInsumo)
                .then(response => {
                  this.loading = false;
                  if (response.body.success) {
                    sweetAlert("Oops...", "Error al eliminar", "error");
                    _this.getInsumo();
                  } else {
                    sweetAlert(
                      "Deleted!",
                      "Los cambios estan en la tabla",
                      "success"
                    );
                    _this.inicio = 0;
                    _this.final = 5;
                    _this.currentPage = 1;
                    _this.getInsumo();
                  }
                });
              //****************************************************** */
            } else {
              sweetAlert("Cancelado", "Tus datos están a salvo", "info");
            }
          }, 500);
        }
      );
    },
    getProveedores() {
      this.$http.get("http://localhost:8000/proveedores").then(response => {
        console.log(response);
        this.proveedores = response.body;
      });
    }
  },
  beforeMount() {
    this.getProveedores();
    this.getInsumo();
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
  color: black;
}
#contenedorTablaExterna {
  border-radius: 5px;
  color: black;
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
  color: black;
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

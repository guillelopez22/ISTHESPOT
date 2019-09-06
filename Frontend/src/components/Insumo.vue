<template>
  <div id="root">
    <h2>
      Ingredientes
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
    <button v-on:click="anterior()" class="waves-effect waves-teal btn-large pulse" >Anterior</button>
    <button v-on:click="siguiente()" class="waves-effect waves-teal btn-large">Siguiente</button>
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
            <button v-on:click="getPrv(insumo)" class="waves-effect waves-teal btn">Mostrar</button>
          </td>
          <td>
            <a
              v-on:click="startToModifyInsumo(insumo)"
              class="btn-floating btn-small waves-effect waves-green green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteInsumo(insumo._id)"
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
      <div class="input-field col s6" id="contenedorTablaExterna">
        <input
          placeholder=""
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
          placeholder=""
          v-on:input="insumo.inventario = $event.target.value"
          type="number"
          v-model="insumo.inventario"
          :disabled="loading"
          id="Inventario"
        />
        <label for="Inventario">Inventario</label>
      </div>
    </div>
    


    <button v-on:click="agregarProveedores()" class="waves-effect waves-teal btn-large">Agregar</button>

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

      <div class="col s6">
        <table class = "table2">
          <thead>
            <tr>
              <th>Proveedor</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in proveedores_n" v-bind:key="i">
              <td>{{i.nombre}}</td>
              <td>
                <a
                  v-on:click="eliminarProveedor(i.index)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">delete</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-teal btn-large"
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
      proveedores_n: [],
      prv: {},
      prvs: [],
      prvstemp: [],
      acum: "",
      productosinsumos: [],
      imagen: ""
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
      if (this.proveedor_a != "") {
        var j;
        var exist = false;
        for (j = 0; j < this.proveedores_a.length; j++) {
          if (this.proveedores_a[j] == this.proveedor_a) {
            exist = true;
          }
        }
        if (!exist) {
          this.proveedores_a.push(this.proveedor_a);
          var i;
          for (i = 0; i < this.proveedores.length; i++) {
            if (this.proveedor_a == this.proveedores[i]._id) {
              var t = {};
              t.nombre = this.proveedores[i].nombre;
              t.index = this.proveedores_n.length;
              this.proveedores_n.push(t);
            }
          }
          sweetAlert("¡Listo!", "Proveedor agregado", "success");
        } else {
          sweetAlert(
            "Oops",
            "Proveedor invalido, ya fué seleccionado",
            "warning"
          );
        }
      } else {
        sweetAlert("Oops", "Proveedor invalido, seleccione uno", "warning");
      }
    },
    eliminarProveedor(index) {
      var i;
      this.proveedores_a.splice(index, 1);
      this.proveedores_n.splice(index, 1);
      for (i = index; i < this.proveedores_n.length; i++) {
        this.proveedores_n[i].index = this.proveedores_n[i].index - 1;
      }
      console.log("Proveedores borrado: ", this.proveedores_a);
      console.log("Nombres borrado: ", this.proveedores_n);
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
          for (j = 0; j < this.proveedores.length; j++) {
            for (i = 0; i < this.prvstemp.length; i++) {
              if (this.proveedores[j]._id == this.prvstemp[i]) {
                this.acum += this.proveedores[j].nombre + "\n";
              }
            }
          }

          sweetAlert("Proveedores", this.acum);
          this.acum = "";
        });
      this.acum = "";
      this.prvs = [];
      this.prvstemp = [];
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
      if (this.insumo.nombre == undefined || this.proveedores_a.length == 0) {
        sweetAlert("Oops", "Hay un campo vacio", "error");
        this.loading = false;
      } else {
        this.$http
          .post("http://localhost:8000/insumos/create", this.insumo)
          .then(response => {
            this.loading = false;
            if (response.body.success) {        
              sweetAlert("Oops...", "Error al crear", "error");
              this.getInsumo();
            } else {
              sweetAlert(
                "Creado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.getInsumo();
            }
            this.insumo = {};
          });

        setTimeout(function() {
          var i;
          for (i = 0; i < _this.proveedores_a.length; i++) {
            _this.prv = {};
            _this.prv.idProveedor = _this.proveedores_a[i];
            _this.prv.idInsumo = _this.insumos[_this.insumos.length - 1]._id;
            _this.$http
              .post(
                "http://localhost:8000/insumosproveedores/create",
                _this.prv
              )
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
          _this.proveedores_n = [];
        }, 1000);
      }
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
      this.imagen = this.insumo.imagen;
      this.insumo = insumo;
      this.$http
        .get("http://localhost:8000/insumosproveedores")
        .then(response => {
          this.prvs = response.body;
          var i = 0;
          var j;
          for (j = 0; j < this.prvs.length; j++) {
            if (this.prvs[j].idInsumo == this.idModificar) {
              for (i = 0; i < this.proveedores.length; i++) {
                if (this.prvs[j].idProveedor == this.proveedores[i]._id) {
                  var t = {};
                  t.nombre = this.proveedores[i].nombre;
                  t.index = this.proveedores_n.length;
                  this.proveedores_n.push(t);
                  this.proveedores_a.push(this.prvs[j].idProveedor);
                }
              }
            }
          }
        });
      this.prvs = [];
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyInsumo() {
      this.loading = true;
      let _this = this;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.insumo.imagen = this.imagen;
        this.$http
          .put(
            "http://localhost:8000/insumos/update/" + this.idModificar,
            this.insumo,
            this.proveedor
          )
          .then(response => {
            if (response.body.success) {
              this.getInsumo();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              //agregar nuevos

              this.$http
                  .delete(
                    "http://localhost:8000/insumosproveedores/delete/" +
                      this.idModificar
                  )
                  .then(response => {
                    if (response.body.success) {
                      console.log("nel");
                    } else {
                      console.log("simon");
                    }
                  });
              
              setTimeout(function() {
                var i;
                console.log("Cantidad: " + _this.proveedores_a.length);
                for (i = 0; i < _this.proveedores_a.length; i++) {
                  _this.prv = {};
                  _this.prv.idProveedor = _this.proveedores_a[i];
                  _this.prv.idInsumo = _this.idModificar;
                  console.log(_this.prv);
                  _this.$http
                    .post(
                      "http://localhost:8000/insumosproveedores/create",
                      _this.prv
                    )
                    .then(response => {
                      _this.loading = false;
                      if (response.body.success) {
                        _this.prv = {};
                        console.log("agregó el proveedor");
                      } else {
                        console.log("tronó");
                      }
                    });
                }
                _this.proveedores_a = [];
                _this.proveedores_n = [];
              }, 2000);

              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.proveedor = {};
              this.prv = {};
              this.insumo = {};
              this.imagen = "";
              this.loading = false;
            }
          });
      }
    },
    deleteInsumo(idInsumo) {
      let _this = this;
      var entrar = true;
      for (let i = 0; i < _this.productosinsumos.length; i++) {
        const element = _this.productosinsumos[i];
        if (element.idInsumo == idInsumo) {
          entrar = false;
          sweetAlert(
          "Eliminación Bloqueada",
          "El ingrediente se encuentra relacionado con Productos",
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
                  .delete("http://localhost:8000/insumos/delete/" + idInsumo)
                  .then(response => {
                    _this.loading = false;
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
                _this.$http
                  .delete(
                    "http://localhost:8000/insumosproveedores/delete/" +
                      idInsumo
                  )
                  .then(response => {
                    if (response.body.success) {
                      console.log("nel");
                    } else {
                      console.log("simon");
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
    getProductosInsumos() {
      this.$http
        .get("http://localhost:8000/productosinsumos")
        .then(response => {
          console.log(response);
          this.productosinsumos = response.body;
        });
    }
  },
  beforeMount() {
    this.getProveedores();
    this.getInsumo();
    this.getProductosInsumos();
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
.table2 {
  color: white;
  font-family: "Spectral", serif;
  font-size: 15;
  border-radius: 3px;
  border-collapse: collapse;
  height: 20px;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}
.table2 th{
    color: white;
    background: rgb(16, 175, 167);
    border-bottom: 2px solid #9ea7af;
    border-right: 1px solid #343a45;
    font-size: 20px;
    font-weight: 100;
    padding: 12px;
    text-align: left;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    vertical-align: middle;   
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

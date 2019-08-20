<template>
  <div id="root">
    <h2>
      Producto
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
          <th>Ingrediente</th>
          <th>Tipo</th>
          <th>Precio</th>
          <!-- > -1 -->
          <th>Cantidad</th>
          <th>Descripcion</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(producto,index) in data">
          <td>{{producto.nombre}}</td>
          <td>
            <button v-on:click="getIngredientes(producto)" class="waves-effect waves-light btn">Mostrar</button>
          </td>
          <td>{{producto.tipo}}</td>
          <td>{{producto.precio}}</td>
          <td>{{producto.cantidad}}</td>
          <td>{{producto.descripcion}}</td>
          <td>
            <a
              v-on:click="startToModifyproducto(producto)"
              class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteproducto(producto._id)"
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
      <div class="input-field col s12">
        <input
          v-on:input="producto.nombre = $event.target.value"
          type="text"
          v-model="producto.nombre"
          :disabled="loading"
          id="Nombre"
        />
        <label for="Nombre">Nombre</label>
      </div>
      <div class="input-field col s6">
        <input
          v-on:input="producto.precio = $event.target.value"
          type="number"
          v-model="producto.precio"
          :disabled="loading"
          id="Precio"
        />
        <label for="Precio">Precio</label>
      </div>
      <div class="input-field col s6">
        <input
          v-on:input="producto.cantidad = $event.target.value"
          type="number"
          v-model="producto.cantidad"
          :disabled="loading"
          id="Cantidad"
        />
        <label for="Cantidad">Cantidad</label>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea
            v-on:input="producto.descripcion = $event.target.value"
            v-model="producto.descripcion"
            :disabled="loading"
            id="Descripcion"
            type="text"
            class="materialize-textarea"
          ></textarea>
          <label for="Descripcion">Descripción</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input
            v-on:input="producto.tipo = $event.target.value"
            type="text"
            v-model="producto.tipo"
            :disabled="loading"
            id="Tipo"
          />
          <label for="Tipo">Tipo</label>
        </div>
      </div>
    </div>

    <button v-on:click="agregarInsumos()" class="waves-effect waves-light btn-large">Agregar</button>

    <label for="insumo">Seleccione el ingrediente</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idInsumo"
          v-on:input="ingrediente = $event.target.value"
          type="text"
          v-model="ingrediente"
        >
          <option v-for="i in insumos" v-bind:key="i" :value="i._id">{{i.nombre}}</option>
        </select>
      </div>
    </div>

    <!--
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Bebida:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr />
          <ul v-for="bebida in bebidas">
            <li>
              <i class="material-icons left">pages</i>
              {{bebida.nombre}}
              <a
                v-on:click="newBebida(bebida._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br />
          <label id="idBebida">
            <h4>
              <a v-on:click="borrarBebida()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idBeb}} {{nombreBeb}}
            </h4>
          </label>
        </div>
      </div>

      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Insumo:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr />
          <ul v-for="insumo in insumos">
            <li>
              <i class="material-icons left">pages</i>
              {{insumo.nombre}}
              <a
                v-on:click="newInsumo(insumo._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br />
          <label id="idInsumo">
            <h4>
              <a v-on:click="borrarInsumo()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idIns}} {{nombreIns}}
            </h4>
          </label>
        </div>
      </div>
    -->

    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createproducto"
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
        v-on:click="modifyproducto"
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
  name: "producto",
  data() {
    return {
      productos: [],
      producto: {},
      loading: false,
      idModificar: "",
      idIns: "N/A",
      nombreIns: "",
      selectedTab: "test-swipe-1",
      //producto_elaborado: {},
      //producto_elaborados: [],
      //producto_elaborados2: [],
      insumo: {},
      insumos: [],
      insumos2: [],
      data: [],
      inicio: 0,
      final: 5,
      size: 1,
      currentPage: 1,
      ingredientes: [],
      ingrediente: "",
      productoxinsumo: {},
      ingrtemp: [],
      ingr: [],
    };
  },
  //watch: {
  idIns: function(val) {
    if (val != "N/A") {
      this.nombreIns = "";
    } else {
      this.$http
        .get("http://localhost:8000/insumos/searchbyid/{_id}")
        .then(response => {
          this.nombreIns = response.body.insumo.nombre;
        });
    }
  },
  //},

  methods: {
    getIngredientes(producto){
      var acum = "";
      this.$http
        .get("http://localhost:8000/productosinsumos")
        .then(response => {
          this.ingr = response.body;
          var i = 0;
          for (i = 0; i < this.ingr.length; i++) {
            if (producto._id == this.ingr[i].idProducto) {
              this.ingrtemp.push(this.ingr[i].idInsumo);
            }
          }
          var j = 0;
          for (j = 0; j < this.insumos.length; j++){
            for (i = 0; i<this.ingrtemp.length;i++){
              if(this.insumos[j]._id == this.ingrtemp[i]){
                acum += this.insumos[j].nombre+"\n";
              }
            }
          }
          
          sweetAlert(
            "Ingredientes",
            acum
          );
          acum = "";
        });
        acum = "";
        this.ingr = [];
        this.ingrtemp= [];

    },
    agregarInsumos() {
      this.ingredientes.push(this.ingrediente);
      sweetAlert("Listo!","Insumo Agregado","success");
    },
    siguiente() {
      if (this.currentPage < this.size) {
        this.currentPage = this.currentPage + 1;
        if (this.productos.length % 5 == 0) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.productos.slice(this.inicio, this.final);
        } else if (
          this.productos.length % 5 != 0 &&
          this.currentPage == this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + (this.productos.length % 5);
          this.data = this.productos.slice(this.inicio, this.final);
        } else if (
          this.productos.length % 5 != 0 &&
          this.currentPage < this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.productos.slice(this.inicio, this.final);
        }
      }
    },
    anterior() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        if (this.currentPage < this.size) {
          if (this.productos.length % 5 == 0) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.productos.slice(this.inicio, this.final);
          } else if (
            this.productos.length % 5 != 0 &&
            this.currentPage == this.size - 1
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - (this.productos.length % 5);
            this.data = this.productos.slice(this.inicio, this.final);
          } else if (
            this.productos.length % 5 != 0 &&
            this.currentPage < this.size
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.productos.slice(this.inicio, this.final);
          }
        }
      }
    },
    getproducto() {
      let _this = this;
      this.$http.get("http://localhost:8000/productos").then(response => {
        this.productos = response.body;
        response.body.map(function(value, key) {
          var j;
          var p2 = _this.insumos;
          for (j = 0; j < p2.length; j++) {
            if (value.idInsumo == p2[j]._id) {
              _this.insumos2.push(p2[j].nombre);
            }
          }
        });
        this.data = this.productos.slice(this.inicio, this.final);
        if (this.productos.length % 5 == 0) {
          this.size = this.productos.length / 5;
        } else {
          this.size = parseInt(this.productos.length / 5) + 1;
        }
      });
    },

    newInsumo(insumo_id) {
      this.idIns = insumo_id;
    },
    borrarInsumo() {
      this.idIns = "N/A";
    },
    createproducto() {
      let _this = this;
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      //this.producto.idInsumo = this.idIns;

      if (
        this.producto.nombre == undefined ||
        this.producto.descripcion == undefined ||
        this.producto.tipo == undefined ||
        this.producto.cantidad == undefined ||
        this.producto.precio == undefined
        //this.idIns == "N/A"
      ) {
        this.loading = false;
        sweetAlert("Oops...", "Falto seleccionar algo", "error");
      } else if (this.producto.nombre.length < 3) {
        this.loading = false;
        sweetAlert(
          "Oops...",
          "El nombre debe producto tener +2 caracteres ",
          "error"
        );
      } else if (this.producto.descripcion.length < 5) {
        this.loading = false;
        sweetAlert(
          "Oops...",
          "La descrpicion debe ser mas larga a 5 caracteres ",
          "error"
        );
      } else if (this.producto.tipo.length < 3) {
        this.loading = false;
        sweetAlert(
          "Oops...",
          "El tipo debe ser mas larga a 3 caracteres",
          "error"
        );
      } else if (this.producto.cantidad < 0) {
        this.loading = false;
        sweetAlert("Oops...", "No pueden haber cantidades negativas", "error");
      } else if (this.producto.precio < 0) {
        this.loading = false;
        sweetAlert("Oops...", "No pueden haber precios negativas", "error");
      } else {
        this.$http
          .post("http://localhost:8000/productos/create", this.producto)
          .then(response => {
            this.loading = false;
            if (response.body.success) {
              this.producto = {};
              //poner aca bebida
              //this.insumo = {};
              sweetAlert(
                "Creado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.getproducto();
            } else {
              sweetAlert("Oops...", "Error al crear", "error");
            }
          });
        //agregar producto x insumo
        setTimeout(function() {
        var i;
        for (i = 0; i < _this.ingredientes.length; i++) {
          _this.productoxinsumo = {};
          _this.productoxinsumo.idProducto = _this.productos[_this.productos.length - 1]._id;
          _this.productoxinsumo.idInsumo = _this.ingredientes[i];
          
          console.log(_this.productoxinsumo);
          _this.$http
            .post("http://localhost:8000/productosinsumos/create", _this.productoxinsumo)
            .then(response => {
              _this.loading = false;
              if (response.body.success) {
                _this.productoxinsumo = {};
                console.log("agregó");
              } else {
                console.log("tronó");
              }
            });
        }
        _this.ingredientes = [];
      }, 1000);
        
      }
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.producto = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyproducto(producto) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = producto._id;
      this.producto = producto;
      //this.idProv = producto.idproducto_elaborado;
      this.idIns = insumo.idInsumo;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyproducto() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.insumo.idInsumo = this.idIns;
        //this.producto.idproducto_elaborado = this.idProv;
        this.$http
          .put(
            "http://localhost:8000/productos/update/" + this.idModificar,
            this.producto,
            this.insumo
          )
          .then(response => {
            if (response.body.success) {
              this.getproducto();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.producto = {};
              this.loading = false;
            }
          });
      }
    },
    deleteproducto(idProducto) {
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
                .delete("http://localhost:8000/productos/delete/" + idProducto)
                .then(response => {
                  
                  if (response.body.success) {
                    sweetAlert("Oops...", "Error al eliminar", "error");
                    _this.getproducto();
                  } else {
                    sweetAlert(
                      "Deleted!",
                      "Los cambios estan en la tabla",
                      "success"
                    );
                    _this.loading = false;
                    _this.inicio = 0;
                    _this.final = 5;
                    _this.currentPage = 1;
                    _this.getproducto();
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
    /*getproductos_elaborados() {
      this.$http
        .get("http://localhost:8000/productos_elaborados")
        .then(response => {
          console.log(response);
          this.producto_elaborados = response.body;
        });
    },*/

    getInsumos() {
      this.$http.get("http://localhost:8000/insumos").then(response => {
        console.log(response);
        this.insumos = response.body;
      });
    }
  },

  beforeMount() {
    //this.getproductos_elaborados();
    this.getproducto();
    this.getInsumos();
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

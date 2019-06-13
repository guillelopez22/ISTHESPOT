<template>
  <div id="root">
    <h2>
      Producto Elaborado Detallado
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
    <table class="table centered">
      <thead>
        <tr>
          <th>IdProductoElaborado</th>
          <th>IdBebida</th>
          <th>IdInsumo</th>
          <th>Cantidad</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="productoelaboradodetallado in productoselaboradosdetallados">
          <td>{{productoelaboradodetallado.idProducto_Elaborado}}</td>
          <td>{{productoelaboradodetallado.idBebida}}</td>
          <td>{{productoelaboradodetallado.idInsumo}}</td>
          <td>{{productoelaboradodetallado.cantidad}}</td>
          <td>
            <a
              v-on:click="startToModifyProductoElaboradoDetallado(productoelaboradodetallado)"
              class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteProductoElaboradoDetallado(productoelaboradodetallado._id)"
              class="btn-floating btn-small waves-effect waves-light red"
            >
              <i class="material-icons">delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
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
          v-on:input="productoelaboradodetallado.cantidad = $event.target.value"
          type="number"
          v-model="productoelaboradodetallado.cantidad"
          :disabled="loading"
          id="Cantidad"
        >
        <label for="Cantidad">Cantidad</label>
      </div>
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Producto Elaborado:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="productoelaborado in productoselaborados">
            <li>
              <i class="material-icons left">pages</i>
              {{productoelaborado.nombre}}
              <a
                v-on:click="newProductoElaborado(productoelaborado._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idProducto_Elaborado">
            <h4>
              <a v-on:click="borrarProductoElaborado()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idProd}} {{cantidadProd}}
            </h4>
          </label>
        </div>
      </div>
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Bebida:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
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
          <br>
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
          <hr>
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
          <br>
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
    </div>
    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createProductoElaboradoDetallado"
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
        v-on:click="modifyProductoElaboradoDetallado"
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
  name: "productoelaboradodetallado",
  data() {
    return {
      productoselaboradosdetallados: [],
      productoelaboradodetallado: {},
      loading: false,
      idModificar: "",
      idProd: "N/A",
      cantidadProd: "",
      idBeb: "N/A",
      nombreBeb: "",
      idIns: "N/A",
      nombreIns: "",
      selectedTab: "test-swipe-1",
      productoelaborado: {},
      productoselaborados: [],
      bebida: {},
      bebidas: [],
      insumo: {},
      insumos: []
    };
  },
  watch: {
    idProd: function(val) {
      if (val != "N/A") {
        this.cantidadProd = "";
      } else {
        this.$http
          .get("http://localhost:8000/productos_elaborados/searchbyid/{_id}")
          .then(response => {
            this.cantidadProd = response.body.productoelaborado.cantidad;
          });
      }
    },
    idBeb: function(val) {
      if (val != "N/A") {
        this.nombreBeb = "";
      } else {
        this.$http
          .get("http://localhost:8000/bebidas/searchbyid/{_id}")
          .then(response => {
            this.nombreBeb = response.body.productoelaborado.idBebida;
          });
      }
    },
    idIns: function(val) {
      if (val != "N/A") {
        this.nombreIns = "";
      } else {
        this.$http
          .get("http://localhost:8000/insumos/searchbyid/{_id}")
          .then(response => {
            this.nombreIns = response.body.productoelaborado.idInsumo;
          });
      }
    }
  },
  methods: {
    getProductoElaboradoDetallado() {
      this.$http
        .get("http://localhost:8000/prod_elaborado_detail")
        .then(response => {
          this.productoselaboradosdetallados = response.body;
        });
    },
    newProductoElaborado(productoelaborado_id) {
      this.idProd = productoelaborado_id;
    },
    borrarProductoElaborado() {
      this.idProd = "N/A";
    },
    newBebida(bebida_id) {
      this.idBeb = bebida_id;
    },
    borrarBebida() {
      this.idBeb = "N/A";
    },
    newInsumo(insumo_id) {
      this.idIns = insumo_id;
    },
    borrarInsumo() {
      this.idIns = "N/A";
    },
    createProductoElaboradoDetallado() {
      this.loading = true;
      this.productoelaboradodetallado.idProducto_Elaborado = this.idProd;
      this.bebidas.idBebida = this.idBeb;
      this.insumo.idInsumo = this.idIns;
      this.$http
        .post(
          "http://localhost:8000/prod_elaborado_detail/create",
          this.productoelaboradodetallado,this.bebidas,this.insumo
        )
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            this.productoelaboradodetallado = {};
            this.bebidas = {};
            this.insumo = {};
            sweetAlert(
              "Creado con exito!",
              "Los cambios estan en la tabla",
              "success"
            );
            this.getProductoElaboradoDetallado();
          } else {
            sweetAlert("Oops...", "Error al crear", "error");
          }
        });
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.productoelaboradodetallado = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyProductoElaboradoDetallado(productoelaboradodetallado) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = productoelaboradodetallado._id;
      this.productoelaboradodetallado = productoelaboradodetallado;
      this.idProd = productoelaboradodetallado.idProducto_Elaborado;
      this.idIns = insumo.idInsumo;
      this.idBeb = bebidas.idBebida;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyProductoElaboradoDetallado() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.productoelaboradodetallado.idProducto_Elaborado = this.idProv;
        this.bebidas.idBebida = this.idBeb;
        this.insumo.idInsumo = this.idIns;
        this.$http
          .put(
            "http://localhost:8000/prod_elaborado_detail/update/" +
              this.idModificar,
            this.productoelaboradodetallado,this.bebidas,this.insumo
          )
          .then(response => {
            if (response.body.success) {
              this.getProductoElaboradoDetallado();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
              this.productoelaboradodetallado = {};
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.productoelaboradodetallado = {};
              this.loading = false;
            }
          });
      }
    },
    deleteProductoElaboradoDetallado(idProductoElaboradoDetallado) {
      this.loading = true;
      this.$http
        .delete(
          "http://localhost:8000/prod_elaborado_detail/delete/" +
            idProductoElaboradoDetallado
        )
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            sweetAlert("Oops...", "Error al eliminar", "error");
          } else {
            this.getProductoElaboradoDetallado();
            sweetAlert("Deleted!", "Los cambios estan en la tabla", "success");
          }
        });
    },
    getProductosElaborados() {
      this.$http
        .get("http://localhost:8000/productos_elaborados")
        .then(response => {
          console.log(response);
          this.productoselaborados = response.body;
        });
    },
    getBebidas() {
      this.$http.get("http://localhost:8000/bebidas").then(response => {
        console.log(response);
        this.bebidas = response.body;
      });
    },
    getInsumos() {
      this.$http.get("http://localhost:8000/insumos").then(response => {
        console.log(response);
        this.insumos = response.body;
      });
    }
  },
  beforeMount() {
    this.getProductoElaboradoDetallado();
    this.getProductosElaborados();
    this.getBebidas();
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
  color: black;
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

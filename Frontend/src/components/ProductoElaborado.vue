<template>
  <div id="root"> 
    <h2>
      Producto Elaborado
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
    <button v-on:click="anterior()">Anterior</button>
    <button v-on:click="siguiente()">Siguiente</button>
    <br>
    <table class="table centered">
      <thead>
        <tr>
          <th>Id Producto Elaborado Detallado</th>
          <th>Tipo</th>
          <th>Descripcion</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto_elaborado in data" v-bind:key="producto_elaborado">
          <td>{{producto_elaborado.idProducto_Elaborado_Detail}}</td>
          <td>{{producto_elaborado.tipo}}</td>
          <td>{{producto_elaborado.descripcion}}</td>
          <td>
            <a
              v-on:click="startToModifyProducto_Elaborado(producto_elaborado)"
              class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteProducto_Elaborado(producto_elaborado._id)"
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
          v-on:input="producto_elaborado.tipo = $event.target.value"
          type="text"
          v-model="producto_elaborado.tipo"
          :disabled="loading"
          id="Tipo"
        >
        <label for="Tipo">Tipo</label>
      </div>

      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s12">
              <textarea
                v-on:input="producto_elaborado.descripcion = $event.target.value"
                v-model="producto_elaborado.descripcion"
                :disabled="loading"
                id="Descripcion"
                type="text"
                class="materialize-textarea"
              ></textarea>
              <label for="Descripcion">Descripción</label>
            </div>
          </div>
        </form>
      </div>
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Producto Elaborado Detail:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="producto_elaborado_detail in productos_elaborados_details">
            <li>
              <i class="material-icons left">pages</i>
              {{producto_elaborado_detail.cantidad}}
              <a
                v-on:click="newProducto_Elaborado_Detail(producto_elaborado_detail._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idProducto_Elaborado_Detail">
            <h4>
              <a v-on:click="borrarProducto_Elaborado_Detail()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idDetail}} {{cantidad}}
            </h4>
          </label>
        </div>
      </div>
    </div>
    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createProducto_Elaborado"
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
        v-on:click="modifyProducto_Elaborado"
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
  name: "producto_elaborado",
  data() {
    return {
      productos_elaborados: [],
      producto_elaborado: {},
      loading: false,
      idModificar: "",
      idDetail: "N/A",
      cantidad: "",
      selectedTab: "test-swipe-1",
      producto_elaborado_detail: {},
      productos_elaborados_details: [],
      currentPage: 1,
      data: [],
      inicio: 0,
      final: 5,
      size: 1
    };
  },
  watch: {
    idDetail: function(val) {
      if (val != "N/A") {
        this.cantidad = "";
      } else {
        this.$http
          .get("http://localhost:8000/prod_elaborado_detail/searchbyid/{_id}")
          .then(response => {
            this.cantidad = response.body.producto_elaborado_detail.cantidad;
          });
      }
    }
  },
  methods: {
    siguiente(){
      if(this.currentPage < this.size){
        this.currentPage = this.currentPage + 1;
        if(this.productos_elaborados.length % 5 == 0){
          this.inicio = this.inicio + 5
          this.final = this.final + 5
          this.data = this.productos_elaborados.slice(this.inicio, this.final)
        }else if((this.productos_elaborados.length % 5 != 0) && (this.currentPage == this.size)){
          this.inicio = this.inicio + 5
          this.final = this.final + (this.productos_elaborados.length%5)
          this.data = this.productos_elaborados.slice(this.inicio, this.final)
        }else if((this.productos_elaborados.length % 5 != 0) && (this.currentPage < this.size)){
          this.inicio = this.inicio + 5
          this.final = this.final + 5
          this.data = this.productos_elaborados.slice(this.inicio, this.final)
        }
      }
    },
    anterior(){
      if(this.currentPage > 1){
        this.currentPage = this.currentPage - 1;
        if(this.currentPage < this.size){
          if(this.productos_elaborados.length % 5 == 0){
            this.inicio = this.inicio - 5
            this.final = this.final - 5
            this.data = this.productos_elaborados.slice(this.inicio, this.final)
          }else if((this.productos_elaborados.length % 5 != 0) && (this.currentPage == this.size-1)){
            this.inicio = this.inicio - 5
            this.final = this.final - (this.productos_elaborados.length%5)
            this.data = this.productos_elaborados.slice(this.inicio, this.final)
          }else if((this.productos_elaborados.length % 5 != 0) && (this.currentPage < this.size)){
            this.inicio = this.inicio - 5
            this.final = this.final - 5
            this.data = this.productos_elaborados.slice(this.inicio, this.final)
          }
        }
      }
    },
    getProducto_Elaborado() {
      this.$http.get("http://localhost:8000/productos_elaborados").then(response => {
        this.productos_elaborados = response.body;
        this.data = this.productos_elaborados.slice(this.inicio,this.final)
        if(this.productos_elaborados.length % 5 == 0){
          this.size = this.productos_elaborados.length/5
        }else{
          this.size = parseInt(this.productos_elaborados.length/5)+1
        }
      });
    },
    newProducto_Elaborado_Detail(producto_elaborado_detail_id) {
      this.idDetail = producto_elaborado_detail_id;
    },
    borrarProducto_Elaborado_Detail() {
      this.idDetail = "N/A";
    },
    createProducto_Elaborado() {
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      this.producto_elaborado.idProducto_Elaborado_Detail = this.idDetail;
      this.$http
        .post("http://localhost:8000/productos_elaborados/create", this.producto_elaborado)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            this.producto_elaborado = {};
            sweetAlert(
              "Creado con exito!",
              "Los cambios estan en la tabla",
              "success"
            );
            this.getProducto_Elaborado();
          } else {
            sweetAlert("Oops...", "Error al crear", "error");
          }
        });
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.producto_elaborado = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyProducto_Elaborado(producto_elaborado) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = producto_elaborado._id;
      this.producto_elaborado = producto_elaborado;
      this.idDetail = producto_elaborado.idProducto_Elaborado_Detail;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyProducto_Elaborado() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.producto_elaborado.idProducto_Elaborado_Detail = this.idDetail;
        this.$http
          .put(
            "http://localhost:8000/productos_elaborados/update/" + this.idModificar,
            this.producto_elaborado
          )
          .then(response => {
            if (response.body.success) {
              this.getProducto_Elaborado();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.producto_elaborado = {};
              this.loading = false;
            }
          });
      }
    },
    deleteProducto_Elaborado(idProducto_Elaborado) {
      let _this = this 
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
              _this.$http.delete("http://localhost:8000/productos_elaborados/delete/" + idProducto_Elaborado).then(
                response => {
                  this.loading = false;
                  if (response.body.success) {
                    sweetAlert("Oops...", "Error al eliminar", "error");
                    _this.getProducto_Elaborado();
                  } else {
                    sweetAlert(
                      "Deleted!",
                      "Los cambios estan en la tabla",
                      "success"
                    );
                    _this.inicio = 0;
                    _this.final = 5;
                    _this.currentPage = 0;
                    _this.getProducto_Elaborado();
                  }
                }
              );
              //****************************************************** */
            } else {
              sweetAlert("Cancelado","Tus datos están a salvo", "info");
            }
          }, 500);
        }
      );
    },
    getProductos_Elaborados_Details() {
      this.$http.get("http://localhost:8000/prod_elaborado_detail").then(response => {
        console.log(response);
        this.productos_elaborados_details = response.body;
      });
    }
  },
  beforeMount() {
    this.getProducto_Elaborado();
    this.getProductos_Elaborados_Details();
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

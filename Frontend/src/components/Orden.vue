<template>
  <div id="root">
    <h2>
      Orden
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
          <th>idCombos</th>
          <th>idProductos</th>
          <th>idPromociones</th>
          <th>idPersonal</th>
          <th>idFacturas</th>
          <th>idMesa</th>
          <th>total</th>
          <th>fecha</th>
          <th>efectivo</th>
          <th>tarjeta</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="orden in ordenes">
          <td>{{orden.idCombos}}</td>
          <td>{{orden.idProductos}}</td>
          <td>{{orden.idPersonal}}</td>
          <td>{{orden.idFacturas}}</td>
          <td>{{orden.idMesa}}</td>
          <td>{{orden.total}}</td>
          <td>{{orden.fecha}}</td>
          <td>{{orden.efectivo}}</td>
          <td>{{orden.tarjeta}}</td>
          <td>
            <a
              v-on:click="startToModifyOrden(orden)"
              class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteOrden(orden._id)"
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
          v-on:input="orden.nombre = $event.target.value"
          type="text"
          v-model="orden.nombre"
          :disabled="loading"
          id="Nombre"
        >
<!-- Aqui empieza a jalar todos los id necesarios -->

<!-- Combos -->
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Combo:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="combo in combos">
            <li>
              <i class="material-icons left">pages</i>
              {{combo.nombre}}
              <a
                v-on:click="newCombo(combo._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idCombo">
            <h4>
              <a v-on:click="borrarCombo()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idCom}} {{nombreCom}}
            </h4>
          </label>
        </div>
      </div>

<!-- Productos -->
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Combo:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="producto in productos">
            <li>
              <i class="material-icons left">pages</i>
              {{producto.nombre}}
              <a
                v-on:click="newProducto(producto._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idProducto">
            <h4>
              <a v-on:click="borrarproducto()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idPro}} {{nombrePro}}
            </h4>
          </label>
        </div>
      </div>

<!-- Promociones -->
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Combo:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="promocion in promociones">
            <li>
              <i class="material-icons left">pages</i>
              {{promocion.nombre}}
              <a
                v-on:click="newPromocion(promocion._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idPromocion">
            <h4>
              <a v-on:click="borrarPromocion()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idProm}} {{nombreProm}}
            </h4>
          </label>
        </div>
      </div>

<!-- Clientes/Usuarios -->
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Cliente:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="usuario in usuarios">
            <li>
              <i class="material-icons left">pages</i>
              {{usuario.nombre}}
              <a
                v-on:click="newUsuario(usuario._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idUsuario">
            <h4>
              <a v-on:click="borrarUsuario()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idUs}} {{nombreUs}}
            </h4>
          </label>
        </div>
      </div>

<!-- Facturas -->
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Combo:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="factura in facturas">
            <li>
              <i class="material-icons left">pages</i>
              {{factura.nombre}}
              <a
                v-on:click="newFactura(factura._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idFactura">
            <h4>
              <a v-on:click="borrarFactura()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idFac}} {{nombreFac}}
            </h4>
          </label>
        </div>
      </div>

<!-- Mesas -->
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Mesa:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr>
          <ul v-for="mesa in mesas">
            <li>
              <i class="material-icons left">pages</i>
              {{mesa.nombre}}
              <a
                v-on:click="newMesa(mesa._id)"
                class="btn-floating btn-small waves-effect waves-light black secondary-content"
              >
                <i class="material-icons">done</i>
              </a>
            </li>
          </ul>
        </div>
        <div id="importance" class="input-field col s6 center">
          <br>
          <label id="idMesa">
            <h4>
              <a v-on:click="borrarMesa()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idM}} {{nombreM}}
            </h4>
          </label>
        </div>
      </div>
<!-- Fin de jalar otros objetos -->
<!-- Ahora la informacion que no incluye otros objetos -->
<!-- TOTAL -->
      <div class="input-field col s6">
        <input
          v-on:input="orden.total = $event.target.value"
          type="number"
          v-model="orden.inventario"
          :disabled="loading"
          id="total"
        >
        <label for="total">Total</label>
      </div>
<!-- FECHA -->
      
<!-- EFECTIVO -->
      <div class="input-field col s6">
        <input
          v-on:input="efectivo.total = $event.target.value"
          type="number"
          v-model="orden.efectivo"
          :disabled="loading"
          id="efectivo"
        >
        <label for="efectivo">Efectivo</label>
      </div>
<!-- TARJETA -->
      <div class="input-field col s6">
        <input
          v-on:input="tarjeta.total = $event.target.value"
          type="number"
          v-model="orden.tarjeta"
          :disabled="loading"
          id="tarjeta"
        >
        <label for="tarjeta">Tarjeta</label>
      </div>

<!-- ----------------------------------------------------------------------------------------------------- -->
    </div>
    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createOrden"
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
        v-on:click="modifyOrden"
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
  name: "orden",
  data() {
    return {
      ordenes: [],
      orden: {},
      loading: false,
      idModificar: "",
      idCom: "N/A",
      nombreCom: "",
      selectedTab: "test-swipe-1",
      combo: {},
      combos: []
    };
  },
  watch: {
    idCom: function(val) {
      if (val != "N/A") {
        this.nombreCom = "";
      } else {
        this.$http
          .get("http://localhost:8000/combo/searchbyid/{_id}")
          .then(response => {
            this.nombreCom = response.body.combo.nombre;
          });
      }
    },
// --------------------------------------------------------
    idPro: function(val) {
      if (val != "N/A") {
        this.nombrePro = "";
      } else {
        this.$http
          .get("http://localhost:8000/producto/searchbyid/{_id}")
          .then(response => {
            this.nombrePro = response.body.producto.nombre;
          });
      }
    },

    idProm: function(val) {
      if (val != "N/A") {
        this.nombreProm = "";
      } else {
        this.$http
          .get("http://localhost:8000/promocion/searchbyid/{_id}")
          .then(response => {
            this.nombreProm = response.body.promocion.nombre;
          });
      }
    },

    idUs: function(val) {
      if (val != "N/A") {
        this.nombreUs= "";
      } else {
        this.$http
          .get("http://localhost:8000/usuario/searchbyid/{_id}")
          .then(response => {
            this.nombreUs = response.body.usuario.nombre;
          });
      }
    },

    idFac: function(val) {
      if (val != "N/A") {
        this.nombreFac = "";
      } else {
        this.$http
          .get("http://localhost:8000/factura/searchbyid/{_id}")
          .then(response => {
            this.nombreFac = response.body.factura.nombre;
          });
      }
    },

    idM: function(val) {
      if (val != "N/A") {
        this.nombreM = "";
      } else {
        this.$http
          .get("http://localhost:8000/mesa/searchbyid/{_id}")
          .then(response => {
            this.nombreM = response.body.mesa.nombre;
          });
      }
    },
// -------------------------------------------------------- 
  },
  methods: {
    getOrden() {
      this.$http.get("http://localhost:8000/ordenes").then(response => {
        this.orden = response.body;
      });
    },
    // Para combo
    newCombo(Combo_id) {
      this.idCom = combo_id;
    },
    borrarCombo() {
      this.idCom = "N/A";
    },
    // Para Productos
    newProducto(producto_id) {
      this.idPro = producto_id;
    },
    borrarProducto() {
      this.idPro = "N/A";
    },
    // Para Promocion
    newPromocion(promocion_id) {
      this.idProm = promocion_id;
    },
    borrarPromocion() {
      this.idProm = "N/A";
    },
    // Para Usuario
    newUsuario(usuario_id) {
      this.idUs = usuario_id;
    },
    borrarUsuario() {
      this.idUs = "N/A";
    },
    // Para Factura
    newFactura(factura_id) {
      this.idFac = factura_id;
    },
    borrarFactura() {
      this.idFac = "N/A";
    },
    // Para mesa
    newMesas(mesa_id) {
      this.idM = mesa_id;
    },
    borrarProveedor() {
      this.idM = "N/A";
    },
    // 
    createOrden() {
      this.loading = true;
      this.orden.idCombos = this.idCom;
      this.orden.idProducto = this.idPro;
      this.orden.idPomocion = this.idProm;
      this.orden.idUsuario = this.idPUs;
      this.orden.idFactura = this.idFac;
      this.orden.idMesa = this.idM;
      // Faltan------------------------------------
      this.$http
        .post("http://localhost:8000/ordenes/create", this.orden)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            this.orden = {};
            sweetAlert(
              "Creado con exito!",
              "Los cambios estan en la tabla",
              "success"
            );
            this.getOrden();
          } else {
            sweetAlert("Oops...", "Error al crear", "error");
          }
        });
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.orden = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyOrden(orden) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = orden._id;
      this.orden = orden;
      this.idCom = orden.idCombos;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyOrden() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.orden.idCombos = this.idCom;
        this.$http
          .put(
            "http://localhost:8000/ordenes/update/" + this.idModificar,
            this.orden
          )
          .then(response => {
            if (response.body.success) {
              this.getOrden();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.orden = {};
              this.loading = false;
            }
          });
      }
    },
    deleteOrden(idOrden) {
      this.loading = true;
      this.$http
        .delete("http://localhost:8000/ordenes/delete/" + idOrden)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            sweetAlert("Oops...", "Error al eliminar", "error");
            this.getOrden();
          } else {
            sweetAlert("Deleted!", "Los cambios estan en la tabla", "success");
            this.getOrden();
          }
        });
    },
    getCombo() {
      this.$http.get("http://localhost:8000/combos").then(response => {
        console.log(response);
        this.combos = response.body;
      }); 
    },
    getProducto(){
      this.$http.get("http://localhost:8000/producto").then(response => {
        console.log(response);
        this.productos = response.body;
      });
    },
    getPromocion(){
      this.$http.get("http://localhost:8000/promociones").then(response => {
        console.log(response);
        this.promociones = response.body;
      });
    },
    getUsuarios(){
      this.$http.get("http://localhost:8000/usuarios").then(response => {
        console.log(response);
        this.usuarios = response.body;
      });
    },
    getFactura() {
      this.$http.get("http://localhost:8000/factura").then(response => {
        console.log(response);
        this.facturas = response.body;
      });
    },
    getMesa(){
      this.$http.get("http://localhost:8000/mesas").then(response => {
        console.log(response);
        this.mesas = response.body;
      });
    }
  },//Faltan  gets
  beforeMount() {
    this.getOrden();
    this.getCombo();
    this.getProducto();
    this.getPromocion();
    this.getUsuarios();
    this.getFactura();
    this.getMesa();
    
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

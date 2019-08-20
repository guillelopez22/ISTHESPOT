
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
    <p>Pagina Actual: {{currentPage}}</p>
    <button v-on:click="anterior()" class="waves-effect waves-light btn-large">Anterior</button>
    <button v-on:click="siguiente()" class="waves-effect waves-light btn-large">Siguiente</button>
    <br />
    <table class="table centered">
      <thead>
        <tr>
          <th>idEmpleado</th>
          <th>idMesa</th>
          <th>idBebidas</th>
          <th>idProducto</th>
          <th>idCombos</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(orden, index) in data">
          <td>{{empleados2[index]}}</td>
          <td>{{mesas2[index]}}</td>
          <td><button v-on:click="getBeb(orden)" class="waves-effect waves-light btn">Mostrar</button></td>
          <td><button v-on:click="getPro(orden)" class="waves-effect waves-light btn">Mostrar</button></td>
          <td><button v-on:click="getCom(orden)" class="waves-effect waves-light btn">Mostrar</button></td>
          <td>
            <a
              v-on:click="startToModifyorden(orden)"
              class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteorden(orden._id)"
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

    <button v-on:click="agregarCombos()" class="waves-effect waves-light btn-large">Agregar</button>

    <label for="idCombos">Seleccione el combo</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          v-on:input="orden.idCombos = $event.target.value"
          type="text"
          v-model="orden.idCombos"
          :disabled="loading"
          id="idCombos"
        >
          <option value="Combo1">Combo1</option>
          <option value="Combo2">Combo2</option>
          <option value="Combo3">Combo3</option>
          <option value="Combo4">Combo4</option>
        </select>
      </div>
    </div>

    <button v-on:click="agregarBebidas()" class="waves-effect waves-light btn-large">Agregar</button>

    <label for="bebida">Seleccione la bebida</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idBebidas"
          v-on:input="bebida_a = $event.target.value"
          type="text"
          v-model="bebida_a"
        >
          <option v-for="b in bebidas" v-bind:key="b" :value="b._id">{{b.nombre}}</option>
        </select>
      </div>
    </div>

    <label for>Seleccione la mesa</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idMesa"
          v-on:input="orden.idMesa = $event.target.value"
          type="text"
          v-model="orden.idMesa"
        >
          <option v-for="m in mesas" v-bind:key="m" :value="m._id">{{m.nombre}}</option>
        </select>
      </div>
    </div>

    <label for="bebida">Seleccione el empleado</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idEmpleado"
          v-on:input="bebida.idEmpleado = $event.target.value"
          type="text"
          v-model="orden.idEmpleado"
        >
          <option v-for="e in empleados" v-bind:key="e" :value="e._id">{{e.nombre}}</option>
        </select>
      </div>
    </div>

    <button v-on:click="agregarProductos()" class="waves-effect waves-light btn-large">Agregar</button>

    <label for="producto">Seleccione el producto</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idProductos"
          v-on:input="producto_a = $event.target.value"
          type="text"
          v-model="producto_a"
        >
          <option v-for="p in productos" v-bind:key="p" :value="p._id">{{p.nombre}}</option>
        </select>
      </div>
    </div>
    <!--
    <div class="row">
      
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
    </div>-->

    <!--
    <div class="row">
      
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Mesa:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr />
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
          <br />
          <label id="idBebida">
            <h4>
              <a v-on:click="borrarMesa()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idMes}} {{nombreMes}}
            </h4>
          </label>
        </div>
      </div>
    </div>-->

    <!--
    <div class="row">
      
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Empleado:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr />
          <ul v-for="empleado in empleados">
            <li>
              <i class="material-icons left">pages</i>
              {{empleado.nombre}}
              <a
                v-on:click="newEmpleado(empleado._id)"
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
              <a v-on:click="borrarEmpleado()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idEmp}} {{nombreEmp}}
            </h4>
          </label>
        </div>
      </div>
    </div>-->

    <!--
    <div class="row">
      <div class="row -white" id="contenedorTablaExterna">
        <div class="col s6">
          <h5>Seleccionar ID Producto:</h5>
          <p>(hacer click en el nombre deseado)</p>
          <hr />
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
          <br />
          <label id="idBebida">
            <h4>
              <a v-on:click="borrarProducto()" class="waves-effect waves-light">
                <i class="material-icons">delete</i>
              </a>
              {{idPro}} {{nombrePro}}
            </h4>
          </label>
        </div>
      </div>
    </div>-->

    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createorden"
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
        v-on:click="modifyorden"
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
      idBeb: "N/A",
      idMes: "N/A",
      idEmp: "N/A",
      idPro: "N/A",
      nombreBeb: "",
      nombreMes: "",
      nombreEmp: "",
      nombrePro: "",
      selectedTab: "test-swipe-1",
      bebida: {},
      bebidas: [],
      bebidas2: [],
      mesa: {},
      mesas: [],
      mesas2: [],
      empleado: {},
      empleados: [],
      empleados2: [],
      producto: {},
      productos: [],
      productos2: [],
      combo: {},
      combos: [],
      data: [],
      inicio: 0,
      final: 5,
      size: 1,
      currentPage: 1,
      //
      bebidas_a: [],
      bebs: [],
      bebstemp: [],
      bebida_a: "",
      beb: {},
      //
      combos_a: [],
      cmbs: [],
      combstemp: [],
      combo_a: "",
      cmb: {},
      //
      productos_a: [],
      prds: [],
      prdstemp: [],
      producto_a: "",
      pro: {}
    };
  },
  watch: {
    idBeb: function(val) {
      if (val != "N/A") {
        this.nombreBeb = "";
      } else {
        this.$http
          .get("http://localhost:8000/bebidas/searchbyid/{_id}")
          .then(response => {
            this.nombreBeb = response.body.bebida.nombre;
          });
      }
    },
    idMes: function(val) {
      if (val != "N/A") {
        this.nombreMes = "";
      } else {
        this.$http
          .get("http://localhost:8000/mesas/searchbyid/{_id}")
          .then(response => {
            this.nombreMes = response.body.mesa.nombre;
          });
      }
    },
    idEmp: function(val) {
      if (val != "N/A") {
        this.nombreEmp = "";
      } else {
        this.$http
          .get("http://localhost:8000/usuarios/searchbyid/{_id}")
          .then(response => {
            this.nombreEmp = response.body.empleado.nombre;
          });
      }
    },
    idPro: function(val) {
      if (val != "N/A") {
        this.nombrePro = "";
      } else {
        this.$http
          .get("http://localhost:8000/productos/searchbyid/{_id}")
          .then(response => {
            this.nombrePro = response.body.producto.nombre;
          });
      }
    }
  },

  methods: {
    siguiente() {
      if (this.currentPage < this.size) {
        this.currentPage = this.currentPage + 1;
        if (this.ordenes.length % 5 == 0) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.ordenes.slice(this.inicio, this.final);
        } else if (
          this.ordenes.length % 5 != 0 &&
          this.currentPage == this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + (this.ordenes.length % 5);
          this.data = this.ordenes.slice(this.inicio, this.final);
        } else if (
          this.ordenes.length % 5 != 0 &&
          this.currentPage < this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.ordenes.slice(this.inicio, this.final);
        }
      }
    },
    anterior() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        if (this.currentPage < this.size) {
          if (this.ordenes.length % 5 == 0) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.ordenes.slice(this.inicio, this.final);
          } else if (
            this.ordenes.length % 5 != 0 &&
            this.currentPage == this.size - 1
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - (this.ordenes.length % 5);
            this.data = this.ordenes.slice(this.inicio, this.final);
          } else if (
            this.ordenes.length % 5 != 0 &&
            this.currentPage < this.size
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.ordenes.slice(this.inicio, this.final);
          }
        }
      }
    },

    agregarCombos() {
      this.combos_a.push(this.combo_a);
      console.log("Están los combos: ", this.combos_a);
      sweetAlert("¡Listo!", "Combo agregado", "success");
    },
    agregarProductos() {
      this.productos_a.push(this.producto_a);
      console.log("Están los productos: ", this.productos_a);
      sweetAlert("¡Listo!", "Producto agregado", "success");
    },
    agregarBebidas() {
      this.bebidas_a.push(this.bebida_a);
      console.log("Están las bebidas: ", this.bebidas_a);
      sweetAlert("¡Listo!", "Bebida agregada", "success");
    },

    getBeb(orden) {
      var acum = "";
      //console.log("primer acum: ",acum)
      let _this = this;
      this.$http
        .get("http://localhost:8000/ordenesbebidas")
        .then(response => {
          this.bebs = response.body;
          var i = 0;
          for (i = 0; i < this.bebs.length; i++) {
            if (orden._id == this.bebs[i].idOrden) {
              this.bebstemp.push(this.bebs[i].idBebida);
            }
          }
          var j = 0;
          for (j = 0; j < this.bebidas.length; j++){
            for (i = 0; i<this.bebstemp.length;i++){
              if(this.bebidas[j]._id == this.bebstemp[i]){
                acum += this.bebidas[j].nombre+"\n";
              }
            }
          }
          
          sweetAlert(
            "Bebidas",
             acum
          );
          acum = "";
        });
        acum = "";
        this.bebs = [];
        this.bebstemp= [];
        //console.log("ultimo acum: ",acum);
    },

    getPro(orden) {
      var acum = "";
      //console.log("primer acum: ",acum)
      let _this = this;
      this.$http
        .get("http://localhost:8000/productosordenes")
        .then(response => {
          this.prds = response.body;
          var i = 0;
          for (i = 0; i < this.prds.length; i++) {
            if (orden._id == this.prds[i].idOrden) {
              this.prdstemp.push(this.prds[i].idProducto);
            }
          }
          var j = 0;
          for (j = 0; j < this.productos.length; j++){
            for (i = 0; i<this.prdstemp.length;i++){
              if(this.productos[j]._id == this.prdstemp[i]){
                acum += this.productos[j].nombre+"\n";
              }
            }
          }
          
          sweetAlert(
            "Productos",
            acum
          );
          acum = "";
        });
        acum = "";
        this.prds = [];
        this.prdstemp= [];
        //console.log("ultimo acum: ",acum);
    },

    getCom(orden) {
      var acum = "";
      //console.log("primer acum: ",acum)
      let _this = this;
      this.$http
        .get("http://localhost:8000/ordenescombos")
        .then(response => {
          this.cmbs = response.body;
          var i = 0;
          for (i = 0; i < this.cmbs.length; i++) {
            if (orden._id == this.cmbs[i].idOrden) {
              this.combstemp.push(this.cmbs[i].idCombo);
            }
          }
          var j = 0;
          for (j = 0; j < this.combos.length; j++){
            for (i = 0; i<this.combstemp.length;i++){
              if(this.combos[j]._id == this.combstemp[i]){
                acum += this.combos[j].nombre+"\n";
              }
            }
          }
          
          sweetAlert(
            "Combos",
            acum
          );
          acum = "";
        });
        acum = "";
        this.cmbs = [];
        this.combstemp= [];
        //console.log("ultimo acum: ",acum);
    },

    getorden() {
      let _this = this;
      this.$http.get("http://localhost:8000/ordenes").then(response => {
        this.ordenes = response.body;
        response.body.map(function(value, key) {
          var i;
          var p = _this.bebidas;
          for (i = 0; i < p.length; i++) {
            if (value.idBebidas == p[i]._id) {
              _this.bebidas2.push(p[i].nombre);
            }
          }

          var j;
          var p1 = _this.mesas;
          for (j = 0; j < p1.length; j++) {
            if (value.idMesa == p1[j]._id) {
              _this.mesas2.push(p1[j].nombre);
            }
          }

          var k;
          var p2 = _this.empleados;
          for (k = 0; k < p2.length; k++) {
            if (value.idEmpleado == p2[k]._id) {
              _this.empleados2.push(p2[k].nombre);
            }
          }

          var l;
          var p3 = _this.productos;
          for (l = 0; l < p3.length; l++) {
            if (value.idProductos == p3[l]._id) {
              _this.productos2.push(p3[l].nombre);
            }
          }
        });
        this.data = this.ordenes.slice(this.inicio, this.final);
        if (this.ordenes.length % 5 == 0) {
          this.size = this.ordenes.length / 5;
        } else {
          this.size = parseInt(this.ordenes.length / 5) + 1;
        }
      });
    },
    newBebida(bebida_id) {
      this.idBeb = bebida_id;
    },
    borrarBebida() {
      this.idBeb = "N/A";
    },
    newMesa(mesa_id) {
      this.idMes = mesa_id;
    },
    borrarMesa() {
      this.idMes = "N/A";
    },
    newEmpleado(empleado_id) {
      this.idEmp = empleado_id;
    },
    borrarEmpleado() {
      this.idEmp = "N/A";
    },
    newProducto(producto_id) {
      this.idPro = producto_id;
    },
    borrarProducto() {
      this.idPro = "N/A";
    },
    createorden() {
      let _this = this;
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;

      if (
        this.orden.idCombos ==
          undefined /*||  (this.orden.idCombos.length < 4)*/ ||
        this.orden.idMesa == undefined ||
        this.orden.idEmpleado == undefined
      ) {
        this.loading = false;
        sweetAlert("Oops...", "Error al crear, datos invalidos", "error");
      } else {
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
              this.getorden();
            } else {
              sweetAlert("Oops...", "Error al crear", "error");
            }
          });
        // combos
        setTimeout(function() {
          var i;
          for (i = 0; i < _this.combos_a.length; i++) {
            _this.cmb = {};
            _this.cmb.idCombo = _this.combos_a[i];
            _this.cmb.idOrden = _this.ordenes[_this.ordenes.length - 1]._id;
            _this.$http
              .post("http://localhost:8000/ordenescombos/create", _this.cmb)
              .then(response => {
                _this.loading = false;
                if (response.body.success) {
                  _this.cmb = {};
                  console.log("agregó");
                } else {
                  console.log("tronó");
                }
              });
          }
          _this.combos_a = [];
        }, 1000);

        // bebidas
        setTimeout(function() {
          var i;
          for (i = 0; i < _this.bebidas_a.length; i++) {
            _this.beb = {};
            _this.beb.idBebida = _this.bebidas_a[i];
            _this.beb.idOrden = _this.ordenes[_this.ordenes.length - 1]._id;
            _this.$http
              .post("http://localhost:8000/ordenesbebidas/create", _this.beb)
              .then(response => {
                _this.loading = false;
                if (response.body.success) {
                  _this.beb = {};
                  console.log("agregó");
                } else {
                  console.log("tronó");
                }
              });
          }
          _this.bebidas_a = [];
        }, 1000);
        // productos
        setTimeout(function() {
          var i;
          for (i = 0; i < _this.productos_a.length; i++) {
            _this.pro = {};
            _this.pro.idProducto = _this.productos_a[i];
            _this.pro.idOrden = _this.ordenes[_this.ordenes.length - 1]._id;
            _this.$http
              .post(
                "http://localhost:8000/productosordenes/create",
                _this.pro
              )
              .then(response => {
                _this.loading = false;
                if (response.body.success) {
                  _this.pro = {};
                  console.log("agregó");
                } else {
                  console.log("tronó");
                }
              });
          }
          _this.productos_a = [];
        }, 1000);
        //
      }
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
    startToModifyorden(orden) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = orden._id;
      this.orden = orden;
      this.orden.idBebidas = orden.idBebidas;
      this.orden.idProductos = orden.idProductos;
      this.orden.idCombos = orden.idCombos;
      this.orden.idMesa = orden.idMesa;
      this.idEmpleado = orden.idEmpleado;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyorden() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.$http
          .put(
            "http://localhost:8000/ordenes/update/" + this.idModificar,
            this.orden
          )
          .then(response => {
            if (response.body.success) {
              this.getorden();
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
    deleteorden(idOrden) {
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
                .delete("http://localhost:8000/ordenes/delete/" + idOrden)
                .then(response => {
                  this.loading = false;
                  if (response.body.success) {
                    sweetAlert("Oops...", "Error al eliminar", "error");
                    _this.getorden();
                  } else {
                    sweetAlert(
                      "Deleted!",
                      "Los cambios estan en la tabla",
                      "success"
                    );
                    _this.inicio = 0;
                    _this.final = 5;
                    _this.currentPage = 1;
                    _this.getorden();
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
    getBebidas() {
      this.$http.get("http://localhost:8000/bebidas").then(response => {
        console.log(response);
        this.bebidas = response.body;
      });
    },
    getMesas() {
      this.$http.get("http://localhost:8000/mesas").then(response => {
        console.log(response);
        this.mesas = response.body;
      });
    },
    getEmpleados() {
      this.$http.get("http://localhost:8000/usuarios").then(response => {
        console.log(response);
        this.empleados = response.body;
      });
    },
    getProductos() {
      this.$http.get("http://localhost:8000/productos").then(response => {
        console.log(response);
        this.productos = response.body;
      });
    }
  },

  beforeMount() {
    this.getBebidas();
    this.getProductos();
    this.getMesas();
    this.getEmpleados();
    this.getorden();
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



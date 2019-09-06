<template>
  <div id="root">
    <h2>
      Combos
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
          <th>Productos</th>
          <th>Bebidas</th>
          <th>Precio</th>
          <th>Descripcion</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="combo in data" v-bind:key="combo">
          <td>{{combo.nombre}}</td>
          <td>
            <button v-on:click="getProducto(combo)" class="waves-effect waves-teal btn">Mostrar</button>
          </td>
          <td>
            <button v-on:click="getBebida(combo)" class="waves-effect waves-teal btn">Mostrar</button>
          </td>
          <td>{{combo.precio}}</td>
          <td>{{combo.descripcion}}</td>
          <td>
            <a
              v-on:click="startToModifyCombo(combo)"
              class="btn-floating btn-small waves-effect waves-green green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteCombo(combo._id)"
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
          v-on:input="combo.nombre = $event.target.value"
          type="text"
          v-model="combo.nombre"
          :disabled="loading"
          id="nombre"
        />
        <label for="nombre">Nombre</label>
      </div>
      <div class="input-field col s6">
        <input
          placeholder=""
          v-on:input="combo.precio = $event.target.value"
          type="number"
          v-model="combo.precio"
          :disabled="loading"
          id="precio"
        />
        <label for="precio">Precio</label>
      </div>
      <div class="input-field col s12">
        <input
          placeholder=""
          v-on:input="combo.descripcion = $event.target.value"
          type="text"
          v-model="combo.descripcion"
          :disabled="loading"
          id="descripcion"
        />
        <label for="descripcion">Descripcion</label>
      </div>
    </div>

    <button v-on:click="agregarProducto()" class="waves-effect waves-teal btn-large">Agregar</button>

    <label for="producto">Seleccione el producto</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idProducto"
          v-on:click="comboxproducto = $event.target.value"
          type="text"
          v-model="comboxproducto"
        >
          <option v-for="p in productos" v-bind:key="p" :value="p._id">{{p.nombre}}</option>
        </select>
      </div>

      <div class="col s6">
        <div class="input-field col s6">
          <input
            placeholder=""
            v-on:input="cantidad_producto = $event.target.value"
            type="number"
            v-model="cantidad_producto"
            :disabled="loading"
            id="cantidad_producto"
          />
          <label for="cantidad_producto">Cantidad Producto</label>
        </div>
        <table class="table2">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Agregar</th>
              <th>Disminuir</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in productosTemp" v-bind:key="i" placeholder="">
              <td>{{i.nombre}}</td>
              <td>{{i.cantidad_producto}}</td>

              <td>
                <a
                  v-on:click="aumentarProducto(i.index)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">exposure_plus_1</i>
                </a>
              </td>
              <td>
                <a
                  v-on:click="decrementarProducto(i.index)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">exposure_neg_1</i>
                </a>
              </td>
              <td>
                <a
                  v-on:click="eliminarProducto(i.index)"
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

    <button v-on:click="agregarBebida()" class="waves-effect waves-teal btn-large">Agregar</button>

    <label for="bebida">Seleccione la Bebida</label>
    <div class="row">
      <div class="input-field col s6">
        <select
          placeholder=""
          style="color: black"
          class="browser-default"
          :disabled="loading"
          id="idBebida"
          v-on:click="comboxbebida = $event.target.value"
          type="text"
          v-model="comboxbebida"
        >
          <option v-for="b in bebidas" v-bind:key="b" v-bind:value="b._id">{{b.nombre}}</option>
        </select>
      </div>

      <div class="col s6">
        <div class="input-field col s6">
          <input
            placeholder=""
            v-on:input="cantidad_bebida = $event.target.value"
            type="number"
            v-model="cantidad_bebida"
            :disabled="loading"
            id="cantidad_bebida"
          />
          <label for="cantidad_bebida">Cantidad Bebida</label>
        </div>
        <table class="table2">
          <thead>
            <tr>
              <th>Bebida</th>
              <th>Cantidad</th>
              <th>Agregar</th>
              <th>Disminuir</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in bebidasTemp" v-bind:key="i">
              <td>{{i.nombre}}</td>
              <td>{{i.cantidad_bebida}}</td>
              <td>
                <a
                  v-on:click="aumentarBebida(i.index)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">exposure_plus_1</i>
                </a>
              </td>
              <td>
                <a
                  v-on:click="decrementarBebida(i.index)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">exposure_neg_1</i>
                </a>
              </td>
              <td>
                <a
                  v-on:click="eliminarBebida(i.index)"
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
        v-on:click="createCombo"
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
        v-on:click="modifyCombo"
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
  name: "combo",
  data() {
    return {
      combos: [],
      combo: {},
      loading: false,
      idModificar: "",
      selectedTab: "test-swipe-1",
      producto: {},
      productos: [],
      bebida: {},
      bebidas: [],
      data: [],
      inicio: 0,
      final: 5,
      currentPage: 1,
      size: 1,
      comboxproducto: "",
      combosxproductos: [],
      productosTemp: [],
      comboxbebida: "",
      combosxbebidas: [],
      bebidasTemp: [],
      ordenescombos: [],
      //
      cantidad_producto: 1,
      cantidad_bebida: 1
    };
  },
  watch: {
    /*idProv: function(val) {
      if (val != "N/A") {
        this.nombreProv = "";
      } else {
        this.$http
          .get("http://localhost:8000/combo/searchbyid/{_id}")
          .then(response => {
            //this.nombreProv = response.body.proveedor.nombre;
          });
      }
    }*/
  },
  methods: {
    siguiente() {
      if (this.currentPage < this.size) {
        this.currentPage = this.currentPage + 1;
        if (this.combos.length % 5 == 0) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.combos.slice(this.inicio, this.final);
        } else if (
          this.combos.length % 5 != 0 &&
          this.currentPage == this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + (this.combos.length % 5);
          this.data = this.combos.slice(this.inicio, this.final);
        } else if (
          this.combos.length % 5 != 0 &&
          this.currentPage < this.size
        ) {
          this.inicio = this.inicio + 5;
          this.final = this.final + 5;
          this.data = this.combos.slice(this.inicio, this.final);
        }
      }
    },
    anterior() {
      if (this.currentPage > 1) {
        this.currentPage = this.currentPage - 1;
        if (this.currentPage < this.size) {
          if (this.combos.length % 5 == 0) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.combos.slice(this.inicio, this.final);
          } else if (
            this.combos.length % 5 != 0 &&
            this.currentPage == this.size - 1
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - (this.combos.length % 5);
            this.data = this.combos.slice(this.inicio, this.final);
          } else if (
            this.combos.length % 5 != 0 &&
            this.currentPage < this.size
          ) {
            this.inicio = this.inicio - 5;
            this.final = this.final - 5;
            this.data = this.combos.slice(this.inicio, this.final);
          }
        }
      }
    },
    agregarProducto() {
      if (this.cantidad_producto != undefined && this.cantidad_producto >= 1) {
        var j;
        var exist = false;
        for (j = 0; j < this.combosxproductos.length; j++) {
          if (this.combosxproductos[j] == this.comboxproducto) {
            exist = true;
          }
        }
        if (this.comboxproducto != "") {
          if (!exist) {
            this.combosxproductos.push(this.comboxproducto);
            var i;
            for (i = 0; i < this.productos.length; i++) {
              if (this.comboxproducto == this.productos[i]._id) {
                var t = {};
                t.nombre = this.productos[i].nombre;
                t.cantidad_producto = this.cantidad_producto;
                t.index = this.productosTemp.length;
                this.productosTemp.push(t);
              }
            }
            sweetAlert("¡Listo!", "Producto agregado", "success");
            this.cantidad_producto = 1;
          } else {
            sweetAlert(
              "Oops",
              "Producto invalido, ya fué seleccionado",
              "warning"
            );
          }
        } else {
          sweetAlert("Oops", "Producto invalido, seleccione uno", "warning");
        }
      } else {
        sweetAlert("Oops", "Cantidad del producto invalida", "warning");
      }
    },
    eliminarProducto(index) {
      var i;
      this.combosxproductos.splice(index, 1);
      this.productosTemp.splice(index, 1);
      for (i = index; i < this.productosTemp.length; i++) {
        this.productosTemp[i].index = this.productosTemp[i].index - 1;
      }
      console.log("cmdxprod: ",this.combosxproductos);
    },
    aumentarProducto(index) {
      this.productosTemp[index].cantidad_producto++;
    },
    decrementarProducto(index) {
      if (this.productosTemp[index].cantidad_producto - 1 > 0) {
        this.productosTemp[index].cantidad_producto--;
      }
    },
    agregarBebida() {
      //console.log("La bebida: ", this.comboxbebida);
      if (this.cantidad_bebida != undefined && this.cantidad_bebida >= 1) {
        if (this.comboxbebida != "") {
          var j;
          var exist = false;
          for (j = 0; j < this.combosxbebidas.length; j++) {
            if (this.combosxbebidas[j] == this.comboxbebida) {
              exist = true;
            }
          }
          if (!exist) {
            this.combosxbebidas.push(this.comboxbebida);
            var i;
            for (i = 0; i < this.bebidas.length; i++) {
              if (this.comboxbebida == this.bebidas[i]._id) {
                var t = {};
                t.nombre = this.bebidas[i].nombre;
                t.cantidad_bebida = this.cantidad_bebida;
                t.index = this.bebidasTemp.length;
                this.bebidasTemp.push(t);
              }
            }
            sweetAlert("¡Listo!", "Bebida agregada", "success");
            this.cantidad_bebida = 1;
          } else {
            sweetAlert(
              "Oops",
              "Insumo invalido, ya fué seleccionado",
              "warning"
            );
          }
        } else {
          sweetAlert("Oops", "Bebida invalida, seleccione una", "warning");
        }
      } else {
        sweetAlert("Oops", "Cantidad del producto invalida", "warning");
      }
      this.comboxbebida={};
    },
    eliminarBebida(index) {
      var i;
      this.combosxbebidas.splice(index, 1);
      this.bebidasTemp.splice(index, 1);
      for (i = index; i < this.bebidasTemp.length; i++) {
        this.bebidasTemp[i].index = this.bebidasTemp[i].index - 1;
      }
      console.log("combxbebida: ",this.combosxbebidas);
    },
    aumentarBebida(index) {
      this.bebidasTemp[index].cantidad_bebida++;
    },
    decrementarBebida(index) {
      if (this.bebidasTemp[index].cantidad_bebida - 1 > 0) {
        this.bebidasTemp[index].cantidad_bebida--;
      }
    },
    getProducto(combo) {
      var acum = "";
      let _this = this;
      var prod;
      var prodtemp = [];
      this.$http.get("http://localhost:8000/combosproductos").then(response => {
        prod = response.body;
        var i = 0;
        for (i = 0; i < prod.length; i++) {
          if (combo._id == prod[i].idCombo) {
            var t = {};
            t.idProducto = prod[i].idProducto;
            t.cantidad_producto = prod[i].cantidad_producto;
            prodtemp.push(t);
          }
        }
        var j = 0;
        for (j = 0; j < this.productos.length; j++) {
          for (i = 0; i < prodtemp.length; i++) {
            if (this.productos[j]._id == prodtemp[i].idProducto) {
              acum +=
                this.productos[j].nombre +
                " (" +
                prodtemp[i].cantidad_producto +
                ")\n";
            }
          }
        }
        sweetAlert("Productos", acum);
      });
      acum = "";
      prod = [];
      prodtemp = [];
    },
    getBebida(combo) {
      var acum = "";
      let _this = this;
      var beb;
      var bebtemp;
      this.$http.get("http://localhost:8000/combosbebidas").then(response => {
        beb = response.body;
        var i = 0;
        for (i = 0; i < beb.length; i++) {
          if (combo._id == beb[i].idCombo) {
            var t = {};
            t.idBebida = beb[i].idBebida;
            t.cantidad_bebida = beb[i].cantidad_bebida;
            bebtemp.push(t);
          }
        }
        var j = 0;
        for (j = 0; j < this.bebidas.length; j++) {
          for (i = 0; i < bebtemp.length; i++) {
            if (this.bebidas[j]._id == bebtemp[i].idBebida) {
              acum +=
                bebtemp[i].cantidad_bebida +
                " " +
                this.bebidas[j].nombre +
                "\n";
            }
          }
        }
        sweetAlert("Bebidas", acum);
      });
      acum = "";
      beb = [];
      bebtemp = [];
    },
    getCombos() {
      this.$http.get("http://localhost:8000/combos").then(response => {
        this.combos = response.body;
        this.data = this.combos.slice(this.inicio, this.final);
        if (this.combos.length % 5 == 0) {
          this.size = this.combos.length / 5;
        } else {
          this.size = parseInt(this.combos.length / 5) + 1;
        }
      });
    },
    createCombo() {
      let _this = this;
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      if (
        this.combo.nombre == undefined ||
        this.combo.precio == undefined ||
        this.combo.descripcion == undefined ||
        this.combosxproductos.length == 0 ||
        this.combosxbebidas.length == 0
      ) {
        sweetAlert("Oops", "Hay un campo vacio", "error");
        this.loading = false;
      } else {
        this.$http
          .post("http://localhost:8000/combos/create", this.combo)
          .then(response => {
            this.loading = false;
            if (!response.body.success) {
              sweetAlert("Oops...", "Error al crear", "error");
              this.getCombos();
              ///
            } else {
              sweetAlert(
                "Creado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );

              this.getCombos();
              
            }
            this.combo = {};
          });

        setTimeout(function() {
          var i;
          var prod = {};
          console.log("this: ",_this.combosxproductos);
          for (i = 0; i < _this.combosxproductos.length; i++) {
            prod.idProducto = _this.combosxproductos[i];
            prod.cantidad_producto = _this.productosTemp[i].cantidad_producto;
            prod.idCombo = _this.combos[_this.combos.length - 1]._id;
            console.log("prod: ",prod)
            console.log("prodTemp: ",this.productosTemp);
            _this.$http
              .post("http://localhost:8000/combosproductos/create", prod)
              .then(response => {
                _this.loading = false;
                
                if (response.body.success) {
                  prod = {};
                  console.log("agregó");
                } else {
                  console.log("tronó");
                }
              });
          }

          var beb = {};
          //console.log("bebidas en create: ", _this.combosxbebidas);
          for (i = 0; i < _this.combosxbebidas.length; i++) {
            beb.idBebida = _this.combosxbebidas[i];
            beb.cantidad_bebida = _this.bebidasTemp[i].cantidad_bebida;
            beb.idCombo = _this.combos[_this.combos.length - 1]._id;
            _this.$http
              .post("http://localhost:8000/combosbebidas/create", beb)
              .then(response => {
                _this.loading = false;
                if (response.body.success) {
                  beb = {};
                  console.log("agregó");
                } else {
                  console.log("tronó");
                }
              });
          }
          _this.combosxproductos = [];
          _this.combosxbebidas = [];
          _this.bebidasTemp = [];
          _this.productosTemp = [];
          _this.comboxproducto = "";
          _this.comboxbebida = "";
        }, 1000);
        this.getCombo();
      }
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.combo = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyCombo(combo) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = combo._id;
      this.combo = combo;
      var prod = [];
      this.$http
        .get("http://localhost:8000/combosproductos")
        .then(response => {
          prod = response.body;
          var i = 0;
          var j;
          for (j = 0; j < prod.length; j++) {
            if (prod[j].idCombo == this.idModificar) {
              for (i = 0; i < this.productos.length; i++) {
                if (prod[j].idProducto == this.productos[i]._id) {
                  var t = {};
                  t.nombre = this.productos[i].nombre;
                  t.index = this.productosTemp.length;
                  t.cantidad_producto = prod[j].cantidad_producto;
                  this.productosTemp.push(t);
                  this.combosxproductos.push(prod[j].idProducto);
                }
              }
            }
          }
        });
        var beb;
        this.$http
        .get("http://localhost:8000/combosbebidas")
        .then(response => {
          beb = response.body;
          var i = 0;
          var j;
          for (j = 0; j < beb.length; j++) {
            if (beb[j].idCombo == this.idModificar) {
              for (i = 0; i < this.bebidas.length; i++) {
                if (beb[j].idBebida == this.bebidas[i]._id) {
                  var t = {};
                  t.nombre = this.bebidas[i].nombre;
                  t.index = this.bebidasTemp.length;
                  t.cantidad_bebida = beb[j].cantidad_bebida;
                  this.bebidasTemp.push(t);
                  this.combosxbebidas.push(beb[j].idBebida);
                }
              }
            }
          }
        });

      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyCombo() {
      let _this = this;
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        //this.insumo.idProveedor = this.idProv;
        this.$http
          .put(
            "http://localhost:8000/combos/update/" + this.idModificar,
            this.combo
          )
          .then(response => {
            if (response.body.success) {
              this.getCombos();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              console.log("id: ",_this.idModificar);
              _this.$http
                  .delete(
                    "http://localhost:8000/combosproductos/delete/" +
                      _this.idModificar
                  )
                  .then(response => {
                    if (response.body.success) {
                      console.log("simon");
                    } else {
                      console.log("nel");
                    }
                  });

                  _this.$http
                  .delete(
                    "http://localhost:8000/combosbebidas/delete/" +
                      _this.idModificar
                  )
                  .then(response => {//this
                    if (response.body.success) {
                      console.log("simon");
                    } else {
                      console.log("nel");
                    }
                    });
              setTimeout(function() {
                _this.comboxproducto = {};
                var i;
                for (i = 0; i < _this.combosxproductos.length; i++) {
                  _this.comboxproducto = {};
                  _this.comboxproducto.idProducto = _this.combosxproductos[i];
                  _this.comboxproducto.idCombo =_this.idModificar;
                  _this.comboxproducto.cantidad_producto = _this.productosTemp[i].cantidad_producto;
                  _this.$http
                    .post(
                      "http://localhost:8000/combosproductos/create",
                      _this.comboxproducto
                    )
                    .then(response => {
                      _this.loading = false;
                      console.log("cmboxproducto: ",_this.comboxproducto);
                      if (response.body.success) {
                        _this.comboxproducto = {};
                        console.log("agregó");
                      } else {
                        _this.comboxproducto = {};
                        console.log("tronó");
                      }
                    });
                }
                _this.comboxproducto = {};
                _this.combosxproductos = [];
                _this.productosTemp = [];

                for (i = 0; i < _this.combosxbebidas.length; i++) {
                  _this.comboxbebida = {};
                  _this.comboxbebida.idBebida = _this.combosxbebidas[i];
                  _this.comboxbebida.idCombo =_this.idModificar;
                  _this.comboxbebida.cantidad_bebida = _this.bebidasTemp[i].cantidad_bebida;
                  _this.$http
                    .post(
                      "http://localhost:8000/combosbebidas/create",
                      _this.comboxbebida
                    )
                    .then(response => {
                      _this.loading = false;
                      if (response.body.success) {
                        _this.comboxbebida = {};
                        console.log("agregó");
                      } else {
                        console.log("tronó");
                      }
                    });
                }
                _this.combosxbebidas = [];
                _this.comboxbebida = {};
                _this.bebidasTemp = [];
              }, 2000);
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.combo = {};
              this.loading = false;
            }//fin
          });
      }
    },
    deleteCombo(idCombo) {
      let _this = this;
      var entrar = true;
      for (let i = 0; i < this.ordenescombos.length; i++) {
        const element = this.ordenescombos[i];
        if (element.idCombo == idCombo) {
          entrar = false;
          sweetAlert(
          "Eliminación Bloqueada",
          "El combo se encuentra relacionado con Ordenes",
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
                  .delete("http://localhost:8000/combos/delete/" + idCombo)
                  .then(response => {
                    _this.loading = false;
                    if (response.body.success) {
                      
                      //
                      sweetAlert(
                        "Deleted!",
                        "Los cambios estan en la tabla",
                        "success"
                      );
                      _this.inicio = 0;
                      _this.final = 5;
                      _this.currentPage = 1;
                      _this.getCombos();
                    } else {
                      sweetAlert("Oops...", "Error al eliminar", "error");
                      _this.getCombos();
                    }
                  });
                _this.$http
                  .delete(
                    "http://localhost:8000/combosproductos/delete/" + idCombo
                  )
                  .then(response => {
                    if (response.body.success) {
                      console.log("nel");
                    } else {
                      console.log("simon");
                    }
                  });

                _this.$http
                  .delete(
                    "http://localhost:8000/combosbebidas/delete/" + idCombo
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
    getProductos() {
      this.$http.get("http://localhost:8000/productos").then(response => {
        console.log(response);
        this.productos = response.body;
      });
    },
    getBebidas() {
      this.$http.get("http://localhost:8000/bebidas").then(response => {
        console.log(response);
        this.bebidas = response.body;
      });
    },
    getOrdenesCombos(){
      this.$http.get("http://localhost:8000/ordenescombos").then(response => {
        console.log(response);
        this.ordenescombos = response.body;
      });
    }
  },
  beforeMount() {
    this.getCombos();
    this.getBebidas();
    this.getProductos();
    this.getOrdenesCombos();
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
.table2 th {
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

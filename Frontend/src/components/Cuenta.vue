<template>
  <div id="root">
    <h1>Cuentas</h1>
    <div class="row">
      <div class="input-field col s6">
        <label for>Seleccione la mesa</label>
        <br />
        <br />
        <select
          style="color: black"
          class="browser-default"
          :disabled="loading"
          @change="cargarDatos()"
          id="mesa"
          v-on:input="mesa = $event.target.value"
          type="text"
          v-model="mesa"
        >
          <option
            v-for="m in mesas"
            v-bind:key="m"
            :value="m._id"
          >{{m.nombre + " [Mesa #" + m.numero + "]"}}</option>
        </select>
      </div>
      <div class="col s6">
        <p class="mensaje">{{this.mensaje}}</p>
        <table class="table2">
          <thead>
            <tr>
              <th>Orden</th>
              <th>Cargar Datos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="o in ordenes2" v-bind:key="o">
              <td>{{"Orden #" + o.numero}}</td>
              <td>
                <a
                  v-on:click="mostrarDatos(o._id)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">info_outline</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <br />
    <h3>
      Datos de la Orden
      <a
        class="btn-floating btn-small btn tooltipped -red"
        data-position="top"
        data-delay="50"
        id="boton"
        data-tooltip="Para agregar a la cuenta un articulo debe apretar el boton de AGREGAR"
      >
        <i class="material-icons left">help</i>Update
      </a>
    </h3>
    <div class="row">
      <div class="col sm4">
        <button v-on:click="SelectAll()" class="waves-effect waves-teal btn-large pulse">Adios</button>
      </div>
    </div>

    <!-- productos -->
    <div class="row">
      <div class="col s4">
        <table class="table2">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Agregar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in productos_n" v-bind:key="p">
              <td>{{p.nombre}}</td>
              <td>{{p.cantidad}}</td>
              <td>
                <a
                  v-on:click="Agregar_Cuenta(p)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">info_outline</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Bebidas -->
      <div class="col s4">
        <table class="table2">
          <thead>
            <tr>
              <th>Bebida</th>
              <th>Cantidad</th>
              <th>Agregar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="b in bebidas_n" v-bind:key="b">
              <td>{{b.nombre}}</td>
              <td>{{b.cantidad}}</td>
              <td>
                <a
                  v-on:click="Agregar_Cuenta(b)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">info_outline</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- productos -->
      <div class="col s4">
        <table class="table2">
          <thead>
            <tr>
              <th>Combo</th>
              <th>Cantidad</th>
              <th>Agregar</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in combos_n" v-bind:key="c">
              <td>{{c.nombre}}</td>
              <td>{{c.cantidad}}</td>
              <td>
                <a
                  v-on:click="Agregar_Cuenta(c)"
                  class="btn-floating btn-small waves-effect waves-red red"
                >
                  <i class="material-icons">info_outline</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <br />
    <h3>Contenido de la Cuenta</h3>
    <div class="col s4">
      <table class="table2">
        <thead>
          <tr>
            <th>Nombre del Articulo</th>
            <th>Tipo</th>
            <th>Precio c/u</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Quitar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in articulos" v-bind:key="a">
            <td>{{a.nombre}}</td>
            <td>{{a.tipo}}</td>
            <td>{{a.precio}}</td>
            <td>{{a.cantidad}}</td>
            <td>{{a.subtotal}}</td>
            <td>
              <a v-on:click="Quitar(a)" class="btn-floating btn-small waves-effect waves-red red">
                <i class="material-icons">info_outline</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <br />
    <button v-on:click="pagar()" class="waves-effect waves-teal btn-large pulse">Realizar Pago</button>
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
      selectedTab: "test-swipe-1",
      orden: {},
      ordenes: [],
      ordenes2: [],
      data: [],
      inicio: 0,
      final: 5,
      currentPage: 1,
      size: 1,
      mesa: "",
      mesas: [],
      mesas2: [],
      //
      productos: [],
      combos: [],
      bebidas: [],
      //
      productos_a: [],
      combos_a: [],
      bebidas_a: [],
      //
      productos_n: [],
      combos_n: [],
      bebidas_n: [],
      //
      prod_ids: [],
      beb_ids: [],
      comb_ids: [],
      //
      ords_bebs: [],
      ords_combs: [],
      ords_prods: [],
      //
      cant_b: [],
      cant_p: [],
      cant_c: [],
      mensaje: "¡Debe seleccionar una mesa!",
      articulos: []
    };
  },
  watch: {},
  methods: {
    pagar() {
      let _this = this;
      var i, j;
      for (i = 0; i < this.articulos.length; i++) {
        if (this.articulos[i].tipo === "Bebida") {
          var b = {};
          var cant;
          b.idOrden = this.articulos[i].idOrden;
          b.idBebida = this.articulos[i].idBebida;
          for (j = 0; j < this.bebidas_n.length; j++) {
            if (this.bebidas_n[j]._id == this.articulos[i]._id) {
              cant = this.bebidas_n[j].cantidad;
            }
          }
          b.cantidad_bebida = cant;

          this.$http
            .put(
              "http://localhost:8000/ordenesbebidas/update/" +
                this.articulos[i]._id,
              b
            )
            .then(response => {
              if (response.body.success) {
                console.log("modificó en bebidas");
              } else {
                console.log("tronó en bebidas");
              }
            });
        } else if (this.articulos[i].tipo === "Producto") {
          var p = {};
          p.idOrden = this.articulos[i].idOrden;
          p.idProducto = this.articulos[i].idProducto;
          var cant;
          for (j = 0; j < this.productos_n.length; j++) {
            if (this.productos_n[j]._id == this.articulos[i]._id) {
              cant = this.productos_n[j].cantidad;
            }
          }
          p.cantidad_producto = cant;

          this.$http
            .put(
              "http://localhost:8000/productosordenes/update/" +
                this.articulos[i]._id,
              p
            )
            .then(response => {
              if (response.body.success) {
                console.log("modificó en productos");
              } else {
                console.log("tronó en productos");
              }
            });
        } else if (this.articulos[i].tipo === "Combo") {
          var c = {};
          c.idOrden = this.articulos[i].idOrden;
          c.idCombo = this.articulos[i].idCombo;
          var cant;
          for (j = 0; j < this.combos_n.length; j++) {
            if (this.combos_n[j]._id == this.articulos[i]._id) {
              cant = this.combos_n[j].cantidad;
            }
          }
          c.cantidad_combo = cant;

          this.$http
            .put(
              "http://localhost:8000/ordenescombos/update/" +
                this.articulos[i]._id,
              c
            )
            .then(response => {
              if (response.body.success) {
                console.log("modificó en combos");
              } else {
                console.log("tronó en combos");
              }
            });
        }
        setTimeout(function() {
          _this.articulos = [];
        }, 1000);
      }
    },
    cargarDatos() {
      console.log("A ver que pedo: " + this.mesa);
      if (this.mesa != "") {
        var ords;
        this.$http.get("http://localhost:8000/ordenes").then(response => {
          ords = response.body;
          var i = 0;
          var j = 0;
          this.ordenes2 = [];
          this.bebidas_n = [];
          this.combos_n = [];
          this.productos_n = [];
          for (i = 0; i < ords.length; i++) {
            if (ords[i].idMesa == this.mesa) {
              this.ordenes2.push(ords[i]);
            }
          }
        });
        this.mensaje = "Ordenes";
      } else {
        this.ordenes2 = [];
        this.bebidas_n = [];
        this.combos_n = [];
        this.productos_n = [];
      }
    },
    Agregar_Cuenta(art) {
      var texto =
        "Nombre: " +
        art.nombre +
        "\nTipo: " +
        art.tipo +
        "\nCantidad Disponible: " +
        art.cantidad;
      let _this = this;
      if (art.cantidad != 0) {
        swal(
          {
            title: "Cantidad del Artículo",
            text: texto,
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Ingrese la cantidad a pagar..."
          },
          function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
              swal.showInputError("Tienes que escrbir algo!");
              return false;
            }
            if (!/^([0-9])*$/.test(inputValue)) {
              swal.showInputError("No se aceptan letras!");
              return false;
            }
            if (inputValue > art.cantidad) {
              swal.showInputError("El numero ingresado supera la cantidad!");
              return false;
            }
            if (inputValue > 0 && inputValue <= art.cantidad) {
              var t = {};
              t._id = art._id;
              t.nombre = art.nombre;
              t.tipo = art.tipo;
              t.precio = art.precio;
              t.cantidad = inputValue;
              t.tipobeb = art.tipobeb;
              t.subtotal = art.precio * inputValue;
              t.index = _this.articulos.length;
              _this.articulos.push(t);
              art.cantidad -= inputValue;
              swal(
                "Articulo Agregado!",
                "La cuenta ha sido actualizada",
                "success"
              );
            }
          }
        );
      } else {
        swal(
          "Articulo No Permitido",
          "No quedan articulos disponibles",
          "warning"
        );
      }
    },
    Quitar(art) {
      let _this = this;
      var i;
      var id = art.tipo;
      if (art.tipo == "Bebida") {
        for (i = 0; i < this.bebidas_n.length; i++) {
          if ((id = this.bebidas_n[i]._id)) {
            this.bebidas_n[i].cantidad += parseInt(art.cantidad);
          }
        }
      } else if (art.tipo == "Producto") {
        for (i = 0; i < this.productos_n.length; i++) {
          if ((id = this.productos_n[i]._id)) {
            this.productos_n[i].cantidad += parseInt(art.cantidad);
          }
        }
      } else {
        for (i = 0; i < this.combos_n.length; i++) {
          if ((id = this.combos_n[i]._id)) {
            this.combos_n[i].cantidad += parseInt(art.cantidad);
          }
        }
      }
      var indice = art.index;
      _this.articulos.splice(indice, 1);
      for (i = indice; i < _this.articulos.length; i++) {
        _this.articulos[i].index = _this.articulos[i].index - 1;
      }
    },
    mostrarDatos(idOrden) {
      console.log("idOrden: " + idOrden);
      let _this = this;
      var prods;
      this.$http
        .get("http://localhost:8000/productosordenes")
        .then(response => {
          prods = response.body;
          var i = 0;
          this.productos_n = [];
          this.cant_p = [];
          this.productos_a = [];
          this.prod_ids = [];
          this.ords_prods = [];
          for (i = 0; i < prods.length; i++) {
            if (prods[i].idOrden == idOrden) {
              this.productos_a.push(prods[i].idProducto);
              this.cant_p.push(prods[i].cantidad_producto);
              this.prod_ids.push(prods[i]._id);
              this.ords_prods.push(prods[i].idOrden);
            }
          }
        });
      var bebs;
      this.$http.get("http://localhost:8000/ordenesbebidas").then(response => {
        bebs = response.body;
        var i;
        this.bebidas_n = [];
        this.cant_b = [];
        this.bebidas_a = [];
        this.beb_ids = [];
        this.beb_tipo = [];
        this.ords_bebs = [];
        for (i = 0; i < bebs.length; i++) {
          if (bebs[i].idOrden == idOrden) {
            this.bebidas_a.push(bebs[i].idBebida);
            this.cant_b.push(bebs[i].cantidad_bebida);
            this.beb_ids.push(bebs[i]._id);
            this.beb_tipo.push(bebs[i].tipo);
            this.ords_bebs.push(bebs[i].idOrden);
          }
        }
      });

      var combs;
      this.$http.get("http://localhost:8000/ordenescombos").then(response => {
        combs = response.body;
        this.combos_n = [];
        this.cant_c = [];
        this.combos_a = [];
        this.comb_ids = [];
        this.ords_combs = [];
        var i;
        for (i = 0; i < combs.length; i++) {
          if (combs[i].idOrden == idOrden) {
            this.combos_a.push(combs[i].idCombo);
            this.cant_c.push(combs[i].cantidad_combo);
            this.comb_ids.push(combs[i]._id);
            this.ords_combs.push(combs[i].idOrden);
          }
        }
      });

      setTimeout(function() {
        var i;
        var j;
        console.log("tamaño 1: " + _this.bebidas_a.length);
        console.log("tamaño 2: " + _this.bebidas.length);

        for (i = 0; i < _this.bebidas_a.length; i++) {
          for (j = 0; j < _this.bebidas.length; j++) {
            if (_this.bebidas_a[i] == _this.bebidas[j]._id) {
              var t = {};
              t.idBebida = _this.bebidas_a[i];
              t.idOrden = _this.ords_bebs[i];
              t.nombre = _this.bebidas[j].nombre;
              t.cantidad = _this.cant_b[i];
              t._id = _this.beb_ids[i];
              t.tipo = "Bebida";
              t.tipobeb = _this.bebidas[i].tipo;
              t.precio = _this.bebidas[i].precio;
              _this.bebidas_n.push(t);
            }
          }
        }
        for (i = 0; i < _this.productos_a.length; i++) {
          for (j = 0; j < _this.productos.length; j++) {
            if (_this.productos_a[i] == _this.productos[j]._id) {
              var t = {};
              t.idProducto = _this.productos_a[i];
              t.idOrden = _this.ords_prods[i];
              t.nombre = _this.productos[j].nombre;
              t.cantidad = _this.cant_p[i];
              t._id = _this.prod_ids[i];
              t.tipo = "Producto";
              t.precio = _this.productos[i].precio;
              _this.productos_n.push(t);
            }
          }
        }
        for (i = 0; i < _this.combos_a.length; i++) {
          for (j = 0; j < _this.combos.length; j++) {
            if (_this.combos_a[i] == _this.combos[j]._id) {
              var t = {};
              t.idCombo = _this.combos_a[i];
              t.idOrden = _this.ords_combs[i];
              t.nombre = _this.combos[j].nombre;
              t.cantidad = _this.cant_c[i];
              t._id = _this.comb_ids[i];
              t.tipo = "Combo";
              t.precio = _this.combos[i].precio;
              _this.combos_n.push(t);
            }
          }
        }
        console.log("A ver los combos: " + _this.combos_n);
      }, 1000);
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
    SelectAll() {
      var i;
      var j;
      for (i = 0; i < this.productos_n.length; i++) {
        var t = {};
        t._id = this.productos_n[i]._id;
        t.nombre = this.productos_n[i].nombre;
        t.tipo = this.productos_n[i].tipo;
        t.precio = this.productos_n[i].precio;
        t.cantidad = this.productos_n[i].cantidad;
        t.tipobeb = this.productos_n[i].tipobeb;
        t.subtotal = this.productos_n[i].precio * this.productos_n[i].cantidad;
        t.index = this.articulos.length;
        var exist = false;
        var index2 = -1;
        for (j = 0; j < this.articulos.length; j++) {
          if (this.productos_n[i]._id == this.articulos[j]._id) {
            exist = true;
            index2 = this.articulos[j].index;
          }
        }
        if (exist) {
          this.articulos[index2].cantidad =
            parseInt(this.articulos[index2].cantidad) +
            parseInt(this.productos_n[i].cantidad);
          this.articulos[index2].subtotal =
            parseInt(this.articulos[index2].precio) *
            parseInt(this.articulos[index2].cantidad);
        } else {
          this.articulos.push(t);
        }
        this.productos_n[i].cantidad = 0;
      }
      for (i = 0; i < this.bebidas_n.length; i++) {
        var t = {};
        t._id = this.bebidas_n[i]._id;
        t.nombre = this.bebidas_n[i].nombre;
        t.tipo = this.bebidas_n[i].tipo;
        t.precio = this.bebidas_n[i].precio;
        t.cantidad = this.bebidas_n[i].cantidad;
        t.tipobeb = this.bebidas_n[i].tipobeb;
        t.subtotal = this.bebidas_n[i].precio * this.bebidas_n[i].cantidad;
        t.index = this.articulos.length;
        var exist = false;
        var index2 = -1;
        for (j = 0; j < this.articulos.length; j++) {
          if (this.bebidas_n[i]._id == this.articulos[j]._id) {
            exist = true;
            index2 = this.articulos[j].index;
          }
        }
        if (exist) {
          this.articulos[index2].cantidad =
            parseInt(this.articulos[index2].cantidad) +
            parseInt(this.bebidas_n[i].cantidad);
          this.articulos[index2].subtotal =
            parseInt(this.articulos[index2].precio) *
            parseInt(this.articulos[index2].cantidad);
        } else {
          this.articulos.push(t);
        }
        this.bebidas_n[i].cantidad = 0;
      }
      for (i = 0; i < this.combos_n.length; i++) {
        var t = {};
        t._id = this.combos_n[i]._id;
        t.nombre = this.combos_n[i].nombre;
        t.tipo = this.combos_n[i].tipo;
        t.precio = this.combos_n[i].precio;
        t.cantidad = this.combos_n[i].cantidad;
        t.tipobeb = this.combos_n[i].tipobeb;
        t.subtotal = this.combos_n[i].precio * this.combos_n[i].cantidad;
        t.index = this.articulos.length;
        var exist = false;
        var index2 = -1;
        for (j = 0; j < this.articulos.length; j++) {
          if (this.combos_n[i]._id == this.articulos[j]._id) {
            exist = true;
            index2 = this.articulos[j].index;
          }
        }
        if (exist) {
          this.articulos[index2].cantidad =
            parseInt(this.articulos[index2].cantidad) +
            parseInt(this.combos_n[i].cantidad);
          this.articulos[index2].subtotal =
            parseInt(this.articulos[index2].precio) *
            parseInt(this.articulos[index2].cantidad);
        } else {
          this.articulos.push(t);
        }
        this.combos_n[i].cantidad = 0;
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
          .get(
            "http://localhost:8000/cuentas/searchbyname/" + this.cuenta.nombre
          )
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
            _this.cuentaxempleado.idcuenta =
              _this.cuentas[_this.cuentas.length - 1]._id;
            _this.cuentaxempleado.idEmpleado = _this.empleados[i];

            console.log(_this.productoxinsumo);
            _this.$http
              .post(
                "http://localhost:8000/cuentasempleados/create",
                _this.cuentaxempleado
              )
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
    },
    getMesas() {
      this.$http.get("http://localhost:8000/mesas").then(response => {
        console.log(response);
        this.mesas = response.body;
      });
    },
    getBebidas() {
      this.$http.get("http://localhost:8000/bebidas").then(response => {
        console.log(response);
        this.bebidas = response.body;
      });
    },
    getProductos() {
      this.$http.get("http://localhost:8000/productos").then(response => {
        console.log(response);
        this.productos = response.body;
      });
    },
    getCombos() {
      this.$http.get("http://localhost:8000/combos").then(response => {
        console.log(response);
        this.combos = response.body;
      });
    }
  },
  beforeMount() {
    this.getMesas();
    this.getcuenta();
    this.getOrdenes();
    this.getBebidas();
    this.getProductos();
    this.getCombos();
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
.mensaje {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 107%;
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
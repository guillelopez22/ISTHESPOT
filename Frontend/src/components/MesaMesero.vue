
<template>
  <div id="root">
    <div class="row">
      <div class="card width hr">
        <div class="row">
          <div v-for="(mesa, index) in mesas">
            <div class="col s3 card">
              <div class="card-image">
                <img src="../imgs/MesaDisponible.jpg" />
                <span class="card-title">{{mesa.nombre}}</span>
              </div>
              <a class="btn-floating halfway-fab waves-effect waves-light red">
                  <i class="material-icons">add</i>
                </a>
                <a class="btn-floating halfway-fab waves-effect waves-light red">
                  <i class="material-icons">delete</i>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mesa",
  data() {
    return {
      mesas: [],
      mesa: {},
      loading: false,
      idModificar: "",
      idMesa: "N/A",
      nombreProv: "",
      selectedTab: "test-swipe-1",
      orden: {},
      ordenes: []
    };
  },
  watch: {
    idMesa: function(val) {
      if (val != "N/A") {
        this.nombreProv = "";
      } else {
        this.$http
          .get("http://localhost:8000/orden/searchbyid/{_id}")
          .then(response => {
            this.nombreProv = response.body.orden.nombre;
          });
      }
    }
  },
  methods: {
    getMesa() {
      this.$http.get("http://localhost:8000/mesas").then(response => {
        console.log(response.body);
        this.mesas = response.body;
      });
    },
    revisarMesa(idMesa) {
      if ((this.mesa.idOrden = this.idMesa && this.mesa.i)) {
      }
    },
    newProveedor(orden_id) {
      this.idMesa = orden_id;
    },
    borrarProveedor() {
      this.idMesa = "N/A";
    },
    createMesa() {
      this.loading = true;
      console.log(this.mesa.nombre);
      this.$http
        .get("http://localhost:8000/mesas/searchbyname/" + this.mesa.nombre)
        .then(response => {
          if (response.body.length == 0) {
            /*mirar si es el mismo nombre*/
            this.$http
              .get(
                "http://localhost:8000/mesas/searchbynumero/" + this.mesa.numero
              )
              .then(response => {
                if (response.body.length == 0) {
                  /*mirar si es el mismo numero*/
                  console.log(this.mesa);
                  this.$http
                    .post("http://localhost:8000/mesas/create", this.mesa)
                    .then(response => {
                      this.loading = false;
                      if (response.body.success) {
                        this.mesa = {};
                        sweetAlert(
                          "Creado con exito!",
                          "Los cambios estan en la tabla",
                          "success"
                        );
                        this.getMesa();
                      } else {
                        sweetAlert("Oops...", "Error al crear", "error");
                      }
                    });
                } else {
                  sweetAlert(
                    //ya existe mesa con ese numero
                    "Oops...",
                    "Error al crear,ya existe una mesa con el mismo numero",
                    "error"
                  );
                  this.getMesa();
                  this.loading = false;
                }
              });
            console.log(response.body);
          } else {
            //ya existe mesa con ese nombre
            sweetAlert(
              "Oops...",
              "Error al crear,ya existe una mesa con el mismo nombre",
              "error"
            );
            this.getMesa();
            this.loading = false;
            console.log("Ya existe la mesa y el numero");
            console.log(response.body.length);
          }
        });
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.mesa = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyMesa(mesa) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = mesa._id;
      this.mesa = mesa;
      /*this.idMesa = mesa.idOrden;*/
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyMesa() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.$http
          .put(
            "http://localhost:8000/mesas/update/" + this.idModificar,
            this.mesa
          )
          .then(response => {
            if (response.body.success) {
              this.getMesa();
              this.loading = false;
              sweetAlert("Oops...", "Error al modificar", "error");
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.getMesa();
              this.mesa = {};
              this.loading = false;
            }
          });
      } else {
        sweetAlert(
          //ya existe mesa con ese numero
          "Oops...",
          "Error al crear,ya existe una mesa con el mismo numero",
          "error"
        );
        this.getMesa();
        this.loading = false;
      }
    },
    deleteMesa(idMesa) {
      this.loading = true;
      console.log(this.mesa.orden_id);
      this.$http
        .get(
          "http://localhost:8000/mesas/searchbyIdOrden/" + this.mesa.orden_id,
          this.mesa._id
        )
        .then(response => {
          console.log(response.body);
        });
      this.$http
        .delete("http://localhost:8000/mesas/delete/" + idMesa)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            sweetAlert("Oops...", "Error al eliminar", "error");
            this.getMesa();
          } else {
            sweetAlert("Deleted!", "Los cambios estan en la tabla", "success");
            this.getMesa();
          }
        });
    },
    getOrdenes() {
      this.$http.get("http://localhost:8000/ordenes").then(response => {
        console.log(response);
        this.ordenes = response.body;
      });
    }
  },
  beforeMount() {
    this.getMesa();
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
.row {
  background-color: black;
}
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
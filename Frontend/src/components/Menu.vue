
<template>
  <div class="row">
    <div class="col s12">
      <ul id="tabs-swipe-demo" class="tabs">
        <li class="tab col s3">
          <a class="active" v-on:click="tabControl('test-swipe-1')" href="#test-swipe-1">Comidas</a>
        </li>
        <li class="tab col s3">
          <a v-on:click="tabControl('test-swipe-2')" href="#test-swipe-2">Bebidas</a>
        </li>
      </ul>
    </div>

    <div id="test-swipe-1" class="col s12">
      <div class="row">
        <div class="card width hr">
          <div class="container">
            <div v-for="producto in productos" class="col-4">
              <div class="card-header left" style="width:250px">
                
                <img v-bind:src="producto.imagen"
                  alt="Avatar"
                  style="width:200px"
                />
                <div class="container">
                  <h4>
                    <b>{{producto.nombre}}</b>
                  </h4>
                  <p>{{producto.precio}} Lps.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="test-swipe-2" class="col s12">
      <div class="row">
        <div class="card width hr">
          <div class="container">
            <div v-for="bebida in bebidas" class="col-4">
              <div class="card-header left" style="width:250px">
                
                <img src="data:image/jpeg;base64,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"
                  alt="Avatar"
                  style="width:200px"
                />
                <div class="container">
                  <h4>
                    <b>{{bebida.nombre}}</b>
                  </h4>
                  <p>{{bebida.precio}} Lps.</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {
      bebidas: [],
      bebida: {},
      productos: [],
      producto: {},
      loading: false
    };
  },
  methods: {
    getProductos() {
      this.$http.get("http://localhost:8000/productos").then(response => {
        this.productos = response.body;
      });
    },
    getBebidas() {
      this.$http.get("http://localhost:8000/bebidas").then(response => {
        this.bebidas = response.body;
      });
    }
  },
  beforeMount() {
    this.getProductos();
    this.getBebidas();
  },

  tabControl(idTab) {
    if (idTab === "test-swipe-1") {
      this.idModificar = "";
      this.selectedTab = "test-swipe-1";
      this.bebida = {};
    } else {
      if (this.idModificar === "") {
        swal(
          "Recuerda!",
          "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
        );
      }
    }
  }
};
</script>

<style scoped>
.responsive-img {
  width: 400px;
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
#root {
  font-family: "Playfair Display";
  font-weight: bold;
  color: white;
}
#test-swipe-1 {
  /*background-color: #E6E2AF;*/
  color: white;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center;
  background-color: #343a45;
}
#test-swipe-2 {
  /*background-color: #F6E497;*/
  color: white;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center;
  background-color: lightslategrey;
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
  color: white;
}
.card {
  padding: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  background-color: black;
  font-size: 15px;
  color: white;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
img {
  border-radius: 50%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 50px;
  height: 50pxo;
}
</style>

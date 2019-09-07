<template>
  <div class="row">
    <br />
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
          <div class="container" id="contain1">
            <h3>Comidas</h3>
            <div v-for="producto in productos" class="col-4">
              <div class="card-header left" style="width:200px">
                
                <img v-bind:src="producto.imagen"
                  alt="Avatar"
                  style="width:200px;height:150px"
                />
                <div class="container">
                  <h6>
                    <b>{{producto.nombre}}</b>
                  </h6>
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
          <div class="container" id="contain1">
            <h3>Bebidas</h3>
            
            <div v-for="bebida in bebidas" class="col-4">
              <div class="card-header left" style="width:200px">
                
                <img v-bind:src="bebida.imagen"
                  alt="Avatar"
                  style="width:200px;height:150px"
                />
                <div class="container">
                  <h6>
                    <b>{{bebida.nombre}}</b>
                  </h6>
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
.img{
    position: relative;
    float: left;
    width:  200px;
    height: 150px;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
}
td {
  font-family: "Source Sans Pro", sans-serif;
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
  background-color: black;
}
#test-swipe-2 {
  /*background-color: #F6E497;*/
  color: white;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 30px;
  text-align: center;
  background-color: black;
}
.tabs .indicator {
  background-color: #a7a37e !important;
  color: #4c1b1b !important;
}
.tabs {
  background-color: #A93226 !important;
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


/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.card {
  background-color: black;
}
/* Add some padding inside the card container */
#contain1 {
  padding: 2px 16px;
  background: #5994aa;
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

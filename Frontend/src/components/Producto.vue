<template>
  <div id="root">
    <h2>Producto</h2>
    <table class="table centered">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Id Bebida</th>
          <th>Id Producto Elaborado</th>
          <th>Borrar</th>
          <th>Modificar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in productos">
          <td contenteditable v-model="producto.nombre">{{producto.nombre}}</td>
          <td contenteditable v-model="producto.descripcion">{{producto.descripcion}}</td>
          <td contenteditable v-model="producto.precio">{{producto.precio}}</td>
          <td contenteditable v-model="producto.idBebida">{{producto.idBebida}}</td>
          <td
            contenteditable
            v-model="producto.idProducto_Elaborado"
          >{{producto.idProducto_Elaborado}}</td>
          <td>
            <a
              v-on:click="deleteProducto(producto._id)"
              class="btn-floating btn-small waves-effect waves-light red"
            >
              <i class="material-icons">delete</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="modifyProducto(producto._id)"
              class="btn-floating btn-small waves-effect waves-light red"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <ul id="tabs-swipe-demo" class="tabs">
      <li class="tab col s3">
        <a class="active" href="#test-swipe-1">Crear</a>
      </li>
      <li class="tab col s3">
        <a href="#test-swipe-2">Modificar</a>
      </li>
    </ul>

    <div class="row">
      <div class="input-field col s6">
        <input type="text" v-model="producto.nombre" :disabled="loading" id="Nombre">
        <label for="Nombre">Nombre</label>
      </div>
      <div class="input-field col s6">
        <input
          v-model="producto.descripcion"
          :disabled="loading"
          id="Descripcion"
          type="text"
          class="validate"
        >
        <label for="Descripcion">Descripcion</label>
      </div>
      <div class="input-field col s6">
        <input
          v-model="producto.precio"
          :disabled="loading"
          id="Precio"
          type="number"
          class="validate"
        >
        <label for="Precio">Precio</label>
      </div>
    </div>
    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createProducto"
        :disabled="loading"
        id="boton"
      >
        <i class="material-icons left">create</i>Crear
      </a>
    </div>
    <div id="test-swipe-2" class="col s12">
      <div class="input-field col s12">
        <select v-model="selected">
          <option
            v-for="producto in productos"
            v-bind:value="producto"
            value="1"
          >{{producto.titulo}}</option>
        </select>
        <label>Selected: {{ selected }}</label>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input type="text" v-model="producto.nombre" :disabled="loading" id="Nombre">
          <label for="Nombre">Nombre</label>
        </div>
        <div class="input-field col s6">
          <input
            v-model="producto.descripcion"
            :disabled="loading"
            id="Descripcion"
            type="text"
            class="validate"
          >
          <label for="Descripcion">Descripcion</label>
        </div>
        <div class="input-field col s6">
          <input
            v-model="producto.precio"
            :disabled="loading"
            id="Precio"
            type="number"
            class="validate"
          >
          <label for="Precio">Precio</label>
        </div>
      </div>
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="modifyProducto(producto._id)"
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
      loading: false
    };
  },
  methods: {
    getProducto() {
      this.$http.get("http://localhost:8000/productos").then(response => {
        this.productos = response.body;
      });
    },
    createProducto() {
      this.loading = true;
      this.$http
        .post("http://localhost:8000/productos/create", this.producto)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            sweetAlert(
              "Creado con exito!",
              "Los cambios estan en la tabla",
              "success"
            );
            this.getProducto();
          } else {
            sweetAlert("Oops...", "Error al crear", "error");
          }
        });
    },
    modifyProducto(id) {
      this.loading = true;
      this.$http
        .put("http://localhost:8000/productos/update/" + id, this.producto)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            sweetAlert(
              "Modificado con exito!",
              "Los cambios estan en la tabla",
              "success"
            );
            this.getProducto();
          } else {
            sweetAlert("Oops...", "Error al modificar", "error");
          }
        });
    },
    deleteProducto(id) {
      this.loading = true;
      this.$http
        .delete("http://localhost:8000/productos/delete/" + id)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            this.getProducto();
            sweetAlert("Deleted!", "Se ha eliminado el Libro", "success");
          } else {
            sweetAlert("Oops...", "Error al eliminar", "error");
          }
        });
    }
  },
  beforeMount() {
    this.getProducto();
  },
  mounted() {
    $("ul.tabs").tabs();
    $("select").material_select();
  }
};
</script>

<style scoped>
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
  font-family: "Josefin Slab", serif;
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
h4 {
  font-family: "Playfair Display";
  text-align: left;
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

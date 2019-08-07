<template>
  <div id="root">
    <h2>Proveedor</h2>
    <p>Pagina Actual: {{currentPage}}</p>
  <button v-on:click="anterior()" class="waves-effect waves-light btn-large">Anterior</button>
    <button v-on:click="siguiente()" class="waves-effect waves-light btn-large">Siguiente</button>
    <br>
    <table class="table centered"> 
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Pais</th>
          <th>Telefono</th>
          <th>Contacto</th>
          <th>Email</th>
          <th>Direccion</th>
          <th>Modificar</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proveedor in data" v-bind:key="proveedor">
          <td>{{proveedor.nombre}}</td>
          <td>{{proveedor.pais}}</td>
          <td>{{proveedor.telefono}}</td>
          <td>{{proveedor.contacto}}</td>
          <td>{{proveedor.email}}</td>
          <td>{{proveedor.direccion}}</td>
          <td>
            <a
              v-on:click="startToModifyProveedor(proveedor)"
              class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i>
            </a>
          </td>
          <td>
            <a
              v-on:click="deleteProveedor(proveedor._id)"
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
        <a class="active" href="#test-swipe-1">Crear</a>
      </li>
      <li class="tab col s3">
        <a href="#test-swipe-2">Modificar</a>
      </li>
    </ul>
    <div class="row">
      <div class="input-field col s6">
        <input
          v-model="proveedor.nombre"
          :disabled="loading"
          id="Nombre"
          type="text"
          class="validate"
        >
        <label for="Nombre">Nombre</label>
      </div>
      <div class="input-field col s6">
        <input v-model="proveedor.pais" :disabled="loading" id="Pais" type="text" class="validate">
        <label for="Pais">Pais</label>
      </div>
      <div class="input-field col s6">
        <input type="number" v-model="proveedor.telefono" :disabled="loading" id="Telefono">
        <label for="Telefono">Telefono</label>
      </div>
      <div class="input-field col s6">
        <input
          v-model="proveedor.contacto"
          :disabled="loading"
          id="Contacto"
          type="text"
          class="validate"
        >
        <label for="Contacto">Contacto</label>
      </div>
      <div class="input-field col s6">
        <input
          v-model="proveedor.email"
          :disabled="loading"
          id="Email"
          type="text"
          class="validate"
        >
        <label for="Email">Email</label>
      </div>
      <div class="input-field col s6">
        <input
          v-model="proveedor.direccion"
          :disabled="loading"
          id="Direccion"
          type="text"
          class="validate"
        >
        <label for="Direccion">Direccion</label>
      </div>
    </div>

    <div id="test-swipe-1" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createProveedor"
        :disabled="loading"
        id="boton"
      >
        <i class="material-icons left">create</i>Crear
      </a>
    </div>
    <div id="test-swipe-2" class="col s12">
      <a
        class="waves-effect waves-light btn-large"
        v-on:click="createProveedor"
        :disabled="loading"
        id="boton"
      >
        <i class="material-icons left">update</i>Update
      </a>
      <span>Selected: {{ selected }}</span>
      <select v-model="selected">
        <option
          v-for="proveedor in proveedores"
          v-bind:value="proveedor.value"
        >{{ proveedor.nombre }}</option>
      </select>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "proveedor",
  data() {
    return {
      proveedores: [],
      proveedor: {},
      loading: false,
      data: [],
      inicio: 0,
      final: 5,
      currentPage: 1,
      size: 1
    };
  },
  directives: {
    select: {
      twoWay: true,

      bind: function() {
        $(this.el).material_select();

        var self = this;

        $(this.el).on("change", function() {
          self.set($(self.el).val());
        });
      },

      update: function(newValue, oldValue) {
        $(this.el).val(newValue);
      },

      unbind: function() {
        $(this.el).material_select("destroy");
      }
    }
  },
  methods: {
    siguiente(){
      if(this.currentPage < this.size){
        this.currentPage = this.currentPage + 1;
        if(this.proveedores.length % 5 == 0){
          this.inicio = this.inicio + 5
          this.final = this.final + 5
          this.data = this.proveedores.slice(this.inicio, this.final)
        }else if((this.proveedores.length % 5 != 0) && (this.currentPage == this.size)){
          this.inicio = this.inicio + 5
          this.final = this.final + (this.proveedores.length%5)
          this.data = this.proveedores.slice(this.inicio, this.final)
        }else if((this.proveedores.length % 5 != 0) && (this.currentPage < this.size)){
          this.inicio = this.inicio + 5
          this.final = this.final + 5
          this.data = this.proveedores.slice(this.inicio, this.final)
        }
      }
    },
    anterior(){
      if(this.currentPage > 1){
        this.currentPage = this.currentPage - 1;
        if(this.currentPage < this.size){
          if(this.proveedores.length % 5 == 0){
            this.inicio = this.inicio - 5
            this.final = this.final - 5
            this.data = this.proveedores.slice(this.inicio, this.final)
          }else if((this.proveedores.length % 5 != 0) && (this.currentPage == this.size-1)){
            this.inicio = this.inicio - 5
            this.final = this.final - (this.proveedores.length%5)
            this.data = this.proveedores.slice(this.inicio, this.final)
          }else if((this.proveedores.length % 5 != 0) && (this.currentPage < this.size)){
            this.inicio = this.inicio - 5
            this.final = this.final - 5
            this.data = this.proveedores.slice(this.inicio, this.final)
          }
        }
      }
    },
    getProveedor() {
      this.$http.get("http://localhost:8000/proveedores").then(response => {
        this.proveedores = response.body;
        this.data = this.proveedores.slice(this.inicio,this.final)
        if(this.proveedores.length % 5 == 0){
          this.size = this.proveedores.length/5
        }else{
          this.size = parseInt(this.proveedores.length/5)+1
        }
      });
    },
    createProveedor() {
      this.inicio = 0;
      this.final = 5;
      this.currentPage = 1;
      this.loading = true;
      this.$http
        .post("http://localhost:8000/proveedor/create", this.proveedor)
        .then(response => {
          this.loading = false;
          if (response.body.success) {
            sweetAlert(
              "Creado con exito!",
              "Los cambios estan en la tabla",
              "success"
            );
            this.getProveedor();
          } else {
            sweetAlert("Oops...", "Error al crear", "error");
          }
        });
    },
    tabControl(idTab) {
      if (idTab === "test-swipe-1") {
        this.idModificar = "";
        this.selectedTab = "test-swipe-1";
        this.proveedor = {};
      } else {
        if (this.idModificar === "") {
          swal(
            "Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla"
          );
        }
      }
    },
    startToModifyProveedor(proveedor) {
      this.selectedTab = "test-swipe-2";
      this.idModificar = proveedor._id;
      this.proveedor = proveedor;
      $("ul.tabs").tabs("select_tab", "test-swipe-2");
      Materialize.updateTextFields();
    },
    modifyProveedor() {
      this.loading = true;
      if (this.idModificar != "") {
        Materialize.updateTextFields();
        this.proveedor.idProveedor = this.idProv;
        this.$http
          .put(
            "http://localhost:8080/proveedor/update/" + this.idModificar,
            this.proveedor
          )
          .then(response => {
            if (response.body.success) {
              sweetAlert("Oops...", "Error al modificar", "error");
              this.getProveedor();
            } else {
              sweetAlert(
                "Modificado con exito!",
                "Los cambios estan en la tabla",
                "success"
              );
              this.getProveedor();
            }
          });
      }
    },
    deleteProveedor(idProveedor) {
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
              _this.$http.delete("http://localhost:8000/proveedor/delete/" + idProveedor).then(
                response => {
                  this.loading = false;
                  if (response.body.success) {
                    sweetAlert("Oops...", "Error al eliminar", "error");
                    _this.getProveedor();
                  } else {
                    sweetAlert(
                      "Deleted!",
                      "Los cambios estan en la tabla",
                      "success"
                    );
                    _this.inicio = 0;
                    _this.final = 5;
                    _this.currentPage = 1;
                    _this.getProveedor();
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
  },
  beforeMount() {
    this.getProveedor();
  },
  mounted() {
    $("ul.tabs").tabs();
    $("select").material_select();
    $(".dropdown-button").dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: "left", // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    });
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

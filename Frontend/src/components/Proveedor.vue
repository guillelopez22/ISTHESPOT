<template>
  <div id="root">
    <h2>Proveedor</h2>
    <table class="table centered">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>Pais</th>
					<th>Telefono</th>
					<th>Contacto</th>
					<th>Email</th>
					<th>Direccion</th>
					<th>Borrar</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="proveedor in proveedores">
					<td>{{proveedor.nombre}}</td>
					<td>{{proveedor.pais}}</td>
					<td>{{proveedor.telefono}}</td>
					<td>{{proveedor.contacto}}</td>
					<td>{{proveedor.email}}</td>
					<td>{{proveedor.direccion}}</td>
					<td>
						<a v-on:click="deleteProveedor(proveedor._id)" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete</i></a>
					</td>
				</tr>
			</tbody>
		</table>
    <br>

    <ul id="tabs-swipe-demo" class="tabs">
      <li class="tab col s3"><a class="active" href="#test-swipe-1">Crear</a></li>
      <li class="tab col s3"><a  href="#test-swipe-2">Modificar</a></li>
    </ul>
    <div class="row">
        <div class="input-field col s6">
          <input type="text" v-model="proveedor.titulo" :disabled="loading"  id="Titulo">
          <label for="Titulo">Titulo</label>
        </div>
        <div class="input-field col s6">
          <input v-model="proveedor.genero" :disabled="loading" id="Genero" type="text"   class="validate">
          <label for="Genero">Genero</label>
        </div>
        <div class="input-field col s6">
          <input v-model="proveedor.autor" :disabled="loading"  id="Autor" type="text" class="validate">
          <label for="Autor">Autor</label>
        </div>
        <div class="input-field col s6">
          <input type="number" v-model="proveedor.publicacion" :disabled="loading"  id="Publicación">
          <label for="Publicación">Publicación</label>
        </div>
        <div class="input-field col s6">
          <input v-model="proveedor.editorial" :disabled="loading" id="Editorial" type="text"  class="validate">
          <label for="Editorial">Editorial</label>
        </div>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <textarea v-model="proveedor.descripcion" :disabled="loading"  id="descripcion" type="text"  class="materialize-textarea"></textarea>
                <label for="descripcion">Descripción</label>
              </div>
            </div>
          </form>
        </div>
        <div class="input-field col s6">
          <input v-model="proveedor.keywords" :disabled="loading" id="Keywords" type="text"  class="validate">
          <label for="Keywords">Keywords</label>
        </div>
        <div class="input-field col s6">
          <input v-model="proveedor.copias_total" :disabled="loading"  id="Total de Copias" type="number" class="validate">
          <label for="Total de Copias">Total de Copias</label>
        </div>
        <div class="input-field col s6">
          <input v-model="proveedor.copias_disponible" :disabled="loading"  id="Copias Disponibles" type="number" class="validate">
          <label for="Copias Disponibles">Copias Disponibles</label>
        </div>
      </div>


  	  <div id="test-swipe-1" class="col s12">
        <a class="waves-effect waves-light btn-large" v-on:click="createProveedor" :disabled="loading" id="boton">
          <i class="material-icons left">create</i>Crear
        </a>
        </div>
  	  <div id="test-swipe-2" class="col s12">


  				<a class="waves-effect waves-light btn-large" v-on:click="createProveedor" :disabled="loading" id="boton">
  					<i class="material-icons left">update</i>Update
          </a>
          <span>Selected: {{ selected }}</span>
          <select v-model="selected">
            <option v-for="proveedor in proveedores" v-bind:value="proveedor.value">
              {{ proveedor.nombre }}
            </option>
          </select>

  		</div>
      <ul id="example-1">
        <li v-for="proveedor in proveedores">
          <input type="radio" id="one" v-bind:value="proveedor.value" v-model="pick" >
          <label for="one">{{ proveedor.nombre }}</label>
        </li>
      </ul>


  </div>
</template>

<script>
export default {
  name: 'proveedor',
  data(){
    return{
      proveedores: [],
			proveedor:{},
			loading: false
    }
  },
  directives: {
    select: {
      "twoWay": true,

      "bind": function () {
          $(this.el).material_select();

          var self = this;

          $(this.el).on('change', function() {
              self.set($(self.el).val());
          });
      },

      update: function (newValue, oldValue) {
          $(this.el).val(newValue);
      },

      "unbind": function () {
          $(this.el).material_select('destroy');
        }
    }
  },
  methods: {
      getProveedor(){
				this.$http.get('http://localhost:8000/proveedores').then((response)=>{
					this.proveedores=response.body;
				});
			},
			createProveedor(){
				this.loading=true;
				this.$http.post('http://localhost:8000/proveedor/create',this.proveedor)
				.then((response)=>{
					this.loading=false;
					if(response.body.success){
						sweetAlert("Creado con exito!", "Los cambios estan en la tabla", "success");
						this.getProveedor();
					}else{
						sweetAlert("Oops...", "Error al crear", "error");
					}
				});
			},
      deleteProveedor(id){
					this.loading=true;
					this.$http.delete('http://localhost:8000/proveedor/delete/'+id)
						.then((response)=>{
						this.loading=false;
						if(response.body.success){
							this.getProveedor();
							sweetAlert("Deleted!", "Se ha eliminado el Libro", "success");
						}else{
							sweetAlert("Oops...", "Error al eliminar", "error");
						}
					});
			}
  },
  beforeMount(){
    this.getProveedor();
	},
  mounted() {
      $('ul.tabs').tabs();
      $('select').material_select();
      $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
  }
}
</script>

<style scoped>
  td{
    font-family: 'Source Sans Pro', sans-serif;
  }
  th {
    color: white;
    background:#5994AA;
    border-bottom:4px solid #9ea7af;
    border-right: 1px solid #343a45;
    font-size:25px;
    font-weight: 100;
    padding:24px;
    text-align:left;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    vertical-align:middle;
  }
  .table thead{
		font-family: 'Josefin Slab', serif;
		font-weight: bold;
		font-size: 30px;
	}
	.table{
    color: black;
		font-family: 'Spectral', serif;
		font-size: 20px;
		background: white;
	  border-radius:3px;
	  border-collapse: collapse;
	  height: 320px;
	  padding:5px;
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
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #06152F;
  }
  .-white{
    background-color: #F4F0EA;
    color: black;
  }
  .-lightblue{
    background-color: #5994AA;
    color: #fff;
  }
  .-blue{
    background-color: #06152F;
    color: #fff;
  }
  .-red{
    background-color: #FF0B00;
    color: #fff;
  }
  .-black{
    background-color: #262626;
    color: #fff;
  }
  h4{
    font-family: 'Playfair Display';
    text-align: left;
  }
  #root{
    font-family: 'Playfair Display';
    font-weight: bold;
    color: white;
  }

    #test-swipe-1 {
        /*background-color: #E6E2AF;*/
        color: #4C1B1B;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 20px;
        padding-bottom: 30px;
        text-align: center;
    }

    #test-swipe-2 {
        /*background-color: #F6E497;*/
        color: #4C1B1B;
        padding-left: 50px;
        padding-right: 50px;
        padding-top: 20px;
        padding-bottom: 30px;
        text-align: center;
    }


    .tabs .indicator {
        background-color: #A7A37E !important;
        color: #4C1B1B !important;
    }

    .tabs {
        background-color: #FF0B00 !important;
        color: #4C1B1B !important;
        font-family: 'Spectral', serif;
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
        color: #4C1B1B;
    }


    #boton {
        background-color: #5994AA;

    }


    /* label focus color */
    input{
      font-family: 'Roboto', sans-serif;
      color: white;
      font-weight: normal;
      font-size:17px;
    }
    textarea{
      font-family: 'Roboto', sans-serif;
      color: white;
      font-weight: normal;
      font-size:17px;
    }
    label{
        font-size:17px;
      font-family: 'Roboto', sans-serif;
      font-weight: normal;
    }
    .input-field input:focus+label {
        color: #5994AA !important;
    }
    /* label underline focus color */

    .row .input-field input:focus {
        border-bottom: 1px solid #5994AA !important;
        box-shadow: 0 1px 0 0 #5994AA !important
    }

    .input-field input:focus+label {
        color: #5994AA !important;
    }
    /* label underline focus color */

    .row .input-field input:focus {
        border-bottom: 1px solid #5994AA !important;
        box-shadow: 0 1px 0 0 #5994AA !important
    }

    .input-field textarea:focus+label {
        color: #5994AA !important;
    }
    /* label underline focus color */

    .row .input-field textarea:focus {
        border-bottom: 1px solid #5994AA !important;
        box-shadow: 0 1px 0 0 #5994AA !important
    }
</style>

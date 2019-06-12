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
					<td contenteditable v-model="producto.idProducto_Elaborado">{{producto.idProducto_Elaborado}}</td>
					<td>
						<a v-on:click="deleteProducto(producto._id)" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete</i></a>
					</td>
          <td>
						<a v-on:click="modifyProducto(producto._id)" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">update</i></a>
					</td>
				</tr>
			</tbody>
		</table>
    <br>
    <ul id="tabs-swipe-demo" class="tabs">
	    <li class="tab col s3"><a class="active" href="#test-swipe-1">Crear</a></li>
	    <li class="tab col s3"><a  href="#test-swipe-2">Modificar</a></li>
	  </ul>

	  <div id="test-swipe-1" class="col s12">
			<div class="row">
	        <div class="input-field col s6">
	          <input type="text" v-model="producto.titulo" :disabled="loading"  id="Titulo">
	          <label for="Titulo">Titulo</label>
	        </div>
					<div class="input-field col s6">
	          <input v-model="producto.genero" :disabled="loading" id="Genero" type="text"   class="validate">
	          <label for="Genero">Genero</label>
	        </div>
					<div class="input-field col s6">
	          <input v-model="producto.autor" :disabled="loading"  id="Autor" type="text" class="validate">
	          <label for="Autor">Autor</label>
	        </div>
					<div class="input-field col s6">
	          <input type="number" v-model="producto.publicacion" :disabled="loading"  id="Publicación">
	          <label for="Publicación">Publicación</label>
	        </div>
					<div class="input-field col s6">
	          <input v-model="producto.editorial" :disabled="loading" id="Editorial" type="text"  class="validate">
	          <label for="Editorial">Editorial</label>
	        </div>
					<div class="row">
				    <form class="col s12">
				      <div class="row">
				        <div class="input-field col s12">
				          <textarea v-model="producto.descripcion" :disabled="loading"  id="descripcion" type="text"  class="materialize-textarea"></textarea>
				          <label for="descripcion">Descripción</label>
				        </div>
				      </div>
				    </form>
				  </div>
					<div class="input-field col s6">
	          <input v-model="producto.keywords" :disabled="loading" id="Keywords" type="text"  class="validate">
	          <label for="Keywords">Keywords</label>
	        </div>
					<div class="input-field col s6">
	          <input v-model="producto.copias_total" :disabled="loading"  id="Total de Copias" type="number" class="validate">
	          <label for="Total de Copias">Total de Copias</label>
	        </div>
					<div class="input-field col s6">
	          <input v-model="producto.copias_disponible" :disabled="loading"  id="Copias Disponibles" type="number" class="validate">
	          <label for="Copias Disponibles">Copias Disponibles</label>
	        </div>
	      </div>
				<a class="waves-effect waves-light btn-large" v-on:click="createProducto" :disabled="loading" id="boton">
					<i class="material-icons left">create</i>Crear
				</a>

		</div>
	  <div id="test-swipe-2" class="col s12">

			<div class="input-field col s12">
			 <select v-model="selected" >
				 <option v-for="producto in productos" v-bind:value="producto"value="1"> {{producto.titulo}} </option>
			 </select>
			 <label>Selected: {{ selected }}</label>
		 </div>
		 <div class="row">
				 <div class="input-field col s6">
					 <input type="text" v-model="producto.titulo" :disabled="loading"  id="Titulo1">
					 <label for="Titulo1">Titulo</label>
				 </div>
				 <div class="input-field col s6">
					 <input v-model="producto.genero" :disabled="loading" id="Genero1" type="text"   class="validate">
					 <label for="Genero1">Genero</label>
				 </div>
				 <div class="input-field col s6">
					 <input v-model="producto.autor" :disabled="loading"  id="Autor1" type="text" class="validate">
					 <label for="Autor1">Autor</label>
				 </div>
				 <div class="input-field col s6">
					 <input type="number" v-model="producto.publicacion" :disabled="loading"  id="Publicación1">
					 <label for="Publicación1">Publicación</label>
				 </div>
				 <div class="input-field col s6">
					 <input v-model="producto.editorial" :disabled="loading" id="Editorial1" type="text"  class="validate">
					 <label for="Editorial1">Editorial</label>
				 </div>
				 <div class="row">
					 <form class="col s12">
						 <div class="row">
							 <div class="input-field col s12">
								 <textarea v-model="producto.descripcion" :disabled="loading"  id="descripcion1" type="text"  class="materialize-textarea"></textarea>
								 <label for="descripcion1">Descripción</label>
							 </div>
						 </div>
					 </form>
				 </div>
				 <div class="input-field col s6">
					 <input v-model="producto.keywords" :disabled="loading" id="Keywords1" type="text"  class="validate">
					 <label for="Keywords1">Keywords</label>
				 </div>
				 <div class="input-field col s6">
					 <input v-model="producto.copias_total" :disabled="loading"  id="Total de Copias1" type="number" class="validate">
					 <label for="Total de Copias1">Total de Copias</label>
				 </div>
				 <div class="input-field col s6">
					 <input v-model="producto.copias_disponible" :disabled="loading"  id="Copias Disponibles1" type="number" class="validate">
					 <label for="Copias Disponibles1">Copias Disponibles</label>
				 </div>
			 </div>
				<a class="waves-effect waves-light btn-large" v-on:click="modifyProducto(producto._id)" :disabled="loading" id="boton">
					<i class="material-icons left">update</i>Update</a>

		</div>
  </div>
</template>

<script>
export default {
  name: 'producto',
  data(){
    return{
      productos: [],
			producto:{},
			loading: false
    }
  },
  methods: {
      getProducto(){
				this.$http.get('http://localhost:8000/productos').then((response)=>{
					this.productos=response.body;
				});
			},
			createProducto(){
				this.loading=true;
				this.$http.post('http://localhost:8000/productos/create',this.producto)
				.then((response)=>{
					this.loading=false;
					if(response.body.success){
						sweetAlert("Creado con exito!", "Los cambios estan en la tabla", "success");
						this.getProducto();
					}else{
						sweetAlert("Oops...", "Error al crear", "error");
					}
				});
			},
      modifyProducto(id){
				this.loading=true;
				this.$http.put('http://localhost:8000/productos/update/'+id,this.producto)
				.then((response)=>{
					this.loading=false;
					if(response.body.success){
						sweetAlert("Modificado con exito!", "Los cambios estan en la tabla", "success");
						this.getProducto();
					}else{
						sweetAlert("Oops...", "Error al modificar", "error");
					}
				});
			},
      deleteProducto(id){
					this.loading=true;
					this.$http.delete('http://localhost:8000/productos/delete/'+id)
						.then((response)=>{
						this.loading=false;
						if(response.body.success){
							this.getProducto();
							sweetAlert("Deleted!", "Se ha eliminado el Libro", "success");
						}else{
							sweetAlert("Oops...", "Error al eliminar", "error");
						}
					});
			}
  },
  beforeMount(){
    this.getProducto();
	},
  mounted() {
      $('ul.tabs').tabs();
      $('select').material_select();
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

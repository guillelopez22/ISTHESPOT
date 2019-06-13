<template>
  <div id="root">
    <h2>
      Usuario
      <a class="btn-floating btn-small btn tooltipped -red" data-position="top" data-delay="50" id="boton" data-tooltip="Para modificar primero tienes que hacer click en  el boton de modificar en la tabla">
        <i class="material-icons left">help</i>Update
      </a>
    </h2>
    <table class="table centered">
			<thead>
				<tr>
					<th>Id Personal</th>
					<th>Id Ordenes</th>
					<th>Usuario</th>
          <th>Contrasena</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Scope</th>
          <th>Modificar</th>
					<th>Borrar</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="usuario in usuarios">
					<td >{{usuario.IdPersonal}}</td>
					<td >{{usuario.idOrdenes}}</td>
					<td >{{usuario.usuario}}</td>
          <td >{{usuario.contrasena}}</td>
          <td >{{usuario.nombre}}</td>
					<td >{{usuario.telefono}}</td>
          <td >{{usuario.scope}}</td>
          <td>
						<a v-on:click="startToModifyUsuario(usuario)" class="btn-floating btn-small waves-effect waves-light grey darken-4"><i class="material-icons">arrow_downward</i></a>
					</td>
					<td>
						<a v-on:click="deleteUsuario(usuario._id)" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete</i></a>
					</td>
				</tr>
			</tbody>
		</table>
    <br>
    <ul id="tabs-swipe-demo" class="tabs">
      <li class="tab col s3"><a class="active" v-on:click="tabControl('test-swipe-1')" href="#test-swipe-1">Crear</a></li>
      <li class="tab col s3"><a v-on:click="tabControl('test-swipe-2')" href="#test-swipe-2">Modificar</a></li>
    </ul>
    <div class="row">
        <div class="input-field col s12">
          <input v-on:input="usuario.IdPersonal = $event.target.value" type="text" v-model="usuario.IdPersonal" :disabled="loading"  id="IdPersonal">
          <label for="IdPersonal">Id Personal</label>
        </div>
        <div class="input-field col s6">
          <input v-on:input="usuario.idOrdenes = $event.target.value" v-model="usuario.idOrdenes" :disabled="loading"  id="idOrdenes" type="text" class="validate">
          <label for="idOrdenes">idOrdenes</label>
        </div>
        <div class="input-field col s6">
          <input v-on:input="usuario.usuario = $event.target.value" type="text" v-model="usuario.usuario" :disabled="loading"  id="usuario">
          <label for="usuario">Usuario</label>
        </div>
        <div class="input-field col s6">
          <input v-on:input="usuario.contrasena = $event.target.value" type="text" v-model="usuario.contrasena" :disabled="loading"  id="contrasena">
          <label for="contrasena">Contrasena</label>
        </div>
        <div class="input-field col s6">
          <input v-on:input="usuario.nombre = $event.target.value" type="text" v-model="usuario.nombre" :disabled="loading"  id="nombre">
          <label for="nombre">Nombre</label>
        </div>
        <div class="input-field col s6">
          <input v-on:input="usuario.telefono = $event.target.value" type="text" v-model="usuario.telefono" :disabled="loading"  id="telefono">
          <label for="telefono">Telefono</label>
        </div>
        <div class="input-field col s6">
          <input v-on:input="usuario.scope = $event.target.value" type="text" v-model="usuario.scope" :disabled="loading"  id="scope">
          <label for="scope">Scope</label>
        </div>

      </div>
  	  <div id="test-swipe-1" class="col s12">
        <a class="waves-effect waves-light btn-large " v-on:click="createUsuario" :disabled="loading" id="boton">
          <i class="material-icons left">create</i>Crear
        </a>
      </div>
  	  <div id="test-swipe-2" class="col s12">
        <div class="card">
            Atención: Los cambios realizados no se guardan hasta que haga click en el botón de update.
        </div>
				<a class="waves-effect waves-light btn-large" v-on:click="modifyUsuario" :disabled="loading" id="boton">
					<i class="material-icons left">update</i>Update
        </a>
  		</div>
  </div>
</template>

<script>
export default {
  name: 'usuario',
  data(){
    return{
      usuarios: [],
			usuario:{},
			loading: false,
      idModificar: '',
      selectedTab: 'test-swipe-1',
    }
  },
  
  methods: {
      getUsuario(){
				this.$http.get('http://localhost:8000/usuarios').then((response)=>{
					this.usuarios=response.body;
				});
			},

			createUsuario(){
				this.loading=true;
				this.$http.post('http://localhost:8000/usuarios/create',this.usuario)
				.then((response)=>{
					this.loading=false;
					if(response.body.success){
            this.usuario= {};
						sweetAlert("Creado con exito!", "Los cambios estan en la tabla", "success");
						this.getUsuario();
					}else{
						sweetAlert("Oops...", "Error al crear", "error");
					}
				});
			},
      tabControl(idTab){
        if(idTab === 'test-swipe-1'){
          this.idModificar = '';
          this.selectedTab= 'test-swipe-1';
          this.usuario= {};
        }else{
          if(this.idModificar === ''){
            swal("Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla");
          }
        }
      },
      startToModifyUsuario(usuario){
        this.selectedTab= 'test-swipe-2';
        this.idModificar = usuario._id;
        this.usuario = usuario;
        $('ul.tabs').tabs('select_tab', 'test-swipe-2');
        Materialize.updateTextFields();
			},
      modifyUsuario(){
        this.loading=true;
        if(this.idModificar!=''){
          Materialize.updateTextFields();
          this.$http.put('http://localhost:8000/usuarios/update/'+this.idModificar,this.usuario)
  				.then((response)=>{
  					if(response.body.success){
              this.getUsuario();
              this.loading=false;
  						sweetAlert("Modificado con exito!", "Los cambios estan en la tabla", "success");
              this.usuario= {};
  					}else{
  						sweetAlert("Oops...", "Error al modificar", "error");
              this.loading=false;
            }
  				});
        }
      },
      deleteUsuario(idUsuario){
          this.loading=true;
          this.$http.delete('http://localhost:8000/usuarios/delete/'+idUsuario)
            .then((response)=>{
            this.loading=false;
            if(response.body.success){
              this.getUsuario();
              sweetAlert("Deleted!", "Los cambios estan en la tabla", "success");
            }else{
              sweetAlert("Oops...", "Error al eliminar", "error");
            }
          });
			},
  },
  beforeMount(){
    this.getUsuario();
	},
  mounted() {
      $('ul.tabs').tabs();
      $('select').material_select();
      $('.tooltipped').tooltip({delay: 50});
  }
}
</script>

<style scoped>
  #importance{
    color: black !important;
    opacity: 0.7;
    text-align: center;
    font-family: 'Roboto', sans-serif !important;
    font-weight: lighter;
  }
  .collection-item{
    color: black;
  }
  .card{
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
    background-color: black;
    font-size: 15px;
    color: white;
  }
  #contenedorTablaExterna{
    border-radius: 5px;
  }
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
		font-family: 'Roboto', sans-serif;
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
  #TOOLTIP-ID.backdrop {
    background-color: red;
  }
  h4{
    text-align: center;
    color: black !important;

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

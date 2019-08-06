<template>
  <div id="root"> 
    <h2>Promocion</h2>
    <p>Pagina Actual: {{currentPage}}</p>
  <button v-on:click="anterior()" class="waves-effect waves-light btn-large">Anterior</button>
    <button v-on:click="siguiente()" class="waves-effect waves-light btn-large">Siguiente</button>
    <br>
    <table class="table centered">
			<thead>
				<tr>
					<th>Nombre</th>
					<th>descripcion</th>
					<th>cantidad</th>
					<th>descuento</th>
					<th>Hora Inicio</th>
					<th>Hora Final</th>
          <th>Modificar</th>
					<th>Borrar</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="promocion in data" v-bind:key="promocion">
					<td>{{promocion.nombre}}</td>
					<td>{{promocion.descripcion}}</td>
					<td>{{promocion.cantidad}}</td>
					<td>{{promocion.descuento}}</td>
					<td>{{promocion.hora_inicio}}</td>
					<td>{{promocion.hora_final}}</td>
          <td>
						<a v-on:click="startToModifyPromocion(promocion)" class="btn-floating btn-small waves-effect waves-light green"
            >
              <i class="material-icons">update</i></a>
					</td>
					<td>
						<a v-on:click="deletePromocion(promocion._id)" class="btn-floating btn-small waves-effect waves-light red"><i class="material-icons">delete</i></a>
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
          <input v-model="promocion.nombre" :disabled="loading"  id="Nombre" type="text" class="validate">
          <label for="Nombre">Nombre</label>
        </div>
        <div class="input-field col s6">
          <input v-model="promocion.descripcion" :disabled="loading"  id="Descripcion" type="text" class="validate">
          <label for="Descripcion">Descripcion</label>
        </div>
        <div class="input-field col s6">
          <input type="number" v-model="promocion.cantidad" :disabled="loading"  id="Cantidad">
          <label for="Cantidad">Cantidad</label>
        </div>
        <div class="input-field col s6">
          <input v-model="promocion.descuento" :disabled="loading" id="Descuento" type="text"  class="validate">
          <label for="Descuento">Descuento</label>
        </div>
        <div class="input-field col s6">
          <input v-model="promocion.hora_inicio" :disabled="loading" id="hora_inicio" type="text"  class="validate">
          <label for="hora_inicio">Hora Inicio</label>
        </div>
        <div class="input-field col s6">
          <input v-model="promocion.hora_final" :disabled="loading" id="hora_final" type="text"  class="validate">
          <label for="hora_final">Hora Final</label>
        </div>
      </div>


  	  <div id="test-swipe-1" class="col s12">
        <a class="waves-effect waves-light btn-large" v-on:click="createPromocion" :disabled="loading" id="boton">
          <i class="material-icons left">create</i>Crear
        </a>
        </div>
  	  <div id="test-swipe-2" class="col s12">


  				<a class="waves-effect waves-light btn-large" v-on:click="createPromocion" :disabled="loading" id="boton">
  					<i class="material-icons left">update</i>Update
          </a>
          <span>Selected: {{ selected }}</span>
          <select v-model="selected">
            <option v-for="promocion in promociones" v-bind:value="promocion.value">
              {{ promocion.nombre }}
            </option>
          </select>

  		</div>
      <ul id="example-1">
        <li v-for="promocion in promociones">
          <input type="radio" id="one" v-bind:value="promocion.value" v-model="pick" >
          <label for="one">{{ promocion.nombre }}</label>
        </li>
      </ul>


  </div>
</template>

<script>
export default {
  name: 'promocion',
  data(){
    return{
      promociones: [],
			promocion:{},
      loading: false,
      data: [],
      inicio: 0,
      final: 5,
      currentPage: 1,
      size: 1
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
    siguiente(){
      if(this.currentPage < this.size){
        this.currentPage = this.currentPage + 1;
        if(this.promociones.length % 5 == 0){
          this.inicio = this.inicio + 5
          this.final = this.final + 5
          this.data = this.promociones.slice(this.inicio, this.final)
        }else if((this.promociones.length % 5 != 0) && (this.currentPage == this.size)){
          this.inicio = this.inicio + 5
          this.final = this.final + (this.promociones.length%5)
          this.data = this.promociones.slice(this.inicio, this.final)
        }else if((this.promociones.length % 5 != 0) && (this.currentPage < this.size)){
          this.inicio = this.inicio + 5
          this.final = this.final + 5
          this.data = this.promociones.slice(this.inicio, this.final)
        }
      }
    },
    anterior(){
      if(this.currentPage > 1){
        this.currentPage = this.currentPage - 1;
        if(this.currentPage < this.size){
          if(this.promociones.length % 5 == 0){
            this.inicio = this.inicio - 5
            this.final = this.final - 5
            this.data = this.promociones.slice(this.inicio, this.final)
          }else if((this.promociones.length % 5 != 0) && (this.currentPage == this.size-1)){
            this.inicio = this.inicio - 5
            this.final = this.final - (this.promociones.length%5)
            this.data = this.promociones.slice(this.inicio, this.final)
          }else if((this.promociones.length % 5 != 0) && (this.currentPage < this.size)){
            this.inicio = this.inicio - 5
            this.final = this.final - 5
            this.data = this.promociones.slice(this.inicio, this.final)
          }
        }
      }
    },
      getPromocion(){
				this.$http.get('http://localhost:8000/promociones').then((response)=>{
          this.promociones=response.body;
          this.data = this.promociones.slice(this.inicio,this.final)
        if(this.promociones.length % 5 == 0){
          this.size = this.promociones.length/5
        }else{
          this.size = parseInt(this.promociones.length/5)+1
        }
				});
			},
			createPromocion(){
        this.inicio = 0;
        this.final = 5;
        this.currentPage = 1;
				this.loading=true;
				this.$http.post('http://localhost:8000/promociones/create',this.promocion)
				.then((response)=>{
					this.loading=false;
					if(response.body.success){
						sweetAlert("Creado con exito!", "Los cambios estan en la tabla", "success");
						this.getPromocion();
					}else{
						sweetAlert("Oops...", "Error al crear", "error");
					}
				});
      },
      tabControl(idTab){
        if(idTab === 'test-swipe-1'){
          this.idModificar = '';
          this.selectedTab= 'test-swipe-1';
          this.promocion= {};
        }else{
          if(this.idModificar === ''){
            swal("Recuerda!",
            "Para modificar primero tienes que hacer click en  el boton de modificar en la tabla");
          }
        }
      },
      startToModifyPromocion(promocion){
        this.selectedTab= 'test-swipe-2';
        this.idModificar = promocion._id;
        this.promocion = promocion;
        $('ul.tabs').tabs('select_tab', 'test-swipe-2');
        Materialize.updateTextFields();
      },
      modifyPromocion(){
        this.loading=true;
        if(this.idModificar!=''){
          Materialize.updateTextFields();
          this.promocion.idPromocion = this.idPromo;
          this.$http.put('http://localhost:8080/promociones/update/'+this.idModificar,this.promocion)
  				.then((response)=>{
  					if(response.body.success){
              sweetAlert("Oops...", "Error al modificar", "error");
  						this.getProveedor();
  					}else{
              
              sweetAlert("Modificado con exito!", "Los cambios estan en la tabla", "success");
              this.getPromocion();
              
            }
  				});
        }
      },
      deletePromocion(idPromocion) {
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
              _this.$http.delete("http://localhost:8000/promociones/delete/" + idPromocion).then(
                response => {
                  this.loading = false;
                  if (response.body.success) {
                    sweetAlert("Oops...", "Error al eliminar", "error");
                    _this.getPromocion();
                  } else {
                    sweetAlert(
                      "Deleted!",
                      "Los cambios estan en la tabla",
                      "success"
                    );
                    _this.inicio = 0;
                    _this.final = 5;
                    _this.currentPage = 1;
                    _this.getPromocion();
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
  beforeMount(){
    this.getPromocion();
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

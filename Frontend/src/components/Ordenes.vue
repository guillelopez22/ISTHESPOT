<template>
  <div class="container">
    <div class="contenedorCliente">
        <br><br>
        <div id="cuadroMesa" class="col s4 z-depth-5 -lightblue" >
          <br><br>
          <span id="tituloMesa"> <i class="material-icons">shopping_cart</i> Mi orden</span>
          <hr>
          <p>
            <div class="orderdetail -white">
              <h4>Detalles de Orden</h4>
              <p>Ingrese Codigo QR de la mesa</p>
              <span>img</span>
              <label class="custom-file-upload btn-floating -red">
                  <i class="material-icons right">camera_alt</i>
                  <input type="file" accept="image/*" capture="camera"/>
                  <img src="" alt="">
              </label>
              <div class="row">

                 <div class="col s6">
                   <ul class="collapsible" data-collapsible="accordion">
                    <li>
                      <div class="collapsible-header active"><i class="material-icons">whatshot</i>Promociones</div>
                      <div class="collapsible-body">
                        <ul class="collection">
                          <li class="collection-item dismissable"><div>Promocion - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                          <li class="collection-item dismissable"><div>Promocion - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div class="collapsible-header"><i class="material-icons">local_bar</i>Productos</div>
                      <div class="collapsible-body">
                        <ul class="collection">
                          <li class="collection-item dismissable"><div>Producto - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                          <li class="collection-item dismissable"><div>Producto - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                 </div>
                 <div class="col s6">
                   <ul class="collection">
                     <li class="collection-headerCliente "><h4>Orden</h4></li>
                     <li class="collection-item dismissable"><div>Combo<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>
                     <li class="collection-item dismissable"><div>Combo<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>
                   </ul>
                 </div>
               </div>
            </div>
            <a id="btnCliente" class="col s12 waves-effect waves-green btn-flat btn-large -blue">Crear Orden</a>

          </p>
          <hr>
          <br><br>
        </div>
        <br><br><br><br>
    </div>
    <br>
    <ul id="tabs-swipe-demo" class="tabs z-depth-6 -red">
      <li class="tab col s6"><a class="active" href="#test-swipe-1"> MESAS </a></li>
    </ul>
    <div id="test-swipe-1" >
      <br>
      <div class="row">
        <div id="cuadroMesa" class="col s4 z-depth-5 -lightblue" >
          <br><br>
          <span id="tituloMesa"> <i class="material-icons">shopping_cart</i> Mesa 1</span>
          <p>
              <div id="modal1" class="modal modal-fixed-footer">
                <div class="modal-content -white">
                  <h4>Crear Orden</h4>
                  <p>Ingrese las ordenes</p>
                  <span>
                    <div class="input-field col s12">
                      <input id="nombre" type="text" class="validate">
                      <label for="nombre">Nombre:</label>
                    </div>
                  </span>
                  <div class="row">
                     <div class="col s6">
                       <ul class="collection">
                         <li class="collection-header"><h4>Combos</h4></li>
                         <li class="collection-item dismissable"><div>Combo - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                       </ul>
                       <ul class="collection">
                         <li class="collection-header"><h4>Promocion</h4></li>
                         <li class="collection-item dismissable"><div>Promocion - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                       </ul>
                       <ul class="collection">
                         <li class="collection-header"><h4>Producto</h4></li>
                         <li class="collection-item dismissable"><div>Producto - 100lps<a href="#!" class="secondary-content"><i class="material-icons">skip_next</i></a></div></li>
                       </ul>
                     </div>
                     <div class="col s6">
                       <ul class="collection">
                         <li class="collection-header"><h4>Orden</h4></li>
                         <li class="collection-item dismissable"><div>Combo<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>
                         <li class="collection-item dismissable"><div>Combo<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>
                       </ul>
                       <label  >TOTAL: 200 LPS</label>
                     </div>
                   </div>
                </div>
                <div class="modal-footer -red">
                  <a href="#!" id="btnModal" class="modal-action modal-close waves-effect waves-red btn-flat -lightblue ">Cancelar</a>
                  <a href="#!" id="btnModal" class="modal-action modal-close waves-effect waves-green btn-flat -blue">Crear</a>
                </div>
              </div>
              <ul class="collection z-depth-4" >
                <li class="collection-header">
                  Ordenes
                  <a class="modal-trigger btn-floating btn-small waves-effect waves-light -red" href="#modal1">
                    <i class="material-icons">add</i>
                  </a>
                </li>
                <li class="collection-item">
                  <div>
                    <a class="btn-floating waves-effect waves-light btn  grey grey darken-3"><i class="material-icons">input</i></a>
                    <a  class="btn-floating waves-effect waves-light btn grey grey darken-3"><i class="material-icons">receipt</i></a>
                    Orden 1
                  </div>
                </li>
              </ul>
          </p>
          <br><br>
        </div>

      </div><br><br><br><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ordenes',
  data(){
    return{
      mesas:[],
      ordenes:[]
    }
  },
  methods:{

  },
  mounted() {
    $('ul.tabs').tabs();
    $('.modal').modal();
    $('.collapsible').collapsible();
  }
}
</script>

<style scoped>
  .contenedorCliente{
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 17px;
  }
  input[type="file"] {
    display: none;
  }
  .custom-file-upload {
      display: inline-block;
      cursor: pointer;
      align-items: center;
  }
  #btnCliente{
      font-family: 'Cormorant SC', serif!important;
      font-weight: bold;
      font-size: 20px;
      padding-left: 15%;
      padding-right: 15%;
  }
  .orderdetail h4{
    font-family: 'Lobster Two', cursive;
    color: #06152F;
    background-color: #262626;
    color: #F4F0EA;
  }
  .orderdetail .collection-item{
      text-align: left;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
  }
  .modal-content h4{
    font-family: 'Lobster Two', cursive;
    color: #06152F;
    background-color: #262626;
    color: #F4F0EA;
  }
  .collection{
    border-radius: 10px;
  }
  .modal-content .collection-item{
      text-align: left;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
  }
  .collection-item{
      text-align: left;
      font-family: 'Source Sans Pro', sans-serif;
      font-size: 20px;
      background-color: #F4F0EA;
      color: black;
  }
  .collection-header{
    font-family: 'Oswald', sans-serif;
    font-size: 22px;
    background-color: #06152F;
    color: #F4F0EA;
  }
  .collection-headerCliente{
    background-color: #FF0B00 !important; 
  }
  .collapsible-header{
    font-family: 'Lobster Two', cursive;
    font-size: 30px;
    background-color: #262626;
    color: #F4F0EA;
  }
  #test-swipe-1 .row{
    padding: 12px;
    border-radius: 10px;
  }
  a :hover{
    opacity: .5;
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
  }
  #btnModal:hover{
    opacity: .7;
    transition: opacity .5s ease-out;
    -moz-transition: opacity .5s ease-out;
    -webkit-transition: opacity .5s ease-out;
    -o-transition: opacity .5s ease-out;
  }

  #cuadroMesa{
    text-align: center;
    border-radius: 20px;
    border:5px solid #F4F0EA;
  }
  #tituloMesa{
    font-family: 'Cormorant SC', serif!important;
    font-weight: bold;
    font-size: 35px;
  }
  .contenedorCliente #tituloMesa{
    font-family: 'Cormorant SC', serif!important;
    font-weight: bold;
    font-size: 50px;
  }
  .tabs .tab a.active {
    color: #F4F0EA;
    font-size: 30px !important;
  }

  .tabs .tab a:hover {
    color: #b1aea8;
    font-size: 30px !important;
  }
  .modal-content{
    text-align: left !important;
  }
  .tabs .tab a {
    color: black;
    font-size: 30px !important;
  }
  .tabs{
    font-family: 'Oswald', sans-serif!important;
    font-weight: bold;
    font-size: 30px !important;
    border-radius: 10px;
  }
  .-white{
    background-color: #F4F0EA;
    color: black;
  }
  .-lightblue{
    background-color: #5994AA;
    color: #F4F0EA;
  }
  .-blue{
    background-color: #06152F;
    color: #F4F0EA;
  }
  .-red{
    background-color: #FF0B00;
    color: #F4F0EA;
  }
  .-black{
    background-color: #262626;
    color: #F4F0EA;
  }

</style>

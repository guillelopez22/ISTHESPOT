<template>
<div>
  <div class="slider">
    <ul class="slides">
      <li>
        <img src="https://static.pexels.com/photos/370984/pexels-photo-370984.jpeg">
        <!-- random image -->
        <div class="caption center-align">
          <h3>Happy Hour </h3>
          <h5 class="light grey-text text-lighten-3">En todos los tragos -30%<br>De Lunes a Jueves <br>5:00 PM - 8:00 PM</h5>
        </div>
      </li>
      <li>
        <img src="https://static.pexels.com/photos/164879/pexels-photo-164879.jpeg">
        <!-- random image -->
        <div class="caption center-align">
          <h3>KARAOKE NIGHT</h3>
          <h5 class="light grey-text text-lighten-3">Jueves 8PM - 12AM<br>Cervezas Nacionales desde 35 Lps</h5>
        </div>
      </li>
      <li>
        <img src="https://static.pexels.com/photos/7782/food-plate-wood-restaurant.jpg">
        <div class="caption left-align">
          <h3>Value Lunchs</h3>
          <h5 class="light grey-text text-lighten-3">Desde 110 Lps con servicio a domicilio<br> Lunes - Viernes</h5>
        </div>
      </li>
      <li>
        <img src="../imgs/mojito.jpeg">
        <!-- random image -->
        <div class="caption right-align">
          <h3>The Spot</h3>
        </div>
      </li>

    </ul>
  </div>
  <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
  <div class="row">
    <div class="col s4 flow-text -red" id="contenedor-principal1">THE SPOT</div>
    <div class="col s8 flow-text -red" id="contenedor-principal2">
      Tu nuevo Spot!
      <br>Restaurante bar con servicio a Domicilio! Value lunch, Cocteleria y shots innovadores! Tienes que conocerlo!
    </div>
    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
    <div class="col s6 flow-text -white center flow-text" id="contenedor-secundario">
        <img src="../imgs/location.gif" height="68" width="68" >
        UBICACIÓN:<br>
        <span class="fontBox">Lomas del Guijarro <br>
        Plaza Las Lomas, segundo nivel Antiguo local de Sake Tegucigalpa</span>
    </div>
    <div class="col s6 flow-text -blue" id="contenedor-secundario">Crear una Cuenta <br>
      <span id="descripcionCont">Conéctate con nosotros y disfruta de muchos beneficios preferenciales</span><br>

    </div>
    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->

    <div class="col s12 l4 imageContainer1" id="imageContainer" >
      <div class="flow-text mision">
        <img src="../imgs/cocina.png" class="invert">
        <h3> Calidad de su Menú </h3>
        Un menú con opciones
        clave para satisfacer el paladar de nuestros clientes.
      </div>
    </div>
    <div class="col s12 m4 l4 imageContainer2" id="imageContainer" >
      <div class="flow-text mision">
        <img src="../imgs/speaker.png" class="invert">
        <h3> Un ambiente agradable </h3>
        El punto de entretenimiento favorito de nuestros clientes.
      </div>
    </div>
    <div class="col s12 m4 l4 imageContainer3" id="imageContainer" >
      <div class="flow-text mision">
        <img src="../imgs/employee.png" class="invert">
        <h3> Calidad de servicio</h3>
          Con el fin de lograr la preferencia de nuestros usuarios.
      </div>
    </div>
    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||-->
    <div class="card-panel -blue" id="homeCard"> </div>
    <div class="bg">
      <div class="transbox">
        <p>This is where the party begins</p>
      </div>
    </div>

  </div>


</div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      infobtn: 0
    }
  },
  methods: {
    infoFeature(){
      console.log('entre ');
      if(this.infobtn==0){
        this.infobtn=1;

        $('.tap-target').tapTarget('open');
      }else{
        this.infobtn=0;
        $('.tap-target').tapTarget('close');
      }
    }
  },
  beforeMount(){
			console.log('Hola');
	},
  mounted() {
    $('.slider').slider();
  }


}
</script>

<style scoped>
  h3,
  h5 {
    color: #ffff !important;
  }
  div.bg {
    background: url('../../imgs/bottles.jpeg') ;
    border: 2px solid black;
    background-size: cover;
  }

  div.transbox {
      margin: 30px;
      border-radius: 5px;
      text-align: center;
      background-color: #ffffff;
      border: 1px solid black;
      opacity: 0.6;
      filter: alpha(opacity=60); /* For IE8 and earlier */
  }
  .invert {
    -webkit-filter: invert(100%); filter: invert(100%);
  }

  @media only screen and (max-width: 767px) {

  .mision{
      font-size: 1.563em;
   }

  h3 .mision{
      font-size: 1.250em;

   }

}
  .mision img{
    max-width: 100%;
    max-height: 100%;
   }
  div.transbox p {
      margin: 5%;
      font-weight: bold;
      font-family: 'Playfair Display', serif;

      font-size: 50px;
      color: #000000;
  }
  div .imageContainer1{
    background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('../../imgs/grill.jpg');
    background-size: cover;
  }
  div .imageContainer2{
    background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('../../imgs/table_setting.jpg');
    background-size: cover;
  }
  div .imageContainer3{
    background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url('../../imgs/burger.jpeg');
    background-size: cover;
  }
  h3 .mision{
    font-family: 'Source Sans Pro', sans-serif !important;
    position: relative;

  }
  .mision {
    text-align: center;
    position:absolute;
    height:80%; /* = 100% - 2*10% padding */
    width:90%; /* = 100% - 2*5% padding */
    padding: 10% 5%;
    font-weight: bold;
    font-family: 'Cormorant SC', serif;

    color: white;
  }
  div #imageContainer{
    float:left;
    position: relative;
    width: 30%;
    padding-bottom: 30%; /* = width for a 1:1 aspect ratio */
    margin:1.66%;

  }

  .fontBox{
    /*font-family: 'Cormorant SC', serif;*/
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 20px !important;
    font-weight: bold;
  }
  #homeCard {
    height: 100px;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #06152F;
  }

  .parallax-container {
    height: 300px;
  }
  #descripcionCont {
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
  }

  #contenedor-secundario {
    font-family: 'Oswald', sans-serif;
    font-size: 50px;
    text-align: right;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    padding-right: 10px;
    height: 500px;
  }

  #contenedor-principal1,
  #contenedor-principal2 {
    height: 150px;
  }

  #contenedor-principal1 {
    font-family: 'Oswald', sans-serif;
    font-size: 3.125em;
    text-align: right;
    display: -webkit-box;
    -webkit-box-pack: end;
    -webkit-box-align: center;
  }

  #contenedor-principal2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.4em;
    align-items: flex-start;
    text-align: left;
    display: -webkit-box;
    -webkit-box-align: center;
    padding-top: 15px;
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

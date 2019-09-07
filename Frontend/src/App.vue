<template>
  <div id="app" style="padding-top: 64px;">
    <nav id="elementos" style="background-color: black; position: fixed; top: 0; width: 100%; z-index: 99;">
      <div class="nav-wrapper">
        <a class="brand-logo z-depth-5"  ><img src="../imgs/the_spot.png" class="materialboxed" width="210" height="65" alt="Logo"></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <template v-if="scope === 'cliente'">
            <li><router-link to="/"><a style="color: white">HOME</a></router-link></li>
            <li><router-link to="/menu"><a style="color: white">Menu</a></router-link></li>
          </template>
          <template v-if="scope === ''">
            <li><router-link to="/"><a style="color: white">HOME</a></router-link></li>
            <li><router-link to="/menu"><a style="color: white">Menu</a></router-link></li>
          </template>
          <template v-if="scope === undefined">
            <li><router-link to="/"><a style="color: white">HOME</a></router-link></li>
            <li><router-link to="/menu"><a style="color: white">Menu</a></router-link></li>
          </template>
          <template v-if="scope === 'Cajero'">
            <li><router-link to="/"><a style="color: white">HOME</a></router-link></li>
            <li><router-link to="/gerente"><a style="color: white">Gerente</a></router-link></li>
            <li><router-link to="/menu"><a style="color: white">Menu</a></router-link></li>
          </template>
          <template v-if="scope === 'Administrador'">
             <li><router-link to="/"><a style="color: white">HOME</a></router-link></li>
             <li><router-link to="/admin"><a style="color: white">Admin</a></router-link></li>
             <li><router-link to="/menu"><a style="color: white">Menu</a></router-link></li>
          </template>
          <template v-if="scope === 'Mesero'">
              <li><router-link to="/"><a style="color: white">HOME</a></router-link></li>
              <li><router-link to="/mesero"><a style="color: white">Mesero</a></router-link></li>
              <li><router-link to="/menu"><a style="color: white">Menu</a></router-link></li>
          </template>
          
          <!--<li><router-link to="/"><a style="color: white">HOME</a></router-link></li>
          <li><router-link to="/admin"><a style="color: white">Admin</a></router-link></li>
          <li><router-link to="/menu"><a style="color: white">Cliente</a></router-link></li>
          <li><router-link to="/gerente"><a style="color: white">Gerente</a></router-link></li>
          <li><router-link to="/mesero"><a style="color: white">Mesero</a></router-link></li>-->
          <li>
            <nav>
              <div class="nav-wrapper -red" id="busqueda">
                <form>
                  <div class="input-field">
                    <input id="search" type="search" required>
                    <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                    <i class="material-icons text-darken-4">close</i>
                  </div>
                </form>
              </div>
            </nav>
          </li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <div class="fixed-action-btn horizontal">
      <router-link to="/login">
        <a id="menu" class="waves-effect waves-light btn btn-floating btn-large pulse -red" ><i class="material-icons">perm_identity</i></a>
      </router-link>
      <ul>
        <li><a class="btn-floating -red"><i class="material-icons">insert_chart</i></a></li>
        <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
        <li>
          <router-link to="/admin">
            <a class="btn-floating yellow darken-1">
              <i class="material-icons">device_hub</i>
            </a>
          </router-link>
        <li>
          <router-link to="/ordenes">
            <a class="btn-floating blue">
              <i class="material-icons">add_alert</i>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="tap-target" data-activates="menu">
      <div class="tap-target-content">
        <p>Al crearte una cuenta recibirás promociones especiales y podras ordenar desde tu móvil</p>
      </div>
    </div>
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col s4">
            <p class="grey-text text-lighten-4">
              <i class="Small material-icons left">call</i> Teléfonos : 89628285 / 22039868
            </p>
          </div>
          <div class="col s4 center" id="foots"></div>
          <div class="col s4 center">
            <p class="grey-text text-lighten-4">
              <i class="Small material-icons left">query_builder</i>Horarios : 11:00 AM - 2:00 AM
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Ubicación</h5>
            <p class="grey-text text-lighten-4"><br>
              Lomas del Guijarro, Plaza Las Lomas, segundo nivel.</p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Conéctate con nosotros</h5>
            <ul>
              <li>
                <div class="col s3 center" id="foots">
                <a href="https://www.instagram.com/the_spot_hn/" target="_blank">
                  <img src="https://www.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_gray-64.png"></img>
                </a>
                </div>
              </li>
              <li>
                <div class="col s3 center" id="foots">
                  <a href="https://www.facebook.com/The-Spot-519126104924672/" target="_blank">
                    <img  src="https://www.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_gray-64.png"></img>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container white-text">
        © 2017 Copyright The Spot hn
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
  import Home from './components/Home.vue'
  export default {
    name: 'app',
    data() {
      return {
        scope: ""
      }
    },
    methods:{
      // $('.tap-target').tapTarget('open'),
      // $('.tap-target').tapTarget('close')
      getScope(){
        this.scope = JSON.parse(localStorage.getItem('usuario')).scope;
        console.log("EL SCOPE ES: "+ this.scope);
      },
    },
    mounted(){
      this.getScope();
    },
    updated(){
      this.getScope();
    }
  }

</script>
<style scoped>
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
  #foots{
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    -o-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
  }
  #foots img:hover{
    background: #black;
    filter: alpha(opacity=60);
    -moz-opacity: 0.6;
    opacity: .5;
    transition: opacity .3s ease-out;
    -moz-transition: opacity .3s ease-out;
    -webkit-transition: opacity .3s ease-out;
    -o-transition: opacity .3s ease-out;
  }
  #app{
    background-color: #262626;
    color: #F4F0EA;
  }
  .input-field {
    background-color: #C51E07;
  }
  #elementos{
    font-family: 'Roboto', sans-serif;
  }
  a {
    color: #06152F;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  #elementos{
    color: #06152F;
    background: #F4F0EA;
    padding: 0px 50px;
    -webkit-box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    -moz-box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
  }
  #busqueda{
    box-shadow: inset 0 -10px 20px -5px rgba(0,0,0,0.67);
    box-shadow: inset 0 10px 20px -5px rgba(0,0,0,0.67);
    color: #C51E07;
  }
  #search:focus {
    -webkit-box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    -moz-box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    background-color: #FF0B00;
    color: #F4F0EA;
  }
  .page-footer{
    color: #06152F;
    background: black;
  }
  a :hover{
    opacity: .6;
    transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -webkit-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
  }
  .footer-copyright{
    color: #06152F;
    background: #262626;
    font-size: 11px !important;
    -webkit-box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    -moz-box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    box-shadow: inset 0px 0px 45px 3px rgba(0,0,0,0.67);
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
  }

</style>

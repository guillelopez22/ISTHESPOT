<template>
  <div id="root">
    <h2 >Admin Control</h2>
    <div class="cont">
      <router-link to="/bebida">
        <div class="col s3 m3 l1 contain waves-effect waves-light z-depth-5 -red">
           Bebida
        </div>
      </router-link>
      <router-link to="/insumo">
        <div class="col s3 m3 l1 contain waves-effect waves-light z-depth-5 -red">
           Insumo
        </div>
      </router-link>
      <router-link to="/personal">
        <div class="col s3 m3 l1 contain waves-effect waves-light z-depth-5 -red">
           Personal
        </div>
      </router-link>
      <router-link to="/producto">
        <div class="col s3 m3 l1 contain waves-effect waves-light z-depth-5 -red">
           Producto
        </div>
      </router-link>
      <router-link to="/promocion">
        <div class="col s3 m3 l1 contain waves-effect waves-light z-depth-5 -red">
           Promocion
        </div>
      </router-link>
      <router-link to="/proveedor">
        <div class="col s3 m3 l1 contain waves-effect waves-light z-depth-5 -red">
           Proveedor
        </div>
      </router-link>
    </div>

    <div class="routerContainer">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'admin',
  data(){
    return{

    }
  },
  methods: {

  },
  beforeMount(){

	}
}
</script>

<style scoped>
  .routerContainer{
    padding: 5%;
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
  .row{
    align-items: center;
  }
  .contain{
    padding: 35px;
    font-size:20px;
    -webkit-transition: background-color 1s ease-out;
    -moz-transition: background-color 1s ease-out;
    -o-transition: background-color 1s ease-out;
    transition: background-color 1s ease-out;
  }
  .contain:hover{
    background-color:  #262626;
  }
  @media screen and (max-width: 720px) {
    .contain{
      padding: 15px;
      align-items: center;
      font-size:17px;
    }
  }
  .cont{
    background-color: black;
    align-items: center;
    text-align: center;
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

    font-family: 'Roboto', sans-serif;
    font-weight: lighter;
  }
  #root h2{
    font-family: 'Playfair Display';
    text-indent: 50px;
  }
</style>

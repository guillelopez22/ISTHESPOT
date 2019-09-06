<template>
  <div id="root">
    <h2 >Mesero Control</h2>
    <div class="cont">
      <router-link to="/ordenes3">
        <div class="col s3 m3 l1 contain mask waves-effect waves-red z-depth-1 -red">
           Ordenes
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
    -webkit-transition: background-color 1s ease-in;
    -moz-transition: background-color 1s ease-in;
    -o-transition: background-color 1s ease-in;
    transition: background-color 1s ease-in;
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

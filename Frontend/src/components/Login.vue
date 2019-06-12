<template>
  <div class="container">
    <div class="section"></div>
    <main>
      <center>
        <div class="section"></div>
        <div class="container">

          <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
            <form class="col s12" method="post">
              <div class='row'>
                <div class='col s12'>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='email' name='email' id='email' />
                  <label for='email'>Usuario</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input class='validate' type='password' name='password' id='password' />
                  <label for='password'>Contraseña</label>
                </div>
                <label style='float: right;'>
                  <a class='registro'><router-link to="/registrar"><b>Crear cuenta nueva</b></router-link></a>
  							</label>
              </div>
              <br>
              <center>
                <div class='row'>
                  <a class="col s12 btn-large waves-effect waves-light btn -blue" >Login</a>
                </div>
              </center>
            </form>
          </div>
        </div>
      </center>

      <div class="section"></div>
      <div class="section"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>
.registro{
  font-size: 15px;
  font-family: 'Source Sans Pro', sans-serif;

}
.registro:hover{
  color: #06152F !important;
  text-decoration: underline;
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

</style>

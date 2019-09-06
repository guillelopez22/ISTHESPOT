<template>
  <div class="container">
    <div class="section"></div>
    <main>
      <center>
        <div class="section"></div>
        <div class="container">
          <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
            <form class="col s12" >
              <div class="row">
                <div class="col s12"></div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input class="validate" type="text" v-model="usuario.usuario" :disable="loading" id="usuario" />
                  <label for="email">Usuario</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input class="input" v-model="usuario.contrasena" :disable="loading" type="password" id="contrasena" v-once/>
                  <label for="password">Contraseña</label>
                </div>
                <label style="float: right;">
                  <a class="registro">
                    <router-link to="/registrar">
                      <b>Crear cuenta nueva</b>
                    </router-link>
                  </a>
                </label>
              </div>
              <br />
              <center>
                <div class="row">
                  <a class="col s12 btn-large waves-effect waves-light btn -blue" v-on:click="loginUsuario" :disabled="loading">Login</a>
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
  name: "login",
  data() {
    return {
      usuario: {
        usuario: "",
        contrasena: ""
      },
      loading: false
    };
  },
  methods: {
    loginUsuario() {
      this.loading = true;
      if (this.contrasena !== undefined || this.usuario !== undefined) {
        this.loading = false;
        console.log("este es el usuario " + this.usuario);
        console.log("este es el contrasena  " + this.contrasena);
        this.$http.post("http://localhost:8000/login", this.usuario)
          .then(response => {
            this.loading = false;
            console.log("aqui esta el response" + JSON.stringify(response.body));
            if (response.body.loggedIn) {
              this.usuario = response.body.usuario;
              localStorage.setItem('usuario', JSON.stringify(response.body.usuario));
              sweetAlert(
                "¡Autenticación exitosa!",
                "¡Bienvido(a) " + JSON.parse(localStorage.getItem('usuario')).nombre + "!",
                "success"
              );
              window.location.replace("/");
            } else {
              sweetAlert("Oops...", "Error en la autenticación", "error");
            }
          });
        console.log("usuario: " + this.usuario);
      } else {
        this.loading = false;
        sweetAlert("Oops...", "Error inesperado", "error");
      }
    }
  },
  mounted() {
    $(".modal").modal();
  }
};
</script>

<style scoped>
.row {
  color: black;
}
.registro {
  font-size: 15px;
  font-family: "Source Sans Pro", sans-serif;
}
.registro:hover {
  color: #06152f !important;
  text-decoration: underline;
}
.-white {
  background-color: #f4f0ea;
  color: black;
}
.-lightblue {
  background-color: #5994aa;
  color: #fff;
}
.-blue {
  background-color: #06152f;
  color: #fff;
}
.-red {
  background-color: #ff0b00;
  color: #fff;
}
.-black {
  background-color: #262626;
  color: #fff;
}
</style>

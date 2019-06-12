<template>
  <div class="container">
    <div class="section"></div>
    <main>
      <center>
        <div class="section"></div>
        <div class="container">
          <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; width:500px;padding: 32px 50px 0px 50px; border: 1px solid #EEE;">
            <form class="col s12">
              <div class='row'>
                <div class='col s12'>
                  <h4>Ingresar Datos</h4>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">account_circle</i>
                  <input class='validate' type='text' id='nombre' />
                  <label for='nombre'>Nombre Completo</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">verified_user</i>
                  <input class='validate' type='text' id='usuario' />
                  <label for='usuario'>Usuario</label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">phone</i>
                  <input class='validate' type='text'  id='telefono' />
                  <label for='telefono'>Celular</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">vpn_key</i>
                  <input class='validate' v-model="pass1"type='password' id='password' />
                  <label for='password'>Contraseña</label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <i class="material-icons prefix">vpn_key</i>
                  <input class='validate' v-model="pass2" type='password' id='password2' />
                  <label for='password2'> Reescribir contraseña</label>
                </div>
              </div>
              <br>
              <p>
                <input type="checkbox" id="test6" />
                <label for="test6">Acepto
                  <a class='hrefStyle' href="#modalCondiciones"><b>Condiciones de uso</b></a>

                </label>
               <!-- Modal Structure -->
               <div id="modalCondiciones" class="modal">
                 <div class="modal-content -white">
                   <h4>Condiciones de uso</h4>
                   <p>1. Introducción<br>

                    Las presentes condiciones generales de uso de la página web, regulan los términos y condiciones de acceso y uso de www.thespothn.com, propiedad de The Spot, en adelante, «la Empresa», que el usuario del Portal deberá de leer y aceptar para usar todos los servicios e información que se facilitan desde el portal. El mero acceso y/o utilización del portal, de todos o parte de sus contenidos y/o servicios significa la plena aceptación de las presentes condiciones generales de uso.<br><br>

                    2. Condiciones de uso<br>

                    Las presentes condiciones generales de uso del portal regulan el acceso y la utilización del portal, incluyendo los contenidos y los servicios puestos a disposición de los usuarios en y/o a través del portal, bien por el portal, bien por sus usuarios, bien por terceros. No obstante, el acceso y la utilización de ciertos contenidos y/o servicios puede encontrarse sometido a determinadas condiciones específicas.
                    <br><br>
                    3.   Modificaciones<br>

                    La empresa se reserva la facultad de modificar en cualquier momento las condiciones generales de uso del portal. En todo caso, se recomienda que consulte periódicamente los presentes términos de uso del portal, ya que pueden ser modificados.
                    <br><br>
                    4. Obligaciones del Usuario
                    <br>
                    El usuario deberá respetar en todo momento los términos y condiciones establecidos en las presentes condiciones generales de uso del portal. De forma expresa el usuario manifiesta que utilizará el portal de forma diligente y asumiendo cualquier responsabilidad que pudiera derivarse del incumplimiento de las normas.
                    <br><br>
                    Así mismo, el usuario no podrá utilizar el portal para transmitir, almacenar, divulgar promover o distribuir datos o contenidos que sean portadores de virus o cualquier otro código informático, archivos o programas diseñados para interrumpir, destruir o perjudicar el funcionamiento de cualquier programa o equipo informático o de telecomunicaciones.
                    <br><br>
                    5. Responsabilidad del portal
                    <br>
                    El usuario conoce y acepta que el portal no otorga ninguna garantía de cualquier naturaleza, ya sea expresa o implícita, sobre los datos, contenidos, información y servicios que se incorporan y ofrecen desde el Portal.
                    <br><br>
                    Exceptuando los casos que la Ley imponga expresamente lo contrario, y exclusivamente con la medida y extensión en que lo imponga, el Portal no garantiza ni asume responsabilidad alguna respecto a los posibles daños y perjuicios causados por el uso y utilización de la información, datos y servicios del Portal.
                    <br><br>
                    En todo caso, el Portal excluye cualquier responsabilidad por los daños y perjuicios que puedan deberse a la información y/o servicios prestados o suministrados por terceros diferentes de la Empresa. Toda responsabilidad será del tercero ya sea proveedor o colaborador.
                    <br><br>
                    6. Propiedad intelectual e industrial
                    <br>
                    Todos los contenidos, marcas, logos, dibujos, documentación, programas informáticos o cualquier otro elemento susceptible de protección por la legislación de propiedad intelectual o industrial, que sean accesibles en el portal corresponden exclusivamente a la empresa o a sus legítimos titulares y quedan expresamente reservados todos los derechos sobre los mismos. Queda expresamente prohibida la creación de enlaces de hipertexto (links) a cualquier elemento integrante de las páginas web del Portal sin la autorización de la empresa, siempre que no sean a una página web del Portal que no requiera identificación o autenticación para su acceso, o el mismo esté restringido.
                    <br><br>
                    En cualquier caso, el portal se reserva todos los derechos sobre los contenidos, información datos y servicios que ostente sobre los mismos. El portal no concede ninguna licencia o autorización de uso al usuario sobre sus contenidos, datos o servicios, distinta de la que expresamente se detalle en las presentes condiciones generales de uso del portal.
                    <br><br>
                    </p>
                 </div>
                 <div class="modal-footer -lightblue">
                   <a class="modal-action modal-close waves-effect waves-green btn-flat -blue">OK</a>
                 </div>
               </div>
              <br>
              <center>
                <div class="row">
                  <a class="col s12 btn-large waves-effect -blue waves-light btn" v-on:click="newUsuario" :disabled="loading" >Registrarse</a>
                </div>
              </center>
            </form>
          </div>
        </div>
      </center>
    </main>
    <br><br>
  </div>
</template>

<script>
export default {
  name: 'register',
  data(){
    return{
      pass1: '',
      pass2: '',
      loading: false
    }
  },
  methods:{
    newUsuario(){
      this.loading=true;
      if(this.pass1 === this.pass2){
        this.loading=false;
      }else{
        this.loading=false;
        sweetAlert("Oops...", "La contraseña no es la misma", "error");
      }
			}

  },
  mounted(){
     $('.modal').modal();
  }
}
</script>

<style scoped>
  .hrefStyle{
    font-size: 15px;
    font-family: 'Source Sans Pro', sans-serif;

  }
  .hrefStyle:hover{
    color: #06152F !important;
    text-decoration: underline;
  }

  .container{
    color: black !important;
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

<template>
  <div>
    <div class="row">
      <div class="col s6">
        <table>
            <thead>
              <tr>
                  <th data-field="name">Nombre</th>
                  <th data-field="description">Descripcion</th>
                  <th data-field="price">Precio</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="producto in productos">
                <td>{{producto.nombre}}</td>
                <td>{{producto.descripcion}}</td>
                <td>{{producto.precio}}</td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="col s6">
      <table>
          <thead>
            <tr>
                <th data-field="name">Nombre</th>
                <th data-field="inventario">Inventario</th>
                <th data-field="descripcion">Descripcion</th>
            </tr>
          </thead>

          <tbody>
            <tr  v-for="bebida in bebidas">
              <td>{{bebida.nombre}}</td>
              <td>{{bebida.inventario}}</td>
              <td>{{bebida.descripcion}}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'menu',
  data(){
    return{
      bebidas: [],
      bebida:{
      },
      productos: [],
      producto:{
      },
      loading: false
    }
  },
  methods: {
    getProductos(){
				this.$http.get('http://localhost:8000/productos').then((response)=>{
					this.productos=response.body;
				});
			},
    getBebidas(){
      this.$http.get('http://localhost:8000/bebidas').then((response)=>{
        this.bebidas=response.body;
      });
    }
  },
      beforeMount(){
			this.getProductos();
      this.getBebidas();
		}
}
</script>

<style scoped>
  .responsive-img{
    width:400px;
  }
</style>

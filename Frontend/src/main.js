// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Ordenes from './components/Ordenes.vue'
import Register from './components/Register.vue'
import Admin from './components/Admin.vue'

import Bebida from './components/Bebida.vue'
import Combo from './components/Combo.vue'
import Insumo from './components/Insumo.vue'
import Mesa from './components/Mesa.vue'
import Personal from './components/Personal.vue'
import Producto from './components/Producto.vue'
import Promocion from './components/Promocion.vue'
import Proveedor from './components/Proveedor.vue'
//import ProductoElaboradoDetallado from './components/ProductoElaboradoDetallado.vue'
//import ProductoElaborado from './components/ProductoElaborado.vue'
import Usuario from './components/Usuario.vue'
import MesaMesero from './components/MesaMesero.vue'


import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.http.options.credentials = true;

const router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: "/",
      component: Home
    },
    {
      name: 'Menu',
      path: '/menu',
      component: Menu
    },
    {
      name: 'Register',
      path: "/registrar",
      component: Register
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Admin',
      path: '/admin',
      component: Admin,
      children: [
        {
          name: 'Bebida',
          path: "/bebida",
          component: Bebida
        },
        {
          name: 'Insumo',
          path: "/insumo",
          component: Insumo
        },
        {
          name: 'Personal',
          path: "/personal",
          component: Personal
        },
        {
          name: 'Mesas',
          path: "/mesa",
          component: Mesa
        },
        {
          name: 'Producto',
          path: "/producto",
          component: Producto
        },
        {
          name: 'Promocion',
          path: "/promocion",
          component: Promocion
        },
        {
          name: 'Proveedor',
          path: "/proveedor",
          component: Proveedor
        },
        /*{
          name: 'ProductoElaboradoDetallado',
          path: "/productoelaboradodetallado",
          component: ProductoElaboradoDetallado
        },
        {
          name: 'ProductoElaborado',
          path: "/productoelaborado",
          component: ProductoElaborado
        },*/
        {
          name: 'Usuario',
          path: "/usuario",
          component: Usuario
        },
        {
          name: 'MesaMesero',
          path: "/mesamesero",
          component: MesaMesero
        },
        {
          name: 'Ordenes',
          path: "/ordenes",
          component: Ordenes
        },
        {
          name:'combo',
          path: '/combo',
          component: Combo
        }
      ]
    }
  ],
  mode: 'history'
})

new Vue({ // eslint-disable-line no-new
  router,
  render: (h) => h(App)
}).$mount('#app');

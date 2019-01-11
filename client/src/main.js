import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import  {faShoppingBasket} from '@fortawesome/free-solid-svg-icons'
import  {faHeart} from '@fortawesome/free-solid-svg-icons'
import  {faMinusCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Accueil from './components/accueil.vue';
import Restaurants from './components/restaurants.vue';
import Commande from './components/commande.vue';
import InfosRestaurant from './components/infosRestaurant.vue';
import Restos from './components/restos.vue'

library.add(faUtensils)
library.add(faShoppingBasket)
library.add(faHeart)
library.add(faMinusCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Définition des routes
Vue.use(VueRouter);

const routes = [
	{path:'/Restaurants', component: Restaurants},
	{path:'/Commande', component: Commande},
	{path: '/server/restos',name: 'Restos',component: Restos},
	{path:'/infosRestaurant', component: InfosRestaurant},
	{path:'/', component: Accueil}
]

const router = new VueRouter({
	routes: routes,
	mode:'history'
}) 
// La ligne ci-dessous rend le composant Accueil utilisable
// partout, dans tous les fichiers .vue
// C'est un GLOBAL COMPONENT
Vue.component("app-Accueil", Accueil);
console.log(Vue.created)
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})

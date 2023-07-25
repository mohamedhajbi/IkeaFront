import { createApp } from 'vue'
import App from './App.vue'
import HomeComponent from './components/Home.vue';
import ProdComponent from './components/product.vue';

import { createRouter, createWebHistory } from 'vue-router';


const routes = [ 
  { path: '/', component: HomeComponent}, 
  { path: '/products', component: ProdComponent}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount('#app');
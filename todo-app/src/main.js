import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
//import "@/assets/style/app.scss"; 

new Vue({
    store,
    render: h => h(App),
  }).$mount('#app')
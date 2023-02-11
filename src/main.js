import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const Axios = axios.create({
  baseURL: process.env.VUE_APP_API,
  withCredentials: false
});

Vue.config.productionTip = false

Vue.use(VueAxios, Axios);

new Vue({
  render: h => h(App),
}).$mount('#app')

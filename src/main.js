// Environment Config
if (process.env.NODE_ENV === 'production') {
	window.endpoint = 'https://ribeye.herokuapp.com';
} else {
	window.endpoint = 'http://localhost:3000';
}

// Global Variables
window.moment = require('moment');
// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Tickets from './components/Tickets.vue'
import Order from './components/Order.vue'
import Complete from './components/Complete.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter);

// Register Routes
const routes = [
	{ name: 'home', path: '/', component: Home },
	{ name: 'tickets', path: '/', component: Tickets },
	{ name: 'order', path: '/', component: Order },
	{ name: 'order-complete', path: '/order-complete', component: Complete }
];

const router = new VueRouter({
	routes
});

new Vue({
	router,
 	el: '#app',
 	data(){
 		return {};
 	},
  	render: h => h(App)
});

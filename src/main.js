import Vue from 'vue';
import App from './App.vue';
import router from './router';

// Font Awesome Icons
import './icons';

// Root styles
import '@/assets/scss/app.scss';

Vue.config.productionTip = false;

// Dynamic page title (argument to is the item from router/index.js routes array)
router.afterEach(to => {
	Vue.nextTick(() => {
		document.title = `${to.name ? `${to.name} | ` : ''}P3K Team`;
	});
});

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');

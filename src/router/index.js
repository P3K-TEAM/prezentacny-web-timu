import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team';
import Documents from '../views/Documents.vue';
import Contact from '../views/Contact.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/team',
		name: 'Tím',
		component: Team
	},
	{
		path: '/documents',
		name: 'Dokumenty',
		component: Documents
	},
	{
		path: '/contact',
		name: 'Kontakt',
		component: Contact
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

export default router;

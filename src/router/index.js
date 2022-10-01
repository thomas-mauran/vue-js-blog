import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import CryptoTrackerVue from '../views/CryptoTrackerVue.vue';
import CryptoInfoVue from '../views/CryptoInfoVue.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
    },
    {
        path: '/crypto-tracker',
        name: 'crypto-tracker',
        component: CryptoTrackerVue,
    },
    {
        path: '/crypto-tracker/:id',
        name: ':id',
        component: CryptoInfoVue,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

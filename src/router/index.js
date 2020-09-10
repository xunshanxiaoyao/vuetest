import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        redirect: '/login'
    }, {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/Home.vue')
    }, {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
    }, {
        path: '/parent',
        name: 'Parent',
        component: () => import("@/views/parent/Parent.vue")
    },{
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue')
    }, {
        path: '*',
        component: () => import('@/views/login/Login.vue')
    }
];

export default new Router({
    routes
})


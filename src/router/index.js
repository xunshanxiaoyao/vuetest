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
        component: () => import('@/views/about/About.vue'),
        children: [
            {
                path: ':id',
                name: 'Main',
                component: () => import('@/views/about/Main.vue')
            }
        ]
    }, {
        path: '/game',
        name: 'Game',
        component: () => import('@/views/game/Game.vue')
    },{
        path: '/parent',
        name: 'Parent',
        component: () => import("@/views/parent/Parent.vue")
    },{
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue')
    }, {
        path: '*',
        redirect: '/login'
    }
];

export default new Router({
    routes
})


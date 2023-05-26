import { createRouter, createWebHistory } from "vue-router";
import register from './views/registerView.vue';
import login from './views/LoginView.vue';
import HomeView from './views/HomeView.vue';
import NotFound from './views/NotFoundView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/login', component: login },
        { path: '/register', component: register },
        { path: '/product', component: register },
        { path: '/:path(.*)', name: 'not-found', component: NotFound }
    ]
    
});
    
export default router;
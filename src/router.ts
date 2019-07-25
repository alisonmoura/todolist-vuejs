import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home';
import DetalheTarefa from './pages/DetalheTarefa';
import NotFound from './pages/NotFound';

Vue.use(VueRouter); // $router, $route

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/detalhe',
            component: DetalheTarefa,
            name: 'detalhe',
            props: true,
            meta: {
                title: 'Detalhe'
            }
        },
        {
            path: '*',
            component: NotFound,
            meta: {
                title: '404'
            }
        }
    ]
});
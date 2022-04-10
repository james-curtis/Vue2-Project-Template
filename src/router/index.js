import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes as portal } from './module/portal';

Vue.use(VueRouter);
const routes = [
    ...portal,
];
console.log(routes);
const router = new VueRouter({
    routes,
});

export default router;

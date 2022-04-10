import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/icons/iconfont.css';
import ElementUI from 'element-ui';
import '@/style/element-variables.scss';

// mock
import '@/mock'

Vue.config.productionTip = false;

Vue.use(ElementUI, {
    size: 'medium',
});
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

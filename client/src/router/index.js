import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home';
import Problems from '../views/Problems';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/problems',
            name: 'Problems',
            component: Problems
        }
    ],
    mode: 'history'
})
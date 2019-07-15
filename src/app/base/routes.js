/**
 * @file router.js
 * @author https://github.com/DOBEEE
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Wrapper from '@/app/base/Wrapper';
Vue.use(VueRouter);

const routes = [
    {
        path: '/$_appname',
        component: Wrapper,
        children: [
            {
                path: '/',
                redirect: '/$_appname/home'
            },
            {
                path: 'home',
                component: () =>
                    import(/* webpackChunkName: "home" */ '@/app/page/home'),
                meta: {
                    page: 'Home',
                    title: '我是第一个页面'
                }
            },
            {
                path: 'two',
                component: () => import(/* webpackChunkName: "two" */ '@/app/page/two'),
                meta: {
                    page: 'Secret',
                    title: '我是第二个页面'
                }
            }
        ]
    } 
];

export function createRouter (context) {
    return new VueRouter({
        mode: 'history',
        routes
    });
}

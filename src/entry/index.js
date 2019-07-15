/**
 * @file main.js
 * @author aosyang<yangyanzhao@baidu.com>
 */
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import { createStore, createRouter, FrameIndex } from '../app/base/index';
// import {Loadmore} from 'mint-ui';
import 'vue2-animate/dist/vue2-animate.min.css';
Vue.use(MintUI);
// Vue.component(Loadmore.name, Loadmore);
export function createApp (context) {
	const router = createRouter();
	const store = createStore();

	// 同步路由状态(route state)到 store
	// sync(store, router);
	
	const app = new Vue({
	    router,
    	store,
	    render: h => h(FrameIndex)
	});
	return { app, router, store };
}
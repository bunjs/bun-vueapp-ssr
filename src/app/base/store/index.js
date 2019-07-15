import Vue from 'vue';
import Vuex from 'vuex';
import actions from './config/actions';
import state from './config/state';
import mutations from './config/mutations';
Vue.use(Vuex);
// 可以用module拆分store，暂时不需要
export function createStore (context) {
    return new vuex.Store({
         actions,
         mutations,
         state,
         plugins: [] 
    });
}
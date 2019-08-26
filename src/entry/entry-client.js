import {
	createApp
} from './index';
import merge from 'deepmerge';
// 客户端特定引导逻辑……

const {
	app,
	router,
	store
} = createApp();

// 这里假定 App.vue 模板中根元素具有 `id="app"`
router.onReady(() => {
	if (window.__INITIAL_STATE__) {
		store.replaceState(
			merge(store.state, window.__INITIAL_STATE__, {
                arrayMerge: function(store, saved) {
                    return saved;
                },
                clone: false,
            })
		);
	}
	app.$mount('#app', true);
});
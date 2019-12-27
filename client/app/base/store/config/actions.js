import api from '@common/api';
export default {
    fetchHome({ commit }, id) {
        return api.fetchHome().then((data) => {
            commit('setHome', {id, data});
        });
    }
}
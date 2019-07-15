export default {
    setHome (state, data) {
        state.home = { ...state.home, ...data };
    }
}
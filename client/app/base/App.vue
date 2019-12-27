<template>
    <div id="app">
        <div class="outer">
            <slot name="top"></slot>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {};
    }
};
</script>

<style>
html {
    height: 100%;
    width: 100%;
}
body {
    margin: 0;
}
#app {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: scroll;
}
.outer {
    height: 100vh;
    margin: 0;
    padding: 0;
}
</style>

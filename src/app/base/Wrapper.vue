<template>
    <div class="wrapper">
    	<router-view></router-view>
    </div> 
</template>

<script>
export default {
    data() {
        return {};
    },
    beforeMount() {
        if (this.$route.meta.title) {
            // 设置页面title
            document.title = this.$route.meta.title;
        }
    }
};
</script>

<style lang="less">
.wrapper {
    margin: 0;
    min-height: 100vh;
    background-color: #fff;
}
</style>

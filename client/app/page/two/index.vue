<template>
    <div class="container">
        <h1>我是第二个页面</h1>
        <div class="bottom" @click="click">点我到第一个页面</div>
    </div>
</template>
<script>
export default {
    components: {},

    methods: {
        click: function() {
            this.$router.push("/");
        }
    },

    data() {
        return {
            total: 0,
            title: "引力简介",
            content:
                "引力是度宇宙中目前探索到的第一种力量形式。" +
                "拥有星球的居民都拥有一定引力值，并且可通过引力凝聚出元素；" +
                "引力越高，获得的元素越多。宇宙居民可以通过完成引力任务提升引力，" +
                "未来将会支持更多的引力提升方式。",
            noMoreData: false,
            inAnd: false
        };
    },

    created() {}
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>

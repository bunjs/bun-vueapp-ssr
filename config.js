module.exports = {
    dirname: __dirname,
    // 当需要部署到bun框架时，这里可以设为true
    isbun: true,
    // 是否是ssr
    ssr: true,
    // 是否是单个应用单个服务
    isSingle: true,
    frame: 'vue',
    entry: {
        index: './client/entry/entry-client.js',
    },
    serverEntry: './client/entry/entry-server.js',
    output: './build/static',
    template: '',
    appname: '$_appname',
    // bun r --dev时使用localStaticDomain
    localStaticDomain: '//localhost:8000',
    // bun r --test时使用testStaticDomain
    testStaticDomain: '//localhost:8000',
    // bun r时使用publicStaticDomain
    publicStaticDomain: '//gh.bdstatic.com',
    manifest: true,
    /**
     * 分离模式
     * commons 是否需要提取公共文件（2次以上引入，仅限js）优先级低于commons
     * vendors 是否需要提取node_modules中的模块（包含css） 优先级低于libs
     * libs
     */
    cacheGroups: ['vendors', 'commons'],
    libs: [], // 需要额外打包的公共库
    uglifyJs: true, // 开发模式下无效
    optimizeCSS: true, // 开发模式下无效
    supportFileType: ['vue', 'less'], // 需要支持的文件格式
    globalPath: {
        '@common': './client/app/common',
        '@': './client'
    },
    definePlugin: {
        // 是否为生产环境
        PRODUCTION: JSON.stringify(false),
        // 提现功能开关
        WITHDRAW_FEATURE: JSON.stringify(true)
    },
    // 全局引入的公共style文件，支持less，sass
    globalStyle: [],
    /**
     * 预留方法，可自定义修改webpackconfig
     * @params config webpack配置
     * @return config 更改后的webpack配置
     */
    configureWebpack: config => {
        return config;
    },
    // 当isbun为true时，dev配置无效
    dev: {
        port: '8011',
        autoOpenBrowser: true,
        openUrlPath: '/',
        proxyTable: {},
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        mockDir: './mock'
    }
};

module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ['@babel/preset-env', {
                "targets": {
                    browsers: ['> 1%', 'last 2 versions', 'ie >= 10'],
                },
            }]
        ],
        plugins: [
            ["@babel/plugin-transform-runtime", {
                corejs: 3
            }],
            "@babel/plugin-syntax-dynamic-import",
            ["@babel/plugin-proposal-decorators", {
                "legacy": true
            }],
        ]
    };
}

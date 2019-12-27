module.exports = {
    apps: [{
        name: "$_appname",
        script: "./build/entry.js",
        watch: false,
        kill_timeout: 10 * 1000,
        error_file: './build/logs/bun/bun.log.wf',
        out_file: './build/logs/bun/bun.log',
        time: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        }
    }]
}

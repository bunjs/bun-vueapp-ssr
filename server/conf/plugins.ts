// conf/plugin.js
// 使用 mysql 插件
import path = require("path");
export = {
    ral: {
        enable: false,
        // package: 'bun-ral'
        path: bun.globalPath.PLUGINS_PATH + "/ral"
    },
    VUESSR: {
        enable: true,
        package: "bun-vuessr-plugin"
    },
    SSR: {
        enable: false,
        package: "bun-reactssr-plugin"
    }
};
// exports.VUESSR = {
//   enable: true,
//   path: path.resolve(bun.globalPath.ROOT_PATH, '../../bun/bun-vuessr-plugin')
// };

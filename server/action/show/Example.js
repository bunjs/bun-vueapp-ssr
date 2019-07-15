
/**
 * @file Example.js
 * @extend bun.$_appname
 * vue应用 demo
 */

class Example extends bun.class.$_appname {
    constructor() {
        super();
    }
    async execute(ctx) {
        const templatePath = bun.TPL_PATH + '/$_appname/template.html';
        const clientManifestPath = bun.ROOT_PATH + '/static/$_appname/vue-ssr-client-manifest.json';
        const serverManifestPath = bun.ROOT_PATH + '/static/$_appname/vue-ssr-server-bundle.json';

        let state = {
            home: {
                data: '123',
            }
        };
        bun.plugins.VUESSR({
            state,
            url: ctx.request.path,
            templatePath,
            clientManifestPath,
            serverManifestPath
        }, (err, html) => {
            if (err) {
                if (err.code === 404) {
                    ctx.status = 404;
                    ctx.type = 'text/html';
                    console.log(err);
                    ctx.body = JSON.stringify(err);
                    // ctx.throw(404, 'Page not found');
                } else {
                    ctx.status = 500;
                    ctx.type = 'text/html';
                    console.log(err);
                    ctx.body = JSON.stringify(err);
                    // ctx.throw(500, JSON.stringify(err));
                }
            } else {
                ctx.body = html;
                // await ctx.render("example", {
                //     vue: html,
                //     message: "Bunjs is ready!!",
                //     state: JSON.stringify(state)
                // });
            }
        })
    }
}

module.exports = Example;
/**
 * @file Example.js
 * @extend bun.vuessr
 * vue应用 demo
 */
// import BUN_Common_BasePage = require('../../common/BasePage');
class Action_Show_Example extends Common_BasePage {
    public a: number;
    constructor() {
        super();
        this.a = 1;
    }
    public async execute(ctx: any) {
        const templatePath = bun.globalPath.TPL_PATH + "/template.html";
        const clientManifestPath =
            bun.globalPath.ROOT_PATH + "/static/vue-ssr-client-manifest.json";
        const serverManifestPath =
            bun.globalPath.ROOT_PATH + "/static/vue-ssr-server-bundle.json";

        const state = {
            home: {
                data: "123"
            }
        };
        const a = new Function();
        bun.plugins.VUESSR(
            {
                state,
                url: ctx.request.path,
                templatePath,
                clientManifestPath,
                serverManifestPath
            },
            (err: any, html: string) => {
                if (err) {
                    if (err.code === 404) {
                        ctx.status = 404;
                        ctx.type = "text/html";
                        console.log(err);
                        ctx.body = JSON.stringify(err);
                        // ctx.throw(404, 'Page not found');
                    } else {
                        ctx.status = 500;
                        ctx.type = "text/html";
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
            }
        );
    }
}

export = Action_Show_Example;

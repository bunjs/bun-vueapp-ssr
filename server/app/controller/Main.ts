class Controller_Main extends App {
    constructor() {
        super();
        (global as any).navigator = (global as any).navigator || {};
        (global as any).navigator.userAgent = (global as any).navigator.userAgent || "all";
    }
    public execute() {
        this.Routes.post({
            "/api": "/action/api/Api.js"
        });
        this.Routes.get({
            "/api": "/action/api/Api.js",
            "/*": "/action/show/Example.js"
        });
    }
}
export = Controller_Main;

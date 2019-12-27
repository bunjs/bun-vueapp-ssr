/**
 * @file BasePage.js
 * @extend bun.vuessr
 * vue应用 demo
 */

class Common_BasePage extends App {
    protected needRegister: boolean;
    protected needVerify: boolean;

    public constructor() {
        super();
        this.needRegister = true;
        this.needVerify = true;
    }
    public beforeExecute(ctx: any) {
        if (this.needRegister) {
            // ...check register status
        }
    }
    public afterExecute(ctx: any) {
        // ...check register status
    }
}

export = Common_BasePage;
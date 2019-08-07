
/**
 * @file BasePage.js
 * @extend bun.$_appname
 * vue应用 demo
 */

class Common_BasePage extends bun.class.$_appname {
    constructor() {
        super();
        this.needRegister = true;
        this.needVerify = true;
    }
    beforeExecute(ctx) {
        if (this.needRegister) {
            // ...check register status
        }
    }
    afterExecute(ctx) {

    }
}

module.exports = Common_BasePage;
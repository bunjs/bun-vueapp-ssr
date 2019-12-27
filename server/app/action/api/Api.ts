class Action_Api_Api extends App {
    constructor() {
        super();
    }
    public async execute(ctx: any) {
        const objServiceData = new Model_Services_Data_ApiData();

        const bsCommon: any = {};
        bsCommon.type = ctx.request.query.type || "home";
        const data = objServiceData.getData(bsCommon);
        ctx.body = {
            data
        };
    }
}

export = Action_Api_Api;

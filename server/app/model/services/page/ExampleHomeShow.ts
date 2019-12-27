class Model_Services_Page_ExampleHomeShow extends bun.app.class {
    constructor() {
        super();
    }
    public execute(bsCommon = {}) {
        const data = new Model_Services_Data_ApiData().getData(bsCommon);
        return {
            home: data
        };
    }
}

export = Model_Services_Page_ExampleHomeShow;

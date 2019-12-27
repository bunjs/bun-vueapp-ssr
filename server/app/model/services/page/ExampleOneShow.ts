class Model_Services_Page_ExampleOneShow extends App {
    constructor() {
        super();
    }
    public execute(bsCommon?: any) {
        const data = new Model_Services_Data_ApiData().getData(bsCommon);
        return {
            pageone: data
        };
    }
}

export = Model_Services_Page_ExampleOneShow;

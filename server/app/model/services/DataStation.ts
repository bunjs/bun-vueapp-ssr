/**
 * @name Services_DataStation
 * @desc 获取前端路由对应的model层类名
 */

class Model_Services_DataStation extends App {
    public interfaceMapping: any;
    constructor() {
        super();
        this.interfaceMapping = {
            "/example": {
                "/": "Model_Services_Page_ExampleHomeShow",
                "/one": "Model_Services_Page_ExampleOneShow"
            }
        };
    }
    public getClassName(path: string) {
        const pathArr: string[] = path.replace("/" + this.appName, "").split("/");
        pathArr.shift();
        if (pathArr.length <= 1) {
            pathArr.push("");
        }
        if (
            this.interfaceMapping["/" + pathArr[0]] &&
            this.interfaceMapping["/" + pathArr[0]]["/" + pathArr[1]]
        ) {
            return this.interfaceMapping["/" + pathArr[0]]["/" + pathArr[1]];
        }
    }
}
export = Model_Services_DataStation;

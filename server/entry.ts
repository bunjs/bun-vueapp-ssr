/// <reference types="node" />
import "bun-skin";
(global as any).bun = new Bun("bun", {
    ROOT_PATH: __dirname,
    isSingle: true,
    port: 8000
});
bun.bootstrap();

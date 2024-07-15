import "reflect-metadata";
import { App } from "./app";

const app: App = new App();

(async () => {
    await app.Init();
})();
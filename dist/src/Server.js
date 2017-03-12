"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createApplication = require("express");
class Server {
    constructor() {
        this.listen = () => {
        };
        this.app = createApplication();
        this.configure();
    }
    static getInstance() {
        if (!Server.instance) {
            Server.instance = new Server();
        }
        return Server.instance;
    }
    configure() {
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map
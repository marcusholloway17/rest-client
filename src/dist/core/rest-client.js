"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestClient = void 0;
const axios_1 = __importDefault(require("axios"));
class RestClient {
    constructor(config) {
        this.instance = this.create(config);
        return this;
    }
    get(url, config) {
        return this.instance.get(url, config);
    }
    put(url, data, config) {
        return this.instance.put(url, data, config);
    }
    post(url, data, config) {
        return this.instance.post(url, data, config);
    }
    delete(url, config) {
        return this.instance.delete(url, config);
    }
    patch(url, data, config) {
        return this.instance.patch(url, data, config);
    }
    create(config) {
        return axios_1.default.create(config);
    }
}
exports.RestClient = RestClient;

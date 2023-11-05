"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const client = new __1.RestClient({
    baseURL: "https://yawa.sedana.io",
    headers: {
        Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
    },
});
test("REST CLIENT TEST", () => __awaiter(void 0, void 0, void 0, function* () {
    expect(yield client.get("/api/instances/65").then((res) => res === null || res === void 0 ? void 0 : res.data)).toStrictEqual({
        id: 65,
        name: "old instance",
        instanceID: "instance65",
        token: "kZqvZ0w1JlzM",
        active: true,
        status: "WORKING",
        note: null,
        userId: "c442e8a3-3683-41a3-8eda-146aa9d79eb1",
        expiredAt: "2024-02-11T00:00:00.000Z",
        createdAt: "2023-08-11T15:14:26.000Z",
        updatedAt: "2023-11-04T16:21:09.000Z",
        deletedAt: null,
    });
}));

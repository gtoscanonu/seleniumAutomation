"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testLoginUser_1 = require("./test/testLoginUser");
const test = new testLoginUser_1.TestLogin();
test.beforeTest();
test.testVerifyLogin();
test.AfterTest();

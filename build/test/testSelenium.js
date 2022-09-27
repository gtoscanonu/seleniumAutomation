"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testLoginUser_1 = require("./testLoginUser");
(async () => {
    const test = new testLoginUser_1.TestLogin();
    await test.beforeTest();
    await test.testVerifyLogin();
    await test.afterTest();
})();

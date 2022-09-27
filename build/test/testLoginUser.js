"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestLogin = void 0;
const chai_1 = require("chai");
const selenium_webdriver_1 = require("selenium-webdriver");
const employeePage_1 = require("../pages/application/employeePage");
const loginUser_1 = require("../pages/application/loginUser");
class TestLogin {
    constructor() {
        this.driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
        this.objLogin = new loginUser_1.LoginUserPage(this.driver);
        this.objEmploymentPage = new employeePage_1.EmploymentPage(this.driver);
    }
    async beforeTest() {
        await this.driver.get("https://testfaceclub.com/ejercicios/");
    }
    async testVerifyLogin() {
        await this.objLogin.loginUser("admin", "admin123");
        await this.driver.sleep(2000);
        const textEmployeePage = await this.objEmploymentPage.getTextEmploymentPage();
        chai_1.assert.equal(textEmployeePage, 'Add Employee');
    }
    async afterTest() {
        await this.driver.quit();
    }
}
exports.TestLogin = TestLogin;

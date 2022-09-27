"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class LoginUser {
    constructor(driver) {
        this.userName = selenium_webdriver_1.By.id("user");
        this.passwordUser = selenium_webdriver_1.By.id("pass");
        this.loginButton = selenium_webdriver_1.By.id("loginButton");
        this.driver = driver;
    }
    //Set user name in textbox
    async setUserName(name) {
        await this.driver.findElement(this.userName).sendKeys(name);
    }
    //set password in textbox
    async setPassword(password) {
        await this.driver.findElement(this.passwordUser).sendKeys(password);
    }
    //click on login button
    async clickLogin() {
        await this.driver.findElement(this.loginButton).click();
    }
    //function principal
    async loginUser99(strUserName, strPasword) {
        this.setUserName(strUserName);
        this.setPassword(strPasword);
        this.clickLogin();
    }
}
exports.LoginUser = LoginUser;

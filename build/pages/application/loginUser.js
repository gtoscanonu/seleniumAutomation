"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class LoginUserPage {
    constructor(driver) {
        this.userName = selenium_webdriver_1.By.id("user");
        this.passwordUser = selenium_webdriver_1.By.id("pass");
        this.loginButton = selenium_webdriver_1.By.id("loginButton");
        this.driver = driver;
    }
    //Set user name in textbox
    async setUserName(name) {
        console.log(`enter the user's name`);
        await this.driver.findElement(this.userName).sendKeys(name);
    }
    //set password in textbox
    async setPassword(password) {
        console.log(`enter the user's password`);
        await this.driver.findElement(this.passwordUser).sendKeys(password);
    }
    //click on login button
    async clickLoginButton() {
        console.log('click submmit');
        await this.driver.findElement(this.loginButton).click();
    }
    //function principal
    async loginUser(strUserName, strPasword) {
        this.setUserName(strUserName);
        this.setPassword(strPasword);
        this.clickLoginButton();
        this.driver.sleep(1000);
    }
}
exports.LoginUserPage = LoginUserPage;

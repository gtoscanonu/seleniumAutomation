"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class HomePage {
    constructor(driver) {
        this.textTitle = selenium_webdriver_1.By.className('modal-title');
        this.driver = driver;
    }
    //Get the User name from Home Page
    async getHomePageDashboardUserName() {
        return await this.driver.findElement(this.textTitle).getText();
    }
}
exports.HomePage = HomePage;

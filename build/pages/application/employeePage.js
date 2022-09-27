"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmploymentPage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class EmploymentPage {
    constructor(driver) {
        this.textTitle = selenium_webdriver_1.By.className('modal-title');
        this.driver = driver;
    }
    //Get the Text from Employee Page
    async getTextEmploymentPage() {
        return await this.driver.findElement(this.textTitle).getText();
    }
}
exports.EmploymentPage = EmploymentPage;

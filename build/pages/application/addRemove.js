"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddRemovePage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class AddRemovePage {
    constructor(driver) {
        this.name = 'Add Remove Page';
        this.title = selenium_webdriver_1.By.xpath("//*[@id='content']/h3");
        this.addElementButton = selenium_webdriver_1.By.xpath("//*[@id='content']/div/button");
        this.removeElementButton = selenium_webdriver_1.By.xpath("//*[@id='elements']/button[1]");
        this.driver = driver;
    }
    async addElement(numberElements) {
        for (let i = 0; i < numberElements; i++) {
            await this.driver.findElement(this.addElementButton).click();
            console.log(`Click Add Button`);
            await this.driver.sleep(500);
        }
    }
    async removeElement(numberElements) {
        for (let i = 0; i < numberElements; i++) {
            await this.driver.findElement(this.removeElementButton).click();
            await this.driver.sleep(500);
            console.log(`Click Remove Button`);
        }
    }
}
exports.AddRemovePage = AddRemovePage;

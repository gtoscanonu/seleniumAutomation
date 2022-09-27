"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const constants_1 = require("../../data/constants");
class HomePage {
    constructor(driver) {
        this.name = 'Home page';
        this.title = selenium_webdriver_1.By.xpath("//*[@id='content']/h1");
        this.addRemoveLink = selenium_webdriver_1.By.xpath("//*[@id='content']/ul/li[2]/a");
        this.dissappearingElementsLink = selenium_webdriver_1.By.xpath("//*[@id='content']/ul/li[9]/a");
        this.dropdownLink = selenium_webdriver_1.By.xpath("/html/body/div[2]/div/ul/li[11]/a");
        this.driver = driver;
    }
    async loadPage() {
        await this.driver.findElement(this.title);
        console.log(`Load the page ${this.name}`);
        this.driver.sleep(20000);
    }
    async clickTest(link) {
        console.log(`click in the link ${link}`);
        switch (link) {
            case constants_1.testLinks.addRemoveLink:
                return await this.driver.findElement(this.addRemoveLink).click();
            case constants_1.testLinks.dissappearingElementsLink:
                return await this.driver.findElement(this.dissappearingElementsLink).click();
            case constants_1.testLinks.dropdownTestLink:
                return await this.driver.findElement(this.dropdownLink).click();
        }
        console.log(`click in the link ${link}`);
    }
}
exports.HomePage = HomePage;

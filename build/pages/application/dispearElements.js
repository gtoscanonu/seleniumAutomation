"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DissapearingElements = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
class DissapearingElements {
    constructor(driver) {
        this.name = 'Dispear Elements Page';
        this.title = selenium_webdriver_1.By.xpath("/html/body/div[2]/div/div/h3");
        this.galeryButton = selenium_webdriver_1.By.xpath("/html/body/div[2]/div/div/ul/li[5]/a");
        this.driver = driver;
    }
    async checkElementAppear(nameElement) {
        console.log(`Find the element ${nameElement}`);
        let numElemetGaleria = await this.driver.findElements(this.galeryButton);
        let pageRefresCount = 0;
        while (numElemetGaleria.length === 0) {
            console.log(`I don't find the element. Refresh page`);
            await this.driver.sleep(500);
            await this.driver.navigate().refresh();
            numElemetGaleria = await await this.driver.findElements(this.galeryButton);
            pageRefresCount += 1;
        }
        console.log(`Find element ${nameElement}`);
        console.log(`Refresh page ${pageRefresCount} times`);
    }
}
exports.DissapearingElements = DissapearingElements;

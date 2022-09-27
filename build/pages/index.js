"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pages = void 0;
const selenium_webdriver_1 = require("selenium-webdriver");
const addRemove_1 = require("./application/addRemove");
const dispearElements_1 = require("./application/dispearElements");
const employeePage_1 = require("./application/employeePage");
const home_1 = require("./application/home");
const loginUser_1 = require("./application/loginUser");
class Pages {
    constructor() {
        this._Driver = new selenium_webdriver_1.Builder().forBrowser('chrome').build();
        this._Login = new loginUser_1.LoginUserPage(this._Driver);
        this._Home = new home_1.HomePage(this._Driver);
        this._AddRemove = new addRemove_1.AddRemovePage(this._Driver);
        this._DissapearingElements = new dispearElements_1.DissapearingElements(this._Driver);
        this._Employment = new employeePage_1.EmploymentPage(this._Driver);
    }
    async loadPage(url) {
        await this._Driver.get(url);
    }
    async quitBrowser() {
        await this._Driver.quit();
    }
}
exports.Pages = Pages;

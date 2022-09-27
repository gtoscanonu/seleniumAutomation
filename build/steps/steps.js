"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const index_1 = require("../pages/index");
const chai_1 = require("chai");
//set promise default Timeout: Para que la ejecucuón de cada línea de gherkin dure más de 5 segundos
(0, cucumber_1.setDefaultTimeout)(5000 * 1000);
(0, cucumber_1.Before)(async function () {
    this.pages = new index_1.Pages();
});
(0, cucumber_1.When)(/^I visit the site of test ([\w\W]+)$/, async function (site) {
    await this.pages.loadPage(site);
});
(0, cucumber_1.When)(/^I go to ([\w\W]+) test$/, async function (test) {
    await this.pages._Home.clickTest(test);
});
(0, cucumber_1.When)(/^I add ([0-9]+) elements$/, async function (numberElements) {
    await this.pages._AddRemove.addElement(numberElements);
});
(0, cucumber_1.When)(/^I remove ([0-9]+) elements$/, async function (numberElements) {
    await this.pages._AddRemove.removeElement(numberElements);
});
(0, cucumber_1.When)(/^I check ([\w\W]+) element in the page$/, async function (nameElement) {
    await this.pages._DissapearingElements.checkElementAppear(nameElement);
});
(0, cucumber_1.When)(/^I login with user (.*) and password (.*)$/, async function (username, password) {
    await this.pages._Login.setUserName(username);
    await this.pages._Login.setPassword(password);
    await this.pages._Login.clickLoginButton();
});
(0, cucumber_1.When)(/^I check page employment$/, async function () {
    const textEmployeePage = await this.pages._Employment.getTextEmploymentPage();
    chai_1.assert.equal(textEmployeePage, 'Add Employee');
});
(0, cucumber_1.After)(async function () {
    await this.pages.quitBrowser();
});

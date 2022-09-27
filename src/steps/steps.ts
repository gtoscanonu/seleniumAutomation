import {Before, Given, When, Then, After, formatterHelpers, setDefaultTimeout} from '@cucumber/cucumber'
import {Pages} from '../pages/index'
import {assert} from 'chai'

//set promise default Timeout: Para que la ejecucuón de cada línea de gherkin dure más de 5 segundos
setDefaultTimeout(5000 * 1000 )

Before(async function(): Promise<void> {
  this.pages = new Pages()
})

When(/^I visit the site of test ([\w\W]+)$/, async function (site: string): Promise<void> {
  await this.pages.loadPage(site)
})

When(/^I go to ([\w\W]+) test$/, async function (test: string): Promise<void> {
  await this.pages._Home.clickTest(test)
})

When(/^I add ([0-9]+) elements$/, async function (numberElements: number): Promise<void>{
  await this.pages._AddRemove.addElement(numberElements)
})

When(/^I remove ([0-9]+) elements$/, async function (numberElements: number): Promise<void>{
  await this.pages._AddRemove.removeElement(numberElements)
})

When(/^I check ([\w\W]+) element in the page$/, async function(nameElement: string): Promise<void> {
 await this.pages._DissapearingElements.checkElementAppear(nameElement)
})

When(/^I login with user (.*) and password (.*)$/, async function(username: string, password: string): Promise<void>{
  await this.pages._Login.setUserName(username)
  await this.pages._Login.setPassword(password)
  await this.pages._Login.clickLoginButton()
})

When(/^I check page employment$/, async function (): Promise<void> {
  const textEmployeePage = await this.pages._Employment.getTextEmploymentPage()
  assert.equal(textEmployeePage, 'Add Employee') 
})

After(async function(){
  await this.pages.quitBrowser()
})


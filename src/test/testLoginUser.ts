import {assert, Assertion} from 'chai'
import { Builder } from "selenium-webdriver"
import { EmploymentPage } from "../pages/application/employeePage"
import { LoginUserPage } from "../pages/application/loginUser"


export class TestLogin {
  public driver
  public objLogin: LoginUserPage 
  public objEmploymentPage: EmploymentPage 

  constructor(){
    this.driver = new Builder().forBrowser('chrome').build()
    this.objLogin = new LoginUserPage(this.driver)
    this.objEmploymentPage = new EmploymentPage(this.driver)
  }

  public async beforeTest():Promise<void>{
    await this.driver.get("https://testfaceclub.com/ejercicios/")
  }

   public async testVerifyLogin():Promise<void>{
     await this.objLogin.loginUser("admin", "admin123");
     await this.driver.sleep(2000)
     const textEmployeePage = await this.objEmploymentPage.getTextEmploymentPage()
     assert.equal(textEmployeePage, 'Add Employee')
   }

   public async afterTest(): Promise<void>{
    await this.driver.quit()
   }

}
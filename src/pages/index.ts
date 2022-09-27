import { Builder } from "selenium-webdriver"
import { AddRemovePage } from "./application/addRemove"
import { DissapearingElements } from "./application/dispearElements"
import { EmploymentPage } from "./application/employeePage"
import { HomePage } from "./application/home"
import { LoginUserPage } from "./application/loginUser"

export class Pages {
  public _Driver = new Builder().forBrowser('chrome').build()
  public _Login: LoginUserPage
  public _Home: HomePage
  public _AddRemove: AddRemovePage
  public _DissapearingElements: DissapearingElements
  public _Employment: EmploymentPage

  constructor(){
    this._Login = new LoginUserPage(this._Driver)
    this._Home = new HomePage(this._Driver)
    this._AddRemove = new AddRemovePage(this._Driver)
    this._DissapearingElements = new DissapearingElements(this._Driver)
    this._Employment = new EmploymentPage(this._Driver)
  }

  public async loadPage(url: string):Promise<void>{
    await this._Driver.get(url)
  }

  public async quitBrowser():Promise<void>{
    await this._Driver.quit()
  }

}
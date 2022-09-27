import {By, WebDriver} from 'selenium-webdriver'

export class EmploymentPage {
  public driver
  public textTitle: By = By.className('modal-title')
  constructor(driver: WebDriver){
    this.driver = driver
  }

  //Get the Text from Employee Page
  public async getTextEmploymentPage():Promise<string>{
    return await this.driver.findElement(this.textTitle).getText()
  }
}
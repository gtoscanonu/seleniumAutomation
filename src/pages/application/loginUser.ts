import {By, ThenableWebDriver, WebDriver} from 'selenium-webdriver'

export class LoginUserPage {
  public driver
  public userName: By = By.id("user")
  public passwordUser: By = By.id("pass")
  public loginButton: By = By.id("loginButton")

  constructor(driver: WebDriver){
    this.driver = driver
  }

  //Set user name in textbox
  public async setUserName(name: string):Promise<void>{
    console.log(`enter the user's name`)
    await this.driver.findElement(this.userName).sendKeys(name)
  }

  //set password in textbox
  public async setPassword(password: string): Promise<void>{
    console.log(`enter the user's password`)
    await this.driver.findElement(this.passwordUser).sendKeys(password)
  }

  //click on login button
  public async clickLoginButton():Promise<void>{
    console.log('click submmit')
    await this.driver.findElement(this.loginButton).click()
  }

  //function principal
  public async loginUser(strUserName: string, strPasword: string): Promise<void>{
    this.setUserName(strUserName)
    this.setPassword(strPasword)
    this.clickLoginButton()
    this.driver.sleep(1000)
  }
}
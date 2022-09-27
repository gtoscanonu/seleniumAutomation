import { By, WebDriver } from "selenium-webdriver"

export class AddRemovePage {
  readonly name = 'Add Remove Page'
  public driver: WebDriver
  public title: By = By.xpath("//*[@id='content']/h3")
  public addElementButton: By = By.xpath("//*[@id='content']/div/button")
  public removeElementButton: By = By.xpath("//*[@id='elements']/button[1]")

  constructor(driver: WebDriver){
    this.driver = driver
  }

  public async addElement(numberElements: number): Promise<void> {
    for(let i=0; i<numberElements; i++){
      await this.driver.findElement(this.addElementButton).click()
      console.log(`Click Add Button`)
      await this.driver.sleep(500)
    }
}

  public async removeElement(numberElements: number): Promise<void> {
    for(let i=0; i<numberElements; i++){
      await this.driver.findElement(this.removeElementButton).click()
      await this.driver.sleep(500)
      console.log(`Click Remove Button`)
    }
  }

}

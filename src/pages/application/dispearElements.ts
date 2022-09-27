import { By, TouchSequence, WebDriver } from "selenium-webdriver"

export class DissapearingElements {
  public readonly name = 'Dispear Elements Page'
  public driver: WebDriver
  public title: By = By.xpath("/html/body/div[2]/div/div/h3")
  public galeryButton: By = By.xpath("/html/body/div[2]/div/div/ul/li[5]/a")

  constructor(driver: WebDriver){
    this.driver = driver
  }

  public async checkElementAppear(nameElement: string): Promise<void>{
    console.log(`Find the element ${nameElement}`)
    let numElemetGaleria = await this.driver.findElements(this.galeryButton)
    let pageRefresCount = 0
    while (numElemetGaleria.length === 0){
        console.log(`I don't find the element. Refresh page`)
        await this.driver.sleep(500)
        await this.driver.navigate().refresh()
        numElemetGaleria = await await this.driver.findElements(this.galeryButton)
        pageRefresCount +=1
    }
    console.log(`Find element ${nameElement}`)
    console.log(`Refresh page ${pageRefresCount} times`)
}
}
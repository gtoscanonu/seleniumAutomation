import { WebDriver, By } from "selenium-webdriver";
import { testLinks } from "../../data/constants";


export class HomePage {
  public readonly name = 'Home page'
  public driver: WebDriver
  public title: By = By.xpath("//*[@id='content']/h1")
  public addRemoveLink: By = By.xpath("//*[@id='content']/ul/li[2]/a")
  public dissappearingElementsLink: By = By.xpath("//*[@id='content']/ul/li[9]/a")
  public dropdownLink: By = By.xpath("/html/body/div[2]/div/ul/li[11]/a")

  constructor(driver: WebDriver){
    this.driver = driver
  }

  public async loadPage(): Promise<void>{
    await this.driver.findElement(this.title)
    console.log(`Load the page ${this.name}`)
    this.driver.sleep(20000)
  }

  public async clickTest(link: string): Promise<void> {
    console.log(`click in the link ${link}`)
    switch (link) {
      case testLinks.addRemoveLink:
        return await this.driver.findElement(this.addRemoveLink).click()
      case testLinks.dissappearingElementsLink:
        return await this.driver.findElement(this.dissappearingElementsLink).click()
      case testLinks.dropdownTestLink:
        return await this.driver.findElement(this.dropdownLink).click()
    }
    console.log(`click in the link ${link}`)
  }

}

const {Builder, By, Key} = require('selenium-webdriver');
// const firefox = require('selenium-webdriver/firefox');   // En caso de una ruta diferente de firefox descomentar esta linea

(async function facebookLogin() {
    // const binary = "/opt/firefox/firefox" // En caso de tener firefox en una ruta distinta a la que es por defecto cambiar esta variable
  
    let driver = await new Builder().forBrowser('firefox').setFirefoxOptions().build();  
    // let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().setBinary(binary)).build();   // En caso de una ruta diferente de firefox descomentar esta linea
    try {
      await driver.get('https://www.twitter.com/signup');
      await driver.sleep(10 * 1000)
      await driver.findElement(By.xpath('/html/body/div/div/div/div[1]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[2]/div')).click();
      await driver.findElement(By.name('identifier')).sendKeys("dch19940@gmail.com");
      await driver.findElement(By.id('identifierNext')).click();
    } finally {
      // await driver.quit();
    }
  })();
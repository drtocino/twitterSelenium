const {Builder, By, Key} = require('selenium-webdriver');
// const firefox = require('selenium-webdriver/firefox');   // En caso de una ruta diferente de firefox descomentar esta linea

(async function facebookLogin() {
    // const binary = "/opt/firefox/firefox" // En caso de tener firefox en una ruta distinta a la que es por defecto cambiar esta variable
  
    let driver = await new Builder().forBrowser('firefox').setFirefoxOptions().build();  
    // let driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().setBinary(binary)).build();   // En caso de una ruta diferente de firefox descomentar esta linea
    try {
      await driver.get('https://www.twitter.com/login');
      await driver.sleep(10 * 1000)
      await driver.findElement(By.name('text')).sendKeys("60744773");
      await driver.findElement(By.xpath('/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[6]/div')).click();
      await driver.sleep(10 * 1000)
      await driver.findElement(By.name('password')).sendKeys("P@ssw0rd");
      await driver.findElement(By.xpath('/html/body/div/div/div/div[1]/div/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div/div')).click();
      await driver.sleep(10 * 1000)

    } finally {
      await driver.quit();
    }
  })();
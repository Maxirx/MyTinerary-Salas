const { Builder, By } = require('selenium-webdriver')
const assert = require('assert')

const chrome = requier('selenium-webdriver/chrome')
const chromedriver = requiere('chromedriver')

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())

const usuario = [
    { id: 1, username: "test@test.com.ar", password: '1234Test' },
    { id: 2, username: "test@test.com.ar", password: '1234Tes' },
]

function SignInTest() {
    describe("test de SignIn", function () {
        this.timeout(2000000)

        var webdriver = new Builder().forBrowser('chrome').build()
        webdriver.manage().window().maximize()

        it('Ingreso credenciales incorrectascorrectas - Debe encontrar texto El usuario y/o contraseña incorrectos?', async () => {


            await webdriver.get('https://wonderfullplaces.herokuapp.com/')
            await webdriver.findElement(By.name('email')).sendKeys(usuario[0].username)
            await webdriver.findElement(By.name('password')).sendKeys(usuario[1].password)
            await webdriver.sleep(3000)
            await webdriver.findElement(By.className('btn btn-primary btn-block ')).click()
            await webdriver.sleep(3000)
            const texto = await webdriver.findElement(By.css('.MuiSnackbar-root > p')).getText()
            assert.strictEqual(texto, "El usuario o el password no coinciden")
        })

        it('Ingreso credenciales correctas - Debe encontrar texto Hello Adrian', async () => {
            await webdriver.get("https://wonderfullplaces.herokuapp.com/")
            await webdriver.findElement(By.name('email')).sendKeys(usuario[0].username)
            await webdriver.findElement(By.name('password')).sendKeys(usuario[0].password)
            await webdriver.sleep(3000)
            await webdriver.findElement(By.className('btn btn-primary btn-block')).click()
            await webdriver.sleep(3000)
            const texto = await webdriver.findElement(By.css('#root > div > nav > div > div > a')).getText()
            assert.strictEqual(texto, "Adrian")
            webdriver.quit()
        })
    })
}

SignInTest()
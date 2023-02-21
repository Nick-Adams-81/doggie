import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Seleniume2eTest {

    public static void main(String[] args) throws InterruptedException {

        WebDriver driver = new ChromeDriver();
        driver.get("https://www.saucedemo.com/");

        driver.manage().window().maximize();

        Thread.sleep(2000);
        driver.findElement(By.id("user-name")).sendKeys("standard_user");
        driver.findElement(By.id("password")).sendKeys("secret_sauce");
        Thread.sleep(2000);

        driver.findElement(By.id("login-button")).click();
        String productsHeader = driver.findElement(By.className("title")).getText();
        Assert.assertEquals("PRODUCTS", productsHeader);
        System.out.println("title header test passed");
        Thread.sleep(2000);

        driver.findElement(By.id("item_4_title_link")).click();
        String productHeader = driver.findElement(By.className("inventory_details_name")).getText();
        Assert.assertEquals("Sauce Labs Backpack", productHeader);
        Thread.sleep(2000);
        System.out.println("backpack header test passed");

        driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
        Thread.sleep(1000);
        driver.findElement(By.id("back-to-products")).click();

        driver.findElement(By.className("shopping_cart_link")).click();
        String cartItem = driver.findElement(By.className("inventory_item_name")).getText();
        Assert.assertEquals("Sauce Labs Backpack", cartItem);
        System.out.println("added item to cart test passed");
        Thread.sleep(2000);

        driver.findElement(By.id("continue-shopping")).click();
        Thread.sleep(2000);
        driver.findElement(By.id("remove-sauce-labs-backpack")).click();
        Thread.sleep(2000);

        driver.findElement(By.id("add-to-cart-sauce-labs-bike-light")).click();
        Thread.sleep(2000);
        driver.findElement(By.className("shopping_cart_link")).click();
        String bikeLight = driver.findElement(By.className("inventory_item_name")).getText();
        Assert.assertEquals("Sauce Labs Bike Light", bikeLight);
        System.out.println("removed item and added new item to cart test passed");
        Thread.sleep(2000);
        driver.findElement(By.id("continue-shopping")).click();

        Thread.sleep(2000);
        driver.findElement(By.id("remove-sauce-labs-bike-light")).click();

        Thread.sleep(2000);
        driver.quit();
    }
}

package test;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class RandysCandiesTest {

    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:3000/");
    }
}

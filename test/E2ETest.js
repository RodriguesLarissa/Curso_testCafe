import { ClientFunction } from 'testcafe';
import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import searchResults from '../pages/SearchResultPage';
import productdetails from '../pages/ProductDetailsPage';
import cartpage from '../pages/CartPage';
import checkoutpage from '../pages/CheckOutPage'
import myaccountpage from '../pages/MyAccountPage'

const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'larissa'+randomNumber+'@test.com';

fixture`E2E Fixture`
    .page(URL);

test('Assert home page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(homepage.subtitleHeader.exists).ok()
});

test("Place Order E2E Tests", async (t) => {
    await t
    .maximizeWindow()
    .click(homepage.registerLink)
    .expect(getURL()).contains('register')
    .click(registerpage.genderOption)
    .typeText(registerpage.firstName,'Larissa')
    .typeText(registerpage.lastName,'Rodrigues')
    .typeText(registerpage.email,userEmail)
    .typeText(registerpage.password,'123456')
    .typeText(registerpage.confirmPassword,'123456')
    .click(registerpage.registerButton)
    .expect(registerpage.successfullMessage.exists).ok();

    //Search Product
    await homepage.search('Apple MacBook Pro 13-inch');
    await t
        .click(searchResults.productTitle)
        .expect(getURL()).contains('apple-macbook-pro-13-inch')
    
    //Product Details Page
        .expect(productdetails.productPrice.exists).ok()
        .selectText(productdetails.productQuantity).pressKey("delete")
        .typeText(productdetails.productQuantity, '3')
        .click(productdetails.addToCart)
        .expect(productdetails.successMessage.exists).ok()
        .wait(3000)

    //Cart and Checkout
        .click(homepage.shoppingCartLink)
        .click(cartpage.termsLabel)
        .click(cartpage.checkoutBtn)
        .expect(getURL()).contains('checkout');

    //Checkout
    await checkoutpage.selectCountry('Germany');
    await t
        .takeScreenshot()
        .typeText(checkoutpage.cityTxt,'Santo André')
        .typeText(checkoutpage.addressTxt,'108 ddd test')
        .typeText(checkoutpage.zipTxt,'123456')
        .typeText(checkoutpage.phoneTxt,'332434345')
        .click(checkoutpage.continueBtn)
        .click(checkoutpage.nextDayOption)
        .click(checkoutpage.nextShippingBtn)
        .click(checkoutpage.nextPaymentBtn)
        .click(checkoutpage.nextConfirmBtn)
        .expect(checkoutpage.orderConfirmationMessage.exists).ok()
        .click(checkoutpage.viewOrderDetailsLink)

    //My Account
        .click(homepage.myAccountLink)
        .click(myaccountpage.ordersLink);
});

test("Change Currency Test", async t =>{
    await homepage.changeCurrency('Euro');
});
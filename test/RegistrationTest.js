import { ClientFunction } from "testcafe";

import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import myaccountpage from '../pages/MyAccountPage';

const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);
var userEmail = 'larissa'+randomNumber+'@test.com';

fixture("Registration Fixture")
    .page(URL);
    
test('Assert Home Page Test', async t =>{
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok();
});

test('User Registration and Login Test', async t =>{
    //Register
    await t
        .click(homepage.registerLink)
        .expect(getURL()).contains('register')
        .click(registerpage.genderOption)
        .typeText(registerpage.firstName,'Larissa')
        .typeText(registerpage.lastName,'Rodrigues');

    await registerpage.selectDay('13');
    await registerpage.selectMonth('September');
    await registerpage.selectYear('1999');

    await t
        .typeText(registerpage.email, userEmail)
        .typeText(registerpage.password, '123456')
        .typeText(registerpage.confirmPassword, '123456')
        .click(registerpage.registerButton)
        .expect(registerpage.successfullMessage.exists).ok()

    //Login
        .click(homepage.logOutLink)
        .click(homepage.loginLink)
        .expect(loginpage.accountHeader.exists).ok()
        .typeText(loginpage.emailInput, userEmail)
        .typeText(loginpage.passwordInput, '123456')
        .click(loginpage.submitButton)
    
    //My Account Page
        .expect(myaccountpage.ordersLink.exists).ok()
        .click(myaccountpage.ordersLink)
        .expect(myaccountpage.noOrdersLabel.exists).ok();
});
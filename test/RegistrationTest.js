import { ClientFunction } from "testcafe";

import homepage from '../pages/HomePage';
import registerpage from '../pages/RegisterPage';
import loginpage from '../pages/LoginPage';
import myaccountpage from '../pages/MyAccountPage';

const dataSet = require('../data/data.json');
const URL = "https://demo.nopcommerce.com/";
const getURL = ClientFunction(() => window.location.href);
var randomNumber = Math.floor(Math.random() * 10000);

fixture("Registration Fixture")
    .page(URL);
    
test.meta({
    ID: '123',
    SEVERITY: 'blocker',
    STORY: '1234'
})('Assert Home Page Test', async t =>{
    await t
        .expect(getURL()).eql(URL)
        .takeScreenshot()
        .expect(homepage.subtitleHeader.exists).ok();
});

dataSet.forEach(data =>{
    test('User Registration and Login Test', async t =>{
        //Register
        await t
            .click(homepage.registerLink)
            .expect(getURL()).contains('register')
            .click(registerpage.genderOption)
            .typeText(registerpage.firstName, data.firstname)
            .typeText(registerpage.lastName, data.lastname);

        await registerpage.selectDay(data.birthday);
        await registerpage.selectMonth(data.birthmonth);
        await registerpage.selectYear(data.birthyear);

        await t
            .typeText(registerpage.email, data.email+randomNumber+'@test.com')
            .typeText(registerpage.password, data.password)
            .typeText(registerpage.confirmPassword, data.password)
            .click(registerpage.registerButton)
            .expect(registerpage.successfullMessage.exists).ok()

        //Login
            .click(homepage.logOutLink)
            .click(homepage.loginLink)
            .expect(loginpage.accountHeader.exists).ok()
            .typeText(loginpage.emailInput, data.email+randomNumber+'@test.com')
            .typeText(loginpage.passwordInput, data.password)
            .click(loginpage.submitButton)
        
        //My Account Page
            .expect(myaccountpage.ordersLink.exists).ok()
            .click(myaccountpage.ordersLink)
            .expect(myaccountpage.noOrdersLabel.exists).ok();
    });
});
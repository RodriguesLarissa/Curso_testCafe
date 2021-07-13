import { Selector } from "testcafe";

class LoginPage{
    constructor(){
        this.emailInput = Selector('input#Email')
        this.passwordInput = Selector('input#Password')
        this.submitButton = Selector('input.button-1.login-button')
        this.accountHeader = Selector("strong").withText("Returning Customer");
    }
}

export default new LoginPage();
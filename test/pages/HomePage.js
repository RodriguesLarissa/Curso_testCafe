import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.subTitleHeader = Selector('h2').withText('Welcome to our store')
        this.registerLink = Selector('a').withText('Register')
        this.loginLink = Selector('a').withText('Log in')
        this.wishListLink = Selector('a').withText('Wishlist')
        this.shoppingCartLink = Selector('a').withText('Shopping cart')
        this.myAccountLink = Selector('a').withText('My Account')
        this.logOutLink = Selector('a').withText('Log out')
        this.currencyList = Selector('select#customerCurrency')
    }

    get productSearch(){
        return Selector("input[id='small-searchterms']");
    }

    async search(product){
        await t
            .typeText(this.productSearch, product)
            .wait(3000)
            .pressKey('enter');
    }

    async changeCurrency(currency){
        await t
            .click(this.currencyList)
            .click(Selector('option', {text: currency}));
    }

}

export default new HomePage
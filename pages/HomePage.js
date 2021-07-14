import { Selector, t } from "testcafe";

class HomePage{
    constructor(){
        this.subtitleHeader = Selector('h2').withText('Welcome to our store');
        this.registerLink = Selector("a[class*='ico-register']");
        this.loginLink = Selector("a[class*='ico-login']");
        this.wishListLink = Selector("a[class*='ico-wishlist']");
        this.shoppingCartLink = Selector("a[class*='ico-cart']");
        this.myAccountLink = Selector("a[class*='ico-account']");
        this.logOutLink = Selector("a[class*='ico-logout']");
        this.currencyList = Selector('select#customerCurrency');
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

export default new HomePage();
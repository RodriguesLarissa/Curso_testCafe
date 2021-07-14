import { Selector } from "testcafe";

class CartPage {
    constructor(){
        this.termsLabel = Selector("input#termsofservice");
        this.cartTotal = Selector("span[class*='value-summary']");
        this.checkoutBtn = Selector("button#checkout");
    }
}

export default new CartPage();
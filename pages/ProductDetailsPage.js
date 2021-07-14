import { Selector } from "testcafe";

class ProductDetailsPage{
    constructor(){
        this.productPrice = Selector("span#price-value-4").withText('$1,800.00');
        this.productQuantity = Selector("input#product_enteredQuantity_4");
        this.addToCart = Selector("button#add-to-cart-button-4");
        this.successMessage = Selector("div[class*='bar-notification success']");
    }

}

export default new ProductDetailsPage();
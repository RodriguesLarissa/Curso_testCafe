import { Selector } from "testcafe";

class SearchResultPage {
    constructor(){
        this.productTitle = Selector('a').withText('Apple MacBook Pro 13-inch');
    }
}

export default new SearchResultPage();
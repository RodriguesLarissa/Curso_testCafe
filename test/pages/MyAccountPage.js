import { Selector } from "testcafe";

class MyAccountPage {
    constructor() {
      this.ordersLink = Selector('a').withText('Orders')
      this.noOrdersLabel = Selector('div.no-data').withText('No orders');
    }
}
  
export default new MyAccountPage();
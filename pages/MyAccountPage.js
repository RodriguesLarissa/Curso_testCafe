import { Selector } from "testcafe";

class MyAccountPage {
    constructor() {
      this.ordersLink = Selector("a[href='/order/history']");
      this.noOrdersLabel = Selector('div.no-data').withText('No orders');
    }
}
  
export default new MyAccountPage();
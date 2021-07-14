import { Selector, t } from "testcafe";

class CheckOutPage{
    constructor(){
        this.countryList = Selector("select#BillingNewAddress_CountryId")
        this.cityTxt = Selector("input#BillingNewAddress_City")
        this.addressTxt = Selector("input#BillingNewAddress_Address1")
        this.zipTxt = Selector("input#BillingNewAddress_ZipPostalCode")
        this.phoneTxt = Selector("input#BillingNewAddress_PhoneNumber")
        this.continueBtn = Selector("button[class*='button-1 new-address-next-step-button']")
        this.nextDayOption = Selector("button[class*='button-1 shipping-method-next-step-button']")
        this.nextShippingBtn = Selector("button[class*='button-1 payment-method-next-step-button']")
        this.nextPaymentBtn = Selector("button[class*='button-1 payment-info-next-step-button']")
        this.nextConfirmBtn = Selector("button[class*='button-1 confirm-order-next-step-button']")
        this.orderConfirmationMessage = Selector('strong').withText('Your order has been successfully processed!')
        this.viewOrderDetailsLink = Selector('a').withText('Click here for order details.')
    }

    async selectCountry(country){
        const countryOption = this.countryList.find('option');
        await t
        .click(this.countryList)
        .click(countryOption.withText(country));
    }
}

export default new CheckOutPage();
import { Selector, t } from "testcafe";

class RegisterPage{
    constructor(){
        this.genderOption = Selector('gender-male')
        this.firstName = Selector('input#FirstName')
        this.lastName = Selector('input#LastName')
        this.birthDayList = Selector("select[name='DateOfBirthDay']")
        this.birthMonthList = Selector("select[name='DateOfBirthMonth']")
        this.birthYearList = Selector("select[name='DateOfBirthYear']")
        this.email = Selector('input#Email')
        this.password = Selector('input#Password')
        this.confirmPassword = Selector('input#ConfirmPassword')
        this.registerButton = Selector('button#register-button')
        this.successfullMessage = Selector('div.result').withText('Your registration completed');
    }

    async selectDay(day){
        const DayOption = this.birthDayList.find('option');
        await t
            .click(this.birthDayList)
            .click(DayOption.withText(day));
    }
}

export default new RegisterPage();
import { Selector } from "testcafe";

const iframeName = Selector('iframe#mce_0_ifr');
const textArea = Selector('body#tinymce.mce-content-body');

fixture("iFrame Fixture")
    .page("http://the-internet.herokuapp.com/iframe");

test("iFrame Test", async t =>{
    await t
        .switchToIframe(iframeName)
        .click(textArea)
        .pressKey('ctrl+a delete')
        .typeText(textArea, 'Hello, my name is Larissa')
        .expect(textArea.innerText).contains('Larissa')
        .switchToMainWindow();
});
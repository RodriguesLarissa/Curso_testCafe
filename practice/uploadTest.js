import { Selector } from 'testcafe';

const fileUpload = Selector('input#file-upload');
const fileUploadButton = Selector('input#file-submit.button');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

test("File Upload Test", async t =>{
    await t
        .setFilesToUpload(fileUpload, 'upload/img.jpg')
        .clearUpload(fileUpload)
        .setFilesToUpload(fileUpload, 'upload/img.jpg')
        .debug()
        .click(fileUploadButton);
});
import { Selector, ClientFunction } from 'testcafe';

// Client-Side Info
const getPageURL = ClientFunction(() => window.location.href);

// Name
const developerName = Selector("#developer-name");
const populateName = Selector("input#populate");

// Options
const macOption = Selector("#macos");
const windowsOption = Selector("#windows");

// Checkbox
const interfaceSelect = Selector("select#preferred-interface");
const interfaceOptions = interfaceSelect.find("option");

// Slider
const checkboxTriedTestCafe = Selector("label").withText("I have tried TestCafe");
const slider = Selector("#slider");

// Submit
const submitButton = Selector("#submit-button");



fixture.meta('version', '1')("Tests")
    .page("https://devexpress.github.io/testcafe/example/")
    .beforeEach(async t =>{
        await t 
            .maximizeWindow()
            .setTestSpeed(0.1)
    });

test.only
    ("First Test", async t =>{
        await developerName.with({ visibilityCheck: true })();
        await t
            .typeText(developerName, "Larissa")
            .click(macOption)
            .takeElementScreenshot(submitButton)
            .click(submitButton)
            .takeScreenshot()
            .expect(getPageURL()).contains('thank-you');
    });

test
    ("Second Test", async t =>{
        await t
            .typeText(developerName, "Leonardo")
            .click(windowsOption)
            .click(submitButton);
    });

test
    ("Select Element Test", async t =>{
        await t
            .click(interfaceSelect)
            .click(interfaceOptions.withText('Both'));
    });

test
    ("Drag Test", async t =>{
        await t 
            .click(checkboxTriedTestCafe)
            .drag(slider, 720, 0, {offsetX:10, offsetY:10});
    });

test
    ("Hover Test", async t =>{
        await t 
            .hover(populateName);
    });

test.skip
    .meta('env', 'production')
    ("Assertion Test", async t =>{
        await t 
            .expect(developerName.value).eql('', 'Input is empty')
            .typeText(developerName, "Larissa")
            .expect(developerName.value).eql('Larissa', 'Input contains Larissa')
            .click(windowsOption)
            .click(submitButton)
    });
import { Selector } from 'testcafe';

const developerName = Selector("#developer-name");
const macOption = Selector("#macos");
const windowsOption = Selector("#windows");
const submitButton = Selector("#submit-button");

fixture.meta('version', '1')("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test
    .meta('env', 'production')
    ("First Test", async t =>{
        await t
            .typeText(developerName, "Larissa")
            .click(macOption)
            .click(submitButton);
    });

test
    ("Second Test", async t =>{
        await t
            .typeText(developerName, "Leonardo")
            .click(windowsOption)
            .click(submitButton);
    });

test
    ("Navigate Test", async t =>{
        await t
            .navigateTo("http://www.google.com");
    });


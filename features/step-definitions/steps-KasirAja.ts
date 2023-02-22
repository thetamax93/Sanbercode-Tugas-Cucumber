import {Given, When, Then} from '@wdio/cucumber-framework'

//Scenario Login:
Given(/^Website Homepage$/, async () => {
    await browser.url('https://kasirdemo.belajarqa.com'),
    await browser.pause(10),
    expect(browser.url).toHaveUrl('https://kasirdemo.belajarqa.com')
});
//Scenario Add New Feature:
Given(/^Website Dashboard$/, async () => {
    await browser.pause(10),
    expect(browser.url).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')
});
Given(/^Website Pengguna$/, async () => {
    await browser.pause(10),
    expect(browser.url).toHaveUrl('https://kasirdemo.belajarqa.com/users')
});

//Scenario Login:
When (/^I input email : (.+)$/, async (email) => {
    await $("#email").setValue(email),
    await browser.pause(10)
});
When (/^I input password : (.+)$/, async (password) => {
    await $("#password").setValue(password),
    await browser.pause(10)
});
//Scenario Add New Feature:
When (/^I click pengguna button$/, async () => {
    await $(".chakra-stack > a:nth-child(8) > div:nth-child(1)").click(),
    await browser.pause(10)
});
When (/^I click tambah button$/, async () => {
    await $("a.chakra-button").click(),
    await browser.pause(10)
});
When (/^I input user nama : (.+)$/, async (userNama) => {
    await $("#nama").setValue(userNama),
    await browser.pause(10)
});
When (/^I input user email : (.+)$/, async (userEmail) => {
    await $("#email").setValue(userEmail),
    await browser.pause(10)
});
When (/^I input user password (.+)$/, async (userPassword) => {
    await $("#password").setValue(userPassword),
    await browser.pause(10)
});
When (/^I click simpan button$/, async () => {
    await $("//*[text()='simpan']").click(),
    await browser.pause(10)
})
//Scenario Login:
Then (/^I click login button$/, async () => {
    await $(".chakra-button").click(),
    await browser.pause(10),
    expect(browser.url).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard')
})
//Scenario Add New User:
Then (/^I redirected back to Pengguna page$/, async () => {
    await browser.pause(10),
    expect(browser.url).toHaveUrl('https://kasirdemo.belajarqa.com/users')
})
Then (/^I remain on page with message (.+)$/, async (errorMessage) => {
    expect(browser.getElementText).toHaveTextContaining(errorMessage),
    await browser.pause(10)
})




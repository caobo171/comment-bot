

const puppeteer = require('puppeteer');
const readline = require('readline');
// Thay FB_EMAIL bằng email hoặc tên đăng nhập của ban nhé
var username = "Thanhvt14102002@gmail.com";
//Thay FB_PASSWORD bằng passoword của bạn nhé
var password = "Thanhbadao";

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


(async () => {
    // Chạy browser với chế độ headless:false, tức là có giao diện
    const browser1 = await puppeteer.launch({ headless: false });




    const arrays = [
        'a1 vô địch , a1 vô địch',
        ' học ddeeeeeeeeeee ',
        ' tuyetj vơiiiiiiii',
        'co găng len nghin like nao !!',
        ' mỏi tay quá ',
        ' mỏi chân quá',
        'bao giờ cho được triệu lai',
        ' vô địch , vô đối ',
        ' vô danh ',
        'zooooooo',
        'ba mẹ cho tôi đi thi học sinh giỏi GDCD',
        'làng nuoiwcs ơiiiiiiis'
    ]

    const times = [
        1000, 2000, 3000, 4000, 5000, 6000
    ]

    const username = [
        
    ]

    const password = [
        
    ]

    // setInterval(() => {
    const page1 = await browser1.newPage();
    // Truy cập vào trang m.facebook.com
    await page1.goto('https://m.facebook.com');
    // Nhập email vào ô đăng nhập
    await page1.type('#m_login_email', username[0]);
    // Nhập password vào ô đăng nhập
    await page1.type('#m_login_password', password[0]);
    // Click nút đăng nhập
    await page1.click("button[value='Đăng nhập']");
    // Đợi trang tải xong
    await page1.waitForNavigation();
    await page1.goto('https://www.facebook.com/groups/498824677221016/permalink/605947773175372/');

    // Foreach mảng messages, nhớ delay không ăn checkpoint của facebook nha


    let i = 0
    let timer1 = await setInterval(async () => {

        await page1.click('form._129h')
        await page1.waitFor('div[role="textbox"]')
        await page1.type('div[role="textbox"]', arrays[i % 6])

        await page1.keyboard.press('Enter')
        let result = ''

        await setTimeout(async () => {
            result = await page1.$(`h3[data-tooltip-display="overflow"]`)
            if (result) {
                console.log('okkkkkk')
                clearInterval(timer1)
                await browser1.close();
            }
        }, 1000)
        i++

    }, getRandomArbitrary(3, 5) * 1000)


    setInterval(async () => {

        // setInterval(() => {
        const browser = await puppeteer.launch({ headless: false });

        const page = await browser.newPage();
        // Truy cập vào trang m.facebook.com
        await page.goto('https://m.facebook.com');
        // Nhập email vào ô đăng nhập
        await page.type('#m_login_email', username[0]);
        // Nhập password vào ô đăng nhập
        await page.type('#m_login_password', password[0]);
        // Click nút đăng nhập
        await page.click("button[value='Đăng nhập']");

        await page.waitForNavigation();
        // Đợi trang tải xong
        await page.goto('https://www.facebook.com/groups/498824677221016/permalink/605947773175372/');
        let timer = await setInterval(async () => {
            await page.click('form._129h')
            await page.waitFor('div[role="textbox"]')
            await page.type('div[role="textbox"]', arrays[i % 6])

            await page.keyboard.press('Enter')
            let result = ''

            await setTimeout(async () => {
                result = await page.$(`h3[data-tooltip-display="overflow"]`)
                if (result) {
                    console.log('okkkkkk')
                    clearInterval(timer)
                    await browser.close()
                }
            }, 1000)
            i++

        }, getRandomArbitrary(3, 5) * 1000)
    }, 5 * 60 * 1000)



})();
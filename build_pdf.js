const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    console.log('Generating PDF...');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    const filePath = path.join(__dirname, 'resume_print.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
    
    await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.4in',
            bottom: '0.4in',
            left: '0.4in',
            right: '0.4in'
        }
    });

    console.log('PDF Generation Complete');
    await browser.close();
}

generatePDF().catch(console.error);

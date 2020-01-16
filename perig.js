async function run() {
	
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000

var util = require('util') // udh
var bodyParser = require('body-parser'); //udh
var app = express()

const {installMouseHelper} = require('./mouse');
const puppeteer = require('puppeteer');
const fs = require('fs');
const http = require('http');
const rawdata = require('./asylumcookies.json');

  
var urlencodedParser = bodyParser.json({ extended: false } )





const TWEET_SELECTOX = '#react-root';

const SCREENNAME_SELECTORX ='#react-root';

const DATE_SELECTOX ='#react-root';

const STATID_SELECTOX='#react-root';

const REPLY_SELECTOR = '#react-root';



var seluruh = new Array();



  const browser = await puppeteer.launch({ 
  headless: true,
   args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
  ],
  } );
  const page = await browser.newPage();
  
    await page.setCookie(rawdata[0])
  await page.setCookie(rawdata[1])
  await page.setCookie(rawdata[2])
  await page.setCookie(rawdata[3])
  await page.setCookie(rawdata[4])
  
   await page.setCookie(rawdata[5])
  await page.setCookie(rawdata[6])
  await page.setCookie(rawdata[7])
  await page.setCookie(rawdata[8])
  await page.setCookie(rawdata[9])
  
   await page.setCookie(rawdata[10])
  await page.setCookie(rawdata[11])
  await page.setCookie(rawdata[12])
  await page.setCookie(rawdata[13])
  await page.setCookie(rawdata[14])
  
   await page.setCookie(rawdata[15])
  await page.setCookie(rawdata[16])
  //await page.setCookie(cookie18)
 // await page.setCookie(cookie19)
 // await page.setCookie(cookie20)
  await page.goto('https://twitter.com');
  
 

	 
	   let chain = Promise.resolve();
	   
	   await page.waitForNavigation()
	   
	   console.log('ready for reqest');
	   
express()

.post('/process_post', urlencodedParser, function (req, res) {
   

  if(req.body.first_name == "acheng")
  {
	  response = {
     // first_name:req.body.first_name,
	first_name:'sebastian Stan itu aslinya acheng cuyyyy',
      last_name:req.body.last_name
   };
   res.end(JSON.stringify(response));
	  
  }
  else
  {
  chain = chain.then(async () => {
	 // await page.goto('https://twitter.com/search?q=Aku%20gak%20pantas%20buat%20cewek%20baik%20sepertimu%20%3A)%20(from%3Akausaraswanda)&src=typed_query', {waitUntil: 'load', timeout: 0});
	 await installMouseHelper(page);
	   const navigationPromise = page.waitForNavigation()
	   
	 await page.goto('https://twitter.com/'+req.body.first_name, {waitUntil: 'load', timeout: 0});
	 console.log('url dengan alamat ==> https://twitter.com/'+req.body.first_name+' telah login')
	  await page.setViewport({
            width: 1200,
            height: 800
			});

			//scroll until twitter is done lazy loading
			await page.waitFor(5*1000);
			
			
	let ada;		
			
	const LENGTH_SELECTOR_CLASS = 'r-1ila09b';
	const LENGTH_SELECTOR_CLASS2 = 'css-1dbjc4n r-1ila09b r-qklmqi r-1adg3ll';
	

		let listLength = await page.evaluate((sel) => 
		{
			return document.getElementsByClassName(sel).length;
		}, LENGTH_SELECTOR_CLASS2);
		
		console.log('list Length reply ->',listLength);
		
		// variable scroll
		let totalHeight = 0;
		let distance = 1000;
		
		if(listLength != null)
		{
			//async function(){
				console.log('ada reply')
				

			let timer = setInterval(async function() 
			{
				
				for (let i = 1; i <= listLength; i++) 
				{
							let replySelector = REPLY_SELECTOR;
				
							try{
										let reply = await page.evaluate((replySelector,i) => {
										let element = document.querySelector(replySelector);
										return element? element.firstChild.firstChild.childNodes[1].childNodes[3].firstChild.firstChild.firstChild.firstChild.firstChild.childNodes[1].firstChild.firstChild.childNodes[1].firstChild.firstChild.childNodes[i-1].firstChild.firstChild.firstChild.childNodes[1].childNodes[1].childNodes[2].firstChild.innerHTML: null;
										}, replySelector,i);
						
											console.log('isi reply ==>',reply);
											console.log('nilai i ==>',i);
						
											
						
									if(reply == req.body.last_name)
									{
									console.log('ada kesamaan')
									ada ='kereply';
									
									
									}
										else
									{
										console.log('kaga ada kesamaan')
										}
						
						
							console.log('nilai ada =>',ada.toString())
							}
							catch(err) 
										{
											
											console.log('kaga ke trace')
											console.log('')
											console.log('nilai i ==>',i);
										
										}

					}
				
					res.write(JSON.stringify('{status:"still querry",rows:"undefined"}'));
											console.log("seluruh sebagian");
																
						let scrollHeight =await page.evaluate(function() {return document.body.scrollHeight});
						

						//scroll and increment
			
						await page.evaluate((sel)=>{
					
						return window.scrollBy(0, sel);
						
                    
							},distance)
							
							
				
					//window.scrollBy(0, distance);
				
					totalHeight += distance;
					console.log('scroll height->',scrollHeight,'  totalHeight->',totalHeight);
					console.log(' ')
			
			
					listLength = await page.evaluate((sel) => 
					{
					return document.getElementsByClassName(sel).length;
					}, LENGTH_SELECTOR_CLASS);
		
					console.log('list Length looping ->',listLength,'======================================================================================================================================');
			
					// hetikan interval saat tidak ada lagi yang bisa di scroll
					
					if (totalHeight >= scrollHeight) {
                        clearInterval(timer);
						if(ada =='kereply')
						{
							res.end('sudah pernah di reply system');
							console.log('karena keberadaan status ==>',ada);
						}
						else{
							res.end('gak pernah di reply');
						}
											
										
                   }
				   
				   
				 }, 4000);
			

		}
		else{
			
			console.log('gak ada reply')
		
		}
		
		
		
		
		listLength=0;
		
	
	  });
	  
  }
   
}).listen(PORT, () => console.log(`Listening on ${ PORT }`))

 
}

run();

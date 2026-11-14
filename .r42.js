const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();
for(const l of ['en','ja','zh','ko']){const c=await b.newContext();const p=await c.newPage();const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.addInitScript(l=>{localStorage.setItem('ibbio.lang',l);localStorage.setItem('ibbio.welcomed','1')},l);
await p.goto('file:///home/user/2028-IBBiology-HL/index.html#topic-a4-2');await p.waitForTimeout(1500);
const t=await p.evaluate(()=>document.body.innerText);
const noB=t.replace(/\([^)]*\)/g,'').replace(/[A-Za-z0-9.,;:'"%\/\-–—=×÷−\s]+/g,' ');
const eng=(t.match(/[A-Za-z]{4,}(?: [A-Za-z]{3,}){2,}/g)||[]).slice(0,8);
console.log(l,t.length,errs,l!=='en'?eng:'');await c.close()}
await b.close()})()

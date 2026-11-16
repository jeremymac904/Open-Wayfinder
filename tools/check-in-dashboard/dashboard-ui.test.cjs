const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const html=fs.readFileSync('dashboard.html','utf8'),code=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
class E{constructor(){this.children=[];this.textContent='';this.value='';this.handlers={}}addEventListener(t,f){this.handlers[t]=f}appendChild(c){this.children.push(c)}replaceChildren(){this.children=[]}setAttribute(){}reset(){}}
const ids=['checkin','message','entries','summary','asof','window','days','export','import','clear'],els=Object.fromEntries(ids.map(id=>[id,new E()]));els.window.value='7';
const memory={};const ctx={window:{WayfinderDashboard:require('./dashboard-core')},document:{getElementById:id=>els[id],createElement:()=>new E()},localStorage:{getItem:k=>memory[k]||null,setItem:(k,v)=>memory[k]=v},FormData:class{constructor(){return Object.entries({date:'2026-11-16',mood:'7',energy:'',stress:'3',connection:'5',confidence:'8',note:'A good day'})}},confirm:()=>true,Date,URL,Blob,setTimeout,console};
vm.runInNewContext(code,ctx);els.asof.value='2026-11-16';els.checkin.handlers.submit({preventDefault(){}});
assert.equal(JSON.parse(memory['open-wayfinder-checkins-v1']).entries[0].mood,7);assert.equal(els.entries.children.length,1);assert.equal(els.summary.children.length,5);assert.equal(els.message.textContent,'Check-in saved on this device.');
els.clear.onclick();assert.equal(JSON.parse(memory['open-wayfinder-checkins-v1']).entries.length,0);
console.log('Check-in UI save, summary, rendering and confirmed clear checks passed');

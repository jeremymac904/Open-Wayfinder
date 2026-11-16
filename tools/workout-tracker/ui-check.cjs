const fs = require('fs'), vm = require('vm'), assert = require('assert/strict');
const html=fs.readFileSync('index.html','utf8');
const code=html.match(/<script>\s*([\s\S]*?)<\/script>/)[1];
class Element {
  constructor(){this.children=[];this.textContent='';this.handlers={};}
  addEventListener(type, fn){this.handlers[type]=fn;}
  appendChild(child){this.children.push(child);}
  replaceChildren(){this.children=[];}
  setAttribute(){}
  reset(){}
}
const names=['entryForm','message','entries','count','export','import','clear'];
const els=Object.fromEntries(names.map(x=>[x,new Element()]));
const memory={};
const context={window:{WayfinderTracker:require('./tracker-core')},document:{getElementById:k=>els[k],createElement:()=>new Element()},localStorage:{getItem:k=>memory[k]||null,setItem:(k,v)=>memory[k]=v},FormData:class {constructor(){return Object.entries({date:'2026-11-16',exercise:'Row',sets:'3',reps:'10',weight:'25',unit:'lb',loadType:'per hand',notes:''})}},confirm:()=>true,setTimeout,URL,Blob,console};
vm.runInNewContext(code,context);
els.entryForm.handlers.submit({preventDefault(){}});
assert.equal(JSON.parse(memory['open-wayfinder-workout-v1']).entries[0].exercise,'Row');
assert.equal(els.entries.children.length,1);
assert.equal(els.message.textContent,'Entry saved on this device.');
els.clear.onclick();
assert.equal(JSON.parse(memory['open-wayfinder-workout-v1']).entries.length,0);
console.log('UI handler save, render and confirmed clear checks passed');

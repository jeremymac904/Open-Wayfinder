(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.WayfinderDashboard=api;})(globalThis,function(){
  const metrics=['mood','energy','stress','connection','confidence'];
  function parseDate(value){
    const date=String(value||'');const d=new Date(date+'T00:00:00Z');
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(d.getTime())||d.toISOString().slice(0,10)!==date)throw Error('Enter a valid date.');
    return date;
  }
  function makeEntry(value){
    if(!value||typeof value!=='object')throw Error('Invalid check-in.');
    const out={date:parseDate(value.date)};
    for(const key of metrics){let x=value[key];if(x===null||x===undefined||x===''){out[key]=null;continue;}x=Number(x);if(!Number.isInteger(x)||x<1||x>10)throw Error('Ratings must be whole numbers from 1 to 10.');out[key]=x;}
    out.note=String(value.note||'').trim();if(out.note.length>2000)throw Error('Notes are too long.');
    if(metrics.every(k=>out[k]===null)&&!out.note)throw Error('Enter at least one rating or a note.');
    return out;
  }
  function upsert(entries, entry){const e=makeEntry(entry);return [...entries.filter(x=>x.date!==e.date),e].sort((a,b)=>a.date.localeCompare(b.date));}
  function exportData(entries){return JSON.stringify({version:1,entries:entries.map(makeEntry)},null,2);}
  function readExport(text){const data=JSON.parse(text);if(!data||data.version!==1||!Array.isArray(data.entries)||data.entries.length>10000)throw Error('Invalid or unsupported backup.');const entries=data.entries.map(makeEntry);if(new Set(entries.map(e=>e.date)).size!==entries.length)throw Error('Backup has duplicate dates.');return {version:1,entries};}
  function summary(entries,asOf,days){
    const end=Date.parse(parseDate(asOf)+'T00:00:00Z');
    if(!Number.isInteger(days)||days<1||days>366)throw Error('Invalid period.');
    const selected=entries.map(makeEntry).filter(e=>{const d=Date.parse(e.date+'T00:00:00Z');return d<=end&&d>=end-(days-1)*86400000;});
    const out={days:new Set(selected.map(e=>e.date)).size};
    for(const key of metrics){const vals=selected.map(e=>e[key]).filter(x=>x!==null);out[key]={count:vals.length,mean:vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length*10)/10:null};}
    return out;
  }
  return {metrics,makeEntry,upsert,exportData,readExport,summary};
});

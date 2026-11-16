(function(root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.WayfinderTracker = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  function makeEntry(x) {
    if (!x || typeof x !== 'object') throw Error('Invalid entry.');
    const date = String(x.date || '');
    const dt = new Date(date + 'T00:00:00Z');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(dt.getTime()) || dt.toISOString().slice(0,10) !== date) throw Error('Enter a valid date.');
    const exercise = String(x.exercise || '').trim();
    if (!exercise || exercise.length > 160) throw Error('Enter an exercise name.');
    const sets = Number(x.sets), reps = Number(x.reps), weight = Number(x.weight);
    if (!Number.isInteger(sets) || sets < 1 || sets > 100 || !Number.isInteger(reps) || reps < 1 || reps > 1000) throw Error('Enter positive whole numbers for sets and reps.');
    if (x.weight === '' || x.weight === undefined || !Number.isFinite(weight) || weight < 0 || weight > 100000) throw Error('Enter a valid weight (0 for bodyweight).');
    const unit = String(x.unit || '');
    const loadType = String(x.loadType || '');
    if (!['lb','kg'].includes(unit) || !['per hand','total','bodyweight'].includes(loadType)) throw Error('Select weight units and load type.');
    const notes = String(x.notes || '').trim();
    if (notes.length > 2000) throw Error('Notes are too long.');
    return {date,exercise,sets,reps,weight,unit,loadType,notes};
  }
  function exportData(entries) {return JSON.stringify({version:1,entries:entries.map(makeEntry)},null,2);}
  function readExport(text) {
    const obj = JSON.parse(text);
    if (!obj || obj.version !== 1 || !Array.isArray(obj.entries) || obj.entries.length > 10000) throw Error('Invalid or unsupported file.');
    return {version:1,entries:obj.entries.map(makeEntry)};
  }
  function removeEntry(entries,index) {return entries.filter((_,i)=>i!==index);}
  return {makeEntry,exportData,readExport,removeEntry};
});

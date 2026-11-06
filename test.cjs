const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const {search}=require('./search.js');
const data=vm.runInNewContext(fs.readFileSync(__dirname+'/data.js','utf8')+';RECIPE_DATA');
assert.equal(search(data.menus,'라떼')[0].name,'카페라떼');
assert.equal(search(data.menus,' 카페 라떼!! ')[0].name,'카페라떼');
assert(search(data.menus,'딸기').every(x=>x.name.includes('딸기')));
assert.equal(search(data.menus,'없는메뉴123').length,0);
assert.equal(search([{name:'음, 괜찮은 휴식이군....',order:1}],'휴식').length,1);
assert.equal(data.menus.reduce((n,m)=>n+m.variants.length,0),128);
assert(!data.menus.some(m=>m.variants.some(v=>v.id===107||(v.id>=114&&v.id<200))));
for(const m of data.menus)for(const v of m.variants){assert(v.method);if(v.status==='unverified'){assert(v.unknown);assert(/^https:\/\/(quizlet\.com|www\.youtube\.com)\//.test(v.source_url));}else assert(v.page>=1&&v.page<=5);}
console.log('PASS: 검색 순위, 부분 검색, 문장부호, 빈 결과, 112개 PDF 레시피 + 16개 확인 필요 자료');

assert.equal(search(data.menus,'꿀배')[0].variants[0].status,'unverified');

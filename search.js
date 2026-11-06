(function(root){
const normalize=s=>String(s).normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu,'');
function rank(menu,query){const q=normalize(query),n=normalize(menu.name);if(!q)return 1;if(n===q)return 1000;if((menu.aliases||[]).some(a=>normalize(a)===q))return 950;if(n.startsWith(q))return 800-n.length;if(n.includes(q))return 600-n.length;if((menu.aliases||[]).some(a=>normalize(a).includes(q)))return 400;return 0;}
function search(menus,query){return menus.map(m=>({m,score:rank(m,query)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.m.order-b.m.order).map(x=>x.m);}
root.RecipeSearch={normalize,rank,search};if(typeof module!=='undefined')module.exports=root.RecipeSearch;
})(typeof window!=='undefined'?window:globalThis);

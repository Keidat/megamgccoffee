import json, shutil
from pathlib import Path
p=Path(__file__).parent
source=p.parent/'output'/'megacoffee'
d=json.loads((source/'recipes.json').read_text(encoding='utf-8'))
groups={}
for c in d['current_drinks']:
    if not c['recipe_id']: continue
    r=next(r for r in d['pdf_recipes'] if r['id']==c['recipe_id'])
    g=groups.setdefault(c['name'],dict(name=c['name'],order=r['id'],aliases=[],variants=[]))
    if r['name'] != c['name'] and r['name'] not in g['aliases']:g['aliases'].append(r['name'])
    if not any(v['id']==r['id'] for v in g['variants']):g['variants'].append(r)
    g['order']=min(g['order'],r['id'])
groups['카페라떼']['aliases']+=['라떼','카페 라테','카페라테','latte']
menus=sorted(groups.values(),key=lambda m:m['order'])
menus += json.loads((p/'supplemental.json').read_text(encoding='utf-8'))
(p/'data.js').write_text('const RECIPE_DATA = '+json.dumps(dict(menus=menus,bases=d['bases']),ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
shutil.copy2(source/'source.pdf',p/'source.pdf')
(p/'.nojekyll').touch()
print(json.dumps({'menus':len(menus),'variants':sum(len(m['variants']) for m in menus)},ensure_ascii=False))

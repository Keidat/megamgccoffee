import json
from pathlib import Path

p = Path(__file__).parent
source = 'https://www.youtube.com/watch?v=ESBfNCg7F_8'
items = json.loads((p / 'supplemental.json').read_text(encoding='utf-8'))
records = [
    (215, '쫀득 모찌 밀크티', 'ICE', '얼음을 넣는 장면 확인 · 양 미확인',
     '미리 혼합한 밀크티 · 배합과 양 미확인', '컵 바닥의 흰 모찌 재료 · 제품명과 양 미확인', '추가 토핑 미확인',
     '1:22 컵 바닥에 흰 모찌 재료가 담긴 상태 확인 → 1:32 얼음이 담긴 컵에 미리 혼합한 밀크티를 부음 → 1:48 돔 뚜껑으로 마감된 상태 확인',
     '컵 규격, 모찌 제품·양, 밀크티의 원료와 배합·양, 얼음량. 편집된 영상의 일부 장면이며 전체 제조법이 아닙니다.', 82),
    (216, '딥 초코 체리 프라페', 'ICE', '혼합용 얼음량 미확인',
     '초코색 블렌딩 음료 · 배합과 양 미확인', '컵 안쪽의 붉은 소스 · 제품명과 양 미확인', '휘핑크림 · 양 미확인; 이후 토핑 규격 미확인',
     '2:45 붉은 소스가 컵 안쪽에 묻은 상태에서 블렌딩 음료를 담음 → 3:01 휘핑크림을 올림 → 3:11 이후 추가 토핑 작업이 있으나 제품과 양은 식별하지 못함 → 3:37 돔 뚜껑으로 마감',
     '컵 규격, 액상·파우더·얼음 계량, 블렌더 번호, 소스 제품과 양, 휘핑량, 마지막 토핑 제품과 양. 색으로 원료를 확정하지 않았습니다.', 165),
]
for ident, name, temp, ice, liquid, ingredients, topping, method, unknown, seconds in records:
    entry = dict(name=name, order=ident, aliases=[], variants=[dict(
        id=ident, temp=temp, cup='미확인', shot='미확인', ice=ice,
        liquid=liquid, ingredients=ingredients, topping=topping, method=method,
        status='unverified', evidence_type='video', unknown=unknown,
        source_label='골때리는메린이 · 겨울신메뉴 제조 브이로그, 영상 장면 직접 확인 (2026-11-06)',
        source_url=source + '&t=' + str(seconds) + 's')])
    items = [x for x in items if x['order'] != ident]
    items.append(entry)
(p / 'supplemental.json').write_text(json.dumps(items, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

app = (p / 'app.js').read_text(encoding='utf-8')
app = app.replace("'<small class=\"pending\">${m.variants[0].availability?\"과거 시즌 · \":\"\"}비공식 자료 · 확인 필요</small>'", "`<small class=\"pending\">${m.variants[0].availability?'과거 시즌 · ':''}비공식 자료 · 확인 필요</small>`")
app = app.replace("escape(r.cup)+' oz'", "escape(r.cup)+(/^\\d+(\\.\\d+)?$/.test(r.cup)?' oz':'')")
app = app.replace('비공식 계량 자료 · 완전한 제조법 아님', '비공식 추가 자료 · 완전한 제조법 아님')
app = app.replace("'자료에 기재된 공정'", "(r.evidence_type==='video'?'영상에서 확인한 부분 공정':'자료에 기재된 공정')")
(p / 'app.js').write_text(app, encoding='utf-8')

t = (p / 'test.cjs').read_text(encoding='utf-8').replace(',126)', ',128)').replace("v.source_url.startsWith('https://quizlet.com/')", "/^https:\\/\\/(quizlet\\.com|www\\.youtube\\.com)\\//.test(v.source_url)").replace('14개 확인 필요 자료', '16개 확인 필요 자료')
(p / 'test.cjs').write_text(t, encoding='utf-8')
pending_path = p.parent / 'output/megacoffee/pending_recipes.json'
pending = json.loads(pending_path.read_text(encoding='utf-8'))
for r in pending['current_drinks']:
    if r['name'] in [x[1] for x in records]:
        r['status'] = '영상 부분 공정 확보 · 계량 미확인'
pending_path.write_text(json.dumps(pending, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')

readme = (p / 'README.md').read_text(encoding='utf-8')
start = readme.index('2026-11-06:')
end = readme.index('\n\n## 갱신', start)
readme = readme[:start] + '2026-11-06: 총 99개 메뉴 / 128개 온도별 항목입니다. PDF 112개와 비공식 추가 자료 16개로 구성됩니다. 추가 자료에는 계량이 불완전한 암기자료와 영상에서 확인한 부분 공정이 포함됩니다. 목록과 상세 화면에 누락 정보와 출처를 표시하며 완전한 제조법으로 분류하지 않습니다. `supplemental.json`에서 관리합니다.' + readme[end:]
(p / 'README.md').write_text(readme, encoding='utf-8')

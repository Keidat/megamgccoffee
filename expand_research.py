import json
from pathlib import Path
p=Path(__file__).parent
f=p/'supplemental.json';items=json.loads(f.read_text(encoding='utf-8'))
r=items[0]['variants'][0]
r['method']='물 150ml·자몽 톡톡 베이스 4P·얼음을 블렌더 3번으로 혼합 → 20oz 컵에 베이스 1P를 넣고 컵을 돌려 벽면에 묻힘 → 음료를 8부선 이하까지 담음 → 액상을 제외한 자몽셀 2래들을 올림'
r['unknown']='얼음 계량 용기, 베이스 제품 규격, 현행 적용 여부. 두 비공식 자료의 기본 계량은 일치하나 본사 매뉴얼 확인은 아님.'
r['source_label']='Quizlet ‘메가커피 여름 시즌 메뉴’ · 검색 색인 확인. 기존 ‘시즌’ 자료와 기본 계량 비교 (2026-11-06)'
r['source_url']='https://quizlet.com/kr/1197418110/메가커피-여름-시즌-메뉴-flash-cards/'
def add(id,name,cup,liquid,ingredients,topping,method,unknown,url,label,ice='양 미기재'):
    if any(m['order']==id for m in items):return
    items.append(dict(name=name,order=id,aliases=[],variants=[dict(id=id,temp='ICE',cup=cup,shot='자료 미기재',ice=ice,liquid=liquid,ingredients=ingredients,topping=topping,method=method,status='unverified',availability='과거 시즌 자료 · 현재 판매 미확인',unknown=unknown+' / 현행 적용·현재 판매 미확인',source_label=label+' · 비공식 자료, 검색 색인 확인 (2026-11-06)',source_url=url)]))
u='https://quizlet.com/kr/1131918145/메가커피-2026-딸기-시즌-flash-cards/'
l='Quizlet ‘메가커피 2026 딸기 시즌’'
add(203,'그린키위 콕콕 딸기스무디','20','물 150ml','그린베이스 3P, 가당딸기 100ml','미기재','물·그린베이스·얼음을 블렌더 3번으로 혼합 → 컵에 가당딸기를 담아 자름 → 블렌더 음료를 부음','얼음량, 그린베이스 제품 규격',u,l)
add(204,'말차젤라또 퐁당 딸기프라페','20','우유 200ml, 녹차베이스 25ml','딸기밀크쉐이크파우더 5래들, 딸기분태 1래들','말차젤라또 1스쿱, 딸기분태','우유·파우더·분태·얼음을 블렌더 3번으로 혼합 → 컵에 녹차베이스와 혼합 음료 일부를 섞음 → 나머지 음료와 토핑을 올림','얼음량, 토핑 분태량, 소량 혼합 기준',u,l)
add(205,'딸기젤라또 퐁당 딥 초코라떼','20','우유 125ml에 초코베이스를 더해 총 175ml선','시럽 3회(종류 미기재), 가당딸기 150ml','딸기젤라또 1스쿱, 딸기드리즐','계량컵의 우유·초코베이스·시럽을 혼합 → 컵에 가당딸기를 담아 자르고 얼음을 넣음 → 혼합액과 토핑 투입','시럽 종류·1회 단위, 얼음량, 드리즐량',u,l)
add(206,'딸기폼 말캉 젤리워터','20','매직베이스 A선','매직젤리 컵 밑선','딸기폼','컵에 젤리·얼음·베이스·폼을 순서대로 담고 납작 뚜껑 사용','얼음량, 폼량·배합, 베이스·젤리 규격',u,l)
add(207,'로꾸거 딸기젤라또 콘케이크','14','미기재','믹스시리얼 2래들, 초코크런치볼 1래들, 콘케이크','딸기젤라또 총 2스쿱, 레인보우스프링클','컵에 시리얼·크런치볼 준비 → 콘케이크에 젤라또를 두 번에 나눠 올림 → 콘을 비스듬히 뒤집어 담고 스프링클 토핑. 계량컵을 이용하는 중간 조립 과정은 원문만으로 불명확함.','콘케이크 규격·개수, 중간 조립법, 스프링클량. 원문 메뉴명은 로꾸꼬로 표기',u,l,ice='자료 미기재')
u='https://quizlet.com/kr/912460699/메가커피-레시피_5월-신메뉴-flash-cards/'
l='Quizlet ‘메가커피 레시피_5월 신메뉴’ (연도 미확인)'
add(208,'탱글탱글 포도알 티플레저','24','사이다 200ml','포도베이스 혼합용 3래들 + 별도 1래들, 화이트펄 2래들','미기재','사이다·포도베이스 3래들·얼음을 블렌더 3번으로 5초 혼합 → 별도 베이스 1래들·화이트펄 2래들 투입 후 붓기로 기재','마지막 베이스·펄의 투입 위치, 베이스 규격',u,l,'24oz (원문 계량)')
add(209,'파란하늘 수박소다 펄 프라페','20','우유 200ml, 수박주스 베이스 컵 밑선(75ml)','슈가시럽 2P, 소다파우더 4래들, 화이트펄 2래들','미기재','우유·시럽·파우더·얼음 블렌딩 → 컵에 수박베이스와 펄을 담고 혼합 음료를 부음','블렌더 설정, 원료 규격',u,l,'20oz (원문 계량)')
add(210,'몽글젤리 복숭아 스무디','20','물 150ml, 복숭아스무디베이스 250ml','슈가시럽 2P, 복숭아워터젤리 컵 밑선','미기재','물·베이스·시럽·얼음 블렌딩 → 컵에 젤리를 담고 혼합 음료를 부음','블렌더 설정, 얼음량, 젤리 규격',u,l)
add(211,'오이오이 라임 오히또','24','제로사이다 (양 미기재)','라임 4개, 민트잎 4개, 오히또베이스 3래들','미기재','라임·민트·베이스·얼음·제로사이다를 담고 젓는 순서로 기재','라임 조각 규격, 얼음·사이다 양, 머들링 여부',u,l)
f.write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
f=p/'app.js';s=f.read_text(encoding='utf-8');s=s.replace('<h2>${escape(m.name)}</h2>','<h2>${escape(m.name)}</h2>${r.availability?`<p class="note">${escape(r.availability)}</p>`:""}');s=s.replace('<small class="pending">비공식 자료 · 확인 필요</small>','<small class="pending">${m.variants[0].availability?"과거 시즌 · ":""}비공식 자료 · 확인 필요</small>');f.write_text(s,encoding='utf-8')
f=p/'test.cjs';s=f.read_text(encoding='utf-8').replace('0),114','0),123').replace('2개 확인 필요 자료','11개 확인 필요 자료');f.write_text(s,encoding='utf-8')
# Track all current gaps rather than presenting historical additions as current coverage.
d=json.loads((p.parent/'output/megacoffee/recipes.json').read_text(encoding='utf-8'))
pending={'checked_at':'2026-11-06','current_drinks':[dict(name=c['name'],temp=c['temp'],status='부분 자료' if c['name'] in [m['name'] for m in items] else '제조법 미확보') for c in d['current_drinks'] if not c['recipe_id']], 'current_food':[dict(name=c['name'],status='제조법 미확보') for c in d['current_food']]}
(p.parent/'output/megacoffee/pending_recipes.json').write_text(json.dumps(pending,ensure_ascii=False,indent=2),encoding='utf-8')

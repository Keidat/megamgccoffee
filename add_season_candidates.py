import json
from pathlib import Path
p=Path(__file__).parent
f=p/'supplemental.json';items=json.loads(f.read_text(encoding='utf-8'))
rows=[
 (212,'파인망고 코코스무디','밀크 코코 베이스 250ml','망고파인 베이스 혼합 후 5래들·컵 바닥 1래들, 나타드코코 1래들','파인애플 과육 1래들','코코베이스·얼음 혼합 후 망고파인베이스 5래들을 넣는 것으로 기재. 컵 바닥에 베이스 1래들과 나타드코코를 담고 음료·과육을 올림.','밀크 코코 베이스 배합, 블렌더 설정, 혼합 후 베이스 처리법','가득 (계량 용기 미확인)'),
 (213,'애플 머스켓 요거트스무디','우유 150ml','요거트파우더 3래들, 애플 머스켓 베이스 혼합용 3래들·컵 바닥 1래들, 슈가시럽 1P','자료 미기재','혼합 재료와 얼음, 컵 바닥용 베이스가 구분되어 있음. 전체 공정·기계 설정은 생략됨.','얼음량, 블렌더 설정, 베이스 제품 규격','양 미기재'),
 (214,'M망고 G구아바 C캐럿 주스','물 200ml','전용 주스 1팩','자료 미기재','물과 주스팩, 얼음으로만 기재되어 있어 블렌딩 여부·순서는 미확인.','팩 규격, 얼음량, 제조 순서·장비','양 미기재')]
for id,name,liquid,ingredients,topping,method,unknown,ice in rows:
 if any(m['order']==id for m in items):continue
 items.append(dict(name=name,order=id,aliases=[],variants=[dict(id=id,temp='ICE',cup='20',shot='자료 미기재',ice=ice,liquid=liquid,ingredients=ingredients,topping=topping,method=method,status='unverified',availability='과거 시즌 자료 · 현재 판매 미확인',unknown=unknown+' / 현행 적용 여부',source_label='Quizlet ‘시즌’ · 비공식 암기자료, 검색 색인 확인 (2026-11-06)',source_url='https://quizlet.com/kr/1187425365/시즌-flash-cards/')]))
f.write_text(json.dumps(items,ensure_ascii=False,indent=2),encoding='utf-8')
f=p/'test.cjs';s=f.read_text(encoding='utf-8').replace('0),123','0),126').replace('11개 확인 필요 자료','14개 확인 필요 자료');f.write_text(s,encoding='utf-8')

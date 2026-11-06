from pathlib import Path
p=Path(__file__).parent
f=p/'app.js'
s=f.read_text(encoding='utf-8')
s=s.replace('제조법이 확인된 메뉴만 표시합니다.', '등록된 메뉴명 또는 다른 별칭으로 검색해 보세요.')
s=s.replace("<strong>${escape(m.name)}</strong>","<strong>${escape(m.name)}</strong>${m.variants.some(v=>v.status==='unverified')?'<small class=\"pending\">비공식 자료 · 확인 필요</small>':''}")
s=s.replace('<span class="verified">● PDF 수록</span>', '<span class="verified">${r.status===\'unverified\'?\'△ 확인 필요\':\'● PDF 수록\'}</span>')
s=s.replace('<h3>재료 준비</h3>', '${r.status===\'unverified\'?`<p class="note"><strong>비공식 계량 자료 · 완전한 제조법 아님</strong><br>확인 필요: ${escape(r.unknown)}</p>`:\'\'}<h3>재료 준비</h3>')
s=s.replace('<h3>제조 순서</h3>', '<h3>${r.status===\'unverified\'?\'자료에 기재된 공정\':\'제조 순서\'}</h3>')
s=s.replace('출처 · 사용자 제공 현행 PDF ${r.page}쪽, #${r.id}', '${r.source_label?escape(r.source_label):`출처 · 사용자 제공 현행 PDF ${r.page}쪽, #${r.id}`}')
s=s.replace('href="source.pdf#page=${r.page}"', 'href="${r.source_url?escape(r.source_url):`source.pdf#page=${r.page}`}"')
f.write_text(s,encoding='utf-8')
f=p/'index.html';s=f.read_text(encoding='utf-8').replace('현행 PDF 기준 · 직원용 레시피 노트','현행 PDF + 추가 조사 자료 · 직원용 레시피 노트').replace('제조법 미확보 메뉴·디저트는 아직 수록하지 않았습니다.','추가 조사 메뉴는 비공식 자료·확인 필요 표시와 함께 수록했습니다.');f.write_text(s,encoding='utf-8')
f=p/'test.cjs';s=f.read_text(encoding='utf-8').replace('m.variants.length,0),112','m.variants.length,0),114').replace('v.id>=114','(v.id>=114&&v.id<200)').replace('assert(v.page>=1&&v.page<=5);',"if(v.status==='unverified'){assert(v.unknown);assert(v.source_url.startsWith('https://quizlet.com/'));}else assert(v.page>=1&&v.page<=5);").replace('112개 확인 레시피','112개 PDF 레시피 + 2개 확인 필요 자료');s+="\nassert.equal(search(data.menus,'꿀배')[0].variants[0].status,'unverified');\n";f.write_text(s,encoding='utf-8')

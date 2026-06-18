(() => {
  const { opportunities, cities, topics, interviews } = window.AI_FIRSTMOVE_DATA;
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const typeLabels = { all:'全部机会', side:'稳副业', startup:'创业实验', job:'找工作', competition:'比赛', creator:'创作者活动', global:'全球视野', time:'时间机器' };
  const state = { type:'all', source:'all', query:'', favorites:new Set(JSON.parse(localStorage.getItem('ai-firstmove-favorites') || '[]')) };

  function esc(value='') {
    return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));
  }
  function saveFavorites(){ localStorage.setItem('ai-firstmove-favorites', JSON.stringify([...state.favorites])); }
  function toast(msg){ const el=$('#toast'); el.textContent=msg; el.hidden=false; clearTimeout(toast.t); toast.t=setTimeout(()=>el.hidden=true,1600); }
  function typeLabel(type){ return typeLabels[type] || type; }
  function sourceText(item){ return item.sourceLevel === 'S' ? '官方' : item.sourceLevel === 'A' ? '专业' : item.editorial ? '分析建议' : '案例'; }
  function dateText(value){ if(!value)return ''; const d=new Date(value); return Number.isNaN(d.getTime())?value:new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit'}).format(d); }

  function card(item, compact=false){
    const saved = state.favorites.has(item.id);
    return `<article class="op-card" data-id="${esc(item.id)}">
      <div class="op-head"><div><div class="badges"><span class="badge">${esc(typeLabel(item.type))}</span><span class="badge ${item.sourceLevel.toLowerCase()}">${item.sourceLevel} · ${sourceText(item)}</span>${item.editorial?'<span class="badge">待验证</span>':''}</div><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p></div><div class="score"><strong>${item.score}</strong><small>机会分</small></div></div>
      ${compact?'':`<p class="insight"><b>AI先机判断：</b>${esc(item.insight)}</p>`}
      <div class="meta"><span>◉ ${esc(item.verification)}</span><span>⌖ ${esc(item.city)}</span><span>¥ ${esc(item.startupCost)}</span><span>◷ ${esc(item.time)}</span>${item.platform?`<span>来源 ${esc(item.platform)}</span>`:''}${item.publishedAt?`<span>发布 ${esc(dateText(item.publishedAt))}</span>`:''}</div>
      <div class="op-actions"><div><button class="small-btn save-btn ${saved?'saved':''}" data-save="${esc(item.id)}">${saved?'★ 已收藏':'☆ 收藏'}</button><button class="small-btn detail-btn" data-detail="${esc(item.id)}">看行动方案</button></div><a class="official-link" target="_blank" rel="noreferrer" href="${esc(item.url)}">官方/参考入口 ↗</a></div>
    </article>`;
  }

  function renderStats(){
    const official=opportunities.filter(x=>x.sourceLevel==='S').length;
    $('#stats').innerHTML=[['机会卡',opportunities.length],['S级官方入口',official],['城市索引',cities.length],['保证收益承诺',0]].map(([label,num])=>`<div class="stat"><strong>${num}</strong><span>${label}</span></div>`).join('');
  }
  function renderTop(){
    const top=[...opportunities].sort((a,b)=>b.score-a.score).slice(0,5);
    $('#topList').innerHTML=top.map((x,i)=>`<button class="top-item" data-detail="${x.id}"><span class="rank">${i+1}</span><span><h3>${esc(x.title)}</h3><p>${esc(x.insight)}</p></span><span class="top-score"><strong>${x.score}</strong><small>${x.sourceLevel}级</small></span></button>`).join('');
    const deadlines=opportunities.filter(x=>['competition','creator','job'].includes(x.type)).sort((a,b)=>b.score-a.score).slice(0,5);
    $('#deadlineList').innerHTML=deadlines.map(x=>`<a class="deadline-row" href="${esc(x.url)}" target="_blank" rel="noreferrer"><b>${esc(x.title)}</b><span>${esc(x.verification)} · ${x.sourceLevel}级</span></a>`).join('');
  }
  function renderTypeFilters(){
    const types=['all','side','startup','job','competition','creator','global','time'];
    $('#typeFilters').innerHTML=types.map(t=>{const n=t==='all'?opportunities.length:opportunities.filter(x=>x.type===t).length;return `<button class="${state.type===t?'active':''}" data-type="${t}"><span>${typeLabel(t)}</span><span>${n}</span></button>`}).join('');
  }
  function filtered(){
    const q=state.query.trim().toLowerCase();
    return opportunities.filter(x=>{
      const corpus=[x.title,x.summary,x.insight,x.city,x.country,...x.domains,...x.audience].join(' ').toLowerCase();
      return (state.type==='all'||x.type===state.type)&&(state.source==='all'||x.sourceLevel===state.source)&&(!q||corpus.includes(q));
    }).sort((a,b)=>b.score-a.score);
  }
  function renderFeed(){
    const list=filtered(); $('#resultCount').textContent=`${list.length} 条`;
    $('#feedList').innerHTML=list.length?list.map(x=>card(x)).join(''):'<div class="op-card"><h3>没有符合条件的结果</h3><p>清除筛选，或换一个更宽泛的关键词。</p></div>';
    bindCardActions($('#feedList'));
  }
  function renderSectionCards(){
    const sets=[['#sideCards',x=>x.type==='side',6],['#competitionCards',x=>['competition','creator'].includes(x.type),6],['#jobCards',x=>x.type==='job',6],['#timeCards',x=>x.type==='time',3]];
    sets.forEach(([sel,fn,limit])=>{const root=$(sel);root.innerHTML=opportunities.filter(fn).sort((a,b)=>b.score-a.score).slice(0,limit).map(x=>card(x,true)).join('');bindCardActions(root)});
  }
  function renderTopics(){
    $('#topicGrid').innerHTML=topics.map(t=>`<button class="topic-card" data-topic="${esc(t.key)}"><span class="topic-icon">✦</span><strong>${esc(t.name)}</strong><p>${esc(t.desc)}</p></button>`).join('');
    $$('#topicGrid [data-topic]').forEach(btn=>btn.onclick=()=>{state.query=btn.dataset.topic;$('#feedSearch').value=state.query;state.type='all';renderTypeFilters();renderFeed();location.hash='feed'});
  }
  function renderCities(){
    $('#cityGrid').innerHTML=cities.map(c=>`<button class="city-card" data-city="${esc(c.name)}"><strong>${esc(c.name)}</strong><p>${esc(c.desc)}</p><div class="tags">${c.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></button>`).join('');
    $$('#cityGrid [data-city]').forEach(btn=>btn.onclick=()=>{state.query=btn.dataset.city;$('#feedSearch').value=state.query;state.type='all';renderTypeFilters();renderFeed();location.hash='feed'});
  }
  function renderInterviews(){
    $('#interviewGrid').innerHTML=interviews.map(i=>`<article class="interview-card"><span class="badge b">B级 · 访谈案例</span><h3>${esc(i.title)}</h3><p>${esc(i.show)}</p><div class="signal"><b>机会信号</b><p>${esc(i.signal)}</p></div><div class="lesson-grid"><div><b>可迁移经验</b><ul>${i.lessons.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div><div><b>不能照搬</b><ul>${i.limits.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div><a href="${esc(i.url)}" target="_blank" rel="noreferrer">打开公开节目页 ↗</a></article>`).join('');
  }

  function bindCardActions(root=document){
    $$('[data-save]',root).forEach(btn=>btn.onclick=e=>{e.stopPropagation();const id=btn.dataset.save;if(state.favorites.has(id))state.favorites.delete(id);else state.favorites.add(id);saveFavorites();renderFeed();renderSectionCards();toast(state.favorites.has(id)?'已保存到本地收藏':'已取消收藏')});
    $$('[data-detail]',root).forEach(btn=>btn.onclick=e=>{e.stopPropagation();openDetail(btn.dataset.detail)});
  }

  function openDetail(id){
    const x=opportunities.find(o=>o.id===id); if(!x)return;
    const shareUrl=()=>`${location.origin}${location.pathname}#op=${encodeURIComponent(x.id)}`;
    $('#modalContent').innerHTML=`<header class="detail-header"><div class="badges"><span class="badge">${typeLabel(x.type)}</span><span class="badge ${x.sourceLevel.toLowerCase()}">${x.sourceLevel} · ${sourceText(x)}</span></div><h2>${esc(x.title)}</h2><p>${esc(x.summary)}</p><div class="share-row"><button class="small-btn" id="shareCurrent">分享机会</button><button class="small-btn" id="copyCurrent">复制链接</button><a class="primary-btn compact" href="${esc(x.url)}" target="_blank" rel="noreferrer">打开官方/参考入口 ↗</a></div></header><div class="detail-grid"><section class="detail-main"><h3>AI先机判断</h3><p class="insight">${esc(x.insight)}</p><h3>需求与证据</h3><p>${esc(x.evidence)}</p>${x.sources?.length?`<h3>来源账本</h3><div class="source-list">${x.sources.map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noreferrer"><b>${esc(s.grade||x.sourceLevel)} · ${esc(s.platform||'来源')}</b><br>${esc(s.title||'查看原始页面')}${s.publishedAt?` · ${esc(dateText(s.publishedAt))}`:''}</a>`).join('')}</div><p class="source-ledger-mini">交叉验证：${esc(x.crossValidation?.status||'待继续核验')} · ${Number(x.crossValidation?.count||x.sources.length)} 个来源；最后核验 ${esc(dateText(x.lastVerifiedAt)||'待核验')}</p>`:''}${x.editorial?'<p class="file-message">这是一张编辑分析或商业实验卡，不是官方收益结论。完成访谈、预售、定金或真实使用之前，不要把它当成已经成立的市场。</p>':''}<h3>谁可能付钱</h3><p>${esc(x.whoPays)}</p><h3>第一步</h3><p>${esc(x.firstStep)}</p><h3>3日启动计划</h3><ol class="steps">${x.plan3.map((s,i)=>`<li><span class="step-number">${i+1}</span><span>${esc(s)}</span></li>`).join('')}</ol><h3>7日验证计划</h3><ol class="steps">${x.plan7.map((s,i)=>`<li><span class="step-number">${i+1}</span><span>${esc(s)}</span></li>`).join('')}</ol><h3>风险提示</h3><ul>${x.risks.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></section><aside class="detail-aside"><section><h3>机会摘要</h3><div class="fact-grid"><div class="fact"><small>机会分</small><b>${x.score}/100</b></div><div class="fact"><small>信源</small><b>${x.sourceLevel} · ${sourceText(x)}</b></div><div class="fact"><small>成本</small><b>${esc(x.startupCost)}</b></div><div class="fact"><small>周期</small><b>${esc(x.time)}</b></div><div class="fact"><small>地区</small><b>${esc(x.city)}</b></div><div class="fact"><small>状态</small><b>${esc(x.verification)}</b></div></div></section><section><h3>适合人群</h3><div class="tags">${x.audience.map(a=>`<span class="tag">${esc(a)}</span>`).join('')}</div></section><section><h3>能力领域</h3><div class="tags">${x.domains.map(a=>`<span class="tag">${esc(a)}</span>`).join('')}</div></section></aside></div>`;
    $('#detailModal').hidden=false; document.body.style.overflow='hidden'; location.hash=`op=${x.id}`;
    $('#copyCurrent').onclick=async()=>{await navigator.clipboard.writeText(shareUrl());toast('链接已复制')};
    $('#shareCurrent').onclick=async()=>{const data={title:x.title,text:`${x.title}｜AI先机`,url:shareUrl()};if(navigator.share)await navigator.share(data);else{await navigator.clipboard.writeText(data.url);toast('链接已复制')}};
  }
  function closeDetail(){ $('#detailModal').hidden=true; document.body.style.overflow=''; if(location.hash.startsWith('#op='))history.replaceState(null,'',location.pathname+location.search); }

  function scoreQuery(x,q){
    let score=x.score; const corpus=[x.title,x.summary,x.insight,x.city,x.country,...x.domains,...x.audience].join(' ').toLowerCase();
    q.toLowerCase().split(/[\s，。,.、;；]+/).filter(Boolean).forEach(t=>{if(corpus.includes(t))score+=14});
    const tests=[[/副业|变现|赚钱/,x.type==='side',25],[/创业|产品|mvp/i,x.type==='startup',25],[/工作|岗位|实习|校招/,x.type==='job',26],[/比赛|黑客松|大赛/,['competition','creator'].includes(x.type),26],[/视频|剪辑/,x.domains.includes('AI视频'),18],[/编程|开发|代码/,x.domains.some(d=>/编程|算法|开源/.test(d)),18],[/自动化|智能体/,x.domains.some(d=>/自动化|智能体/.test(d)),18],[/成都|杭州|深圳|北京|上海|长沙|武汉|广州|南京|西安/,q.includes(x.city),18],[/低成本|预算|0元/,/0|低/.test(x.startupCost),14],[/官方/,x.sourceLevel==='S',20],[/出海|海外|全球/,x.country.includes('全球')||x.domains.includes('AI出海'),20],[/不出镜/,!x.audience.includes('愿意线下沟通'),8]];
    tests.forEach(([r,ok,b])=>{if(r.test(q)&&ok)score+=b}); return score;
  }
  function runRecommend(){
    const q=$('#queryInput').value.trim()||'大学生 低成本 官方机会';
    const list=[...opportunities].map(x=>({x,s:scoreQuery(x,q)})).sort((a,b)=>b.s-a.s).slice(0,5).map(o=>o.x);
    $('#querySummary').textContent=`你的需求：${q}`; $('#recommendList').innerHTML=list.map(x=>card(x)).join(''); bindCardActions($('#recommendList')); $('#recommendDrawer').hidden=false; document.body.style.overflow='hidden';
    const history=JSON.parse(localStorage.getItem('ai-firstmove-history')||'[]'); localStorage.setItem('ai-firstmove-history',JSON.stringify([q,...history.filter(x=>x!==q)].slice(0,10)));
  }

  function showFavorites(){
    const list=opportunities.filter(x=>state.favorites.has(x.id));
    $('#querySummary').textContent=`本地收藏：${list.length} 条`; $('#recommendList').innerHTML=list.length?list.map(x=>card(x)).join(''):'<div class="op-card"><h3>还没有收藏</h3><p>点击机会卡上的“收藏”，内容会保存在当前浏览器。</p></div>';bindCardActions($('#recommendList'));$('#recommendDrawer').hidden=false;document.body.style.overflow='hidden';
  }
  function closeDrawer(){ $('#recommendDrawer').hidden=true; document.body.style.overflow=''; }

  function setupEvents(){
    $('#runRecommendBtn').onclick=runRecommend; $('#heroSearchBtn').onclick=()=>{$('#queryInput').focus();location.hash='ai-search'}; $('#focusSearchBtn').onclick=()=>{$('#queryInput').focus();location.hash='ai-search'}; $('#mobileSearchBtn').onclick=()=>{$('#queryInput').focus();location.hash='ai-search'};
    $$('.example-row [data-example]').forEach(b=>b.onclick=()=>{$('#queryInput').value=b.dataset.example});
    $('#feedSearch').oninput=e=>{state.query=e.target.value;renderFeed()}; $('#sourceFilter').onchange=e=>{state.source=e.target.value;renderFeed()}; $('#clearFilters').onclick=()=>{state.type='all';state.source='all';state.query='';$('#feedSearch').value='';$('#sourceFilter').value='all';renderTypeFilters();renderFeed()};
    $('#typeFilters').onclick=e=>{const b=e.target.closest('[data-type]');if(!b)return;state.type=b.dataset.type;renderTypeFilters();renderFeed()};
    $('#timeMachineBtn').onclick=()=>{state.type='time';state.query='';renderTypeFilters();renderFeed();location.hash='feed'};
    $('#closeDrawer').onclick=closeDrawer; $('#recommendDrawer').onclick=e=>{if(e.target.id==='recommendDrawer')closeDrawer()}; $('#favoritesBtn').onclick=showFavorites;
    $('#closeModal').onclick=closeDetail; $('#detailModal').onclick=e=>{if(e.target.id==='detailModal')closeDetail()}; document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDetail();closeDrawer()}if(e.key==='/'&&!['INPUT','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();$('#queryInput').focus();location.hash='ai-search'}});
    $('#clearLocalBtn').onclick=()=>{localStorage.removeItem('ai-firstmove-favorites');localStorage.removeItem('ai-firstmove-history');state.favorites.clear();renderFeed();renderSectionCards();toast('本地记录已清除')};
    $('#themeBtn').onclick=()=>{const dark=document.documentElement.dataset.theme!=='dark';document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('ai-firstmove-theme',dark?'dark':'light')};
    $('#fileInput').onchange=async e=>{const f=e.target.files[0];if(!f)return;const ext=f.name.split('.').pop().toLowerCase();const msg=$('#fileMessage');msg.hidden=false;if(['txt','md'].includes(ext)){const text=await f.text();$('#queryInput').value=text.slice(0,4000);msg.textContent=`已读取 ${f.name}`}else msg.textContent='纯HTML版只在浏览器内直接读取 TXT/MD；PDF/DOCX 需要未来接入服务端解析。'};
    $('#voiceBtn').onclick=()=>{const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){toast('当前浏览器不支持语音输入，请使用Chrome或直接输入文字');return}const r=new SR();r.lang='zh-CN';r.interimResults=false;r.onresult=e=>{$('#queryInput').value=(`${$('#queryInput').value} ${e.results[0][0].transcript}`).trim()};r.onerror=()=>toast('语音识别失败，请重试');r.start();toast('正在聆听…')};
    window.addEventListener('hashchange',handleHash);
  }
  function handleHash(){ const h=location.hash.slice(1);if(h.startsWith('op=')){const id=decodeURIComponent(h.slice(3));if($('#detailModal').hidden)openDetail(id)} }
  function initTheme(){ const saved=localStorage.getItem('ai-firstmove-theme');if(saved==='dark')document.documentElement.dataset.theme='dark'; }
  function init(){initTheme();renderStats();renderTop();renderTypeFilters();renderFeed();renderSectionCards();renderTopics();renderCities();renderInterviews();setupEvents();bindCardActions($('#topList'));handleHash()}
  init();
})();

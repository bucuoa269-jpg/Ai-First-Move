(() => {
  const v5 = window.AI_FIRSTMOVE_V5 || {};
  const root = window.AI_FIRSTMOVE_DATA || { opportunities: [] };
  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => [...r.querySelectorAll(s)];
  const esc = (v='') => String(v).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));

  function insertSections(){
    const stats = $('#stats');
    if (stats && !$('#gold-rush-map')) {
      stats.insertAdjacentHTML('afterend', `
        <section class="section container" id="gold-rush-map">
          <div class="gold-hero">
            <div class="gold-title-row">
              <div><span class="eyebrow">V5 · 淘金地图优先</span><h2>先看哪里能赚钱，<br>再看工具和比赛。</h2><p>把小红书、抖音、播客访谈、官方商业化入口和反方风险放在一张图里：不是告诉你“谁赚了多少钱”，而是告诉你“谁会付款、怎么验证、哪里可能踩坑”。</p></div>
              <div class="gold-score-card"><small>变现线索密度</small><strong>${esc((v5.goldMaps||[]).length)}</strong><small>条核心淘金路径</small></div>
            </div>
            <div class="gold-pills"><span>小红书 / 抖音</span><span>深度访谈</span><span>一手官方入口</span><span>交叉验证</span><span>7天验证</span><span>反方风险</span></div>
            <div class="gold-grid" id="goldGrid"></div>
          </div>
        </section>
        <section class="section container" id="lead-map">
          <div class="section-head"><div><h2>变现线索地图</h2><p>按平台、信源等级和可执行性整理：官方入口是底座，访谈是线索，社交爆款只能算待核验。</p></div><span class="xhs-douyin-tag">小红书 & 抖音重点升级</span></div>
          <div class="lead-map"><aside class="lead-sidebar"><h3>筛选线索</h3><p>优先看 S/A/B 级来源；C级只用于发现，不直接推荐照做。</p><div class="lead-filters" id="leadFilters"></div></aside><div class="lead-list" id="leadList"></div></div>
        </section>
        <section class="section container" id="method-governance">
          <div class="section-head"><div><h2>逻辑编排与工程治理</h2><p>第一性原理继续落地：信息不是越多越好，而是每条都能追溯、能验证、能停止。</p></div></div>
          <div class="method-grid" id="methodGrid"></div>
        </section>`);
    }
    const comp = $('#competition .section-head div');
    if (comp && !$('#competition .special-competition-note')) {
      comp.querySelector('h2').textContent = '特殊机会：比赛 / 黑客松 / 官方挑战';
      comp.querySelector('p').textContent = '比赛不是主线，但对大学生很重要：奖金、作品集、队友、官方资源和面试素材都可以沉淀。';
      $('#competition').insertAdjacentHTML('afterbegin', '<div class="container special-competition-note"><b>为什么比赛被放到特殊板块？</b>淘金地图优先解决“如何产生真实付款和商业验证”；比赛负责补充官方资源、作品集和团队连接，不能替代市场验证。</div>');
    }
  }

  function renderGold(){
    const rootEl = $('#goldGrid'); if(!rootEl) return;
    rootEl.innerHTML = (v5.goldMaps || []).map(item => `<article class="gold-card">
      <div class="gold-top"><span class="gold-rank">${esc(item.rank)}</span><div class="gold-meta"><span class="hot">${esc(item.platform)}</span><span>${esc(item.level)}</span><span>${esc(item.freshness)}</span><span>${esc(item.score)}分</span></div></div>
      <h3>${esc(item.title)}</h3>
      <p><b>谁付款：</b>${esc((item.payers||[]).join(' / '))}</p>
      <p><b>可交付：</b>${esc((item.deliverables||[]).join('、'))}</p>
      <div class="gold-ledger"><b>来源栈</b><ul>${(item.sourceStack||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div>
      <div class="gold-ledger"><b>7天验证</b><ul>${(item.firstWeek||[]).map(s=>`<li>${esc(s)}</li>`).join('')}</ul></div>
      <p class="lead-risk"><b>停止条件：</b>${esc(item.stop)}</p>
      <footer><a href="${esc(item.sourceUrl)}" target="_blank" rel="noreferrer">打开来源 ↗</a><button data-query="${esc(item.title)}" class="goldAskBtn">匹配给我</button></footer>
    </article>`).join('');
    $$('.goldAskBtn', rootEl).forEach(btn => btn.addEventListener('click', () => {
      const input = $('#queryInput'); if(input){ input.value = `${btn.dataset.query} 大学生 低成本 7天验证`; input.scrollIntoView({behavior:'smooth', block:'center'}); }
      const run = $('#runRecommendBtn'); if(run) setTimeout(()=>run.click(), 280);
    }));
  }

  function renderLeadFilters(active='全部'){
    const types = ['全部', ...new Set((v5.leadMap || []).map(x => x.type))];
    const box = $('#leadFilters'); if(!box) return;
    box.innerHTML = types.map(type => `<button class="${type===active?'active':''}" data-type="${esc(type)}">${esc(type)}</button>`).join('');
    $$('button', box).forEach(button => button.onclick = () => { renderLeadFilters(button.dataset.type); renderLeads(button.dataset.type); });
  }

  function renderLeads(filter='全部'){
    const box = $('#leadList'); if(!box) return;
    const list = (v5.leadMap || []).filter(item => filter === '全部' || item.type === filter);
    box.innerHTML = list.map(item => `<article class="lead-card">
      <div><div class="badges"><span class="badge ${String(item.level||'B').toLowerCase()[0]}">${esc(item.level)}级</span><span class="badge">${esc(item.type)}</span><span class="badge">${esc(item.source)}</span></div>
      <h3>${esc(item.title)}</h3><p>${esc(item.opportunity)}</p><div class="lead-facts"><span>发布时间：${esc(item.publishedAt)}</span><span>平台：${esc(item.source)}</span><span>交叉验证：需二次核验</span></div><div class="lead-risk"><b>风险：</b>${esc(item.risk)}</div></div>
      <a class="lead-link" href="${esc(item.url)}" target="_blank" rel="noreferrer">来源 ↗</a>
    </article>`).join('');
  }

  function renderMethods(){
    const box = $('#methodGrid'); if(!box) return;
    box.innerHTML = (v5.verificationFramework || []).map((item,i)=>`<article class="method-card"><strong>${i+1}</strong><h3>${esc(item.title)}</h3><p>${esc(item.body)}</p></article>`).join('');
  }

  function improveCopy(){
    const heroP = $('.hero-copy>p');
    if (heroP) heroP.textContent = '淘金地图优先：每天追踪AI变现线索、小红书/抖音平台机会、国内深度访谈、黑客松、求职与城市资源；每条信息都标注来源、发布时间、信源等级和交叉验证状态。';
    const nav = $('.desktop-nav');
    if (nav && !nav.querySelector('[href="#gold-rush-map"]')) nav.insertAdjacentHTML('afterbegin','<a href="#gold-rush-map">淘金地图</a><a href="#lead-map">变现线索</a>');
  }

  function setup(){ insertSections(); renderGold(); renderLeadFilters(); renderLeads(); renderMethods(); improveCopy(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup); else setup();
})();

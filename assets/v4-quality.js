(() => {
  const v3 = window.AI_FIRSTMOVE_V3 || {};
  const base = window.AI_FIRSTMOVE_DATA || {opportunities:[], interviews:[]};
  const $ = (s,r=document)=>r.querySelector(s);
  const $$ = (s,r=document)=>[...r.querySelectorAll(s)];
  const esc = (v='') => String(v).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch]));
  const fmt = v => { if(!v) return '待核验'; const d=new Date(v); return Number.isNaN(d.getTime()) ? v : new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit'}).format(d); };

  function injectQualitySections(){
    const interviews = $('#interviews');
    if (interviews && !$('#firsthand-people')) {
      interviews.insertAdjacentHTML('beforebegin', `
        <section class="section container" id="firsthand-people">
          <div class="section-head"><div><h2>一手采访与影响力人物</h2><p>把播客、访谈、官方人物和公开节目当作“线索发现源”，再用官方页面和反方证据复核</p></div><span>不复制付费内容</span></div>
          <div class="people-grid" id="peopleGrid"></div>
        </section>
        <section class="section container" id="quality-radar">
          <div class="section-head"><div><h2>信息质量雷达</h2><p>每条线索先问：谁是原始来源？是否有第二来源？是否有付款证据？哪里可能不成立？</p></div></div>
          <div class="quality-grid" id="qualityGrid"></div>
        </section>`);
    }
  }

  function renderPeople(){
    const list = v3.influencers || [];
    const root = $('#peopleGrid'); if(!root) return;
    root.innerHTML = list.map(person => `<article class="person-card">
      <div class="badges"><span class="badge b">${esc(person.level || 'B')}级线索源</span><span class="badge">${esc(person.platform || '公开平台')}</span></div>
      <h3>${esc(person.name)}</h3><p>${esc(person.role)}</p>
      <div class="signal"><b>为什么值得关注</b><p>${esc(person.why)}</p></div>
      <div class="source-ledger-mini"><b>使用方式：</b>${esc(person.use)}</div>
      <a href="${esc(person.url)}" target="_blank" rel="noreferrer">打开公开入口 ↗</a>
    </article>`).join('');
  }

  function renderQuality(){
    const total = base.opportunities.length;
    const s = base.opportunities.filter(o => o.sourceLevel === 'S').length;
    const b = base.opportunities.filter(o => o.sourceLevel === 'B').length;
    const cross2 = base.opportunities.filter(o => Number(o.crossValidation?.count || o.sources?.length || 0) >= 2).length;
    const money = base.opportunities.filter(o => ['side','startup'].includes(o.type)).length;
    const rows = [
      ['结构化机会总量', total, '不是简单堆标题，每条包含行动计划和风险'],
      ['S级官方入口', s, '比赛、招聘、开发者平台、官方产品和活动页'],
      ['深度访谈/案例源', b, '播客和公开访谈只作为案例线索，不直接升级为事实'],
      ['双来源以上交叉验证', cross2, '至少两个独立来源或官方+媒体/访谈交叉'],
      ['副业/创业变现卡', money, '重点从“能不能付款”而不是“有没有热度”判断']
    ];
    const root = $('#qualityGrid'); if(!root) return;
    root.innerHTML = rows.map(([name,value,desc]) => `<article><strong>${esc(value)}</strong><h3>${esc(name)}</h3><p>${esc(desc)}</p></article>`).join('');
  }

  function strengthenPlaceholders(){
    const sub = document.querySelector('.hero-subtitle');
    if (sub) sub.textContent = '每天自动刷新AI黑客松、副业、创业、求职和深度访谈线索；所有机会都标注平台、发布时间、信源等级、交叉验证与反方风险。';
    const feedHead = document.querySelector('#feed .section-head p');
    if (feedHead) feedHead.textContent = '国内一手机会优先，访谈和社交内容只作线索；能核验才推荐，不能核验就降级。';
  }

  function addStyles(){
    if (document.getElementById('v4-inline-style')) return;
    const style = document.createElement('style');
    style.id = 'v4-inline-style';
    style.textContent = `
      .people-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.person-card,.quality-grid article{background:var(--card);border:1px solid var(--border);border-radius:24px;padding:20px;box-shadow:var(--shadow)}.person-card h3{margin:12px 0 6px}.person-card p{color:var(--muted);line-height:1.65}.person-card a{display:inline-flex;margin-top:12px;font-weight:800;color:var(--primary)}.quality-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}.quality-grid strong{font-size:28px;color:var(--primary)}.quality-grid h3{font-size:15px;margin:8px 0}.quality-grid p{font-size:13px;color:var(--muted);line-height:1.55}@media(max-width:900px){.people-grid,.quality-grid{grid-template-columns:1fr}.person-card,.quality-grid article{border-radius:18px}}
    `;
    document.head.appendChild(style);
  }

  function setup(){ injectQualitySections(); addStyles(); renderPeople(); renderQuality(); strengthenPlaceholders(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setup); else setup();
})();

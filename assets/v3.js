(() => {
  const base = window.AI_FIRSTMOVE_DATA || { opportunities: [], interviews: [] };
  const v3 = window.AI_FIRSTMOVE_V3 || {};
  const live = window.AI_FIRSTMOVE_LIVE || { items: [], generatedAt: '' };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[char]));
  const fmtDate = value => {
    if (!value) return '时间待核验';
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return new Intl.DateTimeFormat('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit'}).format(date);
  };
  const relative = value => {
    if (!value) return '待核验';
    const delta = Date.now() - new Date(value).getTime();
    const day = Math.floor(delta / 86400000);
    if (day <= 0) return '今天';
    if (day === 1) return '昨天';
    if (day < 7) return `${day}天前`;
    return fmtDate(value);
  };

  function sectionTemplate(){
    const stats = $('#stats');
    if (stats && !$('#live-intelligence')) {
      stats.insertAdjacentHTML('afterend', `
        <section class="section container" id="live-intelligence">
          <div class="section-head"><div><h2>实时 AI 变现情报</h2><p>自动更新只负责发现线索；官方确认、交叉验证和风险判断仍是发布底线</p></div><a href="#source-method">查看交叉验证方法 →</a></div>
          <div class="live-shell">
            <div class="live-toolbar"><div><strong>最近更新</strong><p class="muted" id="liveGeneratedAt"></p></div><div class="live-status"><span class="pulse-dot"></span><span id="liveCadence"></span><button class="small-btn" id="refreshIssuesBtn">读取仓库最新线索</button></div></div>
            <div class="live-grid" id="liveGrid"></div>
          </div>
        </section>`);
    }

    const side = $('#side');
    if (side && !$('#money-lab')) {
      side.insertAdjacentHTML('beforebegin', `
        <section class="section container" id="money-lab">
          <div class="section-head"><div><h2>AI 变现研究室</h2><p>不是“项目大全”，而是带反方判断、交叉验证和停止条件的可行性卡片</p></div><span>现阶段全部免费</span></div>
          <div class="research-grid" id="researchGrid"></div>
        </section>`);
    }

    const competition = $('#competition');
    if (competition && !$('#hackathon-radar')) {
      competition.insertAdjacentHTML('beforebegin', `
        <section class="section container" id="hackathon-radar">
          <div class="section-head"><div><h2>黑客松与城市雷达</h2><p>把全国泛资讯变成可按城市、平台和截止时间浏览的行动入口</p></div></div>
          <div class="hackathon-city-row" id="hackathonCities"></div>
          <div class="horizontal-cards" id="hackathonCards"></div>
        </section>`);
    }

    const sources = $('#sources');
    if (sources && !$('#finance-literacy')) {
      sources.insertAdjacentHTML('beforebegin', `
        <section class="section container" id="finance-literacy">
          <div class="section-head"><div><h2>财商与创业启蒙</h2><p>原创大白话通识：理解现金流、风险、价值交换与思维工具</p></div></div>
          <div class="finance-grid" id="financeGrid"></div>
          <p class="copyright-note">本专栏为 AI先机原创通识解释，不复刻《穷查理宝典》《富爸爸穷爸爸》等书籍原文，也不替代法律、财务与投资建议。</p>
        </section>
        <section class="section container" id="expert-report">
          <div class="report-entry">
            <div class="report-copy"><span class="eyebrow">高阶功能 · 低调内测</span><h2>你的 AI 机会可研报告</h2><p>像完成一次职业与商业方向测评：结合城市、技能、时间、预算和风险偏好，生成 7 天行动方案、30 天验证路径与停止条件。</p><button class="primary-btn" id="openReportBtn">免费生成基础版</button><p class="soft-pay">现阶段优先把基础体验免费做好。未来专家深度版可能采用 9.9/月、29.9/季或99/年的支持计划，用于算力、核验与网站持续维护；目前不收费。</p></div>
            <div class="report-preview"><h3>报告会包含</h3><ul><li>最适合你的 5 条机会与不适合原因</li><li>每条机会的来源账本和交叉验证程度</li><li>3日启动、7日验证与30日决策节点</li><li>预算、时间、版权、平台与现金流风险</li><li>更偏副业、创业、求职还是比赛的路线建议</li></ul></div>
          </div>
        </section>
        <section class="section container" id="wave-manifesto"><div class="wave-banner"><div><span>AI FIRSTMOVE</span><h2>${escapeHtml(v3.manifesto?.title || '一起造浪，一起造富，一起造梦')}</h2><p>${escapeHtml(v3.manifesto?.text || '')}</p><div class="wave-actions"><button class="solid" id="manifestoReportBtn">找到我的第一步</button><a href="#feed">浏览真实机会</a></div></div></div></section>
        <section class="section container" id="source-method"><div class="section-head"><div><h2>交叉验证方法</h2><p>同一条线索至少区分“发现来源、确认来源、反方证据”</p></div></div><div class="grade-grid"><article><span class="grade s">1</span><h3>先发现</h3><p>从官方平台、播客、媒体、抖音、小红书、B站和用户提交中发现线索。</p></article><article><span class="grade a">2</span><h3>再确认</h3><p>优先找到主办方、企业、高校、政府、产品或招聘原始页面。</p></article><article><span class="grade b">3</span><h3>交叉印证</h3><p>比较至少两个独立来源；区分事实、当事人自述、教程和编辑推断。</p></article><article><span class="grade c">4</span><h3>写反方判断</h3><p>明确为什么可能不成立、版权与平台风险、需要什么付款证据。</p></article><article><span class="grade d">5</span><h3>持续复核</h3><p>比赛看截止，岗位看在招，商业案例看时效与成本，过期自动降级。</p></article></div></section>`);
    }

    if (!$('#v3ReportModal')) {
      document.body.insertAdjacentHTML('beforeend', `<div class="v3-modal" id="v3ReportModal" hidden><div class="v3-dialog"><button class="v3-dialog-close" id="closeV3Report">×</button><div><span class="eyebrow">免费基础版</span><h2>AI 机会方向问卷</h2><p>所有答案只在当前浏览器处理，不上传。</p></div><form class="questionnaire" id="reportForm"></form><div id="reportResult"></div></div></div>`);
    }
  }

  function liveCard(item){
    const cross = item.crossValidation || {count:1,status:'待复核'};
    return `<a class="live-card" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer"><div class="badges"><span class="badge">${escapeHtml(item.kind || '情报')}</span><span class="badge ${(item.sourceLevel || 'C').toLowerCase()}">${escapeHtml(item.sourceLevel || 'C')} · ${escapeHtml(item.platform || '未知平台')}</span></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary || '')}</p><div class="live-meta"><span>发布 ${relative(item.publishedAt)}</span><span>抓取 ${fmtDate(item.capturedAt)}</span><span>${escapeHtml(item.city || '线上')}</span></div><div class="source-ledger-mini">交叉验证：${escapeHtml(cross.status)} · ${Number(cross.count || 0)} 个来源</div></a>`;
  }

  async function readRepoIssues(){
    if (location.hostname !== 'github.io' && !location.hostname.endsWith('.github.io')) return [];
    const owner = location.hostname.split('.')[0];
    const repo = location.pathname.split('/').filter(Boolean)[0] || `${owner}.github.io`;
    const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/issues?state=open&per_page=30&sort=updated`;
    try {
      const response = await fetch(url,{headers:{Accept:'application/vnd.github+json'}});
      if (!response.ok) return [];
      const issues = await response.json();
      return issues.filter(issue => !issue.pull_request && (/^\[机会\]/.test(issue.title) || issue.labels?.some(label => ['机会','opportunity','线索'].includes(label.name)))).map(issue => ({
        id:`issue-${issue.number}`,
        title:issue.title.replace(/^\[机会\]\s*/,''),
        summary:(issue.body || '仓库用户提交的机会线索，需继续核验。').replace(/[#>*_`\[\]]/g,' ').replace(/\s+/g,' ').slice(0,160),
        url:issue.html_url,
        platform:'GitHub Issues',sourceLevel:'C',publishedAt:issue.created_at,capturedAt:new Date().toISOString(),kind:'用户线索',city:'待识别',crossValidation:{count:1,status:'用户提交·待确认'}
      }));
    } catch (_) { return []; }
  }

  async function renderLive(includeIssues = true){
    let items = [...(live.items || [])];
    if (includeIssues) items = [...await readRepoIssues(), ...items];
    items = items.sort((a,b)=>new Date(b.publishedAt || 0)-new Date(a.publishedAt || 0)).slice(0,12);
    $('#liveGeneratedAt').textContent = `数据文件生成：${fmtDate(live.generatedAt)}；每条信息仍以原始页面为准。`;
    $('#liveCadence').textContent = live.cadence || '定时更新';
    $('#liveGrid').innerHTML = items.length ? items.map(liveCard).join('') : '<div class="live-card"><h3>暂无实时线索</h3><p>可在仓库 Issues 中提交以 [机会] 开头的线索。</p></div>';
  }

  function renderResearch(){
    const reports = v3.researchReports || [];
    $('#researchGrid').innerHTML = reports.map(report => `<article class="research-card"><div class="research-top"><div><span class="badge">${escapeHtml(report.category)}</span><h3>${escapeHtml(report.title)}</h3></div><div class="research-score">${report.score}</div></div><div class="verdict">${escapeHtml(report.verdict)}</div><div class="research-kpis"><div><small>难度</small><b>${escapeHtml(report.difficulty)}</b></div><div><small>验证周期</small><b>${escapeHtml(report.cycle)}</b></div><div><small>预算</small><b>${escapeHtml(report.budget)}</b></div></div><details><summary>需求、客户与变现结构</summary><p><b>需求：</b>${escapeHtml(report.demand)}</p><p><b>付款方：</b>${escapeHtml(report.customer)}</p><ul>${report.model.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul></details><details><summary>验证方案与停止条件</summary><ol>${report.validation.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ol><p><b>主要风险：</b></p><ul>${report.risks.map(item=>`<li>${escapeHtml(item)}</li>`).join('')}</ul></details><details><summary>来源账本（${report.sources.length}）</summary><div class="source-list">${report.sources.map(source=>`<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer"><b>${escapeHtml(source.grade)} · ${escapeHtml(source.platform)}</b><br>${escapeHtml(source.title)} · ${fmtDate(source.publishedAt)}</a>`).join('')}</div><p class="source-ledger-mini">交叉验证结论：${escapeHtml(report.crossValidation)}</p></details><div class="research-actions"><button class="small-btn use-report" data-report="${escapeHtml(report.id)}">用它生成行动计划</button></div></article>`).join('');
  }

  function renderHackathons(city='全部'){
    const items = base.opportunities.filter(item => ['competition','creator'].includes(item.type) || item.domains?.some(domain=>/黑客松/.test(domain)));
    const cities = ['全部',...new Set(items.map(item=>item.city).filter(Boolean))];
    $('#hackathonCities').innerHTML = cities.map(name=>`<button class="${name===city?'active':''}" data-hack-city="${escapeHtml(name)}">${escapeHtml(name)}</button>`).join('');
    const filtered = items.filter(item=>city==='全部'||item.city===city).sort((a,b)=>b.score-a.score).slice(0,12);
    $('#hackathonCards').innerHTML = filtered.map(item=>`<article class="op-card"><div class="badges"><span class="badge">${escapeHtml(item.type==='creator'?'创作者活动':'黑客松/比赛')}</span><span class="badge ${(item.sourceLevel||'C').toLowerCase()}">${escapeHtml(item.sourceLevel||'C')} · ${escapeHtml(item.platform||'官方入口')}</span></div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.summary)}</p><div class="meta"><span>⌖ ${escapeHtml(item.city)}</span><span>◷ ${escapeHtml(item.time)}</span>${item.publishedAt?`<span>发布 ${fmtDate(item.publishedAt)}</span>`:''}</div><div class="op-actions"><span class="source-ledger-mini">${escapeHtml(item.crossValidation?.status || item.verification)}</span><a class="official-link" href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">打开来源 ↗</a></div></article>`).join('');
    $$('#hackathonCities [data-hack-city]').forEach(button=>button.onclick=()=>renderHackathons(button.dataset.hackCity));
  }

  function renderFinance(){
    $('#financeGrid').innerHTML = (v3.financeLessons || []).map(item=>`<article class="finance-card"><span>${escapeHtml(item.tag)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.text)}</p><footer>今天做：${escapeHtml(item.action)}</footer></article>`).join('');
  }

  function reportRecommendations(answers){
    const corpus = Object.values(answers).join(' ');
    const scored = base.opportunities.map(item => {
      let score = item.score || 50;
      const text = [item.title,item.summary,item.city,item.country,...(item.domains||[]),...(item.audience||[])].join(' ');
      if (/第一笔收入|长期副业/.test(corpus) && item.type==='side') score += 28;
      if (/创业/.test(corpus) && ['startup','time'].includes(item.type)) score += 28;
      if (/实习|工作/.test(corpus) && item.type==='job') score += 28;
      if (/比赛/.test(corpus) && ['competition','creator'].includes(item.type)) score += 28;
      if (/视频设计/.test(corpus) && /视频|设计|漫画/.test(text)) score += 20;
      if (/编程技术/.test(corpus) && /编程|智能体|开发|算法/.test(text)) score += 20;
      if (/写作表达/.test(corpus) && /写作|内容|PPT|模板/.test(text)) score += 20;
      if (/销售沟通/.test(corpus) && /商家|企业|服务|客户/.test(text)) score += 18;
      if (/0元|100元以内/.test(corpus) && /0|低/.test(item.startupCost || '')) score += 15;
      if (/稳定低风险/.test(corpus) && item.sourceLevel==='S') score += 15;
      if (/全球出海/.test(corpus) && /全球|出海/.test(text)) score += 20;
      return {item,score};
    }).sort((a,b)=>b.score-a.score).slice(0,5).map(row=>row.item);
    return scored;
  }

  function renderReportForm(){
    const questions = v3.reportQuestions || [];
    $('#reportForm').innerHTML = questions.map((question,index)=>`<fieldset class="question-block"><h4>${index+1}. ${escapeHtml(question.label)}</h4><div class="option-grid">${question.options.map((option,i)=>`<label><input type="radio" name="${escapeHtml(question.id)}" value="${escapeHtml(option)}" ${i===0?'required':''}><span>${escapeHtml(option)}</span></label>`).join('')}</div></fieldset>`).join('') + '<button class="primary-btn" type="submit">生成我的基础报告</button>';
  }

  function openReport(prefill=''){
    $('#v3ReportModal').hidden=false;
    document.body.style.overflow='hidden';
    if (prefill) localStorage.setItem('ai-firstmove-report-prefill',prefill);
  }
  function closeReport(){ $('#v3ReportModal').hidden=true; document.body.style.overflow=''; }

  function setupReport(){
    renderReportForm();
    $('#openReportBtn').onclick=()=>openReport();
    $('#manifestoReportBtn').onclick=()=>openReport();
    $('#closeV3Report').onclick=closeReport;
    $('#v3ReportModal').onclick=e=>{ if(e.target.id==='v3ReportModal') closeReport(); };
    $$('.use-report').forEach(button=>button.onclick=()=>openReport(button.dataset.report));
    $('#reportForm').onsubmit=e=>{
      e.preventDefault();
      const answers = Object.fromEntries(new FormData(e.currentTarget).entries());
      localStorage.setItem('ai-firstmove-v3-report',JSON.stringify(answers));
      const list = reportRecommendations(answers);
      $('#reportResult').innerHTML = `<div class="report-result"><h3>你的基础方向报告</h3><p>根据你的阶段、目标和资源，建议先从下面5条机会中选择1条，用7天完成验证。不要同时启动多个项目。</p><ol>${list.map(item=>`<li><b>${escapeHtml(item.title)}</b>：${escapeHtml(item.firstStep || item.summary)} <a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">来源 ↗</a></li>`).join('')}</ol><p><b>统一停止条件：</b>7天内无法找到5名目标用户、无人愿意进一步沟通、或版权/平台风险无法解决时，先停止并换方向。</p><button class="small-btn" id="copyReportBtn">复制报告摘要</button></div>`;
      $('#copyReportBtn').onclick=async()=>{
        const text = `AI先机基础机会报告\n${list.map((item,i)=>`${i+1}. ${item.title}：${item.firstStep || item.summary}`).join('\n')}\n建议：7天只验证1条，先找用户和付款证据。`;
        await navigator.clipboard.writeText(text);
        $('#copyReportBtn').textContent='已复制';
      };
    };
  }

  function enhanceNavigation(){
    const nav = $('.desktop-nav');
    if (nav && !nav.querySelector('[href="#live-intelligence"]')) {
      nav.insertAdjacentHTML('afterbegin','<a href="#live-intelligence">实时</a><a href="#money-lab">变现研究</a>');
      nav.insertAdjacentHTML('beforeend','<a href="#finance-literacy">财商</a>');
    }
  }

  function setup(){
    sectionTemplate();
    enhanceNavigation();
    renderLive(true);
    renderResearch();
    renderHackathons();
    renderFinance();
    setupReport();
    $('#refreshIssuesBtn').onclick=()=>renderLive(true);
  }

  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded',setup); else setup();
})();

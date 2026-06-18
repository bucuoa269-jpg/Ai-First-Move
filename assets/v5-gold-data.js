(() => {
  const root = window.AI_FIRSTMOVE_DATA || { opportunities: [], interviews: [] };
  const v5 = window.AI_FIRSTMOVE_V5 || (window.AI_FIRSTMOVE_V5 = {});
  const today = '2026-06-19';
  const has = id => root.opportunities.some(item => item.id === id);
  const addOpp = items => items.forEach(item => { if (!has(item.id)) root.opportunities.push(item); });

  v5.version = '5.0.0-gold-rush-map';
  v5.generatedAt = '2026-06-19T04:45:00+08:00';
  v5.positioning = {
    title: '淘金地图优先版',
    subtitle: '先找真实付款人，再找工具和教程；先做小验证，再谈规模化。',
    principle: '一手官方入口 + 深度访谈线索 + 社交平台信号 + 反方风险，共同决定一个机会能否进入推荐。'
  };

  const commonRisks = ['不承诺收益', '不搬运他人内容', '注意平台规则与版权', '以真实付款或用户反馈作为继续条件'];

  addOpp([
    {
      id:'gold-xhs-ai-comic-commerce', title:'小红书 AI 漫画/IP种草带货路径', type:'side', country:'中国', city:'线上', online:true, sourceLevel:'B', verification:'多级线索·需账号实测', score:93,
      domains:['小红书','AI漫画','种草带货','虚拟IP'], audience:['大学生','会审美','不想出镜','内容创作者'], startupCost:'0—300元', time:'7—30天', difficulty:2, editorial:true,
      summary:'用AI生成统一人设、漫画分镜和生活化种草内容，测试小红书种草、虚拟商品或实体商品带货。',
      insight:'第一性原理不是“AI画得好看”，而是：人设是否稳定、商品是否有复购、内容是否像真实使用体验、是否能通过官方商业化路径接单。',
      evidence:'小红书官方蒲公英提供内容种草与直播合作入口；媒体披露小红书月活与搜索场景持续增长；但具体账号收入必须逐个核验。',
      whoPays:'品牌方、店铺、虚拟资料买家、实体商品商家。', firstStep:'选一个低风险品类，做3个虚拟IP人设和9篇笔记脚本，先测试收藏、私信和点击，不急着接广告。',
      plan3:['选择一个垂直人群：宿舍好物/学习资料/情绪陪伴/穿搭配件','生成统一角色设定和视觉规范','发布3篇不带明显广告的试探内容'],
      plan7:['完成9篇笔记矩阵','记录收藏率和私信问题','联系3个小商家做免费样片或低价试单'],
      risks:['AI图片版权与肖像风险','虚假体验会伤害账号信任','单个爆款不能证明商业模式'], url:'https://pgy.xiaohongshu.com/', platform:'小红书/蒲公英', publishedAt:'2026-06-19', lastVerifiedAt:today,
      sources:[
        {role:'官方商业化入口',grade:'S',platform:'小红书蒲公英',title:'小红书内容种草与直播合作官方平台',url:'https://pgy.xiaohongshu.com/',publishedAt:'2026-06-19'},
        {role:'平台趋势来源',grade:'A',platform:'北京商报',title:'小红书月活跃用户突破4亿',url:'https://www.bbtnews.com.cn/2026/0527/594513.shtml',publishedAt:'2026-05-27'},
        {role:'反方研究',grade:'A',platform:'arXiv',title:'Xiaohongshu KOC informal labor research',url:'https://arxiv.org/abs/2409.08360',publishedAt:'2024-09-12'}
      ], crossValidation:{count:3,status:'官方入口 + 平台趋势 + 劳动风险研究交叉验证'}
    },
    {
      id:'gold-douyin-ai-shortvideo-starmap', title:'抖音 AI 短视频微商单与星图接单路径', type:'side', country:'中国', city:'线上', online:true, sourceLevel:'B', verification:'官方入口+行业报道·需账号条件核验', score:91,
      domains:['抖音','巨量星图','AI短视频','商单'], audience:['短视频创作者','会剪辑','愿意做账号'], startupCost:'0—500元', time:'14—60天', difficulty:3, editorial:true,
      summary:'用AI脚本、AI分镜、AI剪辑和真人/虚拟素材提升短视频稳定产出，目标不是立刻爆单，而是进入可被品牌识别的垂类账号。',
      insight:'抖音的第一性原理是推荐系统和内容供给；变现的第一性原理是品牌预算是否愿意为你的影响力和转化结果付款。',
      evidence:'巨量星图是抖音营销生态的达人变现平台；行业报道显示平台围绕中小达人变现提供成长路径。',
      whoPays:'品牌、商家、MCN、服务商。', firstStep:'确定一个垂直赛道，连续7天发布同一结构的视频，先验证完播率、收藏和评论需求。',
      plan3:['选择垂类：学习/本地生活/数码/好物/AI工具','搭建AI脚本和剪辑模板','发布3条同结构内容'],
      plan7:['完成7条内容','分析表现最好的一条','做一页账号商业合作说明'],
      risks:['星图开通条件需账号达标','AI批量低质内容会被平台惩罚','商单内容要标注合规'], url:'https://www.xingtu.cn/', platform:'抖音/巨量星图', publishedAt:'2026-06-19', lastVerifiedAt:today,
      sources:[
        {role:'官方商业化入口',grade:'S',platform:'巨量星图',title:'抖音营销生态达人变现平台',url:'https://www.xingtu.cn/',publishedAt:'2026-06-19'},
        {role:'开发者/平台说明',grade:'S',platform:'巨量引擎开放平台',title:'巨量星图平台介绍',url:'https://open.oceanengine.com/docs/1696710606442496',publishedAt:'2026-06-19'},
        {role:'行业报道',grade:'A',platform:'中国日报网/东方网',title:'巨量星图中小达人如何高效变现',url:'https://ex.chinadaily.com.cn/exchange/partners/82/rss/channel/cn/columns/sz8srm/stories/WS66fa4986a310b59111d9c409.html',publishedAt:'2024-09-30'}
      ], crossValidation:{count:3,status:'官方入口 + 开放平台文档 + 中小达人报道交叉验证'}
    },
    {
      id:'gold-xhs-virtual-product-store', title:'小红书虚拟资料/模板电商路径', type:'side', country:'中国', city:'线上', online:true, sourceLevel:'B', verification:'播客案例线索·需店铺数据验证', score:88,
      domains:['小红书','虚拟电商','数字产品','模板'], audience:['大学生','会整理资料','会设计模板'], startupCost:'0—200元', time:'7—14天', difficulty:2, editorial:true,
      summary:'把学习资料、求职模板、AI提示词、PPT模板、Notion/飞书模板做成低价数字产品，用内容种草和私域承接测试。',
      insight:'适合新手，因为交付边际成本低；但真正难点是选品、信任、售后和版权来源，而不是文件数量。',
      evidence:'公开播客有小红书虚拟电商访谈案例；小红书蒲公英/合作中心体现创作者商业化需求；但收入属于当事人自述，不能当普遍结果。',
      whoPays:'备考学生、求职学生、新媒体运营、自由职业者。', firstStep:'选择一个你自己用过且能保证版权的资料包，做3篇使用场景笔记。',
      plan3:['确定一个细分痛点','制作最小数字产品','写清楚适合谁和不适合谁'], plan7:['发布7篇场景化笔记','设置低价试卖','收集10个用户反馈'],
      risks:['资料版权','虚假宣传','售后耗时','平台交易规则'], url:'https://podcasts.apple.com/cy/podcast/vol-119-2026%E5%89%AF%E4%B8%9A%E9%A6%96%E9%80%89-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%99%9A%E6%8B%9F%E7%94%B5%E5%95%86%E7%9A%84%E4%BD%8E%E9%97%A8%E6%A7%9B%E9%AB%98%E5%9B%9E%E6%8A%A5%E8%B7%AF%E5%BE%84/id1711326484?i=1000741442137&l=el', platform:'Apple Podcasts/小红书', publishedAt:'2025-12-01', lastVerifiedAt:today,
      sources:[
        {role:'案例发现源',grade:'B',platform:'Apple Podcasts',title:'满地找钱：2026副业首选！小红书虚拟电商',url:'https://podcasts.apple.com/cy/podcast/vol-119-2026%E5%89%AF%E4%B8%9A%E9%A6%96%E9%80%89-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%99%9A%E6%8B%9F%E7%94%B5%E5%95%86%E7%9A%84%E4%BD%8E%E9%97%A8%E6%A7%9B%E9%AB%98%E5%9B%9E%E6%8A%A5%E8%B7%AF%E5%BE%84/id1711326484?i=1000741442137&l=el',publishedAt:'2025-12-01'},
        {role:'官方商业化入口',grade:'S',platform:'小红书蒲公英',title:'小红书内容种草与直播合作官方平台',url:'https://pgy.xiaohongshu.com/',publishedAt:'2026-06-19'},
        {role:'反方提示',grade:'A',platform:'arXiv',title:'RED KOC informal labor and compensation risks',url:'https://arxiv.org/abs/2409.08360',publishedAt:'2024-09-12'}
      ], crossValidation:{count:3,status:'播客案例 + 官方商业化入口 + 学术风险研究交叉验证'}
    },
    {
      id:'gold-ai-promotion-post-studio', title:'AI促销海报/种草图文工作室', type:'side', country:'中国', city:'线上/本地', online:true, sourceLevel:'B', verification:'研究证据+平台需求·需客户验证', score:87,
      domains:['AI设计','小红书','电商视觉','本地商家'], audience:['设计专业','会审美','PPT/海报创作者'], startupCost:'0—300元', time:'3—7天', difficulty:2, editorial:true,
      summary:'用AI辅助生成促销海报、种草图文和短视频封面，服务本地店铺、校园社团、微商和小红书店铺。',
      insight:'付款人不是为“AI图片”买单，而是为更快上新、更高点击、更低设计成本买单。',
      evidence:'AI辅助促销帖设计已有研究样例；小红书与抖音都有创作者商业化和品牌合作入口。',
      whoPays:'小商家、校园组织、品牌方、个人店主。', firstStep:'做10张同一品类的前后对比样张，直接找10家商家询问是否愿意试用。',
      plan3:['选一个行业：奶茶/美甲/教培/数码配件','做10张样图','整理报价页'], plan7:['联系30个潜在客户','完成1个低价试单','记录修改成本'],
      risks:['素材版权','商用字体','图片与商品真实一致性'], url:'https://arxiv.org/abs/2407.14928', platform:'研究/平台商业化', publishedAt:'2024-07-20', lastVerifiedAt:today,
      sources:[
        {role:'研究证据',grade:'A',platform:'arXiv',title:'AI-infused promotional post design tool',url:'https://arxiv.org/abs/2407.14928',publishedAt:'2024-07-20'},
        {role:'官方商业化入口',grade:'S',platform:'小红书蒲公英',title:'小红书内容种草与直播合作官方平台',url:'https://pgy.xiaohongshu.com/',publishedAt:'2026-06-19'},
        {role:'官方商业化入口',grade:'S',platform:'巨量星图',title:'抖音达人变现与品牌营销平台',url:'https://www.xingtu.cn/',publishedAt:'2026-06-19'}
      ], crossValidation:{count:3,status:'研究证据 + 双平台商业化入口交叉验证'}
    },
    {
      id:'gold-campus-ai-interview-digest', title:'国内AI深度访谈摘要与机会拆解号', type:'side', country:'中国', city:'线上', online:true, sourceLevel:'B', verification:'内容产品·需版权边界', score:85,
      domains:['播客','深度访谈','AI商业','内容号'], audience:['会写作','会总结','大学生'], startupCost:'0元', time:'7天', difficulty:2, editorial:true,
      summary:'每天听一段AI商业访谈，输出“机会、付款人、第一步、反方风险”四段式卡片，做成小红书/公众号/网站专栏。',
      insight:'价值不在搬运节目，而在结构化判断；必须只摘录极少量必要信息并链接原始节目。',
      evidence:'搞钱女孩、晚点聊、十字路口、张小珺等播客持续出现AI商业与创业访谈；Apple Podcasts和小宇宙可作为公开入口。',
      whoPays:'早期免费获取关注；后续可能是报告、社群、就业创业服务。', firstStep:'选5期公开节目，做成统一模板，全部标注来源和“不可照搬”限制。',
      plan3:['建立访谈卡模板','完成3期节目拆解','找第二来源复核'], plan7:['发布7张卡','收集读者需求','整理第一份周报'],
      risks:['版权引用限制','不能复制逐字稿','不能夸大嘉宾收入'], url:'https://podcasts.apple.com/cn/podcast/%E6%90%9E%E9%92%B1%E5%A5%B3%E5%AD%A9/id1676099257', platform:'播客/小红书/公众号', publishedAt:'2026-06-19', lastVerifiedAt:today,
      sources:[
        {role:'访谈源',grade:'B',platform:'Apple Podcasts',title:'搞钱女孩播客',url:'https://podcasts.apple.com/cn/podcast/%E6%90%9E%E9%92%B1%E5%A5%B3%E5%AD%A9/id1676099257',publishedAt:'2026-06-19'},
        {role:'访谈源',grade:'B',platform:'小宇宙',title:'搞钱女孩GEO访谈',url:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29',publishedAt:'2026-06-18'},
        {role:'访谈源',grade:'B',platform:'小宇宙',title:'十字路口Crossing',url:'https://www.xiaoyuzhoufm.com/podcast/60502e253c92d4f62c2a9577',publishedAt:'2026-06-01'}
      ], crossValidation:{count:3,status:'多个播客入口确认AI商业访谈供给充足'}
    },
    {
      id:'gold-xhs-longform-podcast-ai-column', title:'小红书长图文/播客新内容形态机会', type:'startup', country:'中国', city:'线上', online:true, sourceLevel:'A', verification:'媒体趋势+官方商业入口·待产品实测', score:84,
      domains:['小红书','播客','长图文','内容产品'], audience:['会写长文','播客爱好者','研究型大学生'], startupCost:'0—300元', time:'14—30天', difficulty:3, editorial:true,
      summary:'小红书正在扩展长图文、播客和4K视频等内容形态，适合做“AI深度内容+机会拆解+工具包”的新栏目。',
      insight:'短视频卷快，长内容卷信任。AI淘金地图更适合长图文、周报、播客摘要和可研报告。',
      evidence:'多家媒体报道小红书将上线长图文、播客与4K功能，平台商业化入口可通过蒲公英承接。',
      whoPays:'读者、品牌、平台、课程/报告用户。', firstStep:'把一份AI机会拆成1篇长图文、1张长图、1段音频脚本，测试哪种反馈最好。',
      plan3:['整理3条机会','写一篇长图文','生成配套音频脚本'], plan7:['发布5篇长图文','观察收藏/转发','邀请读者投票需求'],
      risks:['平台功能节奏变化','内容同质化','不要搬运播客逐字稿'], url:'https://www.bbtnews.com.cn/2026/0527/594513.shtml', platform:'小红书/媒体趋势', publishedAt:'2026-05-27', lastVerifiedAt:today,
      sources:[
        {role:'平台趋势来源',grade:'A',platform:'北京商报',title:'小红书月活跃用户突破4亿',url:'https://www.bbtnews.com.cn/2026/0527/594513.shtml',publishedAt:'2026-05-27'},
        {role:'平台趋势来源',grade:'A',platform:'虎嗅',title:'小红书彻底爆发了',url:'https://www.huxiu.com/article/4861801.html',publishedAt:'2026-05-28'},
        {role:'官方商业化入口',grade:'S',platform:'小红书蒲公英',title:'官方内容种草与直播合作平台',url:'https://pgy.xiaohongshu.com/',publishedAt:'2026-06-19'}
      ], crossValidation:{count:3,status:'媒体趋势双来源 + 官方商业化入口交叉验证'}
    }
  ]);

  v5.goldMaps = [
    {
      id:'map-xhs-ai-ip', rank:1, title:'小红书 AI 漫画/IP 种草带货', platform:'小红书', level:'B+', freshness:'近期重点观察', score:93,
      sourceStack:['S 小红书蒲公英官方商业化入口','A 小红书中长内容与搜索增长报道','A/B KOC劳动与商业化风险研究'],
      payers:['品牌方','店铺主','虚拟资料买家','实体商品商家'], deliverables:['统一人设图文','9篇种草笔记','产品场景图','私域承接页'],
      firstWeek:['第1天：选品类和人设，不碰侵权IP','第2—3天：做9张图和3篇笔记','第4—7天：测试收藏、私信和商家反馈'],
      stop:'7天没有收藏、私信、点击或商家反馈，就先换品类/人设。', sourceUrl:'https://pgy.xiaohongshu.com/'
    },
    {
      id:'map-douyin-ai-short', rank:2, title:'抖音 AI 短视频 + 星图微商单', platform:'抖音/巨量星图', level:'B+', freshness:'长期观察', score:91,
      sourceStack:['S 巨量星图官方入口','S 巨量引擎开放平台说明','A 中小达人变现报道'],
      payers:['品牌广告主','本地商家','MCN','服务商'], deliverables:['AI脚本模板','短视频样片','账号合作说明','商单报价页'],
      firstWeek:['第1天：定垂类','第2—4天：发3条同结构内容','第5—7天：复盘完播率并写合作页'],
      stop:'连续7条内容没有清晰反馈，不急着接商单，先优化垂类和内容钩子。', sourceUrl:'https://www.xingtu.cn/'
    },
    {
      id:'map-virtual-product', rank:3, title:'小红书虚拟资料/模板电商', platform:'小红书/播客案例', level:'B', freshness:'案例线索', score:88,
      sourceStack:['B 满地找钱播客案例','S 小红书蒲公英入口','A KOC商业化风险研究'],
      payers:['备考学生','求职学生','运营新人','自由职业者'], deliverables:['资料包','求职模板','提示词包','PPT/飞书/Notion模板'],
      firstWeek:['第1天：选择自己真正用过的场景','第2—3天：做最小产品','第4—7天：发布7篇使用场景笔记'],
      stop:'无人愿意付费或问具体问题，说明痛点/定价/信任不足。', sourceUrl:'https://podcasts.apple.com/cy/podcast/vol-119-2026%E5%89%AF%E4%B8%9A%E9%A6%96%E9%80%89-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%99%9A%E6%8B%9F%E7%94%B5%E5%95%86%E7%9A%84%E4%BD%8E%E9%97%A8%E6%A7%9B%E9%AB%98%E5%9B%9E%E6%8A%A5%E8%B7%AF%E5%BE%84/id1711326484?i=1000741442137&l=el'
    },
    {
      id:'map-geo', rank:4, title:'GEO / AI搜索可见度诊断', platform:'小宇宙/企业服务', level:'B', freshness:'近期访谈', score:87,
      sourceStack:['B 搞钱女孩GEO访谈','A 315黑产反方提醒','S 企业官网/品牌内容可核验'],
      payers:['高客单服务商','咨询机构','教育/法律/医美类企业','SaaS'], deliverables:['AI搜索诊断','问答库建设','白帽内容资产优化','月度监控表'],
      firstWeek:['第1天：选行业','第2—3天：做10个AI问答测试','第4—7天：联系10家企业给免费诊断'],
      stop:'不能拿出白帽内容方案或客户不愿意沟通，就不要碰黑产GEO。', sourceUrl:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29'
    },
    {
      id:'map-ai-ppt-bp', rank:5, title:'AI PPT / 商业计划书视觉重构', platform:'校园/小红书/本地服务', level:'B', freshness:'适合大学生', score:86,
      sourceStack:['B 编辑部商业分析','S 高校赛事需求入口','A 设计/展示类工具与平台需求'],
      payers:['参赛团队','创业团队','社团','中小企业'], deliverables:['7页BP改造','答辩PPT模板','可编辑源文件','路演讲稿'],
      firstWeek:['第1天：做3个前后对比案例','第2—3天：发布小红书和校园群','第4—7天：接1单低价试做'],
      stop:'客户只要便宜但不愿意给材料，交付风险会很高。', sourceUrl:'https://cy.ncss.cn/'
    },
    {
      id:'map-local-ai-video', rank:6, title:'本地商家 AI 视频样片服务', platform:'二三线城市/本地生活', level:'B', freshness:'时间机器', score:84,
      sourceStack:['B 时间机器分析','S 即梦/可灵官方工具入口','A 本地商家短视频需求'],
      payers:['餐饮店','美甲店','教培机构','民宿/文旅商家'], deliverables:['15秒样片','节日促销视频','门店故事脚本','发布文案'],
      firstWeek:['第1天：选择一个街区行业','第2—3天：做3条样片','第4—7天：线下问10家店'],
      stop:'商家不愿意用样片发账号，说明价值表达不够。', sourceUrl:'https://jimeng.jianying.com/'
    }
  ];

  v5.leadMap = [
    {type:'平台红利', title:'小红书长图文/播客/4K内容形态', level:'A', source:'北京商报/虎嗅/BIANEWS', publishedAt:'2026-05-27', opportunity:'深度AI机会拆解号、长图周报、播客摘要栏目', risk:'平台功能和流量政策会变化，不要只赌单一平台。', url:'https://www.bbtnews.com.cn/2026/0527/594513.shtml'},
    {type:'官方变现入口', title:'小红书蒲公英', level:'S', source:'小红书官方', publishedAt:'长期开放', opportunity:'内容种草、商品合作、直播合作、品牌合作', risk:'账号门槛、内容合规和商单标注需遵守平台规则。', url:'https://pgy.xiaohongshu.com/'},
    {type:'官方变现入口', title:'巨量星图', level:'S', source:'巨量星图官方', publishedAt:'长期开放', opportunity:'抖音达人商单、品牌营销、MCN/服务商合作', risk:'开通条件与报价规则以官方平台为准。', url:'https://www.xingtu.cn/'},
    {type:'近期访谈', title:'GEO：AI搜索优化成为B端服务线索', level:'B', source:'搞钱女孩/小宇宙', publishedAt:'2026-06-18', opportunity:'企业AI搜索可见度诊断、白帽内容资产优化', risk:'黑产投喂和承诺排名风险高。', url:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29'},
    {type:'案例访谈', title:'小红书虚拟电商/数字产品', level:'B', source:'满地找钱/Apple Podcasts', publishedAt:'2025-12', opportunity:'资料包、模板、提示词、虚拟产品', risk:'收入为嘉宾自述，版权、售后和选品需要实测。', url:'https://podcasts.apple.com/cy/podcast/vol-119-2026%E5%89%AF%E4%B8%9A%E9%A6%96%E9%80%89-%E5%B0%8F%E7%BA%A2%E4%B9%A6%E8%99%9A%E6%8B%9F%E7%94%B5%E5%95%86%E7%9A%84%E4%BD%8E%E9%97%A8%E6%A7%9B%E9%AB%98%E5%9B%9E%E6%8A%A5%E8%B7%AF%E5%BE%84/id1711326484?i=1000741442137&l=el'},
    {type:'学术反方', title:'小红书KOC商业劳动被低估', level:'A', source:'arXiv研究', publishedAt:'2024-09-12', opportunity:'提醒创作者定价和权益保护，不要只为流量免费劳动', risk:'KOC劳动可能被低估，需看真实利润和时间成本。', url:'https://arxiv.org/abs/2409.08360'},
    {type:'研究证据', title:'AI辅助促销帖设计', level:'A', source:'arXiv研究', publishedAt:'2024-07-20', opportunity:'AI海报/种草图/文案工作流服务', risk:'研究可证明工具有效，不证明一定有人付费。', url:'https://arxiv.org/abs/2407.14928'},
    {type:'社交线索', title:'小红书/抖音AI漫画带货博主观察', level:'C', source:'平台搜索待核验', publishedAt:'持续观察', opportunity:'虚拟IP、漫画种草、实体/虚拟商品转化', risk:'单个账号不可复制，需官方入口和成交证据交叉验证。', url:'https://pgy.xiaohongshu.com/'}
  ];

  v5.verificationFramework = [
    {title:'第一性原理', body:'每条机会先拆成：付款人是谁、痛点是否强、交付物是什么、为什么现在需要、7天能否出现付款或真实反馈。'},
    {title:'逻辑编排', body:'按“平台红利 → 具体交付 → 第一客户 → 证据等级 → 反方风险 → 停止条件”呈现，用户不用在碎片信息里迷路。'},
    {title:'工程治理', body:'所有来源进入 sources 字段；官方、访谈、社交线索分层；无法确认的内容只显示为待核验，不进入强推荐。'},
    {title:'交叉验证', body:'至少尝试寻找官方入口、第二公开来源、反方证据。社交平台单条爆款永远只算 C 级线索。'},
    {title:'青年友好', body:'优先低成本、低法律风险、可做作品集、可在7天内验证的方向；不鼓励贷款、囤货、灰产和高价培训。'}
  ];
})();

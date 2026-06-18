(() => {
  const base = window.AI_FIRSTMOVE_DATA;
  if (!base) return;
  const today = '2026-06-19';
  const has = id => base.opportunities.some(item => item.id === id);
  const addOpp = items => items.forEach(item => { if (!has(item.id)) base.opportunities.push(item); });

  addOpp([
    {
      id:'tsmc-careerhack-2026', title:'台积电第7届校园黑客松 CareerHack 2026', type:'competition', country:'中国台湾', city:'新竹/线上准备', online:false, sourceLevel:'S', verification:'官方页面·已结束归档', score:83,
      domains:['AI协作','企业IT','黑客松','求职作品集'], audience:['大学生','研究生','工程背景'], startupCost:'0—低成本', time:'报名截止 2025-12-21；Hack Day 2026-02-06/07', difficulty:4,
      summary:'台积电官方校园黑客松，以 From Copilots to Co-Workers / Human + AI Cooperation 为主题，适合作为企业AI协作案例研究。', insight:'虽然本届已结束，但它是“企业真实流程 + AI协作”的高质量样板，可迁移为国内大厂/制造业AI提效赛题。', evidence:'台积电官方CareerHack页面公开主题、报名截止与Hack Day时间。', whoPays:'赛事奖励、雇主或企业内部创新项目。', firstStep:'把它作为时间机器案例，拆出“AI协作提高企业IT效率”的可复用命题。',
      plan3:['整理官方赛题主题','拆出企业IT流程痛点','设计一个校园版AI协作Demo'], plan7:['访谈3名企业/实验室用户','完成可点击原型','写一页迁移复盘'], risks:['本届已结束，不能作为当前报名机会','跨地区参赛限制','企业案例不能直接商业化'], url:'https://www.tsmc.com/static/english/careers/Careerhack/index.html', platform:'TSMC', publishedAt:'2025-12-01', deadlineAt:'2025-12-21', lastVerifiedAt:today,
      sources:[{role:'确认来源',grade:'S',platform:'TSMC',title:'第7届台积电校园黑客松2026 TSMC IT CareerHack',url:'https://www.tsmc.com/static/english/careers/Careerhack/index.html',publishedAt:'2025-12-01'}], crossValidation:{count:1,status:'官方页面确认·归档样板'}
    },
    {
      id:'ytp-ai-city-hackathon-2026', title:'2026 YTP 黑客松：用 AI 翻转城市样貌', type:'competition', country:'中国台湾', city:'台北/线上说明', online:false, sourceLevel:'S', verification:'官方页面·已结束归档', score:82,
      domains:['智慧城市','公共服务','AI应用','黑客松'], audience:['大学生','社会青年','高中生'], startupCost:'0—低成本', time:'报名 2026-01-12 至 2026-03-18；竞赛 2026-04-25/26', difficulty:3,
      summary:'YTP黑客松官方页面显示以AI驱动科技普惠和城市共好为核心，青年组面向大学以上在学学生或社会青年。', insight:'适合用作“城市问题AI化”的样板：旅游体验、公共服务、本地商业都可以生成7天MVP。', evidence:'活动页面公开报名期间、竞赛期间、目标、青年组资格和总奖金。', whoPays:'赛事奖励、城市服务合作方或本地客户。', firstStep:'选一个本地城市痛点，做“AI问答/推荐/路线/简报”的最小Demo。',
      plan3:['拆解主题','访谈3名本地用户','写出用户旅程'], plan7:['完成Demo','设计线下测试','整理反馈'], risks:['本届报名已结束','城市数据和开放接口限制','公共服务项目商业化较慢'], url:'https://event.systex.com/2026-ytphackathon', platform:'YTP Hackathon', publishedAt:'2026-01-12', deadlineAt:'2026-03-18', lastVerifiedAt:today,
      sources:[{role:'确认来源',grade:'S',platform:'YTP Hackathon',title:'2026 YTP黑客松',url:'https://event.systex.com/2026-ytphackathon',publishedAt:'2026-01-12'}], crossValidation:{count:1,status:'官方页面确认·归档样板'}
    },
    {
      id:'digitimes-generative-ai-hackathon-2026', title:'云涌智生｜台湾生成式AI应用黑客松', type:'competition', country:'中国台湾', city:'线上/线下', online:true, sourceLevel:'S', verification:'官方活动页·报名节点需复核', score:86,
      domains:['生成式AI','金融创新','智慧求职','智慧城市','零售'], audience:['开发者','大学生','产品经理','创业者'], startupCost:'0—低成本', time:'官方页面显示6/30通知入选；具体报名状态需复核', difficulty:4,
      summary:'DIGITIMES活动页列出金融创新、智慧求职、城市应变、智慧零售等企业命题，是“真实行业命题 + GenAI Agent”的高价值样板。', insight:'比泛泛做AI工具更有价值：它直接给出金融、人力、城市、零售等企业场景，可以转化为行业自动化服务卡。', evidence:'活动页列出竞赛主题、合作企业、入选通知节点和主题说明机制。', whoPays:'企业命题方、赛事奖励或后续企业服务客户。', firstStep:'选择一个行业命题，写出输入、处理、输出和价值指标。',
      plan3:['进入官方页核验状态','选择一个企业命题','画出Agent工作流'], plan7:['用公开数据做Demo','找1名行业用户访谈','准备5分钟演示'], risks:['报名状态变化','企业数据不可得','金融和投资方向合规要求高'], url:'https://www.digitimes.com.tw/seminar/generativeai_hackathon_2026/', platform:'DIGITIMES', publishedAt:'2026-06-01', lastVerifiedAt:today,
      sources:[{role:'确认来源',grade:'S',platform:'DIGITIMES',title:'台湾生成式AI应用黑客松',url:'https://www.digitimes.com.tw/seminar/generativeai_hackathon_2026/',publishedAt:'2026-06-01'}], crossValidation:{count:1,status:'官方活动页确认'}
    },
    {
      id:'bilibili-ai-creator-2026-archive', title:'B站首届 AI 创作大赛复盘样本', type:'creator', country:'中国', city:'上海/线上', online:true, sourceLevel:'A', verification:'已结束·媒体与公开结果交叉验证', score:80,
      domains:['AI视频','AI创作','平台激励','内容商业化'], audience:['视频创作者','大学生','AI导演'], startupCost:'0—中等', time:'2026-01-05 至 2026-03-31 已结束', difficulty:3,
      summary:'公开报道显示B站首届AI创作大赛总奖金超300万元，并在收官报道中披露超过8300部作品和站内累计播放量突破7亿。', insight:'它证明AI视频正在被平台级激励，但“参赛热度”不等于个人变现；应从作品、账号、品牌样片和平台趋势角度复盘。', evidence:'量子位报道启动信息，中国青年报/央广等报道收官数据，可形成A/B级交叉验证；正式规则仍应以B站官方活动页为准。', whoPays:'平台奖励、品牌客户或内容受众。', firstStep:'复盘获奖/高播放作品，拆出主题、时长、叙事和工具链。',
      plan3:['整理10个高质量作品','拆解画面与叙事','做一条同主题原创样片'], plan7:['发布3条实验内容','记录数据','联系1个潜在品牌或社团合作'], risks:['活动已结束','IP改编授权限制','播放量不代表收入'], url:'https://www.qbitai.com/2026/01/366573.html', platform:'B站/媒体报道', publishedAt:'2026-01-05', deadlineAt:'2026-03-20', lastVerifiedAt:today,
      sources:[
        {role:'发现来源',grade:'A',platform:'量子位',title:'B站开启AI创作大赛，奖金超300万',url:'https://www.qbitai.com/2026/01/366573.html',publishedAt:'2026-01-05'},
        {role:'交叉来源',grade:'A',platform:'中国青年报',title:'B站首届AI创作大赛奖项揭晓，超过8300部作品参赛',url:'https://m.cyol.com/gb/articles/2026-04/01/content_KaMOPAFBAn.html',publishedAt:'2026-04-01'}
      ], crossValidation:{count:2,status:'启动报道+收官报道交叉验证'}
    },
    {
      id:'ai-geo-service', title:'GEO：生成式引擎优化服务', type:'side', country:'中国', city:'深圳/线上', online:true, sourceLevel:'B', verification:'访谈案例·需客户付款验证', score:88,
      domains:['AI营销','GEO','企业服务','内容策略'], audience:['营销运营','内容创作者','会写作','能做B端沟通'], startupCost:'0—500元', time:'7—30天', difficulty:3, editorial:true,
      summary:'生成式引擎优化（GEO）正在成为AI搜索环境下的新营销服务：帮助品牌被AI回答引用、理解与推荐。', insight:'适合从“AI时代SEO诊断”切入，不要一开始承诺排名或成交；必须用品牌问答覆盖率、引用频率和咨询转化作为指标。', evidence:'搞钱女孩近期公开访谈讨论GEO服务、行业适配与客户案例；但具体客户收入属于当事人自述，需独立验证。', whoPays:'高客单、高毛利、高介入度行业的企业或咨询机构。', firstStep:'选一个本地企业，做5个AI搜索问题的现状诊断。',
      plan3:['整理10个品牌问答问题','用多个AI搜索/问答工具测试','输出1页诊断'], plan7:['联系10个高客单行业客户','提供一次免费诊断','争取小额试单'], risks:['不能承诺AI回答必然出现','黑产GEO和虚假投喂有合规风险','客户数据与品牌事实必须准确'], url:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29', platform:'小宇宙·搞钱女孩', publishedAt:'2026-06-18', lastVerifiedAt:today,
      sources:[{role:'发现来源',grade:'B',platform:'小宇宙',title:'搞钱女孩：GEO是AI时代的新流量密码',url:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29',publishedAt:'2026-06-18'}], crossValidation:{count:1,status:'访谈线索；需官网/客户案例二次确认'}
    },
    {
      id:'ai-opc-globalization', title:'OPC 一人公司全球化跃迁', type:'startup', country:'中国/全球', city:'线上', online:true, sourceLevel:'B', verification:'播客案例·编辑分析', score:84,
      domains:['一人公司','AI出海','内容产品化','独立开发'], audience:['独立开发者','内容创作者','大学生创业者'], startupCost:'0—1000元', time:'14—30天', difficulty:3, editorial:true,
      summary:'一人公司（OPC）逻辑强调用AI和外包替代部分传统组织职能，通过内容、工具或服务连接全球用户。', insight:'年轻人不应直接幻想“一个人年入百万”，更适合做一个可出售的小产品/服务，并用英文页面测试海外需求。', evidence:'公开播客对OPC能力模型、全球化和避坑做了拆解；仍需用真实付款和复购验证。', whoPays:'全球小企业、创作者、独立开发者用户。', firstStep:'把一个中文服务改成英文Landing Page，测试海外询盘。',
      plan3:['选择一个小服务','写英文落地页','发布到Product Hunt/Reddit相关社区草稿'], plan7:['联系20个目标用户','收集反馈','尝试1笔预售'], risks:['支付与税务','英文获客成本','服务交付质量'], url:'https://www.xiaoyuzhoufm.com/episode/69c111fb521e5c0a809c9fb7', platform:'小宇宙', publishedAt:'2026-04-01', lastVerifiedAt:today,
      sources:[{role:'发现来源',grade:'B',platform:'小宇宙',title:'从OPC到OPU：AI时代个体创业者如何实现全球化跃迁',url:'https://www.xiaoyuzhoufm.com/episode/69c111fb521e5c0a809c9fb7',publishedAt:'2026-04-01'}], crossValidation:{count:1,status:'访谈/方法论线索；需产品数据验证'}
    },
    {
      id:'ai-content-to-solution', title:'从AI内容到B端解决方案', type:'side', country:'中国', city:'线上', online:true, sourceLevel:'B', verification:'访谈交叉验证·需实操验证', score:89,
      domains:['内容变现','B端服务','AI培训','AI工作流'], audience:['内容创作者','大学生','会表达'], startupCost:'0—300元', time:'7—30天', difficulty:3, editorial:true,
      summary:'访谈100位AI获利者的公开节目认为，内容创作者的变现终点往往不是流量本身，而是方案、服务和可复购结果。', insight:'适合大学生先做“免费内容获客 + 低价诊断 + 标准化交付”，但必须避免卖空泛课程。', evidence:'搞钱学姐与大树AI相关节目在小宇宙和Apple Podcasts均有公开页，可交叉确认节目主题和嘉宾；收入细节仍属当事人自述。', whoPays:'小企业、社团、校园团队、个体商家。', firstStep:'选一个垂直领域，连续发布7条“AI解决真实问题”的内容，并开放免费诊断。',
      plan3:['确定一个行业','发布3条案例内容','设计诊断问卷'], plan7:['完成7条内容','做3次诊断','争取1个付费交付'], risks:['流量不稳定','能力不足导致交付失败','不要夸大收益'], url:'https://www.xiaoyuzhoufm.com/episode/697ec0242fc7f49d0932734c', platform:'小宇宙/Apple Podcasts', publishedAt:'2026-02-01', lastVerifiedAt:today,
      sources:[
        {role:'发现来源',grade:'B',platform:'小宇宙',title:'年终总结，采访那些用AI搞到钱人，都凭什么？',url:'https://www.xiaoyuzhoufm.com/episode/697ec0242fc7f49d0932734c',publishedAt:'2026-02-01'},
        {role:'交叉来源',grade:'B',platform:'Apple Podcasts',title:'大树的年终总结，采访100位用AI赚钱的人，都凭什么？',url:'https://podcasts.apple.com/sg/podcast/72-%E5%A4%A7%E6%A0%91%E7%9A%84%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93-%E9%87%87%E8%AE%BF100%E4%BD%8D%E7%94%A8ai%E8%B5%9A%E9%92%B1%E7%9A%84%E4%BA%BA-%E9%83%BD%E5%87%AD%E4%BB%80%E4%B9%88/id1760676812?i=1000747579803',publishedAt:'2026-02-01'}
      ], crossValidation:{count:2,status:'播客平台交叉确认节目主题'}
    },
    {
      id:'ai-course-risk-radar', title:'AI变现教程风险雷达', type:'side', country:'中国', city:'线上', online:true, sourceLevel:'A', verification:'风险案例·媒体交叉验证', score:72,
      domains:['AI教程','风险识别','财商启蒙','反割韭菜'], audience:['新手小白','大学生','家长'], startupCost:'0元', time:'1天检查', difficulty:1, editorial:true,
      summary:'市面上有大量AI变现教程和付费社群，部分公开页面宣称高收入案例，但媒体也长期提示“卖课先富”和夸大收益风险。', insight:'这个机会不是卖课，而是做“项目可行性核验表”：帮年轻人识别真假机会、成本、证据和适配度。', evidence:'生财有术、AI破局等公开页面显示AI与创业/副业学习需求存在；新浪等媒体曾报道过AI卖课夸大宣传风险。', whoPays:'谨慎的学习者、社群组织者或高校就业创业服务。', firstStep:'建立一张AI项目核验表：来源、成本、第一位客户、反方证据、版权风险。',
      plan3:['收集10个公开教程标题','用核验表打分','写一篇避坑指南'], plan7:['发布免费工具','邀请用户测试','迭代评分规则'], risks:['不得复制付费内容','避免攻击具体个人','评分标准要透明'], url:'https://www.scys.com/', platform:'公开社群/媒体', publishedAt:'2026-01-01', lastVerifiedAt:today,
      sources:[
        {role:'需求来源',grade:'A',platform:'生财有术官网',title:'普通人学习AI与创业的实战型社区',url:'https://www.scys.com/',publishedAt:'2026-01-01'},
        {role:'需求来源',grade:'B',platform:'知识星球公开页',title:'AI破局俱乐部公开页',url:'https://wx.zsxq.com/group/15552545485212',publishedAt:'2026-01-01'},
        {role:'反方来源',grade:'A',platform:'新浪科技',title:'AI大火：让卖课的先富起来',url:'https://finance.sina.cn/tech/csj/2023-07-07/detail-imyzvnhx8516051.d.html?vt=4',publishedAt:'2023-07-07'}
      ], crossValidation:{count:3,status:'需求存在+反方风险交叉验证'}
    }
  ]);

  base.interviews.push(
    {
      title:'搞钱女孩：GEO是AI时代的新流量密码', show:'搞钱女孩', level:'B', url:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29', publishedAt:'2026-06-18', platform:'小宇宙',
      signal:'AI搜索环境下，企业开始关注“如何被AI答案引用”，但合规GEO与黑产投喂必须严格区分。',
      lessons:['高客单高毛利行业更可能付费','先做诊断与指标，不承诺排名','EEAT与真实内容资产比短期技巧更重要'],
      limits:['客户案例多为当事人自述','黑产GEO有声誉与合规风险','需要持续监测AI回答变化']
    },
    {
      title:'从OPC到OPU：AI时代个体创业者如何实现全球化跃迁', show:'Day1Global / 小宇宙公开单集', level:'B', url:'https://www.xiaoyuzhoufm.com/episode/69c111fb521e5c0a809c9fb7', publishedAt:'2026-04-01', platform:'小宇宙',
      signal:'一人公司不是少干活，而是用AI、外包和流程系统，把小产品卖到更大的市场。',
      lessons:['先产品化一个小服务','用英文页面测试全球需求','把交付流程写成SOP'],
      limits:['支付、税务、获客和交付都需要真实能力','国外市场不是简单搬运中文内容']
    },
    {
      title:'十字路口：高手怎么用AI？普通人怎么学AI？', show:'十字路口Crossing', level:'B', url:'https://www.xiaoyuzhoufm.com/podcast/60502e253c92d4f62c2a9577', publishedAt:'2026-06-01', platform:'小宇宙',
      signal:'普通人学AI不能只会聊天框，要逐步转向agentic工具、上下文积累和可复用Skill。',
      lessons:['把AI当动词，不只是名词','沉淀上下文和工作流','Skill可能成为新的可售资产'],
      limits:['高手路径对新手门槛较高','工具变化快，不能依赖单一产品']
    },
    {
      title:'DeepMind 姚顺宇深度专访', show:'AI圆桌π', level:'B', url:'https://www.xiaoyuzhoufm.com/episode/6a0936f7e1eb34a9398aacff', publishedAt:'2026-05-17', platform:'小宇宙',
      signal:'顶尖AI人才的路径提醒：年轻人要重视基础能力、真实问题和长期主义。',
      lessons:['研究能力和工程能力都重要','不要把时间浪费在低价值迎合','关注真正有复利的问题'],
      limits:['顶尖研究者路径不适合直接复制为副业','对普通大学生应转化为学习路线']
    },
    {
      title:'AI视频产品怎么Go Viral？PixVerse的答案', show:'晚点聊 LateTalk', level:'B', url:'https://www.xiaoyuzhoufm.com/episode/6846136e7dd7cf6566795214', publishedAt:'2025-06-08', platform:'小宇宙',
      signal:'AI视频产品增长依赖模板、传播机制和用户作品循环，不只是模型质量。',
      lessons:['把传播设计进产品','降低第一条作品的门槛','用用户作品验证真实需求'],
      limits:['产品增长案例不能直接等于个人副业','算力和模型成本高']
    }
  );

  const v3 = window.AI_FIRSTMOVE_V3 || (window.AI_FIRSTMOVE_V3 = {});
  v3.version = '4.0.0-quality';
  v3.generatedAt = '2026-06-19T03:30:00+08:00';
  v3.influencers = [
    {name:'大树AI', role:'AI商业变现访谈者/内容创作者', platform:'小宇宙、视频号等公开平台', level:'B', url:'https://www.xiaoyuzhoufm.com/episode/697ec0242fc7f49d0932734c', why:'长期访谈AI获利者，适合作为“案例发现源”，但收入需要二次核验。', use:'提炼共性：谁付钱、为什么付钱、交付物是什么、复购如何发生。'},
    {name:'张小珺Jùn｜商业访谈录', role:'科技商业深度访谈', platform:'小宇宙/Apple Podcasts', level:'A/B', url:'https://podcasts.apple.com/my/podcast/%E5%BC%A0%E5%B0%8F%E7%8F%BAj%C3%B9n-%E5%95%86%E4%B8%9A%E8%AE%BF%E8%B0%88%E5%BD%95/id1634356920?l=ms', why:'长期覆盖AI、科技公司、创投与产业人物，适合作为宏观与创业方向判断源。', use:'只提炼趋势和人物判断，不复制节目内容。'},
    {name:'搞钱女孩', role:'女性创业/副业访谈播客', platform:'小宇宙', level:'B', url:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29', why:'持续采访真实个体创业与变现故事，适合发现普通人可理解的服务型机会。', use:'重点抽取第一客户、定价、交付和反方风险。'},
    {name:'十字路口Crossing', role:'AI创投观察与学习方法访谈', platform:'小宇宙', level:'B', url:'https://www.xiaoyuzhoufm.com/podcast/60502e253c92d4f62c2a9577', why:'能提供AI学习、投资与创业的交叉视角，适合指导网站的能力地图。', use:'转化为学习路线、工具转向与长期能力建设。'},
    {name:'晚点聊 LateTalk', role:'科技公司与产品增长访谈', platform:'小宇宙', level:'B', url:'https://www.xiaoyuzhoufm.com/episode/6846136e7dd7cf6566795214', why:'产品级访谈可帮助理解AI视频、产品增长与资源节俭策略。', use:'作为AI视频/产品增长的案例线索，而非个人收入承诺。'}
  ];

  v3.researchReports = (v3.researchReports || []).concat([
    {
      id:'geo-ai-search-service', title:'GEO/AI搜索可见度诊断服务', category:'副业变现', score:86, difficulty:'中', cycle:'7—30天', budget:'0—500元',
      verdict:'可作为B端轻服务切入，但必须走白帽内容资产路线，不能做虚假投喂或承诺排名。',
      demand:'企业正在从SEO转向“AI答案可见度”焦虑，高客单高毛利行业更有付费可能。', customer:'咨询、教育、法律、医美、本地服务、SaaS等高客单行业。',
      model:['免费AI搜索诊断','品牌问答库建设','官网FAQ与内容资产优化','月度AI可见度监控'],
      validation:['选1个行业做公开诊断样本','用多个AI搜索工具测试10个问题','联系10家企业','以低价诊断单验证付款'],
      risks:['黑产GEO风险','AI回答不可控','客户资料真实性和合规要求'],
      sources:[{grade:'B',role:'访谈来源',platform:'小宇宙',title:'搞钱女孩：GEO是AI时代的新流量密码',url:'https://www.xiaoyuzhoufm.com/podcast/63d945ece725b5378a158d29',publishedAt:'2026-06-18'}], crossValidation:'目前为访谈线索，需用客户付款和多个AI工具结果继续验证。'
    },
    {
      id:'anti-fake-ai-course-audit', title:'AI变现教程核验/避坑服务', category:'信息服务', score:79, difficulty:'低—中', cycle:'3—14天', budget:'0—100元',
      verdict:'很适合大学生做公益型入口：帮同学判断一个AI项目是否值得花钱学。商业化要谨慎，避免变成另一种卖焦虑。',
      demand:'AI副业课程和社群大量出现，用户需要低成本判断证据、成本、版权和适配度。', customer:'大学生、家长、社群管理者、就业创业中心。',
      model:['免费核验表','项目评分小工具','付费深度可研报告','高校社团讲座'],
      validation:['整理10个公开项目','建立评分表','邀请20名同学测试','收集是否减少错误付费'],
      risks:['不能复制付费内容','不能诽谤个人或机构','评分依据必须透明'],
      sources:[{grade:'A',role:'需求来源',platform:'生财有术官网',title:'普通人学习AI与创业的实战型社区',url:'https://www.scys.com/',publishedAt:'2026-01-01'},{grade:'A',role:'反方来源',platform:'新浪科技',title:'AI大火：让卖课的先富起来',url:'https://finance.sina.cn/tech/csj/2023-07-07/detail-imyzvnhx8516051.d.html?vt=4',publishedAt:'2023-07-07'}], crossValidation:'学习需求与被割风险同时存在，适合做“核验工具”而不是加入卖课大战。'
    },
    {
      id:'city-hackathon-agent-studio', title:'城市黑客松 Agent 工作室', category:'创业实验', score:82, difficulty:'中', cycle:'14—30天', budget:'0—500元',
      verdict:'把各地黑客松命题沉淀为可复用行业Agent模板，有机会从比赛走向服务。',
      demand:'智慧城市、金融、人力、零售等黑客松都在给真实命题，说明行业想要可演示AI解决方案。', customer:'赛事团队、政企创新部门、高校社团、本地企业。',
      model:['参赛辅导','Demo快速搭建','行业Agent模板','赛后企业PoC'],
      validation:['选择一个城市命题','搭建一个Agent样例','找3个潜在组织试用','记录效率指标'],
      risks:['公共数据权限','企业交付要求高','比赛命题不等于市场需求'],
      sources:[{grade:'S',role:'官方来源',platform:'新北市政府青年局',title:'2026新北市AI智慧城市黑客松',url:'https://www.youth.ntpc.gov.tw/youth/ch/app/course/view?id=181&module=course&serno=c1fc6a64-fed8-4a18-bf72-e2ef58d4efaa',publishedAt:'2026-06-05'},{grade:'S',role:'官方来源',platform:'DIGITIMES',title:'台湾生成式AI应用黑客松',url:'https://www.digitimes.com.tw/seminar/generativeai_hackathon_2026/',publishedAt:'2026-06-01'}], crossValidation:'多个官方黑客松都出现真实城市/行业命题，方向成立；商业化需赛后客户验证。'
    },
    {
      id:'ai-content-to-b2b-solution', title:'AI内容号 → B端小方案', category:'副业变现', score:87, difficulty:'中', cycle:'7—30天', budget:'0—300元',
      verdict:'比纯涨粉更稳：内容用来证明你理解问题，真正收费的是诊断和交付。',
      demand:'AI工具普及后，中小企业缺少“结合自己业务的具体方案”。', customer:'本地商家、培训机构、社团、创业团队、小企业。',
      model:['免费内容获客','低价诊断','SOP/模板交付','月度优化包'],
      validation:['连续发布7条行业案例','开放免费诊断','完成3次访谈','争取1笔定金'],
      risks:['泛泛讲工具难以收费','交付不稳定','案例不能侵犯客户资料'],
      sources:[{grade:'B',role:'访谈来源',platform:'小宇宙',title:'年终总结，采访那些用AI搞到钱人，都凭什么？',url:'https://www.xiaoyuzhoufm.com/episode/697ec0242fc7f49d0932734c',publishedAt:'2026-02-01'},{grade:'B',role:'交叉来源',platform:'Apple Podcasts',title:'大树的年终总结，采访100位用AI赚钱的人',url:'https://podcasts.apple.com/sg/podcast/72-%E5%A4%A7%E6%A0%91%E7%9A%84%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93-%E9%87%87%E8%AE%BF100%E4%BD%8D%E7%94%A8ai%E8%B5%9A%E9%92%B1%E7%9A%84%E4%BA%BA-%E9%83%BD%E5%87%AD%E4%BB%80%E4%B9%88/id1760676812?i=1000747579803',publishedAt:'2026-02-01'}], crossValidation:'同一节目在多播客平台可确认主题；商业结论仍需个人实操验证。'
    }
  ]);

  v3.manifesto = { title:'浪潮迭起：一起造浪，一起造富，一起造梦', text:'AI先机不是让年轻人相信轻松暴富，而是让更多人以更低成本看见机会、验证机会、创造价值。赚钱是结果之一，更重要的是把技术变成让生活更轻松、更有趣、更有爱、更有效率的真实作品。' };
})();

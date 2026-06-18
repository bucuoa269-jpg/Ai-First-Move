(() => {
  const base = window.AI_FIRSTMOVE_DATA;
  if (!base) return;

  const extraOpportunities = [
    {
      id:'modelscope-mobile-ai-2026', title:'手机上的创意 AI 挑战赛', type:'competition', country:'中国', city:'线上', online:true, sourceLevel:'S', verification:'官方赛事·进行中', score:94,
      domains:['AI应用','端侧AI','AI编程','黑客松'], audience:['大学生','开发者','产品经理','设计师'], startupCost:'0—低成本', time:'截止 2026-06-22', difficulty:3,
      summary:'魔搭社区官方应用开发赛，奖励30万元，面向能够在手机场景中完成创意AI应用的团队和个人。', insight:'适合把一个日常痛点快速做成可演示产品；距离截止时间较近，应先确认资格并缩小功能。', evidence:'赛事页面由魔搭社区官方发布，可核验奖励、截止日期和报名状态。', whoPays:'赛事奖励、未来雇主或产品用户；比赛本身不等同于稳定收入。', firstStep:'今天先确定一个“手机上必须发生”的高频动作，并做可点击原型。',
      plan3:['阅读官方规则并确认资格','完成问题定义和原型','确定最小演示路径'], plan7:['完成可运行Demo','邀请5名用户测试','提交作品与说明材料'], risks:['截止时间临近','作品知识产权与素材授权','不要为了功能数量牺牲可用性'], url:'https://modelscope.cn/events/248',
      platform:'魔搭社区', publishedAt:'2026-06-01', deadlineAt:'2026-06-22', lastVerifiedAt:'2026-06-18',
      sources:[{role:'确认来源',grade:'S',platform:'魔搭社区',title:'手机上的创意AI挑战赛',url:'https://modelscope.cn/events/248',publishedAt:'2026-06-01'}], crossValidation:{count:1,status:'官方确认'}
    },
    {
      id:'tencent-game-hackathon-2026', title:'腾讯云黑客松·游戏开发挑战赛 2026', type:'competition', country:'中国', city:'全国高校', online:true, sourceLevel:'S', verification:'官方赛事·报名中', score:95,
      domains:['AI游戏','AI编程','创意策划','黑客松'], audience:['大学生','程序员','设计师','游戏策划'], startupCost:'0—低成本', time:'报名至 2026-06-30', difficulty:4,
      summary:'腾讯云联合腾讯游戏学堂等发起的高校AI游戏开发挑战，官方页面显示总奖金100万元。', insight:'对大学生最有价值的不只是奖金，而是完成一款可玩的作品、团队协作和游戏行业作品集。', evidence:'腾讯云黑客松官网列出赛事时间、奖金和主办方，属于一手官方信息。', whoPays:'赛事奖励或未来雇主；作品是否商业化要另做用户验证。', firstStep:'组建2—4人小队，先做一个三分钟内能说明核心玩法的原型。',
      plan3:['确认报名资格','明确核心玩法','完成纸面或可点击原型'], plan7:['做出可玩Demo','完成用户测试','准备演示视频'], risks:['报名节点变化','素材和音乐版权','团队协作成本'], url:'https://tch.cloud.tencent.com/contest/40',
      platform:'腾讯云黑客松', publishedAt:'2026-04-17', deadlineAt:'2026-06-30', lastVerifiedAt:'2026-06-18',
      sources:[{role:'确认来源',grade:'S',platform:'腾讯云',title:'游戏开发挑战赛2026',url:'https://tch.cloud.tencent.com/contest/40',publishedAt:'2026-04-17'}], crossValidation:{count:1,status:'官方确认'}
    },
    {
      id:'tencent-agent-hackathon-2026', title:'腾讯云黑客松·AI 智能体争霸赛', type:'competition', country:'中国', city:'多赛区', online:true, sourceLevel:'S', verification:'官方赛事·比赛中', score:94,
      domains:['AI智能体','企业服务','AI自动化','黑客松'], audience:['开发者','企业服务团队','产品经理'], startupCost:'0—低成本', time:'至 2026-09-18', difficulty:4,
      summary:'腾讯云官方AI智能体赛事，包含Skill与Agent赛道，并强调真实商业场景验证。', insight:'适合把“会调用模型”升级成“能完成一段业务流程”的可交付作品。', evidence:'赛事总页和独立规则页均由腾讯云发布，可交叉确认主办方、赛道和时间。', whoPays:'赛事奖励、合作伙伴或未来企业客户。', firstStep:'选择一个能量化节省时间或提高转化的单点流程。',
      plan3:['选定真实业务场景','画出流程和输入输出','搭建最小Agent'], plan7:['跑通真实样例','记录前后效率','准备演示与风险说明'], risks:['企业数据安全','不能只做聊天壳','赛道资格需核验'], url:'https://tch.cloud.tencent.com/contest/41',
      platform:'腾讯云黑客松', publishedAt:'2026-04-15', deadlineAt:'2026-09-18', lastVerifiedAt:'2026-06-18',
      sources:[
        {role:'确认来源',grade:'S',platform:'腾讯云',title:'AI智能体争霸赛',url:'https://tch.cloud.tencent.com/contest/41',publishedAt:'2026-04-15'},
        {role:'规则来源',grade:'S',platform:'腾讯云',title:'AI智能体挑战赛规则与作品广场',url:'https://tch.cloud.tencent.com/claw',publishedAt:'2026-04-15'}
      ], crossValidation:{count:2,status:'双官方来源确认'}
    },
    {
      id:'new-taipei-ai-city-2026', title:'2026 新北市 AI 智慧城市黑客松', type:'competition', country:'中国台湾', city:'新北', online:false, sourceLevel:'S', verification:'政府官方·报名中', score:89,
      domains:['智慧城市','公共服务','AI应用','黑客松'], audience:['大学生','社会开发者','跨学科团队'], startupCost:'低成本', time:'报名至 2026-07-25', difficulty:4,
      summary:'新北市政府提出真实城市命题，面向大专学生与社会人士，决赛为30小时实作挑战。', insight:'这是“公共问题—原型—真实场景”路径的好样板，也适合用时间机器方法迁移到内地城市议题。', evidence:'新北市政府青年局页面公开报名期、决赛日期、队伍人数与命题机制。', whoPays:'赛事奖励或未来公共服务项目，不应直接视为副业。', firstStep:'先从五道真实命题中选择一个能够访问用户或数据的方向。',
      plan3:['核对资格','分析命题受益人','提出可验证假设'], plan7:['完成原型','联系潜在用户','形成演示与效益指标'], risks:['跨地区参赛条件','公共数据权限','现场安排'], url:'https://www.youth.ntpc.gov.tw/youth/ch/app/course/view?id=181&module=course&serno=c1fc6a64-fed8-4a18-bf72-e2ef58d4efaa',
      platform:'新北市政府青年局', publishedAt:'2026-06-05', deadlineAt:'2026-07-25', lastVerifiedAt:'2026-06-18',
      sources:[{role:'确认来源',grade:'S',platform:'政府官网',title:'2026新北市AI智慧城市黑客松',url:'https://www.youth.ntpc.gov.tw/youth/ch/app/course/view?id=181&module=course&serno=c1fc6a64-fed8-4a18-bf72-e2ef58d4efaa',publishedAt:'2026-06-05'}], crossValidation:{count:1,status:'政府官方确认'}
    },
    {
      id:'one-person-company-hackathon-2026', title:'全球 AI 开发者与“一人公司”黑客松', type:'competition', country:'全球', city:'线上', online:true, sourceLevel:'S', verification:'官方活动页·节点需复核', score:87,
      domains:['一人公司','AI应用','AI出海','黑客松'], audience:['独立开发者','创作者','早期创业者'], startupCost:'0—低成本', time:'活动周期', difficulty:3,
      summary:'魔搭社区活动页收录的全球AI开发者与一人公司黑客松，强调从创意到可展示产品。', insight:'适合把副业想法变成产品实验，但要用真实用户反馈而不是“参赛即创业成功”来判断。', evidence:'魔搭社区官方活动页可核验，具体报名节点与合作方规则需进入活动页复核。', whoPays:'潜在用户、赛事奖励或合作方。', firstStep:'把想法压缩成一个用户、一种痛点、一个结果。',
      plan3:['确认活动状态','写一页问题说明','完成原型'], plan7:['找到5名目标用户','记录使用反馈','判断是否继续'], risks:['活动节点变化','一人公司概念被夸大','缺乏真实付款验证'], url:'https://modelscope.cn/events/245/summary',
      platform:'魔搭社区', publishedAt:'2026-05-01', lastVerifiedAt:'2026-06-18',
      sources:[{role:'确认来源',grade:'S',platform:'魔搭社区',title:'全球AI开发者与一人公司黑客松',url:'https://modelscope.cn/events/245/summary',publishedAt:'2026-05-01'}], crossValidation:{count:1,status:'官方活动页确认'}
    }
  ];

  const extraInterviews = [
    {
      title:'采访那些用 AI 搞到钱的人，都凭什么？', show:'搞钱学姐', level:'B', url:'https://www.xiaoyuzhoufm.com/episode/697ec0242fc7f49d0932734c', publishedAt:'2026-02-01', platform:'小宇宙',
      signal:'多位AI商业实践者的共同点不是工具本身，而是从内容走向方案、服务和可复购结果。',
      lessons:['先明确谁为结果付钱','内容是获客入口，不是商业终点','把交付过程沉淀成方法和产品'],
      limits:['访谈样本存在幸存者偏差','收入与成本需要单独核验','不应复制嘉宾的渠道与人设']
    },
    {
      title:'AI 视频产品怎么 Go Viral？PixVerse 的增长答案', show:'晚点聊 LateTalk', level:'B', url:'https://www.xiaoyuzhoufm.com/episode/6846136e7dd7cf6566795214', publishedAt:'2025-06-08', platform:'小宇宙',
      signal:'AI视频产品的传播不只依赖模型质量，还依赖模板、分享机制、内容循环和低门槛上手。',
      lessons:['把作品传播设计进产品','先做高频视觉场景','用用户作品反向验证需求'],
      limits:['产品级增长不等于个人副业可复制','用户规模与收入不是同一指标','模型和算力成本很高']
    },
    {
      title:'企业 AI 转型与个人 AI 副业', show:'longhiller', level:'B', url:'https://www.xiaoyuzhoufm.com/podcast/6843b8cc51c2025b94c1c070', publishedAt:'2025-06-13', platform:'小宇宙',
      signal:'中小企业更愿意购买能直接落地的小工作流，而不是抽象的“AI战略”。',
      lessons:['从培训或诊断切入','选小切口先见效','用流程前后数据证明ROI'],
      limits:['企业交付要求高于个人工具使用','客户数据和权限边界不同','技术先进不能替代销售和服务']
    },
    {
      title:'对话 100 位 AI 创业者后，看到了哪些商业机会？', show:'凯莉彭的播客', level:'B', url:'https://www.xiaoyuzhoufm.com/podcast/67172b850d2f24f289e72fdd', publishedAt:'2026-05-01', platform:'小宇宙',
      signal:'在快速变化中，与其猜终局，不如扩大“运气面积”：持续做产品、见用户、公开展示。',
      lessons:['让作品被看见','用多次小实验替代一次豪赌','保持长期主义和快速迭代同时存在'],
      limits:['宏观创业观点不能代替具体行业研究','头部创业者样本不代表普通人成功率']
    },
    {
      title:'轻资产创业与自由职业真实案例库', show:'我下班了', level:'B', url:'https://www.xiaoyuzhoufm.com/podcast/627c51f1f473eea622dffac5', publishedAt:'2024-01-01', platform:'小宇宙',
      signal:'城市、行业、人脉与生活成本会显著影响副业和自由职业路径，不能只看全国统一答案。',
      lessons:['记录第一位客户来源','比较城市机会成本','把真实踩坑写进方案'],
      limits:['嘉宾自述需要交叉核验','节目可能带有社群与服务推广','历史案例需要检查时效']
    }
  ];

  base.opportunities.push(...extraOpportunities);
  base.interviews.push(...extraInterviews);
  base.topics.push(
    {name:'AI 漫画与IP',key:'AI漫画',desc:'原创角色、内容连载、虚拟商品与合规带货'},
    {name:'AI 一人公司',key:'一人公司',desc:'服务产品化、自动化交付与小团队经营'}
  );

  window.AI_FIRSTMOVE_V3 = {
    version:'3.0.0',
    generatedAt:'2026-06-18T08:00:00+08:00',
    researchReports:[
      {
        id:'ai-comic-commerce', title:'AI 漫画内容 + 商品/虚拟产品', category:'副业变现', score:78, difficulty:'中', cycle:'14—30天', budget:'100—500元',
        verdict:'可做，但真正可持续的不是“一键生成漫画”，而是原创人物、稳定叙事和与受众匹配的商品。',
        demand:'短内容平台已经出现AI漫画、历史漫画、萌宠拟人等内容形态；部分创作者获得涨粉、工作邀约或带货讨论，但收入案例多为自述。',
        customer:'平台受众、品牌方、出版社、虚拟商品购买者或授权合作方。',
        model:['原创角色连续内容','品牌定制漫画','数字壁纸/表情包/模板','与主题高度匹配的合规商品'],
        validation:['先做10条同一角色内容','观察完播、收藏与关注','用问卷或小额预售验证商品','只有出现真实付款再扩大制作'],
        risks:['不得搬运小说、影视或知名IP','必须确认图片、字体、音乐与商品素材授权','平台流量不等于购买意愿','AI生成角色一致性和故事质量仍是门槛'],
        sources:[
          {grade:'A',role:'独立报道',platform:'品玩',title:'除了卖课的，谁还能用AI赚到钱？',url:'https://www.pingwest.com/a/281481',publishedAt:'2023-05-04'},
          {grade:'C',role:'教程线索',platform:'抖音',title:'AI宠物带货视频相关公开教程与创作者样本',url:'https://www.douyin.com/shipin/7478891126888400934',publishedAt:'2026-05-01'},
          {grade:'C',role:'案例线索',platform:'抖音',title:'小椰成长日记公开内容样本',url:'https://www.douyin.com/video/7526346078162062602',publishedAt:'2025-11-01'}
        ], crossValidation:'1个独立媒体 + 2个公开平台样本。只能确认内容形态与商业询盘存在，不能确认普遍收入。'
      },
      {
        id:'ai-video-local-business', title:'AI 视频服务本地商家', category:'副业变现', score:84, difficulty:'中', cycle:'7—14天', budget:'100—500元',
        verdict:'比“做账号等流量”更稳，因为付款对象明确；但必须解决拍摄素材、品牌一致性和真实转化。',
        demand:'餐饮、民宿、摄影、零售和本地生活商家持续需要短视频与活动素材，AI能降低部分脚本、分镜和后期成本。',
        customer:'本地商家、小品牌、活动主办方。',
        model:['按条交付','月度内容包','节日活动素材包','AI样片+真人素材混合制作'],
        validation:['选择一个本地行业','免费重做1条公开素材作为样片','联系10家商户','争取1笔低价试单并记录交付时间'],
        risks:['不能承诺播放量或销售额','未经授权不得使用店铺或顾客肖像','纯AI内容可能缺乏真实感','需明确修改次数和素材责任'],
        sources:[
          {grade:'B',role:'访谈证据',platform:'小宇宙',title:'企业AI转型与个人AI副业',url:'https://www.xiaoyuzhoufm.com/podcast/6843b8cc51c2025b94c1c070',publishedAt:'2025-06-13'},
          {grade:'S',role:'工具生态',platform:'即梦AI',title:'即梦AI官方产品',url:'https://jimeng.jianying.com/',publishedAt:'2026-01-01'},
          {grade:'S',role:'工具生态',platform:'可灵AI',title:'可灵AI官方产品',url:'https://app.klingai.com/global/',publishedAt:'2026-01-01'}
        ], crossValidation:'1个当事人访谈 + 2个官方工具生态。需求成立仍需通过本地商家付款验证。'
      },
      {
        id:'ai-agent-delivery', title:'AI 智能体/自动化小流程交付', category:'创业机会', score:86, difficulty:'中高', cycle:'14—30天', budget:'0—500元',
        verdict:'潜力高，但不应从“卖万能智能体”开始，应从一个可测量的小流程开始。',
        demand:'企业和团队关注的是交付结果、数据安全、稳定性和可追溯，而不是模型名称。',
        customer:'小企业、工作室、内容团队、电商团队。',
        model:['流程诊断','单点自动化试点','月度维护','内部培训+交付'],
        validation:['访谈5个同一行业客户','选择每周重复超过3次的流程','先做人工+AI混合Demo','记录节省时间与错误率'],
        risks:['客户数据安全','接口和模型成本','错误结果责任','过度承诺“替代员工”'],
        sources:[
          {grade:'B',role:'访谈证据',platform:'小宇宙',title:'企业AI转型与个人AI副业',url:'https://www.xiaoyuzhoufm.com/podcast/6843b8cc51c2025b94c1c070',publishedAt:'2025-06-13'},
          {grade:'S',role:'赛事验证',platform:'腾讯云',title:'AI智能体争霸赛',url:'https://tch.cloud.tencent.com/contest/41',publishedAt:'2026-04-15'},
          {grade:'A',role:'行业案例',platform:'腾讯云开发者',title:'律师赢得AI黑客松：问题定义的重要性',url:'https://cloud.tencent.com/developer/news/3724925',publishedAt:'2026-03-22'}
        ], crossValidation:'官方赛事 + 企业交付访谈 + 行业案例，方向信号较强；具体行业仍需单独验证。'
      },
      {
        id:'ai-template-product', title:'模板/工作流数字产品', category:'副业变现', score:75, difficulty:'低中', cycle:'7—21天', budget:'0—200元',
        verdict:'门槛低但同质化严重；只有解决具体角色的高频问题，并叠加诊断或服务，才有更强定价。',
        demand:'人生管理、求职、内容运营、项目管理和学习模板存在持续需求，但单纯复制模板很容易被替代。',
        customer:'学生、求职者、自由职业者、内容团队。',
        model:['低价模板','模板+教学','定制搭建','会员更新'],
        validation:['从自己的真实工作流出发','公开展示前后变化','邀请10名目标用户试用','收集愿意付费的功能而非点赞'],
        risks:['抄袭他人模板','把营业额当利润','依赖个人IP','售后和持续更新成本'],
        sources:[
          {grade:'B',role:'当事人访谈',platform:'Apple Podcasts',title:'兔子：人生管理模板与数字系统服务',url:'https://podcasts.apple.com/cn/podcast/%E5%85%94%E5%AD%90-%E5%8D%96%E4%BA%BA%E7%94%9F%E7%AE%A1%E7%90%86%E6%A8%A1%E7%89%88%E4%B8%80%E5%B9%B4%E8%B5%9A40w-p%E4%BA%BA%E6%98%AFj%E4%BA%BA%E7%9A%84%E6%91%87%E9%92%B1%E6%A0%91/id1676099257?i=1000708527449',publishedAt:'2025-01-01'},
          {grade:'B',role:'商业访谈',platform:'小宇宙',title:'采访用AI获得收入的实践者',url:'https://www.xiaoyuzhoufm.com/episode/697ec0242fc7f49d0932734c',publishedAt:'2026-02-01'}
        ], crossValidation:'两个访谈来源可以确认“模板+服务”路径存在，但收入和复购不能外推。'
      },
      {
        id:'ai-video-product-growth', title:'AI 视频产品与创作者工具', category:'创业机会', score:80, difficulty:'高', cycle:'30天以上', budget:'500元以上',
        verdict:'市场巨大但竞争和算力成本高。年轻团队更适合做垂直工作流、模板市场或服务层，而不是直接训练大模型。',
        demand:'AI视频用户增长、创作者活动和平台竞赛说明供给与兴趣持续上升。',
        customer:'创作者、营销团队、品牌方、开发者。',
        model:['垂直视频工作流','行业模板','素材管理','创作者协作工具','服务转产品'],
        validation:['先服务一个细分人群','用人工流程验证高频动作','做轻量工具而不是模型','以留存与付费而不是播放量判断'],
        risks:['模型能力快速迭代','算力成本','版权与深度伪造','大厂产品挤压'],
        sources:[
          {grade:'B',role:'创始人访谈',platform:'小宇宙',title:'PixVerse AI视频产品增长访谈',url:'https://www.xiaoyuzhoufm.com/episode/6846136e7dd7cf6566795214',publishedAt:'2025-06-08'},
          {grade:'S',role:'平台活动',platform:'即梦AI',title:'即梦AI官方活动入口',url:'https://jimeng.jianying.com/',publishedAt:'2026-01-01'},
          {grade:'S',role:'平台活动',platform:'可灵AI',title:'可灵AI官方入口',url:'https://app.klingai.com/global/',publishedAt:'2026-01-01'}
        ], crossValidation:'创始人访谈 + 两个平台生态，能确认赛道热度；不能证明任意细分产品都可盈利。'
      }
    ],
    financeLessons:[
      {title:'资产与负债',tag:'财商启蒙',text:'资产不是“看起来值钱”的东西，而是能持续带来现金流、能力或长期选择权的资源；负债会持续占用未来现金流。先看现金流方向，再看名词。',action:'列出你每月真正流入和流出的项目。'},
      {title:'现金流优先',tag:'财商启蒙',text:'年轻人的第一个商业目标不是估值，而是让收入、成本和回款周期变得看得见。利润写在表格里，现金流决定你能不能继续。',action:'任何副业先记录每单耗时、成本和到账时间。'},
      {title:'单位经济模型',tag:'创业常识',text:'每获得一个客户，你赚到的钱是否大于获客和交付成本？如果每卖一单都更累、更亏，规模只会放大问题。',action:'计算一单收入－工具成本－获客成本－时间成本。'},
      {title:'第一性原理',tag:'思维工具',text:'不要先问别人做了什么，先问：用户真正要完成什么任务？现在为什么愿意付钱？哪些约束不能绕过？再重新组合方案。',action:'把项目拆成用户、痛点、结果、证据四格。'},
      {title:'反向思考',tag:'思维工具',text:'除了问“怎样成功”，也问“什么会让它失败”。版权、平台规则、没有付款人、交付失控，往往比工具能力更早杀死项目。',action:'写出三个停止条件。'},
      {title:'安全边际',tag:'风险常识',text:'不要把生活费、学费或借款押在未经验证的项目上。用小预算、小样本和可撤退实验换取真实信息。',action:'为实验设置最高亏损额度。'},
      {title:'融资不是收入',tag:'创业常识',text:'融资是用未来权益换取今天的资源，不代表商业模式已经成立。对多数青年项目，第一笔真实客户付款比融资故事更重要。',action:'先争取客户承诺、预订或试单。'},
      {title:'创造价值',tag:'造梦常识',text:'赚钱是价值交换的结果。更好的问题是：你让谁的生活更轻松、更有趣、更有爱，或让某个真实问题被更好地解决？',action:'写下你的项目为谁减少了什么痛苦。'}
    ],
    reportQuestions:[
      {id:'stage',label:'你现在处于什么阶段？',options:['在校大学生','毕业三年内','自由职业/待业','已有工作']},
      {id:'goal',label:'你最想解决什么？',options:['尽快获得第一笔收入','建立长期副业','验证创业方向','寻找实习/工作','参加比赛做作品集']},
      {id:'time',label:'每周可以投入多少时间？',options:['3小时以内','3—8小时','8—15小时','15小时以上']},
      {id:'budget',label:'可承受的实验预算？',options:['0元','100元以内','500元以内','1000元以上']},
      {id:'skill',label:'目前最强的能力？',options:['写作表达','视频设计','编程技术','销售沟通','组织执行','暂时没有明确技能']},
      {id:'style',label:'更偏好的路径？',options:['稳定低风险','快速试错','长期产品','线下本地服务','全球出海']}
    ],
    manifesto:{
      title:'浪潮迭起：一起造浪，一起造富，一起造梦',
      text:'我们希望用极低成本，让更多年轻人看见真实机会、学会验证、创造价值。赚钱不是终点，而是让好项目活下去、让更多人生活得更轻松、更有趣、更有爱的一种燃料。'
    }
  };
})();

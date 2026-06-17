# AI先机｜AI Native 青年机会地图 V2

面向大学生与毕业三年内年轻人的国内优先 AI 机会情报与行动网站。

## 已实现

- 40条首批结构化机会，官方事实与编辑分析分层
- 稳副业、创业实验、找工作、比赛雷达
- 10个城市页、时间机器、全球视野、专题页
- 每条机会独立URL、官方来源账本、3日/7日行动方案
- 免登录收藏和搜索历史（LocalStorage）
- 文字、浏览器语音、TXT/MD需求读取
- 无AI API时的本地标签与权重推荐
- 静态导出，可部署到Vercel、Cloudflare Pages或GitHub Pages

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 生产检查

```bash
npm run check
npm run build
```

静态成品位于 `out/`。

## 数据更新

网站运行时数据源当前位于 `lib/data.ts`。修改后执行：

```bash
npm run export:data
npm run build
```

结构化JSON会输出到 `data/`。CSV模板为 `data/opportunity-import-template.csv`。

## 部署到Vercel（推荐）

1. 将项目上传到GitHub。
2. 在Vercel选择 **Add New → Project**，导入仓库。
3. Framework Preset选择Next.js；构建命令使用 `npm run build`。
4. 部署完成后，在项目页顶部 **Domains** 区域可看到可分享网址，通常是 `项目名.vercel.app`。

当前项目使用静态导出；Vercel仍可正常部署。

## 部署到GitHub Pages

仓库已包含 `.github/workflows/deploy-pages.yml`。

1. 推送到GitHub默认分支。
2. 打开仓库 **Settings → Pages**。
3. Source选择 **GitHub Actions**。
4. 打开 **Actions** 查看 `Deploy AI FirstMove to Pages`。
5. 成功后，网址显示在 **Settings → Pages** 顶部，通常是：
   `https://你的用户名.github.io/仓库名/`

## AI API

当前版本不需要API。`lib/ai-provider.ts`预留服务端Provider接口。接入DeepSeek、豆包或OpenAI-compatible接口时，必须通过服务端调用，并限制模型只能推荐数据库记录。

## 真实性说明

- S级记录来自官方原始页面。
- B级副业和创业方向是编辑分析，不代表收益承诺。
- 当前有部分平台活动只能确认官方入口，无法完整读取日期时已标为 `pending_verification`。
- 招聘、比赛和活动上线后仍需持续人工核验。

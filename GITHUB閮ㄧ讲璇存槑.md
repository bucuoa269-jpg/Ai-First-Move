# AI先机 V2｜GitHub Pages 部署说明

## 推荐方法：GitHub Desktop

1. 解压本文件，确认解压后的目录中可以直接看到 `package.json`、`app`、`.github`。
2. 登录 GitHub，新建一个 Public 仓库，推荐名称：`ai-firstmove-v2`。不要勾选 README、.gitignore 或 License。
3. 打开 GitHub Desktop，登录账号。
4. 选择 File → Add local repository；如果提示该目录还不是 Git 仓库，选择 Create a repository。
5. Local path 选择解压后的项目目录，Repository name 填 `ai-firstmove-v2`。
6. 创建后，在左下角填写提交说明 `Initial deploy`，点击 Commit to main。
7. 点击顶部 Publish repository；取消勾选 Keep this code private，然后发布。
8. 浏览器打开仓库：Settings → Pages → Build and deployment → Source，选择 GitHub Actions。
9. 打开 Actions，查看 `Deploy AI FirstMove to Pages`。若没有自动运行，进入该工作流后点击 Run workflow。
10. 工作流显示绿色后，回到 Settings → Pages，点击 Visit site。

默认网址一般为：
`https://你的GitHub用户名.github.io/ai-firstmove-v2/`

## 后续更新

修改本地项目后，在 GitHub Desktop：
1. 填写本次修改说明；
2. Commit to main；
3. Push origin。

GitHub Pages 会自动重新构建和发布。

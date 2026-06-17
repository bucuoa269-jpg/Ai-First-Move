# AI先机工程约束

1. 产品规范以 `docs/product-spec.md` 为最高优先级。
2. 不得编造比赛、岗位、日期、公司和链接。
3. 官方事实与编辑分析必须通过 `sourceLevel`、`verificationStatus` 和 `editorial` 区分。
4. AI推荐只能返回数据库中存在的记录。
5. 不在前端存放任何API Key。
6. 修改数据后运行 `npx tsx scripts/export-data.ts`，再运行 `npm run check && npm run build`。
7. 静态MVP必须在无API、无账号、无数据库条件下完整可用。

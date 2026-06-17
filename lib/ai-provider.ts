export interface AIProvider { recommend(input: string): Promise<string[]>; }
export class LocalRuleProvider implements AIProvider { async recommend(): Promise<string[]> { return []; } }
// 未来服务端可实现 DeepSeek / 豆包 / OpenAI-compatible Provider。
// 严禁在前端暴露 API Key；生产环境应通过服务端路由调用并限制只引用数据库记录。

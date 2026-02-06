import { WorkflowData, TableRow, DetailItem } from './types';

// MCP Tool 類型定義
interface MCPSection {
  id: string;
  title: string;
  description: string;
  type: 'mcp';
  items?: DetailItem[];
  subgroups?: {
    title: string;
    items: string[];
  }[];
}

// MCP Tools
export const mcpTools: MCPSection[] = [
  {
    id: 'notion-tools',
    title: 'Notion Tools',
    description: '與 Notion 工作區整合的工具組，用於搜尋、建立、更新頁面和資料庫。',
    type: 'mcp',
    subgroups: [
      {
        title: '頁面操作',
        items: [
          'notion-search - 搜尋頁面和資料庫',
          'notion-fetch - 擷取頁面/資料庫內容',
          'notion-create-pages - 建立新頁面',
          'notion-update-page - 更新頁面內容',
          'notion-move-pages - 移動頁面',
          'notion-duplicate-page - 複製頁面'
        ]
      },
      {
        title: '資料庫操作',
        items: [
          'notion-create-database - 建立資料庫',
          'notion-update-database - 更新資料庫',
          'notion-create-database-row - 新增資料列',
          'notion-database-query - 查詢資料庫'
        ]
      },
      {
        title: '協作工具',
        items: [
          'notion-get-users - 取得用戶列表',
          'notion-get-teams - 取得團隊列表',
          'notion-create-comment - 新增評論',
          'notion-get-comments - 取得評論'
        ]
      }
    ]
  },
  {
    id: 'brave-search',
    title: 'Brave Search',
    description: '使用 Brave 搜尋引擎進行網頁搜尋和本地商家搜尋。',
    type: 'mcp',
    items: [
      { id: 'brave_web_search', title: 'brave_web_search', description: '一般網頁搜尋，支援分頁和內容過濾' },
      { id: 'brave_local_search', title: 'brave_local_search', description: '本地商家和地點搜尋，自動 fallback 到網頁搜尋' }
    ]
  },
  {
    id: 'minimax-tools',
    title: 'MiniMax Tools',
    description: 'MiniMax 提供的額外工具，包括網頁搜尋和影像理解。',
    type: 'mcp',
    items: [
      { id: 'web_search', title: 'web_search', description: '網頁搜尋，類似 Google 搜尋' },
      { id: 'understand_image', title: 'understand_image', description: '使用 LLM 分析和理解圖片內容' }
    ]
  }
];


// 工作流程資料
export const workflows: WorkflowData[] = [
  {
    title: '完整開發流程',
    steps: [
      { icon: '📝', label: 'writing-plans' },
      { icon: '⚡', label: 'executing-plans' },
      { icon: '🔍', label: 'requesting-code-review' },
      { icon: '✅', label: 'finishing-a-development-branch' }
    ]
  },
  {
    title: '子代理開發流程',
    steps: [
      { icon: '📝', label: 'writing-plans' },
      { icon: '🤖', label: 'subagent-driven-development' },
      { icon: '🔍', label: 'spec reviewer' },
      { icon: '🔍', label: 'code quality reviewer' },
      { icon: '✅', label: 'finishing' }
    ]
  },
  {
    title: 'TDD 開發流程',
    steps: [
      { icon: '🔴', label: 'RED' },
      { icon: '🟢', label: 'GREEN' },
      { icon: '🔄', label: 'REFACTOR' },
      { icon: '🔄', label: 'Repeat' }
    ]
  }
];

// Agents 對照表
export const agentsTable: TableRow[] = [
  { name: 'backend-developer', description: '後端開發、API 設計、微服務', relatedSkills: 'feature-dev, code-review' },
  { name: 'code-reviewer', description: '程式碼審查、安全漏洞檢測', relatedSkills: 'requesting-code-review, pr-review-toolkit, security-guidance' },
  { name: 'debugger', description: '問題診斷、根因分析', relatedSkills: 'error-detective, code-review' },
  { name: 'security-auditor', description: '安全評估、合規驗證', relatedSkills: 'security-guidance, code-review' },
  { name: 'git-workflow-manager', description: 'Git 工作流程、分支策略', relatedSkills: 'commit-commands, hookify, finishing-a-development-branch' },
  { name: 'ui-designer', description: 'UI 設計、視覺設計', relatedSkills: 'frontend-design, canvas-design, theme-factory' },
  { name: 'devops-engineer', description: 'DevOps、CI/CD、監控', relatedSkills: 'hookify, feature-dev' },
  { name: 'performance-engineer', description: '效能優化、負載測試', relatedSkills: 'code-review, webapp-testing' },
  { name: 'refactoring-specialist', description: '重構、程式碼品質改善', relatedSkills: 'code-simplifier, code-review' },
  { name: 'documentation-engineer', description: '技術文件、API 文件', relatedSkills: 'pdf-generator, changelog-generator, pdf' },
  { name: 'legacy-modernizer', description: '舊系統現代化遷移', relatedSkills: 'thinkphp-expert, refactoring-specialist' },
  { name: 'api-designer', description: 'API 架構設計', relatedSkills: 'backend-developer, documentation-engineer' },
  { name: 'dependency-manager', description: '依賴管理、安全掃描', relatedSkills: 'security-guidance, code-review' },
  { name: 'error-detective', description: '錯誤模式分析、根因發現', relatedSkills: 'debugger, code-review' },
  { name: 'sql-pro', description: 'SQL 開發、資料庫優化', relatedSkills: 'backend-developer, documentation-engineer' },
  { name: 'research-analyst', description: '研究分析、資訊收集', relatedSkills: 'agent-browser, webapp-testing' },
  { name: 'prompt-engineer', description: 'Prompt 工程、LLM 優化', relatedSkills: 'skill-creator, test-driven-development' },
  { name: 'dx-optimizer', description: '開發者體驗優化', relatedSkills: 'frontend-design, webapp-testing' }
];

// Skills 對照表
export const skillsTable: TableRow[] = [
  { name: 'writing-plans', description: '撰寫實作計劃', relatedSkills: 'executing-plans, subagent-driven-development' },
  { name: 'executing-plans', description: '執行已寫好的實作計劃', relatedSkills: 'finishing-a-development-branch' },
  { name: 'subagent-driven-development', description: '子代理開發', relatedSkills: 'test-driven-development, finishing-a-development-branch' },
  { name: 'finishing-a-development-branch', description: '完成開發分支工作流程', relatedSkills: '-' },
  { name: 'test-driven-development', description: 'TDD 開發方法', relatedSkills: 'subagent-driven-development' },
  { name: 'planning-with-files', description: 'Markdown 檔案規劃', relatedSkills: 'notion-spec-to-implementation, requesting-code-review' },
  { name: 'requesting-code-review', description: '程式碼審查', relatedSkills: 'planning-with-files, subagent-driven-development' },
  { name: 'notion-spec-to-implementation', description: 'Notion 規格轉實作', relatedSkills: 'planning-with-files, requesting-code-review' },
  { name: 'changelog-generator', description: '自動產生 changelog', relatedSkills: 'pdf-generator' },
  { name: 'pdf-generator', description: 'PDF 文件產生器', relatedSkills: 'changelog-generator' },
  { name: 'agent-browser', description: '瀏覽器自動化', relatedSkills: 'requesting-code-review' },
  { name: 'thinkphp-expert', description: 'ThinkPHP 專案輔助', relatedSkills: '-' },
  { name: 'algorithmic-art', description: '使用 p5.js 建立演算法藝術', relatedSkills: 'canvas-design' },
  { name: 'brand-guidelines', description: 'Anthropic 品牌指南應用', relatedSkills: 'theme-factory' },
  { name: 'canvas-design', description: 'Canvas/PDF 視覺設計', relatedSkills: 'algorithmic-art, frontend-design' },
  { name: 'doc-coauthoring', description: '協作寫作流程指南', relatedSkills: 'planning-with-files' },
  { name: 'docx', description: 'Word 文件完整處理工具', relatedSkills: 'pdf, pptx' },
  { name: 'frontend-design', description: '生產品級前端介面設計', relatedSkills: 'canvas-design, web-artifacts-builder' },
  { name: 'internal-comms', description: '內部溝通文件撰寫', relatedSkills: 'doc-coauthoring, pdf-generator' },
  { name: 'mcp-builder', description: 'MCP 伺服器開發指南', relatedSkills: 'skill-creator' },
  { name: 'pdf', description: 'PDF 完整操作工具包', relatedSkills: 'docx, changelog-generator' },
  { name: 'pptx', description: 'PowerPoint 簡報工具', relatedSkills: 'docx, theme-factory' },
  { name: 'skill-creator', description: '創建新 Skills 指南', relatedSkills: 'mcp-builder, plugin-dev' },
  { name: 'slack-gif-creator', description: 'Slack GIF 動畫創建', relatedSkills: 'theme-factory' },
  { name: 'theme-factory', description: '主題應用工具包', relatedSkills: 'brand-guidelines, pptx' },
  { name: 'webapp-testing', description: 'Playwright 網頁測試', relatedSkills: 'agent-browser, requesting-code-review' },
  { name: 'web-artifacts-builder', description: 'React/Tailwind 工件構建', relatedSkills: 'frontend-design, theme-factory' },
  { name: 'xlsx', description: 'Excel 試算表處理', relatedSkills: 'pdf, docx' },
  { name: 'agent-sdk-dev', description: 'Agent SDK 開發驗證', relatedSkills: 'skill-creator, plugin-dev' },
  { name: 'code-review', description: '專業代碼審查', relatedSkills: 'pr-review-toolkit, code-simplifier' },
  { name: 'code-simplifier', description: '代碼簡化重構', relatedSkills: 'code-review, refactoring-specialist' },
  { name: 'commit-commands', description: 'Git 提交命令', relatedSkills: 'finishing-a-development-branch, hookify' },
  { name: 'feature-dev', description: '功能開發工作流', relatedSkills: 'subagent-driven-development, test-driven-development' },
  { name: 'hookify', description: 'Git Hooks 管理', relatedSkills: 'commit-commands, git-workflow-manager' },
  { name: 'plugin-dev', description: '插件開發', relatedSkills: 'skill-creator, agent-sdk-dev' },
  { name: 'pr-review-toolkit', description: 'PR 審查工具包', relatedSkills: 'code-review, requesting-code-review' },
  { name: 'security-guidance', description: '安全最佳實踐', relatedSkills: 'code-review, security-auditor' }
];

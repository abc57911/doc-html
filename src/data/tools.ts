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
  { name: 'agent-sdk-dev:agent-sdk-verifier-py', description: '驗證 Python Agent SDK 應用程式', relatedSkills: 'skill-creator, mcp-builder' },
  { name: 'agent-sdk-dev:agent-sdk-verifier-ts', description: '驗證 TypeScript Agent SDK 應用程式', relatedSkills: 'skill-creator, mcp-builder' },
  { name: 'code-simplifier:code-simplifier', description: '程式碼簡化與重構', relatedSkills: 'code-review, refactoring-specialist' },
  { name: 'feature-dev:code-architect', description: '功能架構設計', relatedSkills: 'writing-plans, executing-plans' },
  { name: 'feature-dev:code-explorer', description: '功能程式碼分析', relatedSkills: 'planning-with-files' },
  { name: 'feature-dev:code-reviewer', description: '功能程式碼審查', relatedSkills: 'requesting-code-review, pr-review-toolkit' },
  { name: 'pr-review-toolkit:silent-failure-hunter', description: '靜默失敗偵測', relatedSkills: 'code-review, systematic-debugging' },
  { name: 'superpowers:code-reviewer', description: '專案程式碼審查', relatedSkills: 'requesting-code-review, pr-review-toolkit' }
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
  { name: 'find-skills', description: '搜尋與安裝新技能', relatedSkills: 'using-superpowers' },
  { name: 'systematic-debugging', description: '系統化除錯', relatedSkills: 'debugger, error-detective' },
  { name: 'using-superpowers', description: '超能力技能使用指南', relatedSkills: 'find-skills' },
  { name: 'vercel-composition-patterns', description: 'React 組合模式', relatedSkills: 'vercel-react-best-practices' },
  { name: 'vercel-react-best-practices', description: 'React/Next.js 效能優化', relatedSkills: 'vercel-composition-patterns' },
  { name: 'web-design-guidelines', description: 'Web 介面設計規範', relatedSkills: 'frontend-design' },
  { name: 'agent-architecture:*', description: 'Agent 架構設計系列', relatedSkills: 'cognitive-architecture:*' },
  { name: 'agent-development:*', description: 'Agent 開發系列', relatedSkills: 'agent-architecture:*' },
  { name: 'agent-evaluation:*', description: 'Agent 評估系列', relatedSkills: 'agent-development:*' },
  { name: 'cognitive-architecture:*', description: '認知架構系列', relatedSkills: 'context-engineering-fundamentals:*' },
  { name: 'context-engineering-fundamentals:*', description: '上下文工程系列', relatedSkills: 'cognitive-architecture:*' },
  { name: 'document-skills:pdf', description: 'PDF 操作工具', relatedSkills: 'document-skills:docx' },
  { name: 'document-skills:docx', description: 'Word 文件工具', relatedSkills: 'document-skills:xlsx' },
  { name: 'document-skills:xlsx', description: 'Excel 試算表工具', relatedSkills: 'document-skills:pptx' },
  { name: 'document-skills:pptx', description: 'PowerPoint 簡報工具', relatedSkills: 'document-skills:pdf' },
  { name: 'Notion:*', description: 'Notion 整合系列', relatedSkills: 'notion-spec-to-implementation' },
  { name: 'ralph-loop:*', description: 'Ralph Loop 指令系列', relatedSkills: 'using-superpowers' },
  { name: 'commit-commands:*', description: 'Git 提交命令系列', relatedSkills: 'finishing-a-development-branch' },
  { name: 'superpowers:*', description: '開發超能力系列', relatedSkills: 'using-superpowers' },
  { name: 'elements-of-style:*', description: '寫作風格', relatedSkills: 'documentation' },
  { name: 'claude-md-management:*', description: 'CLAUDE.md 管理', relatedSkills: 'documentation' },
  { name: 'frontend-design:*', description: '前端設計', relatedSkills: 'web-design-guidelines' }
];

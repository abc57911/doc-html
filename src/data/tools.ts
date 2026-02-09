import { WorkflowData, DetailItem } from './types';

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

import { CardData } from './types';

// 工作流程 Skills
export const workflowSkills: CardData[] = [
  {
    id: 'writing-plans',
    title: 'writing-plans',
    description: '當你有規格或需求，但尚未觸及程式碼時，使用此 skill 來撰寫全面的實作計畫。必須在專用的 worktree 中執行。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['writing', 'planning']
  },
  {
    id: 'executing-plans',
    title: 'executing-plans',
    description: '當已有現成的實作計畫時使用，在獨立 session 中執行並設置審查 checkpoint。核心原則是「批次執行搭配架構審查」。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['execution', 'checkpoints']
  },
  {
    id: 'subagent-driven-development',
    title: 'subagent-driven-development',
    description: '透過分派獨立的子代理來執行實作計畫，每個任務後進行兩階段審查：先檢查規格符合度，再檢查程式碼品質。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['subagent', 'review']
  },
  {
    id: 'finishing-a-development-branch',
    title: 'finishing-a-development-branch',
    description: '當實作完成、測試通過後，用於指導完成開發工作的流程。提供 Merge、PR、保持現狀、丟棄四個選項。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['git', 'workflow']
  },
  {
    id: 'test-driven-development',
    title: 'test-driven-development',
    description: '實作任何功能或錯誤修正前，先撰寫測試。看著它失敗，然後寫最少量的程式碼讓它通過。核心原則：Red-Green-Refactor。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['testing', 'TDD']
  },
  {
    id: 'planning-with-files',
    title: 'planning-with-files',
    description: '使用 Manus 風格的持久化 Markdown 檔案進行規劃、進度追蹤和知識儲存。適用於複雜任務、多步驟專案。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['files', 'tracking']
  }
];

// 工具類 Skills
export const utilitySkills: CardData[] = [
  {
    id: 'requesting-code-review',
    title: 'requesting-code-review',
    description: '在完成任務、實作主要功能或合併前，派遣 code-reviewer subagent 進行程式碼審查，catch 問題避免擴大。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['review', 'quality']
  },
  {
    id: 'notion-spec-to-implementation',
    title: 'notion-spec-to-implementation',
    description: '將產品或技術規格轉換為可執行的 Notion 任務清單。從規格文件中提取需求、分解為詳細實作計劃。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['notion', 'planning']
  },
  {
    id: 'changelog-generator',
    title: 'changelog-generator',
    description: '自動從 git commit 產生面向用戶的 changelog。分析 commit 歷史、分類變更、將技術性 commit 轉換為清晰的發布說明。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['git', 'documentation']
  },
  {
    id: 'pdf-generator',
    title: 'pdf-generator',
    description: '通用的 PDF 文件產生器，支援專業表格樣式、內部連結和自訂模板。用於建立目錄、文件、報告等結構化 PDF 文件。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['pdf', 'generation']
  },
  {
    id: 'agent-browser',
    title: 'agent-browser',
    description: '自動化瀏覽器互動，用於網頁測試、表單填寫、截圖和資料萃取。支援導航、點擊、輸入、等待等互動操作。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['browser', 'automation']
  },
  {
    id: 'thinkphp-expert',
    title: 'thinkphp-expert',
    description: '全域 ThinkPHP（TP3/TP5）專案輔助技能，適用於舊專案維護與保守修改。專門處理 ThinkPHP 框架相關問題。',
    category: 'skill',
    source: 'Community',
    tags: ['thinkphp', 'legacy']
  }
];

// Anthropic Agent Skills
export const anthropicSkills: CardData[] = [
  {
    id: 'algorithmic-art',
    title: 'algorithmic-art',
    description: '使用 p5.js 建立演算法藝術，支援種子隨機性和互動式參數探索。創原創生成藝術而非複製現有作品。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['p5.js', 'generative', 'creative']
  },
  {
    id: 'brand-guidelines',
    title: 'brand-guidelines',
    description: '應用 Anthropic 官方品牌色彩和版面設計指南。確保所有工件符合品牌視覺標準。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['branding', 'design', 'Anthropic']
  },
  {
    id: 'canvas-design',
    title: 'canvas-design',
    description: '使用 canvas 和 PDF 建立美麗的視覺設計、海報和藝術作品。支援設計原理和創意表達。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['canvas', 'design', 'visual']
  },
  {
    id: 'doc-coauthoring',
    title: 'doc-coauthoring',
    description: '結構化協作寫作流程指南。適用於文件、提案、技術規格的共同創作。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['writing', 'collaboration', 'documentation']
  },
  {
    id: 'docx',
    title: 'docx',
    description: 'Word 文件完整處理工具，支援建立、編輯、分析。包含追蹤修訂、評論、格式保留和文字萃取。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['Word', 'document', 'OOXML']
  },
  {
    id: 'frontend-design',
    title: 'frontend-design',
    description: '建立獨特、生產級的前端介面。避免通用 AI 美學，注重創意和精緻的視覺設計。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['frontend', 'UI', 'React']
  },
  {
    id: 'internal-comms',
    title: 'internal-comms',
    description: '內部溝通文件撰寫工具包。適用於狀態報告、領導更新、3P 更新、公司新聞稿、FAQ、事故報告等。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['communication', 'documentation', 'internal']
  },
  {
    id: 'mcp-builder',
    title: 'mcp-builder',
    description: '建立高質量 MCP（Model Context Protocol）伺服器的指南。支援 Python FastMCP 和 TypeScript MCP SDK。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['MCP', 'server', 'integration']
  },
  {
    id: 'pdf',
    title: 'pdf',
    description: '完整的 PDF 操作工具包。支援萃取文字和表格、建立新 PDF、合併/拆分文件、處理表單。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['PDF', 'document', 'pypdf']
  },
  {
    id: 'pptx',
    title: 'pptx',
    description: 'PowerPoint 簡報創建、編輯和分析工具。支援版面設計、備註、評論和投影片管理。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['PowerPoint', 'presentation', 'slides']
  },
  {
    id: 'skill-creator',
    title: 'skill-creator',
    description: '創建新 Skills 的完整指南。包含技能結構、資源組織、封裝和分發流程。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['skill', 'creation', 'plugin']
  },
  {
    id: 'slack-gif-creator',
    title: 'slack-gif-creator',
    description: '為 Slack 優化的動畫 GIF 創建工具包。提供約束條件、驗證工具和動畫概念。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['Slack', 'GIF', 'animation']
  },
  {
    id: 'theme-factory',
    title: 'theme-factory',
    description: '為各種工件（投影片、文件、報告、HTML 登入頁）應用預設主題的工具包。包含 10 種預設主題。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['theme', 'styling', 'design']
  },
  {
    id: 'webapp-testing',
    title: 'webapp-testing',
    description: '使用 Playwright 測試本地 Web 應用程式。支援前端功能驗證、UI 行為調試、截圖和瀏覽器日誌查看。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['Playwright', 'testing', 'browser']
  },
  {
    id: 'web-artifacts-builder',
    title: 'web-artifacts-builder',
    description: '使用 React、Tailwind CSS、shadcn/ui 構建複雜的 Claude.ai HTML 工件。支援狀態管理、路由和元件化。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['React', 'Tailwind', 'shadcn/ui']
  },
  {
    id: 'xlsx',
    title: 'xlsx',
    description: 'Excel 試算表創建、編輯和分析工具。支援公式、格式化、數據分析和視覺化。',
    category: 'skill',
    source: 'Anthropic',
    tags: ['Excel', 'spreadsheet', 'openpyxl']
  }
];

// Claude Plugins Official
export const pluginSkills: CardData[] = [
  {
    id: 'agent-sdk-dev',
    title: 'agent-sdk-dev',
    description: 'Claude Agent SDK 應用程式開發工具包。驗證應用程式配置是否符合 SDK 最佳實踐。',
    category: 'skill',
    source: 'Plugins',
    tags: ['Agent SDK', 'development', 'TypeScript']
  },
  {
    id: 'code-review',
    title: 'code-review',
    description: '專業代碼審查工具。分析代碼品質、找出潛在問題並提供改進建議。',
    category: 'skill',
    source: 'Plugins',
    tags: ['review', 'quality', 'analysis']
  },
  {
    id: 'code-simplifier',
    title: 'code-simplifier',
    description: '代碼簡化工具。幫助重構和簡化複雜的程式碼，提高可讀性和可維護性。',
    category: 'skill',
    source: 'Plugins',
    tags: ['refactor', 'simplify', 'clean-code']
  },
  {
    id: 'commit-commands',
    title: 'commit-commands',
    description: 'Git 提交命令工具。支援提交、推送和建立 PR 的流程。',
    category: 'skill',
    source: 'Plugins',
    tags: ['git', 'commit', 'PR']
  },
  {
    id: 'feature-dev',
    title: 'feature-dev',
    description: '功能開發工作流工具。引導從功能規格到完整實作的開發過程。',
    category: 'skill',
    source: 'Plugins',
    tags: ['feature', 'development', 'workflow']
  },
  {
    id: 'hookify',
    title: 'hookify',
    description: 'Git Hooks 管理工具。幫助設置和管理各種 Git 鉤子以改進開發流程。',
    category: 'skill',
    source: 'Plugins',
    tags: ['git', 'hooks', 'automation']
  },
  {
    id: 'plugin-dev',
    title: 'plugin-dev',
    description: 'Claude Plugins 開發工具。幫助創建和管理官方插件市場的插件。',
    category: 'skill',
    source: 'Plugins',
    tags: ['plugin', 'development', 'marketplace']
  },
  {
    id: 'pr-review-toolkit',
    title: 'pr-review-toolkit',
    description: 'PR 審查工具包。提供完整的程式碼審查流程，包括錯誤處理、測試覆蓋分析和最佳實踐檢查。',
    category: 'skill',
    source: 'Plugins',
    tags: ['PR', 'review', 'toolkit']
  },
  {
    id: 'security-guidance',
    title: 'security-guidance',
    description: '安全指南工具。提供安全最佳實踐和指導，幫助識別和防範安全風險。',
    category: 'skill',
    source: 'Plugins',
    tags: ['security', 'guidance', 'best-practices']
  }
];

export const allSkills = [
  ...workflowSkills,
  ...utilitySkills,
  ...anthropicSkills,
  ...pluginSkills
];

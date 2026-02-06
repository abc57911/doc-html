import { CardData } from './types';

// Agents 資料 - 開發類
export const developmentAgents: CardData[] = [
  {
    id: 'backend-developer',
    title: 'backend-developer',
    description: '資深後端工程師，專精於可擴展 API 開發與微服務架構。專注於效能、安全性與可維護性，構建穩健的伺服器端解決方案。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'code-reviewer',
    title: 'code-reviewer',
    description: '專家程式碼審查員，專精於程式碼品質、安全漏洞與多種語言的最佳實踐。精通靜態分析、設計模式與效能優化。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'ui-designer',
    title: 'ui-designer',
    description: '資深 UI 設計專家，擅長創建直觀、美觀且無障礙的使用者介面。精通設計系統、互動模式和視覺層級。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'devops-engineer',
    title: 'devops-engineer',
    description: '資深 DevOps 工程師，專精於建構和維護可擴展、自動化的基礎設施和部署流程。涵蓋整個軟體交付生命週期。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'api-designer',
    title: 'api-designer',
    description: 'API 架構專家，設計可擴展、友善的介面。創建 REST 和 GraphQL API，提供完整文件，專注於一致性、效能和開發者體驗。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'refactoring-specialist',
    title: 'refactoring-specialist',
    description: '資深重構專家，擅長安全的程式碼轉換技術和設計模式應用。專精於改善程式碼結構、降低複雜度和提升可維護性。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'documentation-engineer',
    title: 'documentation-engineer',
    description: '資深文件工程師，專精於技術文件系統、API 文件和開發者友善內容。精通文件即程式碼、自動化生成。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Glob', 'Grep', 'WebFetch', 'WebSearch']
  },
  {
    id: 'legacy-modernizer',
    title: 'legacy-modernizer',
    description: '資深舊系統現代化專家，擅長增量遷移策略和零風險現代化。精通重構模式、技術更新，在不中斷營運的情況下將舊系統轉換為現代化架構。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  }
];

// Agents 資料 - 專家類
export const specialistAgents: CardData[] = [
  {
    id: 'debugger',
    title: 'debugger',
    description: '專家除錯員，專精於複雜問題診斷、根因分析與系統化問題解決。精通除錯工具、技術與方法論。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'security-auditor',
    title: 'security-auditor',
    description: '專家安全審計員，專精於全面安全評估、合規驗證與風險管理。精通安全框架、審計方法論與合規標準。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Grep', 'Glob']
  },
  {
    id: 'performance-engineer',
    title: 'performance-engineer',
    description: '資深效能工程師，專精於系統優化、瓶頸識別和可擴展性工程。精通效能測試、分析和調優。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'dependency-manager',
    title: 'dependency-manager',
    description: '依賴管理專家，擅長套件管理、安全審計和版本衝突解決。精通依賴優化、供應鏈安全和自動化更新。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'error-detective',
    title: 'error-detective',
    description: '錯誤偵探專家，擅長複雜錯誤模式分析、關聯和根因發現。精通分散式系統除錯、錯誤追蹤和異常檢測。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'sql-pro',
    title: 'sql-pro',
    description: 'SQL 開發專家，擅長複雜查詢優化、資料庫設計和效能調優。精通 PostgreSQL、MySQL、SQL Server 和 Oracle。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  }
];

// Agents 資料 - 分析類
export const analysisAgents: CardData[] = [
  {
    id: 'git-workflow-manager',
    title: 'git-workflow-manager',
    description: '專家 Git 工作流程管理員，專精於分支策略、自動化與團隊協作。精通 Git 工作流程、合併衝突解決與儲存庫管理。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'research-analyst',
    title: 'research-analyst',
    description: '資深研究分析專家，專精於全面資訊收集、綜合分析與洞察生成。擅長研究方法論、數據分析與報告創建。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Grep', 'Glob', 'WebFetch', 'WebSearch']
  },
  {
    id: 'prompt-engineer',
    title: 'prompt-engineer',
    description: '資深提示工程師，專精於大型語言模型的設計、優化和管理。擅長提示架構、評估框架和生產提示系統。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  },
  {
    id: 'dx-optimizer',
    title: 'dx-optimizer',
    description: '資深開發者體驗優化師，專精於建置效能、工具效率和工作流自動化。擅長開發環境優化，專注於減少摩擦、加速反饋循環。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Read', 'Write', 'Edit', 'Bash', 'Glob', 'Grep']
  }
];

export const allAgents = [
  ...developmentAgents,
  ...specialistAgents,
  ...analysisAgents
];

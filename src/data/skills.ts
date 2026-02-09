import { CardData } from './types';

// Claude Code Skills（18 個）
export const claudeCodeSkills: CardData[] = [
  {
    id: 'agent-browser',
    title: 'agent-browser',
    description: '自動化瀏覽器互動，用於網頁測試、表單填寫、截圖和資料萃取。支援導航、點擊、輸入、等待等互動操作。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['browser', 'automation', 'testing']
  },
  {
    id: 'changelog-generator',
    title: 'changelog-generator',
    description: '自動從 git commit 產生面向用戶的 changelog。分析 commit 歷史、分類變更、將技術性 commit 轉換為清晰的發布說明。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['git', 'documentation', 'changelog']
  },
  {
    id: 'executing-plans',
    title: 'executing-plans',
    description: '當已有現成的實作計畫時使用，在獨立 session 中執行並設置審查 checkpoint。核心原則是「批次執行搭配架構審查」。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['execution', 'planning', 'checkpoints']
  },
  {
    id: 'find-skills',
    title: 'find-skills',
    description: '幫助使用者發現和安裝 agent skills。搜尋技能市場並提供安裝指令。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['skills', 'discovery', 'installation']
  },
  {
    id: 'finishing-a-development-branch',
    title: 'finishing-a-development-branch',
    description: '當實作完成、測試通過後，用於指導完成開發工作的流程。提供 Merge、PR、保持現狀、丟棄四個選項。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['git', 'workflow', 'completion']
  },
  {
    id: 'notion-spec-to-implementation',
    title: 'notion-spec-to-implementation',
    description: '將產品或技術規格轉換為可執行的 Notion 任務清單。從規格文件中提取需求、分解為詳細實作計劃。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['notion', 'planning', 'specification']
  },
  {
    id: 'pdf-generator',
    title: 'pdf-generator',
    description: '通用的 PDF 文件產生器，支援專業表格樣式、內部連結和自訂模板。用於建立目錄、文件、報告等結構化 PDF 文件。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['pdf', 'generation', 'document']
  },
  {
    id: 'planning-with-files',
    title: 'planning-with-files',
    description: '使用 Manus 風格的持久化 Markdown 檔案進行規劃、進度追蹤和知識儲存。適用於複雜任務、多步驟專案。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['files', 'planning', 'tracking']
  },
  {
    id: 'requesting-code-review',
    title: 'requesting-code-review',
    description: '在完成任務、實作主要功能或合併前，派遣 code-reviewer subagent 進行程式碼審查，catch 問題避免擴大。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['review', 'quality', 'subagent']
  },
  {
    id: 'subagent-driven-development',
    title: 'subagent-driven-development',
    description: '透過分派獨立的子代理來執行實作計畫，每個任務後進行兩階段審查：先檢查規格符合度，再檢查程式碼品質。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['subagent', 'development', 'workflow']
  },
  {
    id: 'systematic-debugging',
    title: 'systematic-debugging',
    description: '系統化除錯方法。遇到任何 bug 或未預期行為時使用的除錯流程。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['debugging', 'troubleshooting', 'systematic']
  },
  {
    id: 'test-driven-development',
    title: 'test-driven-development',
    description: '實作任何功能或錯誤修正前，先撰寫測試。看著它失敗，然後寫最少量的程式碼讓它通過。核心原則：Red-Green-Refactor。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['testing', 'TDD', 'methodology']
  },
  {
    id: 'thinkphp-expert',
    title: 'thinkphp-expert',
    description: '全域 ThinkPHP（TP3/TP5）專案輔助技能，適用於舊專案維護與保守修改。專門處理 ThinkPHP 框架相關問題。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['thinkphp', 'legacy', 'PHP']
  },
  {
    id: 'using-superpowers',
    title: 'using-superpowers',
    description: '超能力技能使用指南。幫助理解如何使用和組合不同的 skills。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['skills', 'guidance', 'documentation']
  },
  {
    id: 'vercel-composition-patterns',
    title: 'vercel-composition-patterns',
    description: 'React 組合模式。當需要重構帶有 boolean props 的元件時使用的設計模式。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['React', 'composition', 'patterns']
  },
  {
    id: 'vercel-react-best-practices',
    title: 'vercel-react-best-practices',
    description: 'React 和 Next.js 效能優化指南。來自 Vercel Engineering 的最佳實踐。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['React', 'Next.js', 'performance']
  },
  {
    id: 'web-design-guidelines',
    title: 'web-design-guidelines',
    description: 'Web 介面設計規範。審查 UI 程式碼是否符合 Web 介面指南。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['UI', 'design', 'guidelines']
  },
  {
    id: 'writing-plans',
    title: 'writing-plans',
    description: '當你有規格或需求，但尚未觸及程式碼時，使用此 skill 來撰寫全面的實作計畫。必須在專用的 worktree 中執行。',
    category: 'skill',
    source: 'Claude Code',
    tags: ['writing', 'planning', 'documentation']
  }
];

// Agent 架構系列（5 系列 × 9 子技能 = 45 個）
export const agentArchitectureSkills: CardData[] = [
  // agent-architecture 系列
  {
    id: 'agent-architecture-project-development',
    title: 'agent-architecture:project-development',
    description: '當使用者要求「開始 LLM 專案」、「設計新功能」時使用。涵蓋專案初始化、架構設計和工具配置。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['agent', 'architecture', 'LLM']
  },
  {
    id: 'agent-architecture-bdi-mental-states',
    title: 'agent-architecture:bdi-mental-states',
    description: '當使用者要求「建立 agent 心理狀態模型」、「實作 BDI 架構」時使用。設計 agent 的信念、慾望和意圖。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['agent', 'BDI', 'mental-states']
  },
  {
    id: 'agent-architecture-hosted-agents',
    title: 'agent-architecture:hosted-agents',
    description: '當使用者要求「建立背景 agent」、「建立託管 agent」時使用。設計長期運行的 agent 系統。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['agent', 'background', 'hosted']
  },
  {
    id: 'agent-architecture-multi-agent-patterns',
    title: 'agent-architecture:multi-agent-patterns',
    description: '當使用者要求「設計多 agent 系統」、「實作 agent 協作」時使用。規劃多個 agent 之間的通訊和協調。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['agent', 'multi-agent', 'collaboration']
  },
  {
    id: 'agent-architecture-evaluation',
    title: 'agent-architecture:evaluation',
    description: '當使用者要求「評估 agent 效能」、「建立評估框架」時使用。建立量測 agent 表現的方法和指標。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['agent', 'evaluation', 'metrics']
  },
  {
    id: 'agent-architecture-context-fundamentals',
    title: 'agent-architecture:context-fundamentals',
    description: '當使用者要求「理解 context」、「解釋上下文管理」時使用。說明如何有效地傳遞和管理對話上下文。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['context', 'fundamentals', 'management']
  },
  {
    id: 'agent-architecture-advanced-evaluation',
    title: 'agent-architecture:advanced-evaluation',
    description: '當使用者要求「實作 LLM-as-judge」、「比較不同 prompt」時使用。進階的 agent 評估技術。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['evaluation', 'LLM-judge', 'advanced']
  },
  {
    id: 'agent-architecture-memory-systems',
    title: 'agent-architecture:memory-systems',
    description: '當使用者要求「實作 agent 記憶」、「持久化對話」時使用。設計和實作長期記憶系統。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['memory', 'persistence', 'storage']
  },
  {
    id: 'agent-architecture-context-degradation',
    title: 'agent-architecture:context-degradation',
    description: '當使用者要求「診斷上下文問題」、「修復遺失資訊」時使用。識別和解決上下文衰減問題。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['context', 'degradation', 'troubleshooting']
  },
  {
    id: 'agent-architecture-context-compression',
    title: 'agent-architecture:context-compression',
    description: '當使用者要求「壓縮上下文」、「總結對話」時使用。有效地總結和壓縮大量上下文資訊。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['context', 'compression', 'summarization']
  },
  {
    id: 'agent-architecture-context-optimization',
    title: 'agent-architecture:context-optimization',
    description: '當使用者要求「優化上下文」、「減少 token 使用」時使用。最大化上下文效率的技術。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['context', 'optimization', 'token']
  },
  {
    id: 'agent-architecture-tool-design',
    title: 'agent-architecture:tool-design',
    description: '當使用者要求「設計 agent 工具」、「建立工具」時使用。設計和實作 agent 可呼叫的工具。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['tool', 'design', 'implementation']
  },
  {
    id: 'agent-architecture-filesystem-context',
    title: 'agent-architecture:filesystem-context',
    description: '當使用者要求「將上下文寫入檔案」、「實作檔案持久化」時使用。將上下文資訊儲存到檔案系統。',
    category: 'skill',
    source: 'Agent Architecture',
    tags: ['filesystem', 'context', 'storage']
  },
  // agent-development 系列
  {
    id: 'agent-development-project-development',
    title: 'agent-development:project-development',
    description: '當使用者要求「開始 LLM 專案」、「設計新功能」時使用。涵蓋專案初始化、架構設計和工具配置。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['agent', 'development', 'LLM']
  },
  {
    id: 'agent-development-bdi-mental-states',
    title: 'agent-development:bdi-mental-states',
    description: '當使用者要求「建立 agent 心理狀態模型」、「實作 BDI 架構」時使用。設計 agent 的信念、慾望和意圖。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['agent', 'BDI', 'mental-states']
  },
  {
    id: 'agent-development-hosted-agents',
    title: 'agent-development:hosted-agents',
    description: '當使用者要求「建立背景 agent」、「建立託管 agent」時使用。設計長期運行的 agent 系統。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['agent', 'background', 'hosted']
  },
  {
    id: 'agent-development-multi-agent-patterns',
    title: 'agent-development:multi-agent-patterns',
    description: '當使用者要求「設計多 agent 系統」、「實作 agent 協作」時使用。規劃多個 agent 之間的通訊和協調。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['agent', 'multi-agent', 'collaboration']
  },
  {
    id: 'agent-development-evaluation',
    title: 'agent-development:evaluation',
    description: '當使用者要求「評估 agent 效能」、「建立評估框架」時使用。建立量測 agent 表現的方法和指標。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['agent', 'evaluation', 'metrics']
  },
  {
    id: 'agent-development-context-fundamentals',
    title: 'agent-development:context-fundamentals',
    description: '當使用者要求「理解 context」、「解釋上下文管理」時使用。說明如何有效地傳遞和管理對話上下文。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['context', 'fundamentals', 'management']
  },
  {
    id: 'agent-development-advanced-evaluation',
    title: 'agent-development:advanced-evaluation',
    description: '當使用者要求「實作 LLM-as-judge」、「比較不同 prompt」時使用。進階的 agent 評估技術。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['evaluation', 'LLM-judge', 'advanced']
  },
  {
    id: 'agent-development-memory-systems',
    title: 'agent-development:memory-systems',
    description: '當使用者要求「實作 agent 記憶」、「持久化對話」時使用。設計和實作長期記憶系統。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['memory', 'persistence', 'storage']
  },
  {
    id: 'agent-development-context-degradation',
    title: 'agent-development:context-degradation',
    description: '當使用者要求「診斷上下文問題」、「修復遺失資訊」時使用。識別和解決上下文衰減問題。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['context', 'degradation', 'troubleshooting']
  },
  {
    id: 'agent-development-context-compression',
    title: 'agent-development:context-compression',
    description: '當使用者要求「壓縮上下文」、「總結對話」時使用。有效地總結和壓縮大量上下文資訊。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['context', 'compression', 'summarization']
  },
  {
    id: 'agent-development-context-optimization',
    title: 'agent-development:context-optimization',
    description: '當使用者要求「優化上下文」、「減少 token 使用」時使用。最大化上下文效率的技術。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['context', 'optimization', 'token']
  },
  {
    id: 'agent-development-tool-design',
    title: 'agent-development:tool-design',
    description: '當使用者要求「設計 agent 工具」、「建立工具」時使用。設計和實作 agent 可呼叫的工具。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['tool', 'design', 'implementation']
  },
  {
    id: 'agent-development-filesystem-context',
    title: 'agent-development:filesystem-context',
    description: '當使用者要求「將上下文寫入檔案」、「實作檔案持久化」時使用。將上下文資訊儲存到檔案系統。',
    category: 'skill',
    source: 'Agent Development',
    tags: ['filesystem', 'context', 'storage']
  },
  // agent-evaluation 系列
  {
    id: 'agent-evaluation-project-development',
    title: 'agent-evaluation:project-development',
    description: '當使用者要求「開始 LLM 專案」、「設計新功能」時使用。涵蓋專案初始化、架構設計和工具配置。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['agent', 'evaluation', 'LLM']
  },
  {
    id: 'agent-evaluation-bdi-mental-states',
    title: 'agent-evaluation:bdi-mental-states',
    description: '當使用者要求「建立 agent 心理狀態模型」、「實作 BDI 架構」時使用。設計 agent 的信念、慾望和意圖。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['agent', 'BDI', 'mental-states']
  },
  {
    id: 'agent-evaluation-hosted-agents',
    title: 'agent-evaluation:hosted-agents',
    description: '當使用者要求「建立背景 agent」、「建立託管 agent」時使用。設計長期運行的 agent 系統。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['agent', 'background', 'hosted']
  },
  {
    id: 'agent-evaluation-multi-agent-patterns',
    title: 'agent-evaluation:multi-agent-patterns',
    description: '當使用者要求「設計多 agent 系統」、「實作 agent 協作」時使用。規劃多個 agent 之間的通訊和協調。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['agent', 'multi-agent', 'collaboration']
  },
  {
    id: 'agent-evaluation-evaluation',
    title: 'agent-evaluation:evaluation',
    description: '當使用者要求「評估 agent 效能」、「建立評估框架」時使用。建立量測 agent 表現的方法和指標。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['agent', 'evaluation', 'metrics']
  },
  {
    id: 'agent-evaluation-context-fundamentals',
    title: 'agent-evaluation:context-fundamentals',
    description: '當使用者要求「理解 context」、「解釋上下文管理」時使用。說明如何有效地傳遞和管理對話上下文。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['context', 'fundamentals', 'management']
  },
  {
    id: 'agent-evaluation-advanced-evaluation',
    title: 'agent-evaluation:advanced-evaluation',
    description: '當使用者要求「實作 LLM-as-judge」、「比較不同 prompt」時使用。進階的 agent 評估技術。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['evaluation', 'LLM-judge', 'advanced']
  },
  {
    id: 'agent-evaluation-memory-systems',
    title: 'agent-evaluation:memory-systems',
    description: '當使用者要求「實作 agent 記憶」、「持久化對話」時使用。設計和實作長期記憶系統。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['memory', 'persistence', 'storage']
  },
  {
    id: 'agent-evaluation-context-degradation',
    title: 'agent-evaluation:context-degradation',
    description: '當使用者要求「診斷上下文問題」、「修復遺失資訊」時使用。識別和解決上下文衰減問題。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['context', 'degradation', 'troubleshooting']
  },
  {
    id: 'agent-evaluation-context-compression',
    title: 'agent-evaluation:context-compression',
    description: '當使用者要求「壓縮上下文」、「總結對話」時使用。有效地總結和壓縮大量上下文資訊。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['context', 'compression', 'summarization']
  },
  {
    id: 'agent-evaluation-context-optimization',
    title: 'agent-evaluation:context-optimization',
    description: '當使用者要求「優化上下文」、「減少 token 使用」時使用。最大化上下文效率的技術。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['context', 'optimization', 'token']
  },
  {
    id: 'agent-evaluation-tool-design',
    title: 'agent-evaluation:tool-design',
    description: '當使用者要求「設計 agent 工具」、「建立工具」時使用。設計和實作 agent 可呼叫的工具。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['tool', 'design', 'implementation']
  },
  {
    id: 'agent-evaluation-filesystem-context',
    title: 'agent-evaluation:filesystem-context',
    description: '當使用者要求「將上下文寫入檔案」、「實作檔案持久化」時使用。將上下文資訊儲存到檔案系統。',
    category: 'skill',
    source: 'Agent Evaluation',
    tags: ['filesystem', 'context', 'storage']
  }
];

// 認知架構系列（9 個）
export const cognitiveArchitectureSkills: CardData[] = [
  {
    id: 'cognitive-architecture-project-development',
    title: 'cognitive-architecture:project-development',
    description: '當使用者要求「開始 LLM 專案」、「設計新功能」時使用。涵蓋專案初始化、架構設計和工具配置。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['cognitive', 'architecture', 'LLM']
  },
  {
    id: 'cognitive-architecture-bdi-mental-states',
    title: 'cognitive-architecture:bdi-mental-states',
    description: '當使用者要求「建立 agent 心理狀態模型」、「實作認知架構」時使用。設計 agent 的認知過程。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['cognitive', 'BDI', 'mental-states']
  },
  {
    id: 'cognitive-architecture-hosted-agents',
    title: 'cognitive-architecture:hosted-agents',
    description: '當使用者要求「建立背景 agent」、「建立託管 agent」時使用。設計長期運行的 agent 系統。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['agent', 'background', 'hosted']
  },
  {
    id: 'cognitive-architecture-multi-agent-patterns',
    title: 'cognitive-architecture:multi-agent-patterns',
    description: '當使用者要求「設計多 agent 系統」、「實作 agent 協作」時使用。規劃多個 agent 之間的通訊和協調。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['agent', 'multi-agent', 'collaboration']
  },
  {
    id: 'cognitive-architecture-evaluation',
    title: 'cognitive-architecture:evaluation',
    description: '當使用者要求「評估 agent 效能」、「建立評估框架」時使用。建立量測 agent 表現的方法和指標。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['agent', 'evaluation', 'metrics']
  },
  {
    id: 'cognitive-architecture-context-fundamentals',
    title: 'cognitive-architecture:context-fundamentals',
    description: '當使用者要求「理解 context」、「解釋上下文管理」時使用。說明如何有效地傳遞和管理對話上下文。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['context', 'fundamentals', 'management']
  },
  {
    id: 'cognitive-architecture-advanced-evaluation',
    title: 'cognitive-architecture:advanced-evaluation',
    description: '當使用者要求「實作 LLM-as-judge」、「比較不同 prompt」時使用。進階的 agent 評估技術。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['evaluation', 'LLM-judge', 'advanced']
  },
  {
    id: 'cognitive-architecture-memory-systems',
    title: 'cognitive-architecture:memory-systems',
    description: '當使用者要求「實作 agent 記憶」、「持久化對話」時使用。設計和實作長期記憶系統。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['memory', 'persistence', 'storage']
  },
  {
    id: 'cognitive-architecture-context-degradation',
    title: 'cognitive-architecture:context-degradation',
    description: '當使用者要求「診斷上下文問題」、「修復遺失資訊」時使用。識別和解決上下文衰減問題。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['context', 'degradation', 'troubleshooting']
  },
  {
    id: 'cognitive-architecture-context-compression',
    title: 'cognitive-architecture:context-compression',
    description: '當使用者要求「壓縮上下文」、「總結對話」時使用。有效地總結和壓縮大量上下文資訊。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['context', 'compression', 'summarization']
  },
  {
    id: 'cognitive-architecture-context-optimization',
    title: 'cognitive-architecture:context-optimization',
    description: '當使用者要求「優化上下文」、「減少 token 使用」時使用。最大化上下文效率的技術。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['context', 'optimization', 'token']
  },
  {
    id: 'cognitive-architecture-tool-design',
    title: 'cognitive-architecture:tool-design',
    description: '當使用者要求「設計 agent 工具」、「建立工具」時使用。設計和實作 agent 可呼叫的工具。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['tool', 'design', 'implementation']
  },
  {
    id: 'cognitive-architecture-filesystem-context',
    title: 'cognitive-architecture:filesystem-context',
    description: '當使用者要求「將上下文寫入檔案」、「實作檔案持久化」時使用。將上下文資訊儲存到檔案系統。',
    category: 'skill',
    source: 'Cognitive Architecture',
    tags: ['filesystem', 'context', 'storage']
  }
];

// Context Engineering 系列（9 個）
export const contextEngineeringSkills: CardData[] = [
  {
    id: 'context-engineering-project-development',
    title: 'context-engineering-fundamentals:project-development',
    description: '當使用者要求「開始 LLM 專案」、「設計新功能」時使用。涵蓋專案初始化、架構設計和工具配置。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['context', 'engineering', 'LLM']
  },
  {
    id: 'context-engineering-bdi-mental-states',
    title: 'context-engineering-fundamentals:bdi-mental-states',
    description: '當使用者要求「建立 agent 心理狀態模型」、「實作上下文工程」時使用。設計 agent 的上下文處理。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['context', 'BDI', 'engineering']
  },
  {
    id: 'context-engineering-hosted-agents',
    title: 'context-engineering-fundamentals:hosted-agents',
    description: '當使用者要求「建立背景 agent」、「建立託管 agent」時使用。設計長期運行的 agent 系統。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['agent', 'background', 'hosted']
  },
  {
    id: 'context-engineering-multi-agent-patterns',
    title: 'context-engineering-fundamentals:multi-agent-patterns',
    description: '當使用者要求「設計多 agent 系統」、「實作 agent 協作」時使用。規劃多個 agent 之間的通訊和協調。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['agent', 'multi-agent', 'collaboration']
  },
  {
    id: 'context-engineering-evaluation',
    title: 'context-engineering-fundamentals:evaluation',
    description: '當使用者要求「評估 agent 效能」、「建立評估框架」時使用。建立量測 agent 表現的方法和指標。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['agent', 'evaluation', 'metrics']
  },
  {
    id: 'context-engineering-context-fundamentals',
    title: 'context-engineering-fundamentals:context-fundamentals',
    description: '當使用者要求「理解 context」、「解釋上下文管理」時使用。說明如何有效地傳遞和管理對話上下文。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['context', 'fundamentals', 'management']
  },
  {
    id: 'context-engineering-advanced-evaluation',
    title: 'context-engineering-fundamentals:advanced-evaluation',
    description: '當使用者要求「實作 LLM-as-judge」、「比較不同 prompt」時使用。進階的 agent 評估技術。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['evaluation', 'LLM-judge', 'advanced']
  },
  {
    id: 'context-engineering-memory-systems',
    title: 'context-engineering-fundamentals:memory-systems',
    description: '當使用者要求「實作 agent 記憶」、「持久化對話」時使用。設計和實作長期記憶系統。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['memory', 'persistence', 'storage']
  },
  {
    id: 'context-engineering-context-degradation',
    title: 'context-engineering-fundamentals:context-degradation',
    description: '當使用者要求「診斷上下文問題」、「修復遺失資訊」時使用。識別和解決上下文衰減問題。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['context', 'degradation', 'troubleshooting']
  },
  {
    id: 'context-engineering-context-compression',
    title: 'context-engineering-fundamentals:context-compression',
    description: '當使用者要求「壓縮上下文」、「總結對話」時使用。有效地總結和壓縮大量上下文資訊。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['context', 'compression', 'summarization']
  },
  {
    id: 'context-engineering-context-optimization',
    title: 'context-engineering-fundamentals:context-optimization',
    description: '當使用者要求「優化上下文」、「減少 token 使用」時使用。最大化上下文效率的技術。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['context', 'optimization', 'token']
  },
  {
    id: 'context-engineering-tool-design',
    title: 'context-engineering-fundamentals:tool-design',
    description: '當使用者要求「設計 agent 工具」、「建立工具」時使用。設計和實作 agent 可呼叫的工具。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['tool', 'design', 'implementation']
  },
  {
    id: 'context-engineering-filesystem-context',
    title: 'context-engineering-fundamentals:filesystem-context',
    description: '當使用者要求「將上下文寫入檔案」、「實作檔案持久化」時使用。將上下文資訊儲存到檔案系統。',
    category: 'skill',
    source: 'Context Engineering',
    tags: ['filesystem', 'context', 'storage']
  }
];

// 文件處理系列（12 個）
export const documentSkills: CardData[] = [
  {
    id: 'document-skills-pdf',
    title: 'document-skills:pdf',
    description: '完整的 PDF 操作工具包。支援萃取文字和表格、建立新 PDF、合併/拆分文件、處理表單。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['PDF', 'document', 'pypdf']
  },
  {
    id: 'document-skills-docx',
    title: 'document-skills:docx',
    description: 'Word 文件完整處理工具，支援建立、編輯、分析。包含追蹤修訂、評論、格式保留和文字萃取。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['Word', 'document', 'OOXML']
  },
  {
    id: 'document-skills-xlsx',
    title: 'document-skills:xlsx',
    description: 'Excel 試算表創建、編輯和分析工具。支援公式、格式化、數據分析和視覺化。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['Excel', 'spreadsheet', 'openpyxl']
  },
  {
    id: 'document-skills-pptx',
    title: 'document-skills:pptx',
    description: 'PowerPoint 簡報創建、編輯和分析工具。支援版面設計、備註、評論和投影片管理。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['PowerPoint', 'presentation', 'slides']
  },
  {
    id: 'document-skills-algorithmic-art',
    title: 'document-skills:algorithmic-art',
    description: '使用 p5.js 建立演算法藝術，支援種子隨機性和互動式參數探索。創原創生成藝術而非複製現有作品。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['p5.js', 'generative', 'creative']
  },
  {
    id: 'document-skills-canvas-design',
    title: 'document-skills:canvas-design',
    description: '使用 canvas 和 PDF 建立美麗的視覺設計、海報和藝術作品。支援設計原理和創意表達。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['canvas', 'design', 'visual']
  },
  {
    id: 'document-skills-doc-coauthoring',
    title: 'document-skills:doc-coauthoring',
    description: '結構化協作寫作流程指南。適用於文件、提案、技術規格的共同創作。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['writing', 'collaboration', 'documentation']
  },
  {
    id: 'document-skills-mcp-builder',
    title: 'document-skills:mcp-builder',
    description: '建立高質量 MCP（Model Context Protocol）伺服器的指南。支援 Python FastMCP 和 TypeScript MCP SDK。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['MCP', 'server', 'integration']
  },
  {
    id: 'document-skills-skill-creator',
    title: 'document-skills:skill-creator',
    description: '創建新 Skills 的完整指南。包含技能結構、資源組織、封裝和分發流程。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['skill', 'creation', 'plugin']
  },
  {
    id: 'document-skills-theme-factory',
    title: 'document-skills:theme-factory',
    description: '為各種工件（投影片、文件、報告、HTML 登入頁）應用預設主題的工具包。包含 10 種預設主題。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['theme', 'styling', 'design']
  },
  {
    id: 'document-skills-webapp-testing',
    title: 'document-skills:webapp-testing',
    description: '使用 Playwright 測試本地 Web 應用程式。支援前端功能驗證、UI 行為調試、截圖和瀏覽器日誌查看。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['Playwright', 'testing', 'browser']
  },
  {
    id: 'document-skills-internal-comms',
    title: 'document-skills:internal-comms',
    description: '內部溝通文件撰寫工具包。適用於狀態報告、領導更新、3P 更新、公司新聞稿、FAQ、事故報告等。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['communication', 'documentation', 'internal']
  },
  {
    id: 'document-skills-slack-gif-creator',
    title: 'document-skills:slack-gif-creator',
    description: '為 Slack 優化的動畫 GIF 創建工具包。提供約束條件、驗證工具和動畫概念。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['Slack', 'GIF', 'animation']
  },
  {
    id: 'document-skills-brand-guidelines',
    title: 'document-skills:brand-guidelines',
    description: '應用 Anthropic 官方品牌色彩和版面設計指南。確保所有工件符合品牌視覺標準。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['branding', 'design', 'Anthropic']
  },
  {
    id: 'document-skills-web-artifacts-builder',
    title: 'document-skills:web-artifacts-builder',
    description: '使用 React、Tailwind CSS、shadcn/ui 構建複雜的 Claude.ai HTML 工件。支援狀態管理、路由和元件化。',
    category: 'skill',
    source: 'Document Skills',
    tags: ['React', 'Tailwind', 'shadcn/ui']
  }
];

// Notion 系列（5 個）
export const notionSkills: CardData[] = [
  {
    id: 'notion-notion-find',
    title: 'Notion:notion-find',
    description: '依標題關鍵字快速搜尋 Notion 中的頁面或資料庫。',
    category: 'skill',
    source: 'Notion',
    tags: ['Notion', 'search', 'find']
  },
  {
    id: 'notion-notion-create-page',
    title: 'Notion:notion-create-page',
    description: '建立新的 Notion 頁面，可選擇在特定父頁面下建立。使用 Notion Web API。',
    category: 'skill',
    source: 'Notion',
    tags: ['Notion', 'create', 'page']
  },
  {
    id: 'notion-notion-database-query',
    title: 'Notion:notion-database-query',
    description: '依名稱或 ID 查詢 Notion 資料庫，返回結構化、易讀的結果。',
    category: 'skill',
    source: 'Notion',
    tags: ['Notion', 'database', 'query']
  },
  {
    id: 'notion-notion-create-database-row',
    title: 'Notion:notion-create-database-row',
    description: '在指定的 Notion 資料庫中插入新資料列，使用自然語言屬性。',
    category: 'skill',
    source: 'Notion',
    tags: ['Notion', 'database', 'row']
  },
  {
    id: 'notion-notion-search',
    title: 'Notion:notion-search',
    description: '使用 Notion MCP server 和 Notion Workspace 搜尋功能。',
    category: 'skill',
    source: 'Notion',
    tags: ['Notion', 'search', 'workspace']
  },
  {
    id: 'notion-notion-create-task',
    title: 'Notion:notion-create-task',
    description: '在使用者的 Notion 任務資料庫中建立新任務，提供合理的預設值。',
    category: 'skill',
    source: 'Notion',
    tags: ['Notion', 'task', 'create']
  }
];

// Ralph Loop 系列（3 個）
export const ralphLoopSkills: CardData[] = [
  {
    id: 'ralph-loop-ralph-loop',
    title: 'ralph-loop:ralph-loop',
    description: '在目前 session 中啟動 Ralph Loop。Ralph Loop 是一種對話模式，持續執行 agent 迴圈。',
    category: 'skill',
    source: 'Ralph Loop',
    tags: ['ralph', 'loop', 'conversation']
  },
  {
    id: 'ralph-loop-cancel-ralph',
    title: 'ralph-loop:cancel-ralph',
    description: '取消目前活躍的 Ralph Loop。',
    category: 'skill',
    source: 'Ralph Loop',
    tags: ['ralph', 'cancel', 'stop']
  },
  {
    id: 'ralph-loop-help',
    title: 'ralph-loop:help',
    description: '說明 Ralph Loop 外掛和可用指令。',
    category: 'skill',
    source: 'Ralph Loop',
    tags: ['ralph', 'help', 'documentation']
  }
];

// Commit Commands 系列（3 個）
export const commitCommandsSkills: CardData[] = [
  {
    id: 'commit-commands-commit',
    title: 'commit-commands:commit',
    description: '建立 git commit。可選擇自動推送和建立 PR。',
    category: 'skill',
    source: 'Commit Commands',
    tags: ['git', 'commit', 'workflow']
  },
  {
    id: 'commit-commands-clean-gone',
    title: 'commit-commands:clean_gone',
    description: '清理所有標記為 [gone] 的 git 分支（已刪除的遠端分支）。',
    category: 'skill',
    source: 'Commit Commands',
    tags: ['git', 'cleanup', 'branches']
  },
  {
    id: 'commit-commands-commit-push-pr',
    title: 'commit-commands:commit-push-pr',
    description: 'commit、push 並打開 PR。',
    category: 'skill',
    source: 'Commit Commands',
    tags: ['git', 'commit', 'PR']
  }
];

// Superpowers 系列（12 個）
export const superpowersSkills: CardData[] = [
  {
    id: 'superpowers-receiving-code-review',
    title: 'superpowers:receiving-code-review',
    description: '收到程式碼審查回饋時使用，特別是當需要實作建議時。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['review', 'feedback', 'improvement']
  },
  {
    id: 'superpowers-subagent-driven-development',
    title: 'superpowers:subagent-driven-development',
    description: '使用 subagent 驅動開發。透過分派獨立的子代理來執行任務。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['subagent', 'development', 'workflow']
  },
  {
    id: 'superpowers-executing-plans',
    title: 'superpowers:executing-plans',
    description: '執行保存的實施計劃。在獨立 session 中批次執行。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['execution', 'planning', 'session']
  },
  {
    id: 'superpowers-writing-plans',
    title: 'superpowers:writing-plans',
    description: '撰寫實施計劃。將需求轉換為可執行的步驟清單。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['writing', 'planning', 'requirements']
  },
  {
    id: 'superpowers-using-git-worktrees',
    title: 'superpowers:using-git-worktrees',
    description: '當需要隔離目前工作區或需要乾淨環境時使用 git worktree。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['git', 'worktree', 'isolation']
  },
  {
    id: 'superpowers-writing-skills',
    title: 'superpowers:writing-skills',
    description: '建立新 skills、編輯現有 skills 或驗證 skills 是否正常運作。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['skills', 'writing', 'creation']
  },
  {
    id: 'superpowers-requesting-code-review',
    title: 'superpowers:requesting-code-review',
    description: '完成任務、實作主要功能或合併前請求程式碼審查。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['review', 'quality', 'workflow']
  },
  {
    id: 'superpowers-using-superpowers',
    title: 'superpowers:using-superpowers',
    description: '開始對話時使用。建立如何找到和使用 skills 的共識。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['skills', 'guidance', 'getting-started']
  },
  {
    id: 'superpowers-finishing-a-development-branch',
    title: 'superpowers:finishing-a-development-branch',
    description: '當實作完成、測試通過時使用。決定如何處理開發分支。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['git', 'branch', 'completion']
  },
  {
    id: 'superpowers-brainstorming',
    title: 'superpowers:brainstorming',
    description: '任何創意工作之前必須使用。建立功能、構建元件等。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['brainstorming', 'creative', 'ideation']
  },
  {
    id: 'superpowers-dispatching-parallel-agents',
    title: 'superpowers:dispatching-parallel-agents',
    description: '面對 2 個以上可在無共享狀態下獨立處理的任務時使用。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['parallel', 'agents', 'dispatch']
  },
  {
    id: 'superpowers-test-driven-development',
    title: 'superpowers:test-driven-development',
    description: '實作任何功能或錯誤修正前使用。先撰寫測試。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['TDD', 'testing', 'methodology']
  },
  {
    id: 'superpowers-systematic-debugging',
    title: 'superpowers:systematic-debugging',
    description: '遇到任何 bug、測試失敗或未預期行為時使用。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['debugging', 'troubleshooting', 'systematic']
  },
  {
    id: 'superpowers-verification-before-completion',
    title: 'superpowers:verification-before-completion',
    description: '聲稱工作完成、修復或通過前使用。防止錯誤宣告。',
    category: 'skill',
    source: 'Superpowers',
    tags: ['verification', 'testing', 'completion']
  }
];

// Claude MD Management 系列（2 個）
export const claudeMdManagementSkills: CardData[] = [
  {
    id: 'claude-md-management-revise-claude-md',
    title: 'claude-md-management:revise-claude-md',
    description: '從目前對話中更新 CLAUDE.md。將學習到的知識寫入 CLAUDE.md。',
    category: 'skill',
    source: 'Claude MD Management',
    tags: ['CLAUDE.md', 'documentation', 'updates']
  },
  {
    id: 'claude-md-management-claude-md-improver',
    title: 'claude-md-management:claude-md-improver',
    description: '審計和改進儲存庫中的 CLAUDE.md 檔案。',
    category: 'skill',
    source: 'Claude MD Management',
    tags: ['CLAUDE.md', 'audit', 'improvement']
  }
];

// Elements of Style（1 個）
export const elementsOfStyleSkills: CardData[] = [
  {
    id: 'elements-of-style-writing-clearly-and-concisely',
    title: 'elements-of-style:writing-clearly-and-concisely',
    description: '應用 Strunk 的寫作規則到任何人類會閱讀的文件。',
    category: 'skill',
    source: 'Elements of Style',
    tags: ['writing', 'style', 'clarity']
  }
];

// Frontend Design（1 個）
export const frontendDesignSkills: CardData[] = [
  {
    id: 'frontend-design-frontend-design',
    title: 'frontend-design:frontend-design',
    description: '建立獨特、生產級的前端介面。避免通用 AI 美學，注重創意和精緻的視覺設計。',
    category: 'skill',
    source: 'Frontend Design',
    tags: ['frontend', 'UI', 'design']
  }
];

// 合併所有 Skills
export const allSkills = [
  ...claudeCodeSkills,
  ...agentArchitectureSkills,
  ...cognitiveArchitectureSkills,
  ...contextEngineeringSkills,
  ...documentSkills,
  ...notionSkills,
  ...ralphLoopSkills,
  ...commitCommandsSkills,
  ...superpowersSkills,
  ...claudeMdManagementSkills,
  ...elementsOfStyleSkills,
  ...frontendDesignSkills
];

import { CardData } from './types';

// Claude Code 已安裝的 Agents（8 個）
export const allAgents: CardData[] = [
  {
    id: 'agent-sdk-dev-agent-sdk-verifier-py',
    title: 'agent-sdk-dev:agent-sdk-verifier-py',
    description: '驗證 Python Agent SDK 應用程式是否符合 SDK 最佳實踐。檢查配置、依賴和程式碼結構。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Agent SDK', 'Python', 'validation']
  },
  {
    id: 'agent-sdk-dev-agent-sdk-verifier-ts',
    title: 'agent-sdk-dev:agent-sdk-verifier-ts',
    description: '驗證 TypeScript Agent SDK 應用程式是否符合 SDK 最佳實踐。檢查配置、依賴和程式碼結構。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['Agent SDK', 'TypeScript', 'validation']
  },
  {
    id: 'code-simplifier-code-simplifier',
    title: 'code-simplifier:code-simplifier',
    description: '程式碼簡化與重構專家。簡化程式碼以提高可讀性和可維護性，同時保留所有功能。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['refactor', 'simplify', 'clean-code']
  },
  {
    id: 'feature-dev-code-architect',
    title: 'feature-dev:code-architect',
    description: '功能架構設計專家。分析現有程式碼模式與慣例，提供全面的實作藍圖。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['architecture', 'design', 'planning']
  },
  {
    id: 'feature-dev-code-explorer',
    title: 'feature-dev:code-explorer',
    description: '功能程式碼分析專家。深入分析功能實作，追溯執行路徑並理解架構層級。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['analysis', 'exploration', 'understanding']
  },
  {
    id: 'feature-dev-code-reviewer',
    title: 'feature-dev:code-reviewer',
    description: '功能程式碼審查專家。針對新功能進行 Bugs、邏輯錯誤和安全漏洞的審查。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['review', 'quality', 'security']
  },
  {
    id: 'pr-review-toolkit-silent-failure-hunter',
    title: 'pr-review-toolkit:silent-failure-hunter',
    description: '靜默失敗偵測專家。主動識別程式碼中可能被忽略的錯誤處理和回退行為。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['error-handling', 'PR', 'quality']
  },
  {
    id: 'superpowers-code-reviewer',
    title: 'superpowers:code-reviewer',
    description: '專案程式碼審查專家。全面審查程式碼品質、最佳實踐遵循度和潛在問題。',
    category: 'agent',
    source: 'Claude Code',
    tags: ['review', 'quality', 'best-practices']
  }
];

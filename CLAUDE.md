# CLAUDE.md

此檔案提供 Claude Code (claude.ai/code) 在此專案中工作時的指引。

## 開發指令

```bash
npm run dev      # 開發伺服器 (http://localhost:3000)
npm run build    # TypeScript 檢查 + 生產建置 → dist/
npm run preview  # 預覽建置結果
```

## 架構

靜態文件網站，使用 React + Vite。資料定義於 TypeScript 檔案 (`data/*.ts`)，無需 API 或資料庫。

**資料流：**
- `Home.tsx` 管理狀態（搜尋、過濾、主題）
- 元件透過 props 接收資料，不超過 2 層 prop drilling
- 自訂 hooks 封裝跨領域邏輯（`useTheme`、`useScrollSpy`）

**狀態管理：**
- `useState` 管理 UI 狀態（搜尋、過濾、主題）
- `useMemo` 計算過濾後的列表

## 專案結構

```
src/
├── main.tsx              # React 入口，載入 Bootstrap CSS
├── App.tsx               # 根元件
├── App.css               # 主題變數 + Bootstrap 覆寫

components/               # UI 元件
├── Header.tsx            # 搜尋框 + 篩選按鈕 + 主題切換
├── Sidebar.tsx          # 導航 + scroll spy
├── Card.tsx             # Agent/Skill 卡片
├── DetailSection.tsx     # 可展開的 Tool 區塊
└── *.tsx                # 其他元件

data/                     # 資料定義
├── types.ts             # 共用介面
├── agents.ts            # 18 種 Agent 定義
├── skills.ts            # 37 種 Skill 定義
└── tools.ts             # MCP Tools 資料

hooks/
├── useTheme.ts          # 深色/淺色主題 + localStorage
└── useScrollSpy.ts     # IntersectionObserver 監控目前區塊

pages/
└── Home.tsx             # 主頁面組裝
```

## 關鍵模式

- **主題**：`useTheme` hook 管理 `data-theme` 屬性 + localStorage
- **搜尋**：`useMemo` 依標題/描述/標籤過濾
- **導航**：scroll spy 突顯目前區塊

## Git

- Commit 訊息使用中文
- 部署 `dist/` 目錄到靜態托管（GitHub Pages、Netlify、Vercel）

---

## 已安裝的 Agents 與 Skills

### Agents（8 個）

| Agent | 用途 |
|-------|------|
| `agent-sdk-dev:agent-sdk-verifier-py` | 驗證 Python Agent SDK 應用程式 |
| `agent-sdk-dev:agent-sdk-verifier-ts` | 驗證 TypeScript Agent SDK 應用程式 |
| `code-simplifier:code-simplifier` | 程式碼簡化與重構 |
| `feature-dev:code-architect` | 設計功能架構 |
| `feature-dev:code-explorer` | 分析功能程式碼 |
| `feature-dev:code-reviewer` | 程式碼審查 |
| `pr-review-toolkit:silent-failure-hunter` | 偵測靜默失敗與錯誤處理 |
| `superpowers:code-reviewer` | 專案程式碼審查 |

### Claude Code Skills（18 個）

| Skill | 用途 |
|-------|------|
| `agent-browser` | 瀏覽器自動化測試與互動 |
| `changelog-generator` | 自動從 git commits 產生 changelog |
| `executing-plans` | 執行保存的實施計劃 |
| `find-skills` | 搜尋與安裝新技能 |
| `finishing-a-development-branch` | 完成開發分支的最終檢查 |
| `notion-spec-to-implementation` | 將產品規格轉為 Notion 任務 |
| `pdf-generator` | 專業 PDF 文件生成 |
| `planning-with-files` | 使用 markdown 文件進行規劃 |
| `requesting-code-review` | 請求程式碼審查 |
| `subagent-driven-development` | 子 agent 驅動開發 |
| `systematic-debugging` | 系統化除錯方法 |
| `test-driven-development` | TDD 測試驅動開發 |
| `thinkphp-expert` | ThinkPHP（TP3/TP5）專案輔助 |
| `using-superpowers` | 超能力技能使用指南 |
| `vercel-composition-patterns` | React 組合模式 |
| `vercel-react-best-practices` | React/Next.js 效能優化 |
| `web-design-guidelines` | Web 介面設計規範 |
| `writing-plans` | 撰寫實施計劃 |

### Agent 架構系列（5 × 9 = 45 個子技能）

- `agent-architecture:*` - Agent 架構設計
- `agent-development:*` - Agent 開發指南
- `agent-evaluation:*` - Agent 效能評估
- `cognitive-architecture:*` - 認知架構設計
- `context-engineering-fundamentals:*` - 上下文工程基礎

### 文件處理系列（12 個）

| | | |
|---|---|---|
| `document-skills:pdf` | `document-skills:docx` | `document-skills:xlsx` |
| `document-skills:pptx` | `document-skills:pdf` | `document-skills:docx` |
| `document-skills:pdf` | `document-skills:pdf` | `document-skills:pdf` |

### 其他 Skills 系列

| 系列 | 數量 | 用途 |
|------|------|------|
| `Notion:*` | 5 | Notion 整合 |
| `ralph-loop:*` | 3 | Ralph Loop 指令 |
| `commit-commands:*` | 3 | Git commit 指令 |
| `superpowers:*` | 12 | 開發超能力 |
| `elements-of-style:*` | 1 | 寫作風格 |
| `claude-md-management:*` | 2 | CLAUDE.md 管理 |
| `frontend-design:*` | 1 | 前端設計 |

### MCP Servers（全域）

| Server | 類型 | 用途 |
|--------|------|------|
| `MiniMax` | 命令列 | MiniMax AI API 整合 |
| `notion` | HTTP | Notion API 整合 |

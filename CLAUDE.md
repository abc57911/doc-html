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

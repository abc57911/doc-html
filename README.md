# Claude Code Agents & Skills 目錄

這是一個靜態網站，用於展示 Claude Code 已安裝的 Agents 和 Skills。

## 開發指令

```bash
npm run dev      # 開發伺服器 (http://localhost:3000)
npm run build    # TypeScript 檢查 + 生產建置 → dist/
npm run preview  # 預覽建置結果
```

## 專案架構

- **React + Vite** - 前端框架
- **TypeScript** - 類型安全
- **Bootstrap** - CSS 框架

### 目錄結構

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
├── agents.ts            # Agents 資料（8 個）
├── skills.ts            # Skills 資料（128 個）
└── tools.ts             # MCP Tools 資料

hooks/
├── useTheme.ts          # 深色/淺色主題 + localStorage
└── useScrollSpy.ts     # IntersectionObserver 監控目前區塊

pages/
└── Home.tsx             # 主頁面組裝
```

## 資料統計

- **Agents**：8 個
- **Skills**：128 個
- **MCP Servers**：3 個（MiniMax、Notion、DeepWiki）

## 部署

建置後的 `dist/` 目錄可部署到：
- GitHub Pages
- Netlify
- Vercel

```bash
npm run build
# 將 dist/ 目錄部署到靜態托管
```

## 更新資料

Agents 和 Skills 定義於 `src/data/` 目錄：

- `src/data/agents.ts` - Agents 資料
- `src/data/skills.ts` - Skills 資料
- `src/data/tools.ts` - MCP Tools 資料

如需新增或修改 Agents/Skills，直接編輯上述檔案即可。

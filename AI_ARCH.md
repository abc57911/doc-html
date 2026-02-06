# AI_ARCH.md - Claude Code 文件網站技術架構文檔

> 本文件概述 `doc-react` 專案的技術架構設計與實作細節

---

## 1. 專案總覽 (Project Overview)

### 1.1 核心業務邏輯

本專案為 **Claude Code 完整使用指南** 的靜態文件網站，用於記錄與展示：
- **Agents**：18 種開發、分析、專家類代理程式
- **Skills**：37 種工作流程與工具類技能
- **Tools**：3 種 MCP (Model Context Protocol) 工具服務

屬於**文件型應用**，無後端業務邏輯，前端採用 React + Vite 構建。

### 1.2 技術棧清單

| 類別 | 版本/規格 | 用途 |
|------|----------|------|
| React | 18.2.0 | UI 元件框架 |
| TypeScript | 5.3+ | 類型安全 |
| Vite | 5.1+ | 建構工具 |
| Bootstrap | 5.3.3 | 網格系統與 UI 元件 (npm) |
| Font Awesome | 6.5.1 | 圖示資源 (CDN) |
| React Router | 6.22+ | 路由管理 |

---

## 2. 架構設計模式 (Architecture Patterns)

### 2.1 採用的設計模式

本專案採用 **React + Vite + TypeScript** 單頁應用 (SPA) 架構：

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │                   React App                      │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐      │   │
│  │  │  Hooks   │  │Components│  │  Pages   │      │   │
│  │  │(邏輯)   │  │  (UI)    │  │(路由)    │      │   │
│  │  └──────────┘  └──────────┘  └──────────┘      │   │
│  └─────────────────────┬───────────────────────────┘   │
│                        │                                 │
│                        ▼                                 │
│              Vite + Bootstrap 5                          │
│                   (構建與樣式)                            │
└─────────────────────────────────────────────────────────┘
```

### 2.2 元件解耦方式

| 層級 | 職責 | 解耦方式 |
|-----|------|---------|
| **React Components** | UI 邏輯 | Function Components + Hooks |
| **Custom Hooks** | 共用邏輯 | useSearch, useFilter, useTheme |
| **Data Layer** | 資料管理 | TypeScript 物件 (無 API) |
| **CSS** | 視覺樣式 | CSS 變數 + Bootstrap |

---

## 3. 目錄結構深度解析 (Directory Structure)

```
doc-react/
├── CLAUDE.md              # Claude Code 專案指示檔
├── AI_ARCH.md             # 本技術架構文檔
├── index.html             # Vite 入口 HTML
├── package.json           # 依賴與腳本
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
└── src/
    ├── main.tsx           # React 入口
    ├── App.tsx            # App 根元件
    ├── App.css            # 全域樣式
    ├── components/        # React 元件
    │   ├── Header.tsx
    │   ├── Sidebar.tsx
    │   ├── Card.tsx
    │   ├── DetailSection.tsx
    │   ├── WorkflowDiagram.tsx
    │   ├── DataTable.tsx
    │   ├── ProgressBar.tsx
    │   └── BackToTop.tsx
    ├── data/              # 資料層
    │   ├── types.ts       # TypeScript 類型定義
    │   ├── agents.ts      # Agents 資料
    │   ├── skills.ts      # Skills 資料
    │   └── tools.ts       # Tools 資料
    ├── hooks/             # Custom Hooks
    │   ├── useTheme.ts    # 主題切換
    │   └── useScrollSpy.ts# 捲動監控
    └── pages/
        └── Home.tsx       # 主頁面
```

### 3.1 邏輯重鎮標註

| 檔案/目錄 | 設計意圖 | 開發者關注度 |
|----------|---------|------------|
| `src/pages/Home.tsx` | 主頁面組裝與狀態管理 | ★★★★★ |
| `src/components/*` | UI 元件 | ★★★★☆ |
| `src/data/*` | 資料定義 | ★★★★☆ |
| `src/hooks/*` | 共用邏輯 | ★★★☆☆ |

---

## 4. 核心資料流與生命週期 (Data Flow & Lifecycle)

### 4.1 React 生命週期

```
ReactDOM.createRoot()
        │
        ▼
┌───────────────────┐
│  App Component    │  根元件渲染
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  Home Component   │  主頁面載入
└─────────┬─────────┘
          │
          ▼
    useState / useMemo 初始化
    (搜尋、過濾、主題狀態)
          │
          ▼
    Components Render
    (Header, Sidebar, Cards...)
          │
          ▼
    useEffect 執行
    (主題載入、scroll spy 初始化)
```

### 4.2 搜尋功能資料流

```
User Input (搜尋框)
        │
        ▼
onChange ──useState──▶ searchQuery
                              │
                              ▼
                        useMemo (debounce)
                              │
                              ▼
                   filteredAgents / filteredSkills
                              │
                              ▼
                    React Render 更新
```

---

## 5. 資料持久化與模型 (Data Persistence)

### 5.1 持久化策略

| 資料類型 | 儲存方式 | 鍵名 | 生命週期 |
|---------|---------|------|---------|
| **主題偏好** | localStorage | `theme` | 永久 (手動清除前) |
| **我的最愛** | localStorage | `favorites` | 永久 |
| **URL Hash** | `history.pushState` | `#section-id` | 頁面生命週期 |

### 5.2 主題系統實作

```css
/* 深色主題 (預設) */
:root {
  --bg-primary: #0d1117;
  --text-primary: #e6edf3;
}

/* 淺色主題覆寫 */
[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #24292e;
}
```

```typescript
// 主題切換 Hook (useTheme.ts)
const [theme, setTheme] = useState(() =>
  localStorage.getItem('theme') || 'dark'
);

useEffect(() => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}, [theme]);
```

---

## 6. 關鍵模組與第三方整合 (Key Modules & Integrations)

### 6.1 核心元件與 Hooks

| 元件/Hook | 檔案 | 功能描述 |
|----------|------|---------|
| `Home.tsx` | src/pages/ | 主頁面組裝與狀態管理 |
| `useTheme.ts` | src/hooks/ | 深色/淺色主題切換 |
| `useScrollSpy.ts` | src/hooks/ | IntersectionObserver 捲動監控 |
| `Header.tsx` | src/components/ | 搜尋框與篩選按鈕 |
| `Sidebar.tsx` | src/components/ | 側邊欄導航 |
| `Card.tsx` | src/components/ | Agent/Skill 卡片 |
| `DetailSection.tsx` | src/components/ | Tool 展開收合 |

### 6.2 第三方整合

| 服務 | 來源 | 用途 |
|-----|------|------|
| Bootstrap 5.3.3 | npm | 網格系統與 UI 元件 |
| Font Awesome 6.5.1 | CDN | 圖示資源 |

---

## 7. 配置與環境管理 (Configuration & Environment)

### 7.1 環境變數

本專案為純靜態網站，**無後端環境變數需求**。

### 7.2 響應式斷點

| 斷點 | 螢幕寬度 | 側邊欄寬度 |
|-----|---------|-----------|
| 預設 | < 1024px | 隱藏 ( Hamburger Menu ) |
| ≥ 1024px | 260px | 固定顯示 |

### 7.3 特定系統需求

| 需求類型 | 說明 |
|---------|------|
| **路徑依賴** | 所有資源使用相對路徑 (`css/`, `js/`) |
| **權限需求** | 檔案讀取權限 (Git 追蹤) |
| **字體顯示** | 使用系統字體堆疊 (`-apple-system`, `Segoe UI`, `Noto Sans`) |

---

## 8. 安全性與異常處理 (Security & Error Handling)

### 8.1 身份驗證與授權

**本專案為公開靜態文件網站**，無身份驗證機制。

### 8.2 異常處理實作

| 異常情境 | 處理方式 |
|---------|---------|
| **clipboard API 失敗** | `catch` 區塊顯示錯誤通知 |
| **目標元素不存在** | `$target.length > 0` 防呆檢查 |
| **搜尋無結果** | 顯示 `empty-state` 提示訊息 |

```javascript
// 複製失敗處理範例
navigator.clipboard.writeText(text).catch(function() {
  showNotification('複製失敗，請手動複製', 'error');
});
```

### 8.3 日誌輸出

| 類型 | 用途 |
|-----|------|
| `console.log()` | 初始化完成後輸出統計資訊 |
| `console.error` | 未使用 (無後端錯誤需記錄) |

---

## 9. 部署與維運說明 (Ops & Deployment)

### 9.1 部署方式

| 部署類型 | 說明 |
|---------|------|
| **靜態托管** | Vite build 產出 `dist/` 目錄，可部署至 GitHub Pages、Netlify、Vercel |
| **本地開發** | `npm run dev` 啟動開發伺服器 |

### 9.2 建置指令

```bash
npm run dev      # 開發伺服器 (http://localhost:3000)
npm run build    # 生產建置 → dist/
npm run preview  # 預覽建置結果
```

### 9.3 部署配置

```nginx
# Nginx 配置 (範例)
location / {
    root /var/www/doc-react;
    index index.html;
    try_files $uri $uri/ /index.html;
}
```

### 9.4 開發工作流

```bash
# 本地開發
cd doc-react
npm run dev

# 建置生產版本
npm run build

# Git 提交
git add -A && git commit -m "更新說明"
git push origin master
```

---

## 10. 擴充建議 (Extension Recommendations)

| 擴充方向 | 建議實作方式 |
|---------|-------------|
| **內容管理** | 引入 Markdown 編譯器 (marked.js) 動態載入內容 |
| **搜尋引擎** | 整合 Algolia DocSearch 或 Fuse.js |
| **PWA 支援** | Vite PWA 插件離線存取 |
| **多語系** | i18n 框架 (i18next) 支援多語言切換 |

---

## 附錄：檔案權重分布

| 檔案 | 大小 | 行數 | 佔比 |
|-----|------|-----|------|
| index.html | ~30KB | 1000+ | 主要內容區 |
| js/main.js | ~18KB | 552 | 互動邏輯 |
| css/styles.css | ~20KB | 1600+ | 樣式系統 |

---

## 附錄：建置產出

| 檔案 | 大小 | 說明 |
|-----|------|------|
| `dist/index.html` | ~0.6 kB | 入口 HTML |
| `dist/assets/*.js` | ~175 kB | React 打包後 JS |
| `dist/assets/*.css` | ~246 kB | Bootstrap + 自訂樣式 |

---

*文檔版本：v3.0*
*最後更新：2026-02-06*

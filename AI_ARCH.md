# AI_ARCH.md - Claude Code 文件網站技術架構文檔

> 本文件概述 `doc-html` 專案的技術架構設計與實作細節

---

## 1. 專案總覽 (Project Overview)

### 1.1 核心業務邏輯

本專案為 **Claude Code 完整使用指南** 的靜態文件網站，用於記錄與展示：
- **Agents**：18 種開發、分析、專家類代理程式
- **Skills**：37 種工作流程與工具類技能
- **Tools**：10+ 種核心工具與 MCP (Model Context Protocol) 工具

屬於**文件型應用**，無後端業務邏輯，所有內容以靜態 HTML 方式呈現。

### 1.2 技術棧清單

| 類別 | 版本/規格 | 用途 |
|------|----------|------|
| HTML | 5 | 文件結構與語意化標籤 |
| CSS | 3 (含 Bootstrap 5.3.3) | 響應式排版與自訂樣式 |
| JavaScript | ES6+ | DOM 操作與互動功能 |
| jQuery | 3.7.1 | DOM 操控與事件處理 |
| Bootstrap | 5.3.3 | 網格系統與 UI 元件 |
| Font Awesome | 6.5.1 | 圖示資源 |
| highlight.js | - | 程式碼語法高亮 (整合於 JS) |

---

## 2. 架構設計模式 (Architecture Patterns)

### 2.1 採用的設計模式

本專案採用 **Static Page + Client-Side Rendering (CSR)** 模式：

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │   index.html │  │  css/styles │  │  js/main.js │      │
│  │  (結構層)    │  │  (表現層)    │  │  (行為層)    │      │
│  └─────────────┘  └─────────────┘  └─────────────┘      │
│         │                │                │              │
│         └────────────────┼────────────────┘              │
│                          ▼                               │
│               jQuery + Bootstrap 5                       │
│                   (互動與響應式)                          │
└─────────────────────────────────────────────────────────┘
```

### 2.2 元件解耦方式

| 層級 | 職責 | 解耦方式 |
|-----|------|---------|
| **結構層 (HTML)** | 語意化文件結構 | data-* 屬性區分功能區塊 |
| **表現層 (CSS)** | 視覺樣式與主題 | CSS 變數 (`--bg-primary`, `--text-primary`) |
| **行為層 (JS)** | 互動邏輯 | jQuery 模組化函式 + 事件委派 |

---

## 3. 目錄結構深度解析 (Directory Structure)

```
doc-html/
├── CLAUDE.md           # Claude Code 專案指示檔
├── AI_ARCH.md          # 本技術架構文檔
├── index.html          # 主文件頁面 (入口檔案)
├── project_map.xml     # Repomix 產生的專案地圖
├── css/
│   └── styles.css      # 自訂樣式表 (含 Bootstrap 覆寫)
└── js/
    └── main.js         # jQuery 互動功能模組
```

### 3.1 邏輯重鎮標註

| 檔案/目錄 | 設計意圖 | 開發者關注度 |
|----------|---------|------------|
| `index.html` | 主文件入口，包含所有內容區塊與導航結構 | ★★★★★ |
| `js/main.js` | 所有前端互動邏輯 (搜尋、篩選、主題切換) | ★★★★★ |
| `css/styles.css` | CSS 變數定義、主題系統、響應式斷點 | ★★★★☆ |

---

## 4. 核心資料流與生命週期 (Data Flow & Lifecycle)

### 4.1 頁面載入流程

```
DOMContentLoaded 事件
        │
        ▼
┌───────────────────┐
│  initProgressBar  │  建立捲動進度條
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│   initBackToTop   │  建立回頂部按鈕
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│    initSearch     │  初始化搜尋 (含 300ms debounce)
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  initFilterButtons│  初始化分類篩選
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│  initDetailSections│ 建立展開收合功能
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│   initThemeToggle │  載入 localStorage 主題
└─────────┬─────────┘
          │
          ▼
    初始化完成 (22 個模組)
```

### 4.2 搜尋功能資料流

```
User Input (搜尋框)
        │
        ▼
input 事件觸發 ──debounce(300ms)──▶ searchContent(query)
                                              │
        ┌───────────────────────────────────┬──┴─────────────┐
        ▼                                   ▼                ▼
   card 元素遍歷                  detail-section 遍歷    filterSections()
        │                                   │                │
        ▼                                   ▼                ▼
   標題/描述/tool-tag 比對         標題/內容比對         隱藏空區塊
        │                                   │                │
        └──────────────┬────────────────────┘                │
                       ▼                                     ▼
              DOM 顯示/隱藏操作                    updateEmptyState()
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

```javascript
// 主題切換邏輯
var savedTheme = localStorage.getItem('theme') || 'dark';
$('html').attr('data-theme', savedTheme);
```

---

## 6. 關鍵模組與第三方整合 (Key Modules & Integrations)

### 6.1 核心模組清單

| 模組名稱 | 行號 | 功能描述 |
|---------|------|---------|
| `initSearch()` | 72-80 | 搜尋功能 (含 debounce 防抖) |
| `filterContent()` | 159-217 | 分類篩選邏輯 |
| `initThemeToggle()` | 262-279 | 深色/淺色主題切換 |
| `initScrollSpy()` | 353-372 | IntersectionObserver 捲動監控 |
| `initSidebarNavigation()` | 409-455 | 側邊欄導航與錨點捲動 |
| `updateStats()` | 526-536 | 統計數量更新 |

### 6.2 第三方整合點

| 服務 | CDN URL | 用途 |
|-----|---------|------|
| Bootstrap 5.3.3 | `cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` | 網格系統與元件 |
| Font Awesome 6.5.1 | `cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css` | 圖示資源 |

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
| **靜態托管** | 可部署至 GitHub Pages、Netlify、Vercel 等靜態托管服務 |
| **無建置流程** | 直接複製 `index.html`, `css/`, `js/` 即可執行 |

### 9.2 關鍵配置要點

```nginx
# Nginx 靜態資源配置 (範例)
location / {
    root /var/www/doc-html;
    index index.html;
    try_files $uri $uri/ /index.html;
}
```

### 9.3 開發工作流

```bash
# 本地開發
# 1. 直接開啟 index.html 或使用 Live Server
open index.html

# Git 提交
git add -A && git commit -m "更新說明"
git push origin master
```

---

## 10. 擴充建議 (Extension Recommendations)

| 擴充方向 | 建議實作方式 |
|---------|-------------|
| **內容管理** | 引入 Markdown 編譯器 (marked.js) 動態載入內容 |
| **搜尋引擎** | 整合 Algolia DocSearch 或 Lunr.js |
| **PWA 支援** | Service Worker 快取離線存取 |
| **多語系** | i18n 框架 (i18next) 支援多語言切換 |

---

## 附錄：檔案權重分布

| 檔案 | 大小 | 行數 | 佔比 |
|-----|------|-----|------|
| index.html | ~30KB | 1000+ | 主要內容區 |
| js/main.js | ~18KB | 552 | 互動邏輯 |
| css/styles.css | ~20KB | 1600+ | 樣式系統 |

---

*文檔版本：v1.0*
*最後更新：2026-02-02*

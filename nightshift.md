# Nightshift 完整文檔

> 自動化程式碼維護系統 | Automated Code Maintenance System

Nightshift 是一個自動化程式碼維護系統，專門在夜間執行，用於偵測並解決程式碼品質問題。它會執行各種維護任務（linting、dead code 偵測、文件漂移、安全分析等），並建立 Pull Request 供審查。

- **GitHub**: https://github.com/marcus/nightshift
- **官方文檔**: https://nightshift.dev

---

## 目錄

1. [安裝](#安裝)
2. [快速開始](#快速開始)
3. [架構概述](#架構概述)
4. [CLI 命令參考](#cli-命令參考)
5. [任務系統](#任務系統)
6. [配置指南](#配置指南)
7. [預算管理](#預算管理)
8. [排程與Daemon](#排程與daemon)
9. [整合](#整合)
10. [Bus Factor 分析](#bus-factor-分析)
11. [完整工作流程範例](#完整工作流程範例)
12. [CLI 命令參考（續）](#cli-命令參考續)
13. [內部架構](#內部架構)
14. [環境變數](#環境變數)
15. [檔案位置](#檔案位置)
16. [除錯與故障排除](#除錯與故障排除)
17. [配置指南（續）](#配置指南續)
18. [預算管理（續）](#預算管理續)
19. [整合（續）](#整合續)
20. [附錄：常見問題](#附錄常見問題)

---

## 安裝

### Homebrew (macOS/Linux)

```bash
brew install marcus/tap/nightshift
```

### Go Install

```bash
go install github.com/marcus/nightshift/cmd/nightshift@latest
```

### 驗證安裝

```bash
nightshift --version
nightshift doctor  # 檢查環境
```

---

## 快速開始

### 1. 初始設定

```bash
nightshift setup
```

`setup` 命令會啟動互動式精靈，引導完成：
- 環境檢查
- 選擇專案
- 設定預算
- 選擇任務預設
- 設定排程
- 安裝 Daemon

### 2. 預覽即將執行的任務

```bash
nightshift preview              # 預覽預設 3 次執行
nightshift preview -n 5        # 預覽 5 次執行
nightshift preview --explain   # 顯示預算和解釋
nightshift preview --json      # JSON 格式輸出
```

### 3. 檢查預算狀態

```bash
nightshift budget                       # 當前狀態
nightshift budget --provider claude    # 特定供應商
nightshift budget calibrate            # 校準預算
nightshift budget history -n 10        # 歷史記錄
```

### 4. 執行任務

```bash
nightshift run                 # 互動模式（含確認提示）
nightshift run --yes          # 跳過確認
nightshift run --dry-run      # 只預覽不執行
nightshift run -p ./my-project -t lint-fix  # 指定專案和任務
```

### 5. 查看結果

```bash
nightshift status --today     # 今日狀態
nightshift stats              # 統計資訊
```

所有變更都會以 Git Branch 或 Pull Request 呈現，確保零風險。

---

## 架構概述

Nightshift 採用五層架構設計：

```
┌─────────────────────────────────────────────────────┐
│  Command Layer (命令層)                             │
│  run, setup, daemon, preview, budget, task, stats  │
└─────────────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│  Core Orchestration (核心協調層)                    │
│  Orchestrator, Task Selector, State Manager         │
└─────────────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│  Budget Layer (預算層)                              │
│  Manager, Calibrator, TrendAnalyzer                │
└─────────────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│  Provider Layer (供應商層)                          │
│  ClaudeProvider, CodexProvider                      │
└─────────────────────────────────────────────────────┘
                        │
┌─────────────────────────────────────────────────────┐
│  Data Persistence (資料持久層)                      │
│  Config, DB, Reports                               │
└─────────────────────────────────────────────────────┘
```

### 執行流程

1. **初始化** - 載入設定、建立狀態管理器、設置預算和任務選擇器
2. **任務規劃** - 檢查專案是否近期處理過，選擇有可用預算的 AI provider，根據優先權/過時程度/預算選擇任務
3. **執行確認** - 顯示預覽摘要，使用者確認後才執行
4. **任務執行** - 透過 orchestrator 的 plan-implement-review 迴圈處理每個任務（最多迭代 3 次）
5. **結果記錄** - 追蹤任務分配，記錄到 SQLite 資料庫

### 技術堆疊

| 類別 | 技術 |
|------|------|
| 語言 | Go |
| CLI 框架 | Cobra |
| AI 整合 | Claude Code, Codex CLI |
| 資料庫 | SQLite |
| 設定格式 | YAML |

---

## CLI 命令參考

### `nightshift setup`

啟動互動式設定精靈。

```bash
nightshift setup
```

### `nightshift run`

執行已配置的任务。

| 選項 | 說明 |
|------|------|
| `--dry-run`, `-d` | 顯示預覽並退出，不執行 |
| `--yes`, `-y` | 跳過確認提示 |
| `--project`, `-p` | 指定單一專案目錄 |
| `--task`, `-t` | 執行特定任務 |
| `--max-projects` | 限制處理的專案數（預設 1）|
| `--max-tasks` | 每個專案的任務數（預設 1）|
| `--random-task` | 從合格任務中隨機選擇 |
| `--ignore-budget` | 繞過預算檢查（謹慎使用）|

```bash
nightshift run --dry-run
nightshift run --yes
nightshift run --max-projects 3 --max-tasks 2
nightshift run -p ./my-project -t lint-fix
```

### `nightshift preview`

模擬即將執行的排程運行。

| 選項 | 說明 |
|------|------|
| `--runs`, `-n` | 預覽次數（預設 3）|
| `--project`, `-p` | 僅預覽特定專案 |
| `--task`, `-t` | 僅預覽特定任務類型 |
| `--long` | 顯示完整規劃提示 |
| `--write <目錄>` | 將提示寫入檔案 |
| `--explain` | 顯示預算和解釋 |
| `--json` | JSON 格式輸出 |

```bash
nightshift preview
nightshift preview -n 5
nightshift preview --explain
nightshift preview --write ./prompts
```

### `nightshift budget`

顯示當前預算狀態和使用量。

| 選項 | 說明 |
|------|------|
| `--provider`, `-p` | 特定供應商（claude, codex）|

```bash
nightshift budget
nightshift budget --provider claude
nightshift budget snapshot --local-only
nightshift budget calibrate
nightshift budget history -n 10
```

### `nightshift task`

管理和運行任務。

#### `nightshift task list`

列出所有可用任務。

| 選項 | 說明 |
|------|------|
| `--category` | 按類別過濾（pr, analysis, options, safe, map, emergency）|
| `--cost` | 按成本層級過濾（low, medium, high, veryhigh）|
| `--json` | JSON 格式輸出 |

```bash
nightshift task list
nightshift task list --category pr
nightshift task list --cost low --json
```

#### `nightshift task show <task-type>`

顯示任務的元數據和規劃提示。

| 選項 | 說明 |
|------|------|
| `--prompt-only` | 僅輸出原始提示文字 |
| `--json` | JSON 格式輸出 |
| `--project`, `-p` | 指定專案目錄 |

```bash
nightshift task show lint-fix
nightshift task show lint-fix --prompt-only
```

#### `nightshift task run <task-type>`

立即執行任務。

| 選項 | 說明 |
|------|------|
| `--provider` | 必需，指定供應商（claude, codex）|
| `--project`, `-p` | 指定專案目錄 |
| `--dry-run` | 顯示提示不執行 |
| `--timeout` | 執行超時（預設 30 分鐘）|

```bash
nightshift task run lint-fix --provider claude
nightshift task run lint-fix --provider codex --dry-run
```

### `nightshift daemon`

管理背景排程器。

```bash
nightshift daemon start             # 啟動 daemon
nightshift daemon stop              # 停止 daemon
nightshift daemon status            # 檢查狀態
nightshift daemon start --foreground  # 前台模式（除錯用）
```

### `nightshift install`

安裝系統服務。

```bash
nightshift install launchd   # macOS
nightshift install systemd   # Linux
nightshift install cron     # 通用
nightshift uninstall        # 解除安裝
```

### `nightshift busfactor`

分析程式碼所有權集中度。

```bash
nightshift busfactor                           # 分析當前儲存庫
nightshift busfactor /path/to/repo             # 分析特定儲存庫
nightshift busfactor --file "src/*.go"         # 按檔案過濾
nightshift busfactor --since 2024-01-01       # 日期範圍
nightshift busfactor --json                    # JSON 輸出
nightshift busfactor --save                    # 儲存到資料庫
```

---

## 任務系統

Nightshift 包含超過 60 個內建任務，組織成六個類別。

### 任務類別

| 類別 | 說明 | 預設冷卻時間 |
|------|------|-------------|
| **PR** | 產生可審查的 Pull Request | 7 天 |
| **Analysis** | 產生分析報告，不修改程式碼 | 3 天 |
| **Options** | 呈現選項和權衡決策 | 7 天 |
| **Safe** | 模擬執行，無持久副作用 | 14 天 |
| **Map** | 文件和視覺化 | 7 天 |
| **Emergency** | 事件回應所需 | 30 天 |

### 成本層級

| 層級 | Token 範圍 | 適用場景 |
|------|-----------|---------|
| **Low** | 10,000 - 50,000 | 快速修復、格式化、簡單文件 |
| **Medium** | 50,000 - 150,000 | 分析任務、中等重構 |
| **High** | 150,000 - 500,000 | 複雜重構、全面審計 |
| **Very High** | 500,000 - 1,000,000 | 遷移排練、 extensive 程式碼生成 |

### 風險等級

| 等級 | 說明 |
|------|------|
| **Low** | 唯讀分析或美容變更 |
| **Medium** | 有測試覆蓋的功能變更 |
| **High** | 重大系統變更或執行 |

### 內建任務清單

#### PR 類別 (Pull Request)

| 任務類型 | 名稱 | 說明 |
|---------|------|------|
| `lint-fix` | Linter Fixes | 自動修復 lint 錯誤和風格問題 |
| `bug-finder` | Bug Finder | 識別並修復潛在 bug |
| `auto-dry` | Auto-DRY | 識別並重構重複程式碼 |
| `skill-groom` | Skill Grooming | 審計和更新專案本地的 agent skills |
| `api-contract-verify` | API Contract Verify | 驗證 API 合約與實作匹配 |
| `backward-compat` | Backward Compatibility | 檢查並確保向後相容性 |
| `build-optimize` | Build Optimize | 優化建置配置以加快速度 |
| `docs-backfill` | Docs Backfill | 生成缺失的文件 |
| `commit-normalize` | Commit Normalize | 標準化 commit 訊息格式 |
| `changelog-synth` | Changelog Synthesis | 從 commits 生成 changelog |
| `release-notes` | Release Notes | 從變更草擬發布說明 |
| `adr-draft` | ADR Draft | 草擬架構決策記錄 (ADR) |
| `td-review` | TD Review | 執行 TD review session |

#### Analysis 類別 (分析)

| 任務類型 | 名稱 | 說明 |
|---------|------|------|
| `doc-drift` | Doc Drift | 偵測與程式碼不同步的文件 |
| `semantic-diff` | Semantic Diff | 解釋程式碼變更的語義 |
| `dead-code` | Dead Code | 找出可移除的未使用程式碼 |
| `dependency-risk` | Dependency Risk | 分析第三方依賴風險 |
| `test-gap` | Test Gap | 識別測試覆蓋不足的區域 |
| `test-flakiness` | Test Flakiness | 分析和報告 flaky tests |
| `logging-audit` | Logging Audit | 審計日誌實踐並提出改進 |
| `metrics-coverage` | Metrics Coverage | 分析可觀測性的指標覆蓋 |
| `perf-regression` | Performance Regression | 偵測潛在效能回歸 |
| `cost-attribution` | Cost Attribution | 估算和歸因雲端成本 |
| `security-footgun` | Security Footgun | 識別常見安全漏洞 |
| `pii-scanner` | PII Scanner | 掃描個人識別資訊 |
| `privacy-policy` | Privacy Policy | 檢查隱私政策合規性 |
| `schema-evolution` | Schema Evolution | 分析資料庫結構演變風險 |
| `event-taxonomy` | Event Taxonomy | 標準化和改進事件分類 |
| `roadmap-entropy` | Roadmap Entropy | 偵測和報告 roadmap 熵 |
| `bus-factor` | Bus Factor | 分析 bus factor 和知識分布 |
| `knowledge-silo` | Knowledge Silo | 識別程式碼庫中的知識孤島 |

#### Options 類別 (選項)

| 任務類型 | 名稱 | 說明 |
|---------|------|------|
| `task-groomer` | Task Groomer | 精煉和澄清任務定義 |
| `guide-improver` | Guide Improver | 建議改進指南和 skills |
| `idea-generator` | Idea Generator | 生成程式碼庫改進 ideas |
| `tech-debt-classify` | Tech Debt Classify | 分類和優先排序技術債務 |
| `why-annotator` | Why Annotator | 註解「為什麼」解釋 |
| `edge-case-enum` | Edge Case Enumeration | 列舉函數/模組的邊緣情況 |
| `error-msg-improve` | Error Message Improve | 改進錯誤訊息的清晰度 |
| `slo-suggester` | SLO Suggester | 建議服務級別目標 (SLO) |
| `ux-copy-sharpener` | UX Copy Sharpener | 改進使用者面向的文字 |
| `a11y-lint` | Accessibility Lint | 非核取方塊的可訪問性分析 |
| `service-advisor` | Service Advisor | 分析服務邊界決策 |
| `ownership-boundary` | Ownership Boundary | 建議程式碼所有權邊界 |
| `oncall-estimator` | Oncall Estimator | 估計程式碼變更的值班負載 |

#### Safe 類別 (安全執行)

| 任務類型 | 名稱 | 說明 |
|---------|------|------|
| `migration-rehearsal` | Migration Rehearsal | 排練資料庫或系統遷移 |
| `contract-fuzzer` | Contract Fuzzer | 模糊測試 API 或元件合約 |
| `golden-path` | Golden Path | 記錄黃金路徑測試場景 |
| `perf-profile` | Performance Profile | 執行效能分析 |
| `allocation-profile` | Allocation Profile | 分析記憶體配置和熱路徑 |

#### Map 類別 (映射)

| 任務類型 | 名稱 | 說明 |
|---------|------|------|
| `repo-topology` | Repo Topology | 繪製儲存庫拓撲 |
| `data-lifecycle` | Data Lifecycle | 映射資料生命週期 |

#### Emergency 類別 (緊急)

| 任務類型 | 名稱 | 說明 |
|---------|------|------|
| `runbook-gen` | Runbook Generation | 生成事件回應手冊 |
| `postmortem-gen` | Postmortem Generation | 生成事故後分析報告 |

---

## 配置指南

### 配置檔位置

| 類型 | 路徑 |
|------|------|
| 全域設定 | `~/.config/nightshift/config.yaml` |
| 專案設定 | `nightshift.yaml` 或 `.nightshift.yaml` |

### 完整配置結構

```yaml
# 排程設定
schedule:
  cron: "0 2 * * *"      # 或使用 interval
  interval: "8h"         # 每 8 小時執行一次
  window:
    start: "22:00"       # 視窗開始時間
    end: "06:00"         # 視窗結束時間
    timezone: "Asia/Taipei"

# 預算設定
budget:
  mode: daily             # daily 或 weekly
  max_percent: 75         # 每次執行最多使用 75%
  aggressive_end_of_week: false
  reserve_percent: 5      # 保留 5% 預算
  weekly_tokens: 700000   # 備用每週 token 數
  per_provider:
    claude: 500000
    codex: 1000000
  billing_mode: subscription  # subscription 或 api
  calibrate_enabled: true
  snapshot_interval: "30m"
  snapshot_retention_days: 90
  week_start_day: monday

# AI 供應商設定
providers:
  preference:
    - claude
    - codex
  claude:
    enabled: true
    data_path: ~/.claude
    dangerously_skip_permissions: false
  codex:
    enabled: true
    data_path: ~/.codex
    dangerously_bypass_approvals_and_sandbox: false

# 專案設定
projects:
  - path: ~/code/myproject
    priority: 10
    tasks:
      - lint-fix
      - docs-backfill
    config: .nightshift.yaml
  - path: ~/code/oss/*
    exclude:
      - ~/code/oss/vendor

# 任務設定
tasks:
  enabled:
    - lint-fix
    - dead-code
    - doc-drift
  priorities:
    lint-fix: 10
    dead-code: 5
  disabled:
    - td-review
  intervals:
    lint-fix: "24h"
  custom:
    - type: pr-review
      name: PR Review
      description: "Review open PRs and suggest improvements"
      category: pr
      cost_tier: medium
      risk_level: low
      interval: "48h"

# 整合設定
integrations:
  td:
    enabled: false
    teach_agent: false
  github_issues:
    enabled: false

# 日誌設定
logging:
  level: info
  format: text

# 回報設定
reporting:
  enabled: true
```

### 驗證配置

```bash
nightshift doctor  # 檢查配置是否正確
```

---

## 預算管理

### 預算模式

#### Daily 模式

將每週預算除以 7，提供可預測的每日預算：

```
dailyBudget = weeklyBudget / 7
availableToday = dailyBudget × (1 - usedPercent / 100)
allowance = availableToday × maxPercent / 100 - reserveAmount - predictedDaytime
```

#### Weekly 模式

動態分配剩餘預算到週內剩餘天數：

```
remainingWeekly = weeklyBudget × (1 - usedPercent / 100)
perDay = remainingWeekly / remainingDays
allowance = perDay × maxPercent / 100 - reserveAmount - predictedDaytime
```

可啟用 `aggressive_end_of_week` 在週最後兩天提高花費。

### 預算校準

Nightshift 可以透過關聯本地 token 計數和供應商使用百分比來推斷真實訂閱預算：

```
total_budget = local_tokens / (scraped_pct / 100)
```

校準流程：
1. 載入本週快照（scraped_pct 在 10-95% 範圍內）
2. 計算每個快照的推斷預算
3. 使用 MAD（中位數絕對偏差）過濾異常值
4. 取中位數並四捨五入到最近的 1K tokens
5. 根據樣本數和變異係數計算置信度

### 趨勢分析

`TrendAnalyzer` 預測日間使用量，預留 token 給預期的人類活動，防止 Nightshift 在白天工作開始前耗盡整個預算。

### 配置選項

| 選項 | 說明 | 預設值 |
|------|------|-------|
| `mode` | daily 或 weekly | daily |
| `max_percent` | 每次執行最大使用百分比 | 75 |
| `reserve_percent` | 保留預算百分比 | 5 |
| `weekly_tokens` | 備用每週 token 數 | 700000 |
| `aggressive_end_of_week` | 週末激进模式 | false |
| `billing_mode` | subscription 或 api | subscription |
| `calibrate_enabled` | 啟用校準 | true |
| `week_start_day` | 週開始日 | monday |

---

## 排程與Daemon

### 排程選項

#### Cron 表達式

```yaml
schedule:
  cron: "0 2 * * *"  # 每天凌晨 2 點
```

#### 間隔模式

```yaml
schedule:
  interval: "8h"  # 每 8 小時
```

#### 時間視窗

```yaml
schedule:
  cron: "0 2 * * *"
  window:
    start: "22:00"
    end: "06:00"
    timezone: "Asia/Taipei"
```

### Daemon 模式

```bash
nightshift daemon start
nightshift daemon stop
nightshift daemon status
nightshift daemon start --foreground  # 除錯用
```

### 系統服務整合

#### macOS (launchd)

```bash
nightshift install launchd
```

會在 `~/Library/LaunchAgents` 建立 `.plist` 檔案。

#### Linux (systemd)

```bash
nightshift install systemd
```

會在 `~/.config/systemd/user` 建立 service 和 timer 檔案。

#### Cron

```bash
nightshift install cron
```

### 重要說明

系統服務（launchd、systemd、cron）直接執行 `nightshift run`，而不是啟動 `nightshift daemon`。

---

## 整合

### Claude Code

- 資料路徑：`~/.claude`
- 使用 `stats-cache.json` 取得每日使用量
- 使用專案目錄下的 `*.jsonl` 取得每訊息使用量

### Codex

- 資料路徑：`~/.codex`
- 使用 session JSONL 檔案中的 `rate_limits` 資訊

### td (Task Management)

Nightshift 可以從 `td` 工具中獲取任務：
- 需標記 `nightshift` 標籤
- 可在配置中啟用

### GitHub Issues

Nightshift 可以從 GitHub Issues 獲取任務：
- 需標記 `nightshift` 標籤
- 在 `integrations.github_issues` 啟用

### CLAUDE.md / AGENTS.md

Nightshift 會讀取專案根目錄的這些檔案來提供上下文給 AI agent。

### GitHub

所有輸出都會以 Branch 和 Pull Request 呈現。

---

## Bus Factor 分析

### 概念

Bus Factor 是程式碼所有權集中度的度量，表示需要多少人離開專案才能顯著影響其持續開發能力。

### 風險等級

| 等級 | 說明 |
|------|------|
| **Critical** | 1-2 人擁有大部分知識 |
| **High** | 少於 5 位活躍貢獻者或有顯著集中 |
| **Medium** | 健康但可改進 |
| **Low** | 知識良好分布在 6+ 貢獻者 |

### 指標

| 指標 | 說明 |
|------|------|
| **Bus Factor** | 達到 50% commits 所需的最少貢獻者數 |
| **HHI** | Herfindahl-Hirschman 指數 (0=完全多元, 1=完全集中) |
| **Gini Coefficient** | 貢獻分布的吉尼係數 (0=完全平等, 1=完全不平等) |
| **Top N %** | 前 N % 貢獻者的累積所有權 |

### 使用方式

```bash
nightshift busfactor                           # 分析當前儲存庫
nightshift busfactor /path/to/repo            # 分析特定儲存庫
nightshift busfactor --file "src/*.go"        # 按檔案過濾
nightshift busfactor --since 2024-01-01       # 日期範圍
nightshift busfactor --json                   # JSON 輸出
nightshift busfactor --save                   # 儲存到資料庫
```

### 自動化

Bus Factor 分析可作為排程任務自動化：

```yaml
tasks:
  enabled:
    - bus-factor
```

---

## 完整工作流程範例

### 從零開始的完整流程

```bash
# 1. 初始設定（一次性）
nightshift setup

# 2. 檢查環境
nightshift doctor

# 3. 預覽即將執行的任務
nightshift preview
nightshift preview --explain

# 4. 檢查預算狀態
nightshift budget
nightshift budget --provider claude

# 5. 先預覽不執行
nightshift run --dry-run

# 6. 執行任務
nightshift run --yes

# 7. 立即查看結果
nightshift status --today

# 8. 查看詳細歷史
nightshift status --last 5

# 9. 查看統計資訊
nightshift stats
nightshift stats --period last-7d

# 10. 查看報告
nightshift report --period last-night
nightshift report --report tasks --format markdown
```

### 每日使用範例

```bash
# 早上：檢查昨晚結果
nightshift status --today
nightshift report --period yesterday

# 白天：查看統計
nightshift stats --period last-7d

# 晚上：預覽今晚任務
nightshift preview -n 3

# 執行單一任務
nightshift task run lint-fix --provider claude
```

### 排程自動化

```bash
# 安裝為系統服務
nightshift install systemd  # Linux
# 或
nightshift install launchd  # macOS

# 檢查 daemon 狀態
nightshift daemon status

# 停止/啟動 daemon
nightshift daemon stop
nightshift daemon start
```

---

## CLI 命令參考（續）

### `nightshift status`

查看執行歷史和狀態。

| 選項 | 說明 |
|------|------|
| `--today` | 顯示今日活動摘要 |
| `--last N` | 顯示最近 N 次執行 |

```bash
nightshift status              # 顯示最近 5 次執行
nightshift status --today     # 今日摘要
nightshift status --last 10  # 最近 10 次
```

### `nightshift report`

查看結構化報告。

| 選項 | 說明 |
|------|------|
| `--report`, `-r` | 報告類型：overview, tasks, projects, budget, raw |
| `--period`, `-p` | 時間範圍：last-night, last-run, last-24h, last-7d, today, yesterday, all |
| `--runs`, `-n` | 限制執行次數 |
| `--format` | 輸出格式：fancy, plain, markdown, json |
| `--since`, `--until` | 自訂日期範圍 |
| `--no-color` | 禁用顏色 |
| `--paths` | 包含報告和日誌路徑 |
| `--max-items` | 每次執行的最大亮點數 |

```bash
nightshift report                          # 昨晚摘要
nightshift report --period last-7d       # 過去 7 天
nightshift report --report tasks          # 任務報告
nightshift report --format markdown       # Markdown 格式
nightshift report --format json --paths  # JSON + 路徑
```

### `nightshift stats`

計算和顯示聚合統計。

| 選項 | 說明 |
|------|------|
| `--json` | JSON 格式輸出 |
| `--period`, `-p` | 時間範圍：all, last-7d, last-30d, last-night |

```bash
nightshift stats                    # 全時間統計
nightshift stats --json            # JSON 輸出
nightshift stats --period last-7d # 過去 7 天
nightshift stats --period last-night # 昨晚
```

---

## 內部架構

### 資料庫結構

Nightshift 使用 SQLite 資料庫：`~/.local/share/nightshift/nightshift.db`

#### 資料表

| 表格 | 用途 |
|------|------|
| `projects` | 儲存管理的專案資訊（路徑、上次執行時間、執行次數）|
| `task_history` | 記錄每個任務類型在每個專案的上次執行時間（用於冷卻追蹤）|
| `assigned_tasks` | 追蹤正在執行的任務，防止重複分配（有 `UNIQUE` 約束）|
| `run_history` | 儲存每次執行的記錄（開始/結束時間、專案、任務、token 使用量、狀態、錯誤）|
| `snapshots` | 用於預算推斷，儲存供應商、時間戳、本地 token 計數、使用百分比 |

### Orchestrator 與執行流程

Orchestrator 是核心元件，負責透過 plan-implement-review 迴圈管理 agent 執行。

#### 狀態機

任務執行透過以下狀態轉換：

```
StatusPending → StatusPlanning → StatusExecuting → StatusReviewing
                                    ↓                    ↓
                              StatusFailed       StatusCompleted
                                    ↓
                              StatusAbandoned (max iterations reached)
```

#### Plan-Implement-Review 迴圈

這是 Nightshift 的核心設計模式，包含三個階段：

1. **Plan** - Agent 接收提示創建詳細執行計劃
   - 輸出：JSON（包含 `steps`, `files`, `description`）

2. **Implement** - Agent 接收任務詳細資訊和計劃來執行
   - 如果是後續迭代，提示包含先前 review 的回饋
   - 輸出：JSON（包含 `files_modified`, `summary`）

3. **Review** - Agent 接收任務詳細資訊和實作摘要來審查
   - 輸出：JSON（包含 `passed`, `feedback`, `issues`）

迴圈最多執行 3 次迭代。如果 review 通過，任務完成。如果失敗且達到最大迭代次數，任務被放棄。

### Provider 層

#### ClaudeProvider

- **資料來源**：
  - 主要：`~/.claude/stats-cache.json`（每日活動和 token 計數）
  - 備用：`~/.claude/projects/**/*.jsonl`（每個訊息的 token 使用量）

- **Token 追蹤**：
  - InputTokens
  - OutputTokens
  - CacheReadInputTokens
  - CacheCreationInputTokens

#### CodexProvider

- **資料來源**：`~/.codex/sessions/YYYY/MM/DD/*.jsonl`

- **Token 追蹤**：
  - 基於 token 的計算（取第一個和最後一個 `total_token_usage` 事件的差值）
  - Rate limit 追蹤（primary 和 secondary 限制）

#### 驗證

Nightshift 不管理驗證，透過 CLI 工具：
- Claude Code：`claude /login`
- Codex：`codex --login`

---

## 環境變數

Nightshift 使用環境變數來覆寫配置設定。

### 前綴規則

所有環境變數前綴為 `NIGHTSHIFT_`，使用底線代替點。

### 常用環境變數

| 環境變數 | 對應配置 | 說明 |
|---------|---------|------|
| `NIGHTSHIFT_BUDGET_MODE` | `budget.mode` | daily 或 weekly |
| `NIGHTSHIFT_LOG_LEVEL` | `logging.level` | debug, info, warn, error |
| `NIGHTSHIFT_LOG_PATH` | `logging.path` | 日誌檔案路徑 |
| `NIGHTSHIFT_CONFIG_PATH` | - | 自訂配置檔路徑 |

```bash
# 範例
NIGHTSHIFT_BUDGET_MODE=weekly NIGHTSHIFT_LOG_LEVEL=debug nightshift run
```

---

## 檔案位置

| 類型 | 路徑 |
|------|------|
| **全域配置** | `~/.config/nightshift/config.yaml` |
| **專案配置** | `./nightshift.yaml` 或 `./.nightshift.yaml` |
| **資料庫** | `~/.local/share/nightshift/nightshift.db` |
| **日誌** | `~/.local/share/nightshift/logs/nightshift-YYYY-MM-DD.log` |
| **報告** | `~/.local/share/nightshift/reports/run-*.json` |
| **PID 檔案** | `~/.local/share/nightshift/nightshift.pid` |

---

## 除錯與故障排除

### Doctor 命令

`nightshift doctor` 診斷配置和環境問題。

```bash
nightshift doctor
```

檢查項目：
- 配置檔案是否可以載入
- 資料庫是否可以開啟
- 狀態管理器是否可初始化
- 排程設定是否有效
- 服務是否已安裝
- Daemon 是否執行中
- CLI 工具是否可用（claude, codex）
- 供應商資料路徑是否存在
- 預算和使用量
- tmux 是否可用（用於預算校準）

### 常見問題

| 問題 | 解決方案 |
|------|---------|
| 找不到 Codex sessions | 確認 `--repo` 旗標匹配 Codex session 的目前目錄 |
| 極端比例 | 檢查樣本數警告，提高 `--min-user-turns` 過濾小 sessions |
| 執行緩慢 | 使用 `--repo` 縮小範圍或歸檔舊 session 檔案 |
| 校準置信度低 | 多次執行 `nightshift budget snapshot`，確保 tmux 可用 |
| 找不到 tmux | 安裝 tmux 或設定 `billing_mode: api` |
| 週邊界錯誤 | 調整配置中的 `week_start_day` |

### 除錯選項

| 選項 | 說明 |
|------|------|
| `--dry-run` | 預覽不執行 |
| `--explain` | 顯示預算和解釋 |
| `--json` | JSON 輸出（適合腳本）|
| 日誌層級 | `NIGHTSHIFT_LOG_LEVEL=debug` |
| 日誌格式 | `logging.format: json` |

### 退出碼

- **0**：成功
- **非 0**：錯誤
- **-1**：超時

---

## 配置指南（續）

### 自定義任務

在 `tasks.custom` 區塊中定義自定義任務：

```yaml
tasks:
  custom:
    - type: my-code-review
      name: "My Code Review"
      description: |
        Review open PRs and check for security issues.
        Create issues for anything that needs follow-up.
      category: analysis    # pr | analysis | options | safe | map | emergency
      cost_tier: medium    # low | medium | high | very-high
      risk_level: low      # low | medium, high
      interval: "48h"      # 最小執行間隔
```

#### 欄位說明

| 欄位 | 必要 | 說明 |
|------|------|------|
| `type` | 是 | 任務的唯一識別符（kebab-case）|
| `name` | 是 | 顯示名稱 |
| `description` | 是 | 發送給 AI agent 的提示文字 |
| `category` | 否 | 任務類別，預設 `analysis` |
| `cost_tier` | 否 | Token 消耗估計，預設 `medium` |
| `risk_level` | 否 | 潛在副作用，預設 `low` |
| `interval` | 否 | 最小執行間隔，預設類別的預設值 |

### 專案配置

可以在專案根目錄建立 `.nightshift.yaml` 覆寫全域設定：

```yaml
# .nightshift.yaml
tasks:
  enabled:
    - lint
    - docs
    - security
    - test-gaps
  priorities:
    lint: 1
    security: 2
    docs: 3
  disabled: []
```

---

## 預算管理（續）

### 預算計算流程

```
1. Manager.CalculateAllowance()
   │
   ├── 2. 解析每週預算（配置的或校準的）
   │
   ├── 3. 取得 usedPercent（從供應商）
   │
   ├── 4. 根據 mode 計算：
   │   ├── daily: calculateDailyAllowance()
   │   └── weekly: calculateWeeklyAllowance()
   │
   ├── 5. 套用 reserve_percent
   │
   └── 6. 扣除 predictedDaytime（如果有）
```

### 供應商使用量追蹤

| 供應商 | 主要來源 | 備用來源 |
|--------|---------|---------|
| Claude | stats-cache.json | JSONL sessions |
| Codex | rate_limits | token 計算 |

---

## 整合（續）

### CLAUDE.md / AGENTS.md

Nightshift 會讀取專案根目錄的這些檔案：
- `CLAUDE.md`：專案上下文和指引
- `AGENTS.md`：AI agent 的強制指示

任務提到這些檔案會獲得優先權加成。

### GitHub

所有輸出都會以 Branch 和 Pull Request 呈現，確保零風險操作。

---

## 附錄：常見問題

### Q: Nightshift 安全嗎？

A: 是的。Nightshift 永遠不會直接寫入主分支，所有變更都會以 Branch 或 Pull Request 呈現，確保您可以審查後再合併。

### Q: 如何控制花費？

A: 透過 `budget` 配置區塊，您可以設定：
- 每日/每週模式
- 每次執行最大使用百分比
- 保留預算百分比
- 預算校準

### Q: 可以自定義任務嗎？

A: 可以，在 `tasks.custom` 區塊中定義自定義任務。

### Q: 支援哪些 AI 供應商？

A: 目前支援 Claude Code 和 Codex CLI。

### Q: 如何排程任務？

A: 可以使用：
- `nightshift daemon` 背景服務
- `systemd` (Linux)
- `launchd` (macOS)
- `cron` (通用)

---

*文檔生成時間：2026-02-13*
*來源：DeepWiki Analysis - github.com/marcus/nightshift*

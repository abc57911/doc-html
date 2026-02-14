export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Type 類型必須為以下之一
    'type-enum': [
      2,
      'always',
      [
        'feat',     // 新功能
        'fix',      // Bug 修復
        'docs',     // 文件變更
        'style',    // 格式調整（不影響程式碼）
        'refactor', // 重構
        'perf',     // 效能優化
        'test',     // 測試
        'chore',    // 構建或輔助工具變更
        'revert',   // 回滾
        'ci',       // CI 配置變更
      ],
    ],
    // Type 開頭必須小寫
    'type-case': [2, 'always', 'lower-case'],
    // Subject 不能為空
    'subject-empty': [2, 'never'],
    // Subject 結尾不能有句號
    'subject-full-stop': [2, 'never', '.'],
    // Subject 最大長度
    'subject-max-length': [2, 'always', 72],
    // Header 最大長度
    'header-max-length': [2, 'always', 100],
  },
};

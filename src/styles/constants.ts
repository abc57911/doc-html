// 共用樣式常數

/** Section 描述文字樣式 */
export const SECTION_DESCRIPTION_STYLE = {
  color: 'var(--text-secondary)',
  marginBottom: '24px'
} as const;

/** 子標題 h3 樣式 */
export const SUBSECTION_TITLE_STYLE = {
  marginTop: '24px',
  marginBottom: '16px',
  color: 'var(--text-secondary)'
} as const;

/** 卡片網格動畫延遲基礎值 */
export const CARD_ANIMATION_DELAY_BASE = 0.05;

/** 卡片動畫最大延遲數量 */
export const CARD_ANIMATION_MAX_ITEMS = 12;

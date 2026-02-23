// 共用類別工具函數

/**
 * 根據來源取得對應的 CSS
 */
export function getSourceClass(source?: string): string {
  switch (source) {
    case 'Anthropic':
      return 'anthropic';
    case 'Superpowers':
      return 'superpowers';
    case 'Plugins':
      return 'plugins';
    case 'Community':
      return 'community';
    case 'Claude Code':
      return 'builtin';
    default:
      return '';
  }
}

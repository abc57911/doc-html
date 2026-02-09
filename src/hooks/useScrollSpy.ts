// 捲動監控 Hook (Scroll Spy)
import { useState, useEffect, useCallback } from 'react';

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    // 計算整體捲動進度
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollHeight) * 100;
    setScrollProgress(progress);

    // 尋找當前可見的 section
    for (const id of sectionIds.reverse()) {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(id);
          break;
        }
      }
    }
  }, [sectionIds]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // 初始檢查

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 計算頂部工具列高度，預留空間讓 section-header 可見
      const topBarHeight = 80; // 頂部工具列高度 + 間距
      const y = element.getBoundingClientRect().top + window.scrollY - topBarHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return { activeSection, scrollProgress, scrollToSection };
}

// Section Header 元件
interface SectionHeaderProps {
  title: string;
  count?: number | string;
  description?: string;
  id?: string;
}

export function SectionHeader({ title, count, description, id }: SectionHeaderProps) {
  return (
    <>
      <div className="section-header" id={id}>
        <h2>{title}</h2>
        {count !== undefined && <span className="count">{count} 個</span>}
      </div>
      {description && (
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
          {description}
        </p>
      )}
    </>
  );
}

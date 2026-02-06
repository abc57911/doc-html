// 詳細區塊元件 (可展開/收合)
import { useState } from 'react';
import { ToolSection } from '../data/types';

interface DetailSectionProps {
  section: ToolSection;
}

export function DetailSection({ section }: DetailSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`detail-section ${isExpanded ? 'expanded' : ''}`}
      data-type={section.type}
    >
      <div className="detail-header" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="detail-title">
          <h3>{section.title}</h3>
          {section.type === 'mcp' && (
            <span className="card-type tool" style={{ marginLeft: '12px' }}>
              MCP
            </span>
          )}
        </div>
        <p className="header-desc">{section.description}</p>
        <span className="expand-icon">▼</span>
      </div>
      <div className="detail-body">
        {section.items && (
          <div className="detail-list">
            {section.items.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong> - {item.description}
              </li>
            ))}
          </div>
        )}
        {section.subgroups && (
          <div className="detail-grid">
            {section.subgroups.map((subgroup) => (
              <div key={subgroup.title} className="detail-card">
                <h4>{subgroup.title}</h4>
                <div className="detail-list">
                  {subgroup.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

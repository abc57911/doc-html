// 側邊導航欄元件
interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const navItems = [
    {
      title: 'Agents',
      filter: 'agent',
      badge: '18',
      items: [
        { id: 'development-agents', label: '開發類 Agents' },
        { id: 'specialist-agents', label: '專家類 Agents' },
        { id: 'analysis-agents', label: '分析類 Agents' }
      ]
    },
    {
      title: 'Skills',
      filter: 'skill',
      badge: '37',
      items: [
        { id: 'workflow-skills', label: '工作流程 Skills' },
        { id: 'utility-skills', label: '工具類 Skills' },
        { id: 'anthropic-agent-skills', label: 'Anthropic Agent Skills' },
        { id: 'claude-plugins', label: 'Claude Plugins' }
      ]
    },
    {
      title: 'Tools',
      filter: 'tool',
      badge: '3',
      items: [
        { id: 'mcp-tools', label: 'MCP Tools' }
      ]
    },
    {
      title: '範例',
      filter: 'all',
      items: [
        { id: 'workflow-examples', label: '工作流程範例' },
        { id: 'agents-table', label: 'Agents 對照表' },
        { id: 'skills-table', label: 'Skills 對照表' }
      ]
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>Claude Code</h1>
        <p>完整使用指南</p>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((section) => (
          <div key={section.filter} className="nav-section" data-filter={section.filter}>
            <div className="nav-section-title">
              {section.title} {section.badge && <span className="badge">{section.badge}</span>}
            </div>
            {section.items.map((item) => (
              <a
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                data-target={item.id}
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </nav>
    </aside>
  );
}

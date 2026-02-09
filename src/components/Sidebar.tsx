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
      badge: '8',
      items: [
        { id: 'claude-agents', label: 'Claude Code Agents' }
      ]
    },
    {
      title: 'Skills',
      filter: 'skill',
      badge: '100+',
      items: [
        { id: 'claude-code-skills', label: 'Claude Code Skills' },
        { id: 'agent-architecture-skills', label: 'Agent 架構系列' },
        { id: 'document-skills', label: '文件處理' },
        { id: 'notion-skills', label: 'Notion' },
        { id: 'ralph-loop-skills', label: 'Ralph Loop' },
        { id: 'commit-commands-skills', label: 'Commit Commands' },
        { id: 'superpowers-skills', label: 'Superpowers' },
        { id: 'other-skills', label: '其他' }
      ]
    },
    {
      title: 'Tools',
      filter: 'tool',
      badge: '2',
      items: [
        { id: 'mcp-tools', label: 'MCP Tools' }
      ]
    },
    {
      title: '參考',
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

// 首頁元件
import { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Card } from '../components/Card';
import { DetailSection } from '../components/DetailSection';
import { WorkflowDiagram } from '../components/WorkflowDiagram';
import { DataTable } from '../components/DataTable';
import { BackToTop } from '../components/BackToTop';
import { ProgressBar } from '../components/ProgressBar';
import { useScrollSpy } from '../hooks/useScrollSpy';
import {
  allAgents,
  allSkills,
  mcpTools,
  workflows,
  agentsTable,
  skillsTable,
  developmentAgents,
  specialistAgents,
  analysisAgents,
  workflowSkills,
  utilitySkills,
  anthropicSkills,
  pluginSkills
} from '../data';

export function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  // 搜尋過濾
  const searchFilter = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const lowerQuery = searchQuery.toLowerCase();
    return (item: { title: string; description: string; tags?: string[] }) =>
      item.title.toLowerCase().includes(lowerQuery) ||
      item.description.toLowerCase().includes(lowerQuery) ||
      item.tags?.some(tag => tag.toLowerCase().includes(lowerQuery));
  }, [searchQuery]);

  // 過濾後的資料
  const filteredAgents = useMemo(() => {
    if (!searchFilter) return allAgents;
    return allAgents.filter(searchFilter);
  }, [allAgents, searchFilter]);

  const filteredSkills = useMemo(() => {
    if (!searchFilter) return allSkills;
    return allSkills.filter(searchFilter);
  }, [allSkills, searchFilter]);

  // 側邊欄導航 section IDs
  const sectionIds = useMemo(() => [
    'development-agents',
    'specialist-agents',
    'analysis-agents',
    'workflow-skills',
    'utility-skills',
    'anthropic-agent-skills',
    'claude-plugins',
    'mcp-tools',
    'workflow-examples',
    'agents-table',
    'skills-table'
  ], []);

  const { activeSection, scrollProgress, scrollToSection } = useScrollSpy(sectionIds);

  // 根據篩選狀態決定顯示內容
  const showSearchResults = searchQuery.trim() !== '';
  const showFilteredResults = activeFilter !== 'all';

  // 統計
  const counts = {
    all: allAgents.length + allSkills.length,
    agent: allAgents.length,
    skill: allSkills.length
  };

  return (
    <>
      <ProgressBar progress={scrollProgress} />
      <BackToTop />

      <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="main-content">
        <Header
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />

        <div className="content">
          {/* 搜尋結果 */}
          {showSearchResults && (
            <section className="section">
              <div className="section-header">
                <h2>搜尋結果</h2>
                <span className="count">
                  {filteredAgents.length + filteredSkills.length} 個
                </span>
              </div>
              {filteredAgents.length > 0 && (
                <>
                  <h3 style={{ marginBottom: '16px', color: 'var(--text-secondary)' }}>
                    Agents ({filteredAgents.length})
                  </h3>
                  <div className="card-grid">
                    {filteredAgents.map((agent, index) => (
                      <Card key={agent.id} data={agent} index={index} />
                    ))}
                  </div>
                </>
              )}
              {filteredSkills.length > 0 && (
                <>
                  <h3 style={{ marginTop: '24px', marginBottom: '16px', color: 'var(--text-secondary)' }}>
                    Skills ({filteredSkills.length})
                  </h3>
                  <div className="card-grid">
                    {filteredSkills.map((skill, index) => (
                      <Card key={skill.id} data={skill} index={index} />
                    ))}
                  </div>
                </>
              )}
              {filteredAgents.length === 0 && filteredSkills.length === 0 && (
                <div className="empty-state">
                  <div className="icon">🔍</div>
                  <p>找不到符合「{searchQuery}」的結果</p>
                  <p className="hint">請嘗試其他關鍵字</p>
                </div>
              )}
            </section>
          )}

          {/* 分類篩選結果 */}
          {showFilteredResults && !showSearchResults && (
            <section className="section">
              <div className="section-header">
                <h2>
                  {activeFilter === 'agent' ? 'Agents' :
                   activeFilter === 'skill' ? 'Skills' : 'Tools'}
                </h2>
                <span className="count">
                  {activeFilter === 'agent' ? allAgents.length :
                   activeFilter === 'skill' ? allSkills.length : 0} 個
                </span>
              </div>
              <div className="card-grid">
                {activeFilter === 'agent' && allAgents.map((agent, index) => (
                  <Card key={agent.id} data={agent} index={index} />
                ))}
                {activeFilter === 'skill' && allSkills.map((skill, index) => (
                  <Card key={skill.id} data={skill} index={index} />
                ))}
              </div>
            </section>
          )}

          {/* 完整內容顯示 */}
          {!showSearchResults && !showFilteredResults && (
            <>
              {/* 開發類 Agents */}
              <section id="development-agents" className="section">
                <div className="section-header">
                  <h2>開發類 Agents</h2>
                  <span className="count">8 個</span>
                </div>
                <div className="card-grid">
                  {developmentAgents.map((agent, index) => (
                    <Card key={agent.id} data={agent} index={index} />
                  ))}
                </div>
              </section>

              {/* 專家類 Agents */}
              <section id="specialist-agents" className="section">
                <div className="section-header">
                  <h2>專家類 Agents</h2>
                  <span className="count">6 個</span>
                </div>
                <div className="card-grid">
                  {specialistAgents.map((agent, index) => (
                    <Card key={agent.id} data={agent} index={index} />
                  ))}
                </div>
              </section>

              {/* 分析類 Agents */}
              <section id="analysis-agents" className="section">
                <div className="section-header">
                  <h2>分析類 Agents</h2>
                  <span className="count">4 個</span>
                </div>
                <div className="card-grid">
                  {analysisAgents.map((agent, index) => (
                    <Card key={agent.id} data={agent} index={index} />
                  ))}
                </div>
              </section>

              {/* 工作流程 Skills */}
              <section id="workflow-skills" className="section">
                <div className="section-header">
                  <h2>工作流程 Skills</h2>
                  <span className="count">6 個</span>
                </div>
                <div className="card-grid">
                  {workflowSkills.map((skill, index) => (
                    <Card key={skill.id} data={skill} index={index} />
                  ))}
                </div>
              </section>

              {/* 工具類 Skills */}
              <section id="utility-skills" className="section">
                <div className="section-header">
                  <h2>工具類 Skills</h2>
                  <span className="count">6 個</span>
                </div>
                <div className="card-grid">
                  {utilitySkills.map((skill, index) => (
                    <Card key={skill.id} data={skill} index={index} />
                  ))}
                </div>
              </section>

              {/* Anthropic Agent Skills */}
              <section id="anthropic-agent-skills" className="section">
                <div className="section-header">
                  <h2>Anthropic Agent Skills</h2>
                  <span className="count">16 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  來自 anthropic-agent-skills 插件市場的專業技能，提供文件處理、視覺設計、生成藝術等功能。
                </p>
                <div className="card-grid">
                  {anthropicSkills.map((skill, index) => (
                    <Card key={skill.id} data={skill} index={index} />
                  ))}
                </div>
              </section>

              {/* Claude Plugins */}
              <section id="claude-plugins" className="section">
                <div className="section-header">
                  <h2>Claude Plugins Official</h2>
                  <span className="count">9 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  來自 claude-plugins-official 插件市場的開發工具，增強代碼審查、版本控制、功能開發等能力。
                </p>
                <div className="card-grid">
                  {pluginSkills.map((skill, index) => (
                    <Card key={skill.id} data={skill} index={index} />
                  ))}
                </div>
              </section>

              {/* MCP Tools */}
              <section id="mcp-tools" className="section">
                <div className="section-header">
                  <h2>MCP Tools</h2>
                  <span className="count">3 個服務</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  MCP (Model Context Protocol) Tools 是透過 MCP 伺服器提供的額外工具，擴展 Claude Code 的能力。
                </p>
                {mcpTools.map((tool) => (
                  <DetailSection key={tool.id} section={tool} />
                ))}
              </section>

              {/* 工作流程範例 */}
              <section id="workflow-examples" className="section" data-filter="all">
                <div className="section-header">
                  <h2>工作流程範例</h2>
                </div>
                {workflows.map((workflow, index) => (
                  <WorkflowDiagram key={index} workflow={workflow} />
                ))}
              </section>

              {/* Agents 對照表 */}
              <DataTable title="Agents 對照表" data={agentsTable} />

              {/* Skills 對照表 */}
              <DataTable title="Skills 對照表" data={skillsTable} />
            </>
          )}

          {/* 頁腳 */}
          <footer className="footer">
            <p>Claude Code 完整使用指南 | 建立時間: 2026-01-14</p>
          </footer>
        </div>
      </main>
    </>
  );
}

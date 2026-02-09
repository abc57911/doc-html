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
import type { CardData } from '../data/types';
import {
  allAgents,
  allSkills,
  mcpTools,
  workflows,
  agentsTable,
  skillsTable,
  claudeCodeSkills,
  agentArchitectureSkills,
  cognitiveArchitectureSkills,
  contextEngineeringSkills,
  documentSkills,
  notionSkills,
  ralphLoopSkills,
  commitCommandsSkills,
  superpowersSkills,
  claudeMdManagementSkills,
  elementsOfStyleSkills,
  frontendDesignSkills
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
    'claude-agents',
    'claude-code-skills',
    'agent-architecture-skills',
    'document-skills',
    'notion-skills',
    'ralph-loop-skills',
    'commit-commands-skills',
    'superpowers-skills',
    'other-skills',
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
  const counts = useMemo(() => ({
    all: allAgents.length + allSkills.length,
    agent: allAgents.length,
    skill: allSkills.length
  }), [allAgents.length, allSkills.length]);

  // 渲染 Card 元件的輔助函數
  const renderCards = (items: CardData[], sectionId: string) => (
    <div className="card-grid">
      {items.map((item, index) => (
        <Card key={`${sectionId}-${item.id}`} data={item} index={index} />
      ))}
    </div>
  );

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
              {/* Claude Agents */}
              <section id="claude-agents" className="section">
                <div className="section-header">
                  <h2>Claude Code Agents</h2>
                  <span className="count">{allAgents.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Claude Code 內建的專業 Agents，提供程式碼審查、架構設計、除錯等能力。
                </p>
                {renderCards(allAgents, 'agents')}
              </section>

              {/* Claude Code Skills */}
              <section id="claude-code-skills" className="section">
                <div className="section-header">
                  <h2>Claude Code Skills</h2>
                  <span className="count">{claudeCodeSkills.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Claude Code 提供的核心技能，涵蓋開發工作流程、文件處理、測試等。
                </p>
                {renderCards(claudeCodeSkills, 'claude-code')}
              </section>

              {/* Agent 架構系列 Skills */}
              <section id="agent-architecture-skills" className="section">
                <div className="section-header">
                  <h2>Agent 架構系列 Skills</h2>
                  <span className="count">{agentArchitectureSkills.length + cognitiveArchitectureSkills.length + contextEngineeringSkills.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Agent 架構、開發、評估、認知架構和上下文工程系列技能。
                </p>
                {renderCards(agentArchitectureSkills, 'agent-arch')}
                {renderCards(cognitiveArchitectureSkills, 'cognitive')}
                {renderCards(contextEngineeringSkills, 'context-eng')}
              </section>

              {/* 文件處理 Skills */}
              <section id="document-skills" className="section">
                <div className="section-header">
                  <h2>文件處理 Skills</h2>
                  <span className="count">{documentSkills.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  PDF、Word、Excel、PowerPoint 等文件處理技能。
                </p>
                {renderCards(documentSkills, 'document')}
              </section>

              {/* Notion Skills */}
              <section id="notion-skills" className="section">
                <div className="section-header">
                  <h2>Notion Skills</h2>
                  <span className="count">{notionSkills.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Notion 整合技能，用於搜尋、建立和管理 Notion 頁面與資料庫。
                </p>
                {renderCards(notionSkills, 'notion')}
              </section>

              {/* Ralph Loop Skills */}
              <section id="ralph-loop-skills" className="section">
                <div className="section-header">
                  <h2>Ralph Loop Skills</h2>
                  <span className="count">{ralphLoopSkills.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Ralph Loop 對話模式控制技能。
                </p>
                {renderCards(ralphLoopSkills, 'ralph')}
              </section>

              {/* Commit Commands Skills */}
              <section id="commit-commands-skills" className="section">
                <div className="section-header">
                  <h2>Commit Commands Skills</h2>
                  <span className="count">{commitCommandsSkills.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Git 提交命令技能。
                </p>
                {renderCards(commitCommandsSkills, 'commit')}
              </section>

              {/* Superpowers Skills */}
              <section id="superpowers-skills" className="section">
                <div className="section-header">
                  <h2>Superpowers Skills</h2>
                  <span className="count">{superpowersSkills.length} 個</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  Superpowers 開發超能力技能系列。
                </p>
                {renderCards(superpowersSkills, 'superpowers')}
              </section>

              {/* Other Skills */}
              <section id="other-skills" className="section">
                <div className="section-header">
                  <h2>其他 Skills</h2>
                  <span className="count">{claudeMdManagementSkills.length + elementsOfStyleSkills.length + frontendDesignSkills.length} 個</span>
                </div>
                {claudeMdManagementSkills.length > 0 && (
                  <>
                    <h3 style={{ marginTop: '24px', marginBottom: '16px', color: 'var(--text-secondary)' }}>CLAUDE.md 管理</h3>
                    {renderCards(claudeMdManagementSkills, 'claude-md')}
                  </>
                )}
                {elementsOfStyleSkills.length > 0 && (
                  <>
                    <h3 style={{ marginTop: '24px', marginBottom: '16px', color: 'var(--text-secondary)' }}>寫作風格</h3>
                    {renderCards(elementsOfStyleSkills, 'style')}
                  </>
                )}
                {frontendDesignSkills.length > 0 && (
                  <>
                    <h3 style={{ marginTop: '24px', marginBottom: '16px', color: 'var(--text-secondary)' }}>前端設計</h3>
                    {renderCards(frontendDesignSkills, 'frontend')}
                  </>
                )}
              </section>

              {/* MCP Tools */}
              <section id="mcp-tools" className="section">
                <div className="section-header">
                  <h2>MCP Tools</h2>
                  <span className="count">{mcpTools.length} 個服務</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                  MCP (Model Context Protocol) Tools 是透過 MCP 伺服器提供的額外工具。
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
            <p>Claude Code 完整使用指南 | 建立時間: 2026-02-09</p>
          </footer>
        </div>
      </main>
    </>
  );
}

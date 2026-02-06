// 工作流程圖元件
import React from 'react';
import { WorkflowData } from '../data/types';

interface WorkflowDiagramProps {
  workflow: WorkflowData;
}

export function WorkflowDiagram({ workflow }: WorkflowDiagramProps) {
  return (
    <div className="workflow-diagram">
      <h3 style={{ marginBottom: '20px', color: 'var(--text-primary)' }}>
        {workflow.title}
      </h3>
      <div className="workflow-steps">
        {workflow.steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="workflow-step">
              <div className="icon">{step.icon}</div>
              <div className="label">{step.label}</div>
            </div>
            {index < workflow.steps.length - 1 && (
              <div className="workflow-arrow">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

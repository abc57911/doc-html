// 類型定義
export type Category = 'all' | 'agent' | 'skill' | 'tool';

export interface CardData {
  id: string;
  title: string;
  description: string;
  category: Category;
  source?: string;
  tags?: string[];
}

export interface DetailItem {
  id: string;
  title: string;
  description: string;
  syntax?: string;
  example?: string;
}

export interface ToolSection {
  id: string;
  title: string;
  description: string;
  type: 'tool' | 'mcp';
  items?: DetailItem[];
  subgroups?: {
    title: string;
    items: string[];
  }[];
}

export interface WorkflowStep {
  icon: string;
  label: string;
}

export interface WorkflowData {
  title: string;
  steps: WorkflowStep[];
}

export interface TableRow {
  name: string;
  description: string;
  relatedSkills: string;
}

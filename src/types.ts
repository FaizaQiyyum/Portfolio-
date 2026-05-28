/**
 * Shared Type Definitions for Faiza Qiyyum's Portfolio
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  techStack: string[];
  gpaIndicator?: boolean;
  hackathonWinner?: boolean;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companySub?: string;
  location: string;
  period: string;
  type: string;
  points: string[];
  techStack?: string[];
}

export interface SkillItem {
  name: string;
  level?: 'Expert' | 'Advanced' | 'Intermediary';
  description?: string;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

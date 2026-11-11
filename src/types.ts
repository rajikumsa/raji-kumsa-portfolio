export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveDemoUrl?: string;
  demoLabel?: string;
  imageUrl?: string;
  features: string[];
  architecture?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skillsApplied: string[];
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft';
  subCategory: string;
  iconName: string;
  level: number; // 1-5 scale for proficiency visualization
  description: string;
}

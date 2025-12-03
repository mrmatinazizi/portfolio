export enum SkillCategory {
  AI = 'AI_BUSINESS',
  WEB = 'WEB_DESIGN',
  GRAPHIC = 'GRAPHIC_DESIGN',
  MARKETING = 'DIGITAL_MARKETING',
  ALL = 'ALL'
}

export interface Project {
  id: number;
  title: string;
  category: SkillCategory;
  imageUrl: string;
  description: string;
  // Extended fields for Modal/Popup
  longDescription?: string;
  client?: string;
  year?: string;
  tools?: string[];
}

export interface SkillDetails {
  id: string;
  title: string;
  description: string;
  iconName: string; // We will map this to Lucide icons
  tags: string[];
}
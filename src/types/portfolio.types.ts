export type Category = "cybersecurity" | "bedrijven" | "persoonlijk";

export interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ClientInfo {
  name: string;
  description: string;
  industry: string;
  needs: string[];
}

export interface ProjectRole {
  title: string;
  description: string;
  icon: string;
}

export interface DesignChoice {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TechnicalHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ClientResult {
  title: string;
  description: string;
  icon: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectData {
  problem?: string;
  solution?: string;
  features?: ProjectFeature[];
  techStack?: {
    frontend?: string[];
    backend?: string[];
    architecture?: string[];
  };
  architecture?: string;
  challenges?: string[];
  learnings?: string[];
  // New extended fields for detailed case studies
  clientInfo?: ClientInfo;
  assignment?: {
    why: string;
    wishes: string[];
    problems: string[];
  };
  myRole?: ProjectRole[];
  designChoices?: DesignChoice[];
  screenshots?: Screenshot[];
  process?: ProcessStep[];
  technicalHighlights?: TechnicalHighlight[];
  clientResults?: ClientResult[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  thumbnail: string;
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
    case_study?: string;
  };
  featured: boolean;
  details?: string;
  tier?: 'I' | 'II' | 'III';
  subcategory?: string;
  backgroundVideo?: string;
  darkOverlay?: boolean;
  comingSoon?: boolean;
  projectData?: ProjectData;
}

export interface CategoryConfig {
  id: Category;
  label: string;
  icon: string;
  color: string;
  gradient: string[];
  projects: Project[];
}

export interface ShieldConfig {
  pieces: number;
  lockPositions: Position[];
  splitAnimation: AnimationConfig;
  reassembleAnimation: AnimationConfig;
}

export interface Position {
  x: number;
  y: number;
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  stagger?: number;
}

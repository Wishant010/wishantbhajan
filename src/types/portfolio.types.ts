export type Category = "cybersecurity" | "school" | "bedrijf" | "persoonlijk";

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

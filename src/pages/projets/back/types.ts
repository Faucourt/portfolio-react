export interface ProjectSectionTexts {
  contexte: string;
  objectif: string;
  fonctionnement: string;
}

export interface ProjectVersion {
  version: string;
  description: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  year: string;
  state: string;
  image: string;
  alt: string;
  sections: ProjectSectionTexts;
  versions?: ProjectVersion[];
  tests?: string;
  tech: TechItem[];
  github: string;
  download?: string;
}

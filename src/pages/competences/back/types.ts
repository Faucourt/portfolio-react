export interface Skill {
  name: string;
  level: number;
}

export interface Category {
  title: string;
  skills: Skill[];
}

export interface CompetenceGroup {
  title: string;
  categories: Category[];
}

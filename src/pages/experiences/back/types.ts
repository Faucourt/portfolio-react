export type ExperienceContext =
  | "stage"
  | "alternance"
  | "associatif"
  | "freelance"
  | string;

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  context: ExperienceContext;
  description: string;
  missions: string[];
  tech: string[];
}

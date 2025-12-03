export interface FeaturedProject {
  image: string;
  title: string;
  description: string;
  github: string;
}

export interface HomeContent {
  heroIntro: string;
  aboutText: string;
  featuredProject: FeaturedProject;
}

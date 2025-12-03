export interface Trip {
  id: string;
  city: string;
  country: string;
  coords: [number, number];
  desc: string;
  photos: string[];
}

export interface Sport {
  id: string;
  title: string;
  desc: string;
  photos: string[];
}

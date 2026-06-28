import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Testimonial = {
  name: string;
  role: string;
  review: string;
  stars: number;
  link?: string;
};

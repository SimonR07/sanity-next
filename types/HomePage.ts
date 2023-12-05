import { Project } from "./Project";

export type HomePage = {
  _id: string;
  _createdAt: Date;
  mainTitle: string;
  description: string;
  slug: string;
  projectsSectionTitle: string;
  projects: Project[];
}
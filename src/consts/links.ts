import { about, blog, gallary, home, projects } from "./routes";
import { LinkData } from "./types";

export const HEADER_LINKS: LinkData[] = [
  {
    title: "Home",
    url: home,
  },
  {
    title: "Gallary",
    url: gallary,
  },
  {
    title: "Projects",
    url: projects,
  },
  {
    title: "Blog",
    url: blog,
  },
  {
    title: "About Me",
    url: about,
  },
];

export const FOOTER_LINKS: LinkData[] = [...HEADER_LINKS];

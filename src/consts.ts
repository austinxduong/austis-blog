import type { Site, Page, Links, Socials, } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Austin's Engineering Blog",
  DESCRIPTION: "Articles and breakdowns on software engineering, data structures, and computer science algorithms.",
  AUTHOR: "Austin",
};

export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Software development experience and engineering history.",
};

export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Deep dives into algorithms, data structures, and software architecture.",
};

export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Full-stack web applications, spatial tools, and open-source software.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "austinxduong@gmail.com",
    HREF: "mailto:austinxduong@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "austinxduong",
    HREF: "https://github.com/austinxduong"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Austin X. Duong",
    HREF: "https://www.linkedin.com/in/austinxduong/",
  },
]


export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  slug: string; // Add this line
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["Next.js", "React", "Stripe"],
    githubUrl: "https://github.com/taltrums/ecommerce-app",
    liveUrl: "https://taltrums-ecommerce.fly.dev/",
    slug: "e-commerce-platform", // Add this line
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["React", "Shadcn UI"],
    githubUrl: "https://github.com/taltrums/task_management",
    slug: "task-management-app", // Add this line
  },
  // Add more projects as needed
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

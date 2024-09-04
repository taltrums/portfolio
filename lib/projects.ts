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
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/e-commerce-platform",
    liveUrl: "https://e-commerce-platform-demo.vercel.app",
    slug: "e-commerce-platform", // Add this line
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A responsive task management application with real-time updates.",
    image: "https://via.placeholder.com/300x200",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/task-management-app",
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

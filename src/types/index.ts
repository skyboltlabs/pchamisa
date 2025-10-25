export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: 'AI/ML' | 'Fintech' | 'SaaS' | 'Research';
  impact: string;
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  logo: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  pdfUrl?: string;
  citations: number;
}

export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  message: string;
}
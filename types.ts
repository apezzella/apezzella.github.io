import type { ReactNode } from 'react';

export interface Skill {
  id: string;
  title: string;
  brief: string;
  description: string;
}

export interface Client {
  id: string;
  name: string;
  logoUrl: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  imageUrl: string;
  content: ReactNode;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  images: string[];
  content: ReactNode;
}
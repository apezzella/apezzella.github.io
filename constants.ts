// FIX: Replaced JSX syntax with React.createElement calls.
// The .ts file extension does not support JSX, which was causing TypeScript compilation errors.
// This change uses the standard React.createElement function, which is valid in a .ts file,
// and adds the necessary import for React.
import React from 'react';
import type { Skill, Client, CaseStudy, Project } from './types';
import { 
  WalgreensCaseStudy, 
  TeladocCaseStudy,
  Project1Content,
  Project2Content,
  Project3Content,
  Project4Content,
  Project5Content,
  Project6Content,
  Project7Content,
  Project8Content,
  Project9Content,
  Project10Content,
  Project11Content,
  Project12Content,
} from './components/content/Content';


// Skills data
export const SKILLS: Skill[] = [
  { id: 'lead', title: 'Product Team Lead', brief: 'Team leadership & strategy', description: 'Lead cross-functional teams and guide product strategy to deliver measurable outcomes.' },
  { id: 'testing', title: 'Usability Testing', brief: 'Moderated & remote testing', description: 'Validate flows, reduce risk, and increase confidence with structured usability testing.' },
  { id: 'ucd', title: 'User Centered Design', brief: 'Human-centered approach', description: 'Empathy-driven design with personas, journeys, and measurable goals.' },
  { id: 'creative', title: 'Creative Direction', brief: 'Visual & brand leadership', description: 'Define and drive cohesive visual language and brand systems.' },
  { id: 'system', title: 'Design System', brief: 'Tokens & components', description: 'Build & govern scalable component libraries with accessibility in mind.' },
  { id: 'wireframing', title: 'Wireframing', brief: 'Low-fi to high-fi', description: 'Explore structure and flows rapidly before visual refinement.' },
  { id: 'prototypes', title: 'Rapid Prototypes', brief: 'Clickable prototypes', description: 'Interactive prototypes for testing and stakeholder alignment.' },
  { id: 'mobile', title: 'Mobile Design', brief: 'Mobile-first UX', description: 'Design responsive, performant mobile experiences.' },
  { id: 'branding', title: 'Branding and Identity', brief: 'Brand systems', description: 'Identity definition, tone, voice, and visual guidelines.' },
  { id: 'requirements', title: 'Business Requirements', brief: 'Product planning', description: 'Translate stakeholder needs into clear, testable requirements.' },
  { id: 'dev-mgmt', title: 'Dev Team Management', brief: 'Engineering collaboration', description: 'Coordinate front-end delivery, sprints, and quality.' },
  { id: 'frontend', title: 'Front-end Development', brief: 'HTML/CSS/JS', description: 'Hands-on implementation and component handoff.' },
];


// Clients data
export const CLIENTS: Client[] = [
    { id: 'teladoc', name: 'Teladoc', logoUrl: 'images/clients/Teladoc.svg' },
    { id: 'walgreens', name: 'Walgreens', logoUrl: 'images/clients/Walgreens.svg' },
    { id: 'sears', name: 'Sears', logoUrl: 'images/clients/Sears.svg' },
    { id: 'officemax', name: 'OfficeMax', logoUrl: 'images/clients/Officemax.svg' },
    { id: 'deluxe', name: 'Deluxe', logoUrl: 'images/clients/Deluxe.svg' },
    { id: 'potbelly', name: 'Potbelly', logoUrl: 'images/clients/Potbelly.svg' },
    { id: 'crowe', name: 'Crowe', logoUrl: 'images/clients/Crowe.svg' },
    { id: 'allstate', name: 'Allstate', logoUrl: 'images/clients/Allstate.svg' },
    { id: 'motorola', name: 'Motorola', logoUrl: 'images/clients/Motorola.svg' },
    { id: 'bluecross', name: 'BlueCross', logoUrl: 'images/clients/BCBS.svg' },
    { id: 'navistar', name: 'Navistar', logoUrl: 'images/clients/Navistar.svg' },
    { id: 'sysmex', name: 'Sysmex', logoUrl: 'images/clients/Sysmex.svg' },
];


// Case studies data
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'teladoc',
    title: 'Teladoc — After-Visit Summary',
    subtitle: 'Design Sprint',
    summary: 'Design sprint improving patient post-visit communications.',
    imageUrl: 'images/case_studies/teladoc/teladoc-casestudy.png',
    content: React.createElement(TeladocCaseStudy),
  },
  {
    id: 'walgreens',
    title: 'Walgreens — Pharmacy Renewal',
    subtitle: 'Lead Product Designer',
    summary: 'Enterprise modernization of pharmacy operations and systems.',
    imageUrl: 'images/case_studies/walgreens/walgreens-casestudy.png',
    content: React.createElement(WalgreensCaseStudy),
  },
];


// Projects data
export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Teladoc Health',
    summary: 'E-commerce platform redesign.',
    imageUrl: `images/showcase/teladoc/card-teladoc.jpg`,
    images: [],
    content: React.createElement(Project1Content),
  },
  {
    id: 'project-2',
    title: 'Walgreens',
    summary: 'Pharmacy management system.',
    imageUrl: `images/showcase/walgreens/card-walgreens.jpg`,
    images: [],
    content: React.createElement(Project2Content),
  },
  {
    id: 'project-3',
    title: 'Deluxe',
    summary: 'eCommerce site redesign.',
    imageUrl: `images/showcase/deluxe/card-deluxe.jpg`,
    images: [],
    content: React.createElement(Project3Content),
  },
  {
    id: 'project-4',
    title: 'Tahoe Partners',
    summary: 'Enterprise solutions UX.',
    imageUrl: `images/showcase/tahoe/card-tahoe.jpg`,
    images: [],
    content: React.createElement(Project4Content),
  },
  {
    id: 'project-5',
    title: 'Crowe Horwath',
    summary: 'UI framework and design system.',
    imageUrl: `images/showcase/crowe/card-crowe.jpg`,
    images: [],
    content: React.createElement(Project5Content),
  },
  {
    id: 'project-6',
    title: 'Blue Cross Blue Shield',
    summary: 'Product design & UI engineering.',
    imageUrl: `images/showcase/bcbs/card-bcbs.jpg`,
    images: [],
    content: React.createElement(Project6Content),
  },
  {
    id: 'project-7',
    title: 'Dearborn National',
    summary: 'Internet membership portal design.',
    imageUrl: `images/showcase/dearborn/card-dearborn.jpg`,
    images: [],
    content: React.createElement(Project7Content),
  },
  {
    id: 'project-8',
    title: 'Potbelly Sandwich Shop',
    summary: 'Customer-facing website redesign.',
    imageUrl: `images/showcase/potbelly/card-potbelly.jpg`,
    images: [],
    content: React.createElement(Project8Content),
  },
  {
    id: 'project-9',
    title: 'OfficeMax',
    summary: 'E-commerce site redesign.',
    imageUrl: `images/showcase/officemax/card-officemax.jpg`,
    images: [],
    content: React.createElement(Project9Content),
  },
  {
    id: 'project-10',
    title: 'Huron Consulting',
    summary: 'Award-winning intranet portal.',
    imageUrl: `images/showcase/huron/card-huron.jpg`,
    images: [],
    content: React.createElement(Project10Content),
  },
  {
    id: 'project-11',
    title: 'Sears',
    summary: 'Retail websites design & dev.',
    imageUrl: `images/showcase/sears/card-sears.jpg`,
    images: [],
    content: React.createElement(Project11Content),
  },
  {
    id: 'project-12',
    title: 'NCH',
    summary: 'Payment policies process application.',
    imageUrl: `images/showcase/nch/card-nch.jpg`,
    images: [],
    content: React.createElement(Project12Content),
  },
];
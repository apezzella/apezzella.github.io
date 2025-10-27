import React from 'react';
import type { CaseStudy, Project } from '../../types';
import ImgGrid from '../ImgGrid';
import Img from '../Img';


interface CaseStudyContentProps {
  study: CaseStudy;
}
interface ProjectContentProps {
  project: Project;
}

const H3: React.FC<{ children: React.ReactNode }> = ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3 text-gray-900 dark:text-white">{children}</h3>;
const H4: React.FC<{ children: React.ReactNode }> = ({ children }) => <h4 className="text-lg font-bold mt-6 mb-2 text-gray-800 dark:text-gray-100">{children}</h4>;
// FIX: Added `className` to the props for the `P` component.
// The component was being used with a `className` prop, which was not defined in its props type,
// causing a TypeScript error. This change allows passing a custom className to merge with the default styles.
const P: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => <p className={`mb-4 text-gray-600 dark:text-gray-300 leading-relaxed ${className || ''}`.trim()}>{children}</p>;
const LI: React.FC<{ children: React.ReactNode }> = ({ children }) => <li className="mb-2 ml-6 list-disc text-gray-600 dark:text-gray-300">{children}</li>;

export const CaseStudyContent: React.FC<CaseStudyContentProps> = ({ study }) => {
  return <div className="prose dark:prose-invert max-w-none">{study.content}</div>;
};

export const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
        {project.content}
    </div>
  );
};

const ImgStack: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="space-y-4">{children}</div>
);


// Teladoc Project
export const Project1Content = () => (
  <>
    <P>Led the end-to-end redesign of the Aura e-commerce platform, focusing on a streamlined checkout process, personalized product discovery, and a fully responsive mobile-first experience. The project involved extensive user research, A/B testing, and resulted in a 15% increase in conversion rates.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/teladoc/td-01.png" alt="Teladoc project image" /><br />
      <Img src="images/showcase/teladoc/td-02.png" alt="Teladoc project image" /><br />
      <Img src="images/showcase/teladoc/td-03.png" alt="Teladoc project image" /><br />
      <ImgGrid>
        <Img src="images/showcase/teladoc/td-04.png" alt="Teladoc project image" className="rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" style={{maxHeight: '1000px'}} />
        <Img src="images/showcase/teladoc/td-05.png" alt="Teladoc project image" className="rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" style={{maxHeight: '1000px'}} />
      </ImgGrid>
      <br />
      <ImgGrid>
        <Img src="images/showcase/teladoc/td-06.png" alt="Teladoc project image" className="rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" style={{maxHeight: '1000px'}} />
        <Img src="images/showcase/teladoc/td-07.png" alt="Teladoc project image" className="rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" style={{maxHeight: '1000px'}} />
      </ImgGrid>
      <br />
      <Img src="images/showcase/teladoc/td-08.png" alt="Teladoc project image" /><br />
      <Img src="images/showcase/teladoc/td-09.png" alt="Teladoc project image" />
    </div>
  </>
);


// Walgreens Project
export const Project2Content = () => (
  <>
    <P>Led enterprise pharmacy management system redesign with focus on patient safety and workflow optimization. Managed multidisciplinary teams and built reusable component libraries.</P>
    <div className="mt-6 not-prose space-y-4">
      <ImgStack>
        <Img src="images/showcase/walgreens/wag-01.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-02.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-03.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-05.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-06.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-08.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-10.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-12.png" alt="Walgreens project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" /><br />
        <Img src="images/showcase/walgreens/wag-25.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-13.png" alt="Walgreens project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" /><br />
        <Img src="images/showcase/walgreens/wag-14.png" alt="Walgreens project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" /><br />
      </ImgStack>
      <ImgGrid>
        <Img src="images/showcase/walgreens/wal-mobile-01.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-02.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-03.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-04.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-05.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-06.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-07.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-08.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wal-mobile-09.png" alt="Walgreens project image" />
      </ImgGrid>
      <br />
      <ImgGrid>
        <Img src="images/showcase/walgreens/wag-15.png" alt="Walgreens project image" />
        <Img src="images/showcase/walgreens/wag-16.png" alt="Walgreens project image" />
      </ImgGrid>
      <br />
      <ImgStack>
        <Img src="images/showcase/walgreens/wag-17.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-18.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-19.png" alt="Walgreens project image" /><br />
        <Img src="images/showcase/walgreens/wag-20.png" alt="Walgreens project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" /><br />
        <Img src="images/showcase/walgreens/wag-21.png" alt="Walgreens project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" /><br />
        <Img src="images/showcase/walgreens/wag-22.png" alt="Walgreens project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5" />
      </ImgStack>
    </div>
  </>
);


// Deluxe Project
export const Project3Content = () => (
  <>
    <P>Led UX for eCommerce site redesign including cart, checkout, and account pages. Developed interactive prototypes and collaborated with stakeholders to balance usability standards with brand requirements.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/deluxe/deluxe-01.png" alt="Deluxe project image" /><br />
      <Img src="images/showcase/deluxe/deluxe-02.png" alt="Deluxe project image" /><br />
      <Img src="images/showcase/deluxe/deluxe-03.png" alt="Deluxe project image" /><br />
      <Img src="images/showcase/deluxe/deluxe-04.png" alt="Deluxe project image" /><br />
      <Img src="images/showcase/deluxe/deluxe-05.png" alt="Deluxe project image" /><br />
      <ImgGrid>
        <Img src="images/showcase/deluxe/deluxe-06.png" alt="Deluxe project image" />
      </ImgGrid>
      <br />
      <Img src="images/showcase/deluxe/deluxe-07.png" alt="Deluxe project image" />
    </div>
  </>
);


// Tahoe Partners Project
export const Project4Content = () => (
  <>
    <P>Led UX architecture, research, design and development for enterprise solutions across major clients.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/tahoe/tahoe-00.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-01.png" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-01a.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-02.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-03.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-04.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-05.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-06.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-07.jpg" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-11.png" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-12.png" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-13.png" alt="Tahoe Partners project image" /><br />
      <Img src="images/showcase/tahoe/tahoe-14.png" alt="Tahoe Partners project image" />
    </div>
  </>
);


// Crowe Horwath Project  
export const Project5Content = () => (
  <>
    <P>Developed comprehensive UI framework and design system for enterprise applications. Conducted user interviews and requirements workshops while building responsive front-end components adhering to brand guidelines and accessibility standards.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/crowe/crowe-01.png" alt="Crowe Horwath project image" /><br />
      <Img src="images/showcase/crowe/crowe-02.png" alt="Crowe Horwath project image" /><br />
      <Img src="images/showcase/crowe/crowe-03.jpg" alt="Crowe Horwath project image" /><br />
      <Img src="images/showcase/crowe/crowe-04.jpg" alt="Crowe Horwath project image" /><br />
      <Img src="images/showcase/crowe/crowe-05.png" alt="Crowe Horwath project image" /><br />
      <Img src="images/showcase/crowe/crowe-06.png" alt="Crowe Horwath project image" /><br />
    </div>
  </>
);


// Blue Cross Blue Shield Project
export const Project6Content = () => (
  <>
    <P>Led product design and UI engineering for web applications, public sites, and intranet portals. Managed UI team to implement consistent design systems and collaborated with executive leadership to align business goals with user-centric design.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/bcbs/bcbs-01-fm.png" alt="Blue Cross Blue Shield project image" /><br />
      <Img src="images/showcase/bcbs/bcbs-02.jpg" alt="Blue Cross Blue Shield project image" /><br />
      <ImgGrid>
        <Img src="images/showcase/bcbs/bcbs-02-m.jpg" alt="Blue Cross Blue Shield project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5"  />
        <Img src="images/showcase/bcbs/bcbs-01-m.jpg" alt="Blue Cross Blue Shield project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5"  />
      </ImgGrid>
      <br />
      <Img src="images/showcase/bcbs/bcbs-04.png" alt="Blue Cross Blue Shield project image" /><br />
      <Img src="images/showcase/bcbs/bcbs-07.jpg" alt="Blue Cross Blue Shield project image" /><br />
      <Img src="images/showcase/bcbs/bcbs-10.jpg" alt="Blue Cross Blue Shield project image" /><br />
      <Img src="images/showcase/bcbs/bcbs-style-03.jpg" alt="Blue Cross Blue Shield project image" />
    </div>
  </>
);


// Dearborn National Project
export const Project7Content = () => (
  <>
    <P>Led design of internet membership portal incorporating competitive research and user feedback. Translated complex insurance processes into intuitive workflows while championing iterative testing to refine user experience.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/dearborn/dearborn-06.jpg" alt="Dearborn National project image" /><br />
      <Img src="images/showcase/dearborn/dearborn-07.jpg" alt="Dearborn National project image" /><br />
      <Img src="images/showcase/dearborn/dearborn-03.jpg" alt="Dearborn National project image" /><br />
      <Img src="images/showcase/dearborn/dearborn-01.png" alt="Dearborn National project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5"  /><br />
    </div>
  </>
);


// Potbelly Sandwich Shop Project
export const Project8Content = () => (
  <>
    <P>Led customer-facing website redesign and development for restaurant chain. Performed usability tests to identify navigation pain points and optimize user flow while ensuring brand standard adherence across digital channels.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/potbelly/potbelly-01.jpg" alt="Potbelly project image" /><br />
      <Img src="images/showcase/potbelly/potbelly-02.jpg" alt="Potbelly project image" /><br />
      <Img src="images/showcase/potbelly/potbelly-03.jpg" alt="Potbelly project image" /><br />
      <Img src="images/showcase/potbelly/potbelly-04.jpg" alt="Potbelly project image" /><br />
      <Img src="images/showcase/potbelly/potbelly-05.jpg" alt="Potbelly project image" /><br />
      <Img src="images/showcase/potbelly/potbelly-05a.png" alt="Potbelly project image" />
    </div>
  </>
);


// OfficeMax Project
export const Project9Content = () => (
  <>
    <P>Led e-commerce site redesign focusing on usability and brand alignment. Conducted user testing that improved site layout and checkout flows while supervising development teams to ensure coding standards compliance.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/officemax/officemax-01.jpg" alt="OfficeMax project image" /><br />
      <Img src="images/showcase/officemax/officemax-02.jpg" alt="OfficeMax project image" /><br />
      <Img src="images/showcase/officemax/officemax-03.jpg" alt="OfficeMax project image" />
    </div>
  </>
);


// Huron Consulting Project
export const Project10Content = () => (
  <>
    <P>Led UX, architecture, and front-end development for award-winning intranet portal. Facilitated user research and iterative testing while establishing site-wide design system that won Best Intranet Design of 2010 from Nielsen Norman Group.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/huron/huron-05.jpg" alt="Huron Consulting project image" /><br />
      <Img src="images/showcase/huron/huron-06.jpg" alt="Huron Consulting project image" /><br />
      <Img src="images/showcase/huron/huron-07.jpg" alt="Huron Consulting project image" /><br />
      <Img src="images/showcase/huron/huron-08.jpg" alt="Huron Consulting project image" /><br />
      <Img src="images/showcase/huron/huron-09.jpg" alt="Huron Consulting project image" /><br />
      <Img src="images/showcase/huron/huron-03.jpg" alt="Huron Consulting project image" /><br />
      <Img src="images/showcase/huron/huron-01.jpg" alt="Huron Consulting project image" className="not-prose my-4 p-4 rounded-lg bg-gray-100/50 dark:bg-gray-900/50 border border-black/5 dark:border-white/5"  />
    </div>
  </>
);


// Sears Project
export const Project11Content = () => (
  <>
    <P>Led design and front-end development for multiple retail websites including Sears.com, Kenmore.com, and Craftsman.com. Established team best practices and conducted R&D on emerging web standards, leading to major site innovations.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/sears/sears-02.jpg" alt="Sears project image" /><br />
      <Img src="images/showcase/sears/sears-03.jpg" alt="Sears project image" /><br />
      <Img src="images/showcase/sears/sears-05.jpg" alt="Sears project image" /><br />
      <Img src="images/showcase/sears/sears-06.jpg" alt="Sears project image" /><br />
      <Img src="images/showcase/sears/sears-08.jpg" alt="Sears project image" /><br />
      <Img src="images/showcase/sears/sears-10.jpg" alt="Sears project image" /><br />
      <Img src="images/showcase/sears/sears-13.png" alt="Sears project image" />
    </div>
  </>
);


// NCH Project
export const Project12Content = () => (
  <>
    <P>Architected and designed payment policies process application for coupon redemption industry. Developed information architecture, wireframes, and prototypes with clear handoff documentation to streamline development cycles.</P>
    <div className="mt-6 not-prose space-y-4">
      <Img src="images/showcase/nch/nch-03.jpg" alt="NCH project image" /><br />
      <Img src="images/showcase/nch/nch-04.jpg" alt="NCH project image" /><br />
      <Img src="images/showcase/nch/nch-05.jpg" alt="NCH project image" /><br />
      <Img src="images/showcase/nch/nch-06.jpg" alt="NCH project image" /><br />
      <Img src="images/showcase/nch/nch-02.jpg" alt="NCH project image" />
    </div>
  </>
);










// Teladoc Case Study
export const TeladocCaseStudy = () => (
  <>
    <Img src="images/case_studies/teladoc/teladoc-avs-design-sprint-01.png" alt="Teladoc Case Study" />
    <H3>Overview</H3>
    <P>In a short one-week design sprint, I led a project to reimagine Teladoc's After Visit Summary (AVS). The goal was to enhance the patient experience by improving understanding and engagement post-visit, creating a solution scalable across Teladoc's diverse product portfolio.</P>


    <H3>My Role</H3>
    <P>As the Lead UX Product Designer, I was responsible for all aspects of the project from initial research and brainstorming to design, prototyping, and user testing. The aim was to enhance the visit summary experience to improve patient understanding and engagement after a telemedicine visit, while also creating a solution that could scale across Teladoc's diverse product portfolio. The sprint culminated in a concept prototype that was presented to Teladoc's senior leadership as a vision for a better AVS.</P>



    <H3>Project Goal</H3>
    <P>The goal of this design sprint was to improve patient outcomes by delivering a clearer, more actionable After Visit Summary. In practice, this meant:</P>
    <ImgGrid cols={1} align="right" className="float-right ml-6 mb-4">
      <Img src="images/case_studies/teladoc/teladoc-patient-01.png" alt="Right-aligned image 1" style={{maxWidth: '200px'}} />
    </ImgGrid>

    <ul>
      <LI><strong>Highlighting Critical Information:</strong> Ensuring patients can quickly identify the most important details from their visit (e.g. diagnosis, key instructions, next steps).</LI>
      <LI><strong>Actionable Next Steps:</strong> Presenting post-visit tasks (like taking medication or scheduling a follow-up) in a way that encourages patients to act on them.</LI>
      <LI><strong>One Scalable Solution:</strong> Designing a single, unified Visit Summary that could be adapted and used across all of Teladoc's products and services, providing a consistent experience for patients regardless of the type of visit.</LI>
    </ul>
<div className="clear-both"></div>


<H3>After Visit Summary - Current State</H3>
    <P>The existing After Visit Summary was a basic document that provided minimal information about the telemedicine visit. It often lacked clarity, was difficult to read, and did not effectively guide patients on what to do next. Key issues included:</P>
    <ul>
        <LI><strong>Sparse Information:</strong> The summary often omitted important details such as clear next steps, medication instructions, and follow-up recommendations.</LI>
        <LI><strong>Poor Readability:</strong> The layout and typography made it hard for patients to quickly scan and understand the content.</LI>
        <LI><strong>Lack of Engagement:</strong> The summary did not actively engage patients or encourage them to take action on their care plan.</LI>
        <LI><strong>Inconsistency Across Products:</strong> Different Teladoc products had varying formats and content for their visit summaries, leading to confusion among patients.</LI>
    </ul>
    <br />

    <H3>Current State Example</H3>
    <Img src="images/case_studies/teladoc/teladoc-avs-legacy.png" alt="Teladoc current state AVS" />




    <H3>Discovery Phase</H3>
    <P>To kick off the project, I conducted a rapid discovery phase to gather insights and understand the problem space. This included reviewing the existing summary, brainstorming with stakeholders, interviewing experts, analyzing competitors, and researching industry best practices.</P>
    <ul>
        <LI><strong>Existing Summary Audit:</strong> Reviewed the current state of the Teladoc Visit Summary to identify pain points, missing information, and scalability issues across different products.</LI>
        <LI><strong>Brainstorming Workshops:</strong> Held quick brainstorming sessions with product owners and stakeholders to generate initial ideas for improving the AVS.</LI>
        <LI><strong>Expert Interviews:</strong> Interviewed subject matter experts (clinicians, patient advocates, Teladoc support staff) to learn where patients struggle with understanding their visit information.</LI>
        <LI><strong>Competitive Analysis:</strong> Analyzed how other telehealth platforms and healthcare providers present after-visit summaries, noting best practices and innovative features.</LI>
        <LI><strong>Industry Best Practices:</strong> Researched healthcare communication standards and health literacy guidelines to ensure our redesign would be patient-friendly and effective.</LI>
    </ul>
    <br />

    <Img src="images/case_studies/teladoc/teladoc-avs-design-sprint-02.png" alt="Teladoc design sprint" />


    <H3>Key Findings</H3>
    <P>The research and discovery activities uncovered several critical insights that guided the redesign:</P>
    <ul>
        <LI><strong>High Information Loss:</strong> Patients forget 40-80% of medical information given during a visit, with only about 50% retained on average.</LI>
        <LI><strong>Complexity Increases Forgetfulness:</strong> More complex diagnoses lead to higher forgetfulness; patients focus on critical info, ignoring the rest.</LI>
        <LI><strong>Legacy Summary Gaps:</strong> The existing AVS was sparse, inconsistent, and lacked important details like clear next steps.</LI>
        <LI><strong>Need for Guidance:</strong> A redesigned AVS should actively guide patients in their post-visit care, helping them understand and act on clinician instructions.</LI>
    </ul>

    <H3>Challenges & Constraints</H3>
    <P>The project faced challenges such as a compressed timeline, a non-standard process due to the rapid pace, and the need to align the new AVS design across multiple Teladoc products.</P>
    <ul>
        <LI><strong>Compressed Timeline:</strong> The design sprint was limited to just three weeks, requiring condensed activities and critical time management.</LI> 
        <LI><strong>Non-Standard Process:</strong> The rapid timeline meant prioritizing essential tasks and making quick decisions, skipping some typical UX steps.</LI>
        <LI><strong>Alignment with Multiple Products:</strong> Ensuring the new AVS design could work across Teladoc's diverse product lines required flexibility and adaptability.</LI>
    </ul>
    <br />

    <H3>Teladoc Products</H3>
    <Img src="images/case_studies/teladoc/teladoc-companies.png" alt="Teladoc companies" /><br />


    <H3>Design & Iteration Process</H3>
    <P>Despite the constraints, I followed a structured yet lightning-fast design process involving concept ideation, quick reviews, refinement, high-fidelity prototyping, and rapid iteration.</P>
    <ul>
        <LI><strong>Concept Ideation:</strong> Sketched multiple concepts for the summary layout and content organization.</LI>
        <LI><strong>Quick Reviews:</strong> Reviewed early concepts with stakeholders for immediate feedback.</LI>
        <LI><strong>Refinement:</strong> Combined the most promising elements into a cohesive design.</LI>
        <LI><strong>High-Fidelity Prototype:</strong> Built a clickable prototype reflecting the new layout and visual style.</LI>
        <LI><strong>Rapid Iteration:</strong> Continued to iterate on details to fine-tune the user experience.</LI>
    </ul>
 



    <H3>Requirements & Design Solutions</H3>
    <ul>
        <LI><strong>Warm, Engaging Greeting:</strong> Make the experience feel personal and caring.</LI>
        <LI><strong>Clear Visit Recap:</strong> Provide a structured post-visit overview.</LI>
        <LI><strong>Checklist of Recommendations:</strong> Make it easy for patients to see required actions.</LI>
        <LI><strong>Easy-to-Read Treatment Plan:</strong> Present information in a clear, digestible format.</LI>
        <LI><strong>Plain Language:</strong> Rewrite medical terminology to ensure comprehension for all literacy levels.</LI>
        <LI><strong>Simplified Medication List:</strong> Display prescribed medications in a simple list with relevant details.</LI>
        <LI><strong>Follow-Up and Alerts:</strong> Highlight required follow-up and warning signs.</LI>
        <LI><strong>Printable & Accessible Format:</strong> Design for easy printing and viewing on all devices.</LI>
    </ul>
    <br />

    <H3>Redesigned After Visit Summary</H3>
    <Img src="images/case_studies/teladoc/teladoc-avs-01.png" alt="Teladoc After Visit Summary" /><br />





    <H3>Actionable Checklist</H3>
    <P>A key feature of the redesigned AVS was an actionable checklist that clearly outlined the next steps for patients. This included:</P>
    <ul>
        <LI><strong>Medication Instructions:</strong> Clear directions on how and when to take prescribed medications.</LI>
        <LI><strong>Lab Tests:</strong> Information on any required lab tests, including how to schedule them.</LI>
        <LI><strong>Follow-Up Appointments:</strong> Guidance on scheduling necessary follow-up visits.</LI>
        <LI><strong>Lifestyle Recommendations:</strong> Simple tips for diet, exercise, and other lifestyle changes.</LI>
    </ul>
    <br />

    <ImgGrid cols={1}  >
      <Img src="images/case_studies/teladoc/teladoc-avs-checklist-01.png" alt="Checklist Prescription"  />
    </ImgGrid>
    <br />


    <ImgGrid cols={2}>
      <Img src="images/case_studies/teladoc/teladoc-avs-checklist-02.png" alt="Checklist Labs activate"  />

      <Img src="images/case_studies/teladoc/teladoc-avs-checklist-03.png" alt="Checklist Labs visit" align="right" />
    </ImgGrid>
    <br />

    
    <Img src="images/case_studies/teladoc/teladoc-avs-checklist-04.png" alt="Teladoc After Visit Summary" /><br />

<H3>Responsive for Mobile</H3>
    <P>Given the high likelihood of patients accessing their After Visit Summary on mobile devices, I ensured the design was fully responsive. Key considerations included:</P>
    <ul>
        <LI><strong>Mobile-First Layout:</strong> Designed the AVS to prioritize mobile usability, ensuring key information was easily accessible on smaller screens.</LI>
        <LI><strong>Touch-Friendly Elements:</strong> Used larger buttons and touch targets to facilitate easy interaction on mobile devices.</LI>
        <LI><strong>Optimized Readability:</strong> Adjusted font sizes, line spacing, and content organization for optimal reading on mobile screens.</LI>
        <LI><strong>Consistent Experience:</strong> Maintained a consistent look and feel across desktop and mobile versions to reinforce brand identity and user familiarity.</LI>
    </ul>
    <br />

    <ImgGrid cols={2} align="center" >
      <Img src="images/case_studies/teladoc/teladoc-avs-mobile-01.png" alt="Teladoc AVS Mobile 1"   />
      <Img src="images/case_studies/teladoc/teladoc-avs-mobile-02.png" alt="Teladoc AVS Mobile 2"   />
    </ImgGrid>
    <br />



    <H3>Design System Integration</H3>
    <P>I implemented Teladoc's evolving design system standards to ensure consistency, scalability, and accessibility across the AVS experience. This included typography, color schemes, iconography, and accessibility considerations.</P>
    <ul>
        <LI><strong>Typography & Spacing:</strong> Applied standardized font sizes, weights, and spacing rules to improve readability and maintain alignment with other digital experiences.</LI>
        <LI><strong>Color & UI Elements:</strong> Incorporated brand-approved colors and components for headings, buttons, and callouts, ensuring a cohesive look and feel that aligns with Teladoc's digital ecosystem.</LI>
        <LI><strong>Iconography & Visual Hierarchy:</strong> Used design system icons and a clear information hierarchy to guide users through key sections (e.g., using icons to indicate medications, warnings, and action items).</LI>
        <LI><strong>Accessibility Considerations:</strong> Ensured contrast ratios, font sizes, and interactive elements adhered to WCAG standards, improving usability for all patients, including those with visual impairments or cognitive challenges.</LI>
        <LI><strong>Scalability Across Products:</strong> Designed modular sections that could be easily adapted for different Teladoc services, reinforcing the flexibility of the design system while allowing customization as needed.</LI>
    </ul>
    <P>By aligning the AVS redesign with Teladoc's work-in-progress design system, I helped establish a strong foundation for future product consistency while streamlining future development efforts.</P>

    <ImgGrid cols={1} align="center" >
      <Img src="images/case_studies/teladoc/teladoc-colors-02.png" alt="Teladoc AVS Design Colors" style={{maxWidth: '550px'}}  />
    </ImgGrid>
    <br />



    <H3>User Testing & Feedback</H3>
    <P>Usability tests with telehealth users showed overwhelmingly positive feedback. Participants found the new AVS much clearer and more informative, particularly appreciating the checklist of next steps and plain-language explanations.</P>
    <ImgGrid cols={1} align="right" className="float-right ml-6 mb-4">
      <Img src="images/case_studies/teladoc/teladoc-patient-02.png" alt="Right-aligned image 1" style={{maxWidth: '350px'}} />
    </ImgGrid>
    <ul>
        <LI><strong>Testing Sessions:</strong> Conducted remote user testing sessions with telehealth users to gather feedback on the prototype.</LI>
        <LI><strong>Positive Reactions:</strong> Users found the new AVS clearer and more informative than previous versions.</LI>
        <LI><strong>High Impact of Small Changes:</strong> Even straightforward additions had a significant impact on user satisfaction and confidence.</LI>
        <LI><strong>Iterative Feedback:</strong> Minor suggestions were noted for future refinement, with no major usability issues uncovered.</LI> 
    </ul>




<div className="clear-both"></div>



    <H3>Outcomes & Impact</H3>
    <P>The final concept was packaged into a presentation and delivered to Teladoc's senior leadership at the end of the sprint:</P>
    <ul>
        <LI><strong>Presentation to Leadership:</strong> Delivered a comprehensive presentation showcasing the redesigned AVS concept, user testing results, and the rationale behind design decisions.</LI>
        <LI><strong>Positive Feedback:</strong> Leadership responded positively, appreciating the user-centered approach and potential business impact.</LI>
        <LI><strong>Scalability Discussion:</strong> Discussed how the new AVS could be implemented across various Teladoc products for a consistent patient experience.</LI>
        <LI><strong>Project Status:</strong> Due to other priorities, the project was placed on hold post-presentation, with the concept stored in the backlog for future development.</LI> 
    </ul>

    <H3>Conclusion</H3>
    <P>This case study demonstrates how a focused design sprint can yield high-impact UX improvements in a short time frame.  In just three weeks, I was able to identify core issues, explore solutions, and validate a much-improved After Visit Summary that stands to benefit both patients and Teladoc's business. The experience required balancing thorough research with rapid iteration, and making strategic design decisions under tight constraints. The resulting concept shows clear enhancements in patient understanding and engagement, and it provides a strong foundation that Teladoc can build upon when the project moves forward.</P>
    <P>Overall, this project highlights the ability to drive end-to-end UX efforts quickly and effectively - from insight gathering to polished prototype - and to deliver a solution that resonates with users and stakeholders alike.</P>

  </>
);
// End of Teladoc Case Study














// Walgreens Case Study
export const WalgreensCaseStudy = () => (
  <>

    <Img src="images/case_studies/walgreens/walgreens-storefront.png" alt="Walgreens store" className="mb-6" />
    <H3>Introduction</H3>


    <P>Walgreens is a community pharmacy store chain founded in 1901 in Chicago. Walgreens merged with Alliance Boots in 2014 and now has over 18,500 stores in 11 countries. 
    </P>

    <ImgGrid cols={1}><Img src='images/case_studies/walgreens/walgreens-1900s.png' alt='Walgreens store 1900s'></Img></ImgGrid>
    <br/>

    <H3>Project Overview</H3>
    <P>The Walgreens Pharmacy Renewal project aimed to overhaul a 25-year-old pharmacy management and inventory systems. The objective was to create a state-of-the-art solution that improved operational efficiency, reduced staff workload, and enhanced patient care. The new system impacted thousands of users across numerous touchpoints worldwide.  The ultimate goal was to create a nimble pharmacy platform that advances the manner in which Walgreens cares for patients, providing a flexible technology foundation to solve a variety of pharmacy-related challenges.</P>

    <H3>My Role</H3>
    <P>As the Lead Product Designer on this project, I led multiple teams of user experience designers, UX researchers, creative visual designers, and software engineers.  I was responsible for defining the overall UI standards, patterns, and design language for the new pharmacy platform.  Some of the key projects and tasks I led included:
      <ul>
        <LI>Coordinating cross-functional teams including product management, business analysts, product designers, user researchers, developers, and QA testers</LI>
        <LI>Establishing the design system and governing its adoption</LI>
        <LI>Leading workshops and brainstorming sessions to generate innovative solutions</LI>
        <LI>Conducting user research, interviews, and usability testing to inform design decisions</LI>
        <LI>Facilitating design reviews and feedback sessions with stakeholders</LI>
        <LI>Collaborating with developers to ensure technical feasibility of designs</LI>
        <LI>Developing the global framework and navigation, page layouts, app switching, menu architecture, and interaction models</LI>
        <LI>Creating detailed UI specifications and assets for development teams</LI>
        <LI>Overseeing the implementation of designs to ensure fidelity to the original vision</LI>
        <LI>Mentoring junior designers and fostering a collaborative design culture</LI>
        <LI>Defining access management, user session handling, and roles and permissions</LI>
        <LI>Creating wireframes, prototypes, and high-fidelity visual designs</LI>
        <LI>Designing dashboards and landing page experiences</LI>
      </ul>
    </P>


    <H3>The Challenge</H3>
    <P>Walgreens was operating on a 25-year-old system that was inefficient and unable to meet modern demands. It hindered efficiency, lacked a user-centric design causing a steep learning curve, and impaired customer service.</P>

    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-as400-01.png' alt='Walgreens legacy system' />
      <Img src='images/case_studies/walgreens/wal-as400-02.png' alt='Walgreens legacy system' />
    </ImgGrid>


    <H3>Research and Insights</H3>
    <P>Extensive user research revealed key pain points including complex navigation, inefficient workflows, and a lack of integration with modern pharmacy practices. Insights highlighted the need for a user-friendly interface that prioritized patient safety and streamlined operations.</P>

    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-research-01.jpg' alt='Walgreens user research' />
      <Img src='images/case_studies/walgreens/wal-research-02.jpg' alt='Walgreens user research' />
    </ImgGrid>
    <br/>

    <P>To better understand the users' pain points and needs, the team conducted a series of user research activities:
    </P>
      <ul>
        <LI>User interviews to gain insights into the current challenges and pain points</LI>
        <LI>Contextual inquiries to observe users in their natural work environment</LI>
        <LI>Surveys to gather quantitative data on user satisfaction and needs</LI>
        <LI>Usability testing of existing systems to identify specific areas for improvement</LI>
        <LI>Journey mapping workshops to visualize and analyze the existing workflows</LI>
        <LI>Pharmacy forum events to gather feedback on design concepts and prototypes</LI>
      </ul>
      <br/>



    <H3>Key Findings</H3>
    <ul>
      <LI>Users struggled with complex navigation and inefficient workflows</LI>
      <LI>New users struggled to learn and navigate the old system</LI>
      <LI>The existing system lacked integration with modern pharmacy practices</LI>
      <LI>There was a need for a user-friendly interface that prioritized patient safety</LI>
      <LI>Staff required better tools to manage inventory and patient interactions</LI>
      <LI>Customization based on user roles was essential for efficiency</LI>
    </ul>


    <H3>Design Process</H3>
    <P>The design process followed a user-centered approach, starting with low-fidelity wireframes and progressing to high-fidelity prototypes. Key design principles included simplicity, clarity, and accessibility. The team utilized iterative testing and feedback loops to refine the designs continuously.</P>
      <Img src='images/case_studies/walgreens/wal-design-process-01.png' alt='Walgreens design process' />
    <br/>

    <P>Key steps in the design process included: </P>
      <ul>
        <LI>Developing user journey maps to visualize workflows and identify pain points</LI>
        <LI>Creating user personas to represent different user types and their needs</LI>
        <LI>Sketching and wireframing initial design concepts</LI>
        <LI>Building interactive prototypes for usability testing</LI>
        <LI>Conducting iterative usability tests to gather feedback and refine designs</LI>
        <LI>Collaborating with developers to ensure technical feasibility</LI>
        <LI>Establishing a design system for consistency across the platform</LI>
      </ul>
      <br/>

    <H3>User Journey Maps</H3>
    <P>User journey maps were created to visualize the end-to-end experience of pharmacy staff using the system. These maps helped identify pain points, opportunities for improvement, and key touchpoints that needed to be addressed in the design.</P>
    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-design-process-02.png' alt='Walgreens design process' />
      <Img src='images/case_studies/walgreens/wal-design-process-03.png' alt='Walgreens design process' />
    </ImgGrid>
    <br/>

    <H3>User Personas</H3>
    <P>To ensure the design met the needs of various users, detailed personas were created representing pharmacists, pharmacy technicians, and store managers. These personas guided design decisions and helped prioritize features based on user needs.</P>
    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-personas-01.png' alt='Walgreens design process' />
      <Img src='images/case_studies/walgreens/wal-personas-02.png' alt='Walgreens design process' />
    </ImgGrid>


    <H3>Key Features and Innovations</H3>
    <ul>
      <LI><strong>Intuitive User Interface:</strong>  <br/>
      A modern, user-friendly design that simplifies navigation and reduces training time.</LI>
      <LI><strong>Streamlined Workflows:</strong>  <br/>
      Optimized processes for prescription management, inventory tracking, and patient interactions.</LI>
      <LI><strong>Integrated Systems:</strong>  <br/>
      Seamless integration with other healthcare systems for improved data accuracy and accessibility.</LI>
      <LI><strong>Role-Based Access:</strong>  <br/>
      Customized interfaces and permissions based on user roles to enhance security and usability.</LI>
      <LI><strong>Real-Time Analytics:</strong>  <br/>
      Dashboards providing insights into pharmacy operations and performance metrics.</LI>
      <LI><strong>Mobile Accessibility:</strong>  <br/>
      Responsive design allowing access from various devices for on-the-go management.</LI>
    </ul>

    <H3>Challenges and Solutions</H3>
    <P>During the project, several challenges arose including resistance to change from staff accustomed to the old system, technical limitations, and ensuring data security. These were addressed through extensive training, close collaboration with IT teams, and implementing robust security protocols.</P>


    <H3>Figma - Site Flow</H3>
    <P>The design team utilized Figma to create a comprehensive set of page designs that illustrated and annotated the user flow and interactions within the new pharmacy system. This visual representation helped stakeholders understand the user experience and provided a clear roadmap for development.</P>
    <Img src='images/case_studies/walgreens/wal-flow-tma-01.png' alt='Figma page designs flow' /><br/>


    <H3>Wireframes</H3>
    <P>Low-fidelity wireframes were developed to outline the basic structure and layout of key screens. These wireframes served as a foundation for discussions and iterations before moving into high-fidelity designs.</P>
    <ImgGrid cols={2}>
      <Img src='images/case_studies/walgreens/wal-wireframe-01.png' alt='Walgreens wireframe' />
      <Img src='images/case_studies/walgreens/wal-wireframe-02.png' alt='Walgreens wireframe' />
      <Img src='images/case_studies/walgreens/wal-wireframe-03.png' alt='Walgreens wireframe' />
    </ImgGrid>
    <br/>

    <H3>Design System</H3>
    <P>A comprehensive design system was developed to ensure consistency across the platform. This included a library of reusable components, Figma library, standardized color schemes, typography, and interaction patterns. The design system facilitated collaboration between designers and developers, speeding up the development process and ensuring a cohesive user experience.</P>


    <H4>Design System - Color Palette</H4>
      <Img src='images/case_studies/walgreens/wal-design-system-01.png' alt='Walgreens design system' /><br/>

    <H4>Design System - Components</H4>
      <Img src='images/case_studies/walgreens/wal-design-system-02.png' alt='Walgreens design system' /><br/>


    <ImgGrid cols={1}>
      <Img src='images/case_studies/walgreens/wal-design-system-03.png' alt='Walgreens design system' />
    </ImgGrid>

    <H4>Design System - Redline Specs</H4>
    <Img src='images/case_studies/walgreens/wal-design-system-04.png' alt='Redline specs' /><br />


    <H3>Implementation and Rollout</H3>
    <ImgGrid cols={1} className='float-right p-4 ml-6 mb-4'>
      <Img src='images/case_studies/walgreens/wal-implementation-01.png' alt='Walgreens implementation' className="" align="right" style={{maxWidth: '300px'}} />
    </ImgGrid>

    <P>The implementation involved phased rollouts across multiple locations, with comprehensive training programs for staff. Continuous support and feedback mechanisms were established to ensure smooth adoption and address any issues promptly.</P>
    <P>Key steps in the implementation process included:</P>
      <ul>
        <LI>Pilot Testing: Conducted initial rollouts in select locations to gather feedback and make necessary adjustments.</LI>
        <LI>Training Programs: Developed comprehensive training materials and sessions to ensure staff were comfortable with the new system.</LI>
        <LI>Phased Rollout: Implemented the new system in phases across all locations to manage change effectively.</LI>
        <LI>Ongoing Support: Established help desks and support teams to assist users during the transition period.</LI>
        <LI>Feedback Mechanisms: Created channels for users to provide feedback and report issues for continuous improvement.</LI>
      </ul>
      <br/>
    
    <div className="clear-both"></div>

    


    <H3>Design Solutions</H3>
    <P>The design solutions focused on creating an intuitive user interface that prioritized ease of use and efficiency. Key design elements included clear navigation, simplified workflows, and accessible information architecture. The team also emphasized responsive design to ensure usability across various devices.</P>

    <p>Some of the major design solutions developed for the Pharmacy Renewal project included:</p>
      <ul>
        <LI>Global Home Dashboard:  A central hub for all pharmacy tasks, including prescription intake, immunization services, and order processing.</LI>
        <LI>Single Sign-On:  Simplified login experience for team members access, reducing credential management issues.</LI>
        <LI>Roles & Permissions:  Implemented role-based access to ensure security and streamlined task completion.</LI>
        <LI>Inventory Replenishment & Order Management:  Streamlined processes to ensure timely stock management and prevent shortages.</LI>
        <LI>Integrated multiple fragmented systems into a unified platform.</LI>
        <LI>Created a Design System to standardize UI components and patterns across various teams and features.</LI>
        <LI>Developed responsive Mobile designs for various hand held devices.</LI>
    </ul>
    <br/>
    
    <H3>Visual Design Examples</H3>
    <P>Here are a small set of some visual design examples from the Walgreens Pharmacy Renewal project, showcasing key features and interfaces developed during the redesign process.</P>

    <H4>Global Home Dashboard</H4>
    <Img src='images/case_studies/walgreens/wal-design-01.png' alt='Walgreens design solutions' /><br/>

    <H4>Roles and Permissions</H4>
    <Img src='images/case_studies/walgreens/wal-design-02.png' alt='Walgreens design solutions' /><br/>
    <Img src='images/case_studies/walgreens/wal-design-03.png' alt='Walgreens design solutions' /><br/>
    <br/>

    <H4>Mobile Solutions</H4>
    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-mobile-01.png' alt='Walgreens design solutions' />
      <Img src='images/case_studies/walgreens/wal-mobile-02.png' alt='Walgreens design solutions' />
    </ImgGrid>
    <br/>

    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-mobile-03.png' alt='Walgreens design solutions' />
      <Img src='images/case_studies/walgreens/wal-mobile-04.png' alt='Walgreens design solutions' />
    </ImgGrid>
    <br/>

    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-mobile-05.png' alt='Walgreens design solutions' />
      <Img src='images/case_studies/walgreens/wal-mobile-06.png' alt='Walgreens design solutions' />
    </ImgGrid>
    <br/>

    <ImgGrid>
      <Img src='images/case_studies/walgreens/wal-mobile-07.png' alt='Walgreens design solutions' />
      <Img src='images/case_studies/walgreens/wal-mobile-08.png' alt='Walgreens design solutions' />
    </ImgGrid>
    <br/>

    <ImgGrid cols={1}>
      <Img src='images/case_studies/walgreens/wal-mobile-09.png' alt='Walgreens design solutions' />
    </ImgGrid>
    <br/>


    <H3>Post-Launch Evaluation</H3>
    <P>Post-launch evaluations indicated significant improvements in operational efficiency, user satisfaction, and patient care. Ongoing monitoring and updates ensured the system remained aligned with evolving needs and technological advancements.</P>




    <H3>Lessons Learned</H3>
    <P>Key lessons from the project included the importance of user involvement throughout the design process, the need for flexibility in addressing unforeseen challenges, and the value of a strong design system in maintaining consistency.</P>


    <H3>Impact and Results</H3>
    <P>The new system from the start achieved a 20% reduction in task completion time, improved onboarding for new staff, and enhanced overall workflow efficiency. Users found the new system intuitive, which increased trust and empowerment. This freed-up time allowed staff to focus more on patient care, improving customer satisfaction.</P>

    <ImgGrid cols={1}>
      <Img src='images/case_studies/walgreens/wal-pharmacy.jpg' alt='Walgreens pharmacy' />
    </ImgGrid>
    <br/>


  </>
);
// End of Walgreens Case Study
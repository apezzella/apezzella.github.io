import React from 'react';

// FIX: Changed I from a const arrow function to a function declaration and moved it to the top.
// Function declarations are hoisted, which can prevent certain type inference issues where a component is used before its type is fully resolved by TypeScript.
// This should resolve the "Property 'children' is missing" errors.
const I = ({ children }: { children: React.ReactNode }) => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;

export const LogoIcon: React.FC = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" className="text-gray-800 dark:text-white">
    <defs>
      <linearGradient id="jbGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#3B82F6"/><stop offset="1" stopColor="#60A5FA"/>
      </linearGradient>
    </defs>
    
    {/* 
      This is the user's custom SVG, adapted to be theme-aware.
      - A transform is applied to scale and center the original artwork within the 64x64 viewbox.
      - Hardcoded colors have been replaced with `currentColor` to adapt to light/dark themes.
      - Fills use a gradient or `currentColor` with low opacity for a subtle effect that works in both modes.
    */}
    <g transform="translate(4, -8) scale(0.095)">
      {/* Box */}
      <g>
        {/* The two main faces of the box */}
        <path d="M142,604L142,673L314,756L314,573L223,641L142,604Z" fill="url(#jbGrad)" stroke="currentColor" strokeWidth="8" fillOpacity="0.15" strokeOpacity="0.2" />
        <path d="M337,573L337,757L510,674L510,605L431,641L337,573Z" fill="url(#jbGrad)" stroke="currentColor" strokeWidth="8" fillOpacity="0.2" strokeOpacity="0.2" />
        
        {/* The other sides/edges of the box with low opacity fill */}
        <g fill="currentColor" fillOpacity="0.07" stroke="currentColor" strokeOpacity="0.2">
          <g transform="matrix(0.842055,-0.340098,1.70924,0.797274,-619.152,142.01)">
              <rect x="41" y="365" width="207" height="52" strokeWidth="4.36"/>
          </g>
          <g transform="matrix(0.834199,-0.366482,1.54292,1.09177,-243.917,172.453)">
              <rect x="41" y="365" width="207" height="52" strokeWidth="4.55"/>
          </g>
          <g transform="matrix(0.834096,0.339966,-1.65937,0.785264,1009.93,47.6191)">
              <rect x="41" y="365" width="207" height="52" strokeWidth="8.11"/>
          </g>
          <g transform="matrix(0.840379,0.365757,-1.57027,1.04701,666.099,82.3632)">
              <rect x="41" y="365" width="207" height="52" strokeWidth="7.11"/>
          </g>
        </g>

        {/* The "inside" surface of the box, with a solid theme-aware fill */}
        <g transform="matrix(0.763085,0.332116,-3.11505,1.28902,1436.32,-80.5098)">
            <rect x="41" y="365" width="207" height="52" fill="currentColor" stroke="none" />
        </g>
      </g>
      {/* Stick man - moved right for better composition */}
      <g fill="currentColor" stroke="currentColor" strokeWidth="8" transform="translate(20, 45)">
          <path d="M314,158C314,158 186.193,168.334 186,168C185.807,167.666 173.291,173.345 174,185C174.643,195.571 181.418,200.627 186,201C190.582,201.373 300,194 300,194L299,248L248,273L174,283C174,283 163.541,285.739 164,300C164.459,314.261 174.867,316.02 175,316C175.133,315.98 258,307 258,307L333,272L368,300L310,320C310,320 296.306,327.457 302,341C307.345,353.714 318.137,353.379 318,353C317.863,352.621 400,326 400,326C400,326 410.851,323.009 413,309C414.724,297.766 411,294 411,294L362,245L361,162L400,120L413,42C413,42 413.755,31.687 400,27C386.245,22.313 380.968,37.361 381,37C381.032,36.639 370,103 370,103L314,158Z" />
          <g transform="matrix(1,0,0,1,16,10)">
              <circle cx="273" cy="95" r="45" />
          </g>
      </g>
    </g>
  </svg>
);
export const MoonIcon: React.FC = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>;
export const SunIcon: React.FC = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>;
export const MenuIcon: React.FC = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>;
export const XIcon: React.FC = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>;

export const TeamLeadIcon: React.FC = () => <I><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></I>;
export const UsabilityTestingIcon: React.FC = () => <I><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></I>;
export const UserCenteredDesignIcon: React.FC = () => <I><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></I>;
export const CreativeDirectionIcon: React.FC = () => <I><path d="M12 2v20M2 12h20"/></I>;
export const DesignSystemIcon: React.FC = () => <I><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></I>;
export const WireframingIcon: React.FC = () => <I><rect x="3" y="4" width="18" height="16" rx="2" ry="2"/><path d="M3 9h18"/></I>;
export const RapidPrototypesIcon: React.FC = () => <I><path d="m5 12 7-7 7 7-7 7-7-7z"/></I>;
export const MobileDesignIcon: React.FC = () => <I><rect x="7" y="2" width="10" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></I>;
export const BrandingIcon: React.FC = () => <I><circle cx="12" cy="12" r="10"/><path d="M12 7v10"/></I>;
export const RequirementsIcon: React.FC = () => <I><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 14h6M9 17h3"/></I>;
export const DevManagementIcon: React.FC = () => <I><path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"/></I>;
export const FrontendIcon: React.FC = () => <I><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></I>;
export const GenericSkillIcon: React.FC = () => <I><circle cx="12" cy="12" r="10"/></I>;
# CIS Jodhpur — Master Engineering Roadmap & Task Tracker

## Phase 1: Architectural Documentation & Project Scaffolding
- [x] Create `README.md` with complete institutional overview, research summary, and tech stack specs
- [x] Create `DESIGN.md` with complete 87-page Figma hierarchy audit (`90+ Health Index`) and CSS variable definitions (`#0A0A0A`, `#D97706`, `#1E3A8A`, `#F9F6F0`)
- [x] Create `task.md` living task roadmap
- [x] Initialize Next.js 15+ (`App Router`, `TypeScript`, `Tailwind CSS v4`) inside `C:\Users\choud\.gemini\antigravity-ide\scratch\cis-jodhpur`
- [x] Configure custom fonts (`Instrument Serif` & `Geist`) and institutional metadata in `src/app/layout.tsx`

## Phase 2: Design System Tokens & Core UI Primitives (`v1` & `v2` Modes)
- [x] Define global CSS tokens (`--color-midnight`, `--color-amber`, `--color-royal-blue`, `--color-sandstone`) in `src/app/globals.css`
- [x] Build institutional global navigation (`src/components/Navbar.tsx`) with search modal and mode toggle (`v1 Sandstone Editorial` vs `v2 High-Tech Dark Mode`)
- [x] Build institutional global footer (`src/components/Footer.tsx`) with emergency helpline (`+91-291-276-8888`), multi-column sitemap, and `CAMBRIDGE` watermark
- [x] Build master `Homepage` (`src/app/page.tsx`) incorporating Hero, Quick Stats, Academic Schools, Virtual Tour Spotlight (`The Sandstone Courtyard`), Voices of CIS, and Admissions CTA bar
  - [x] `Button` (Primary, Secondary, Outline, Ghost with glowing hover states)
  - [x] `Badge` & `CategoryPill` (Interactive status and filter tags)
  - [x] `Card` (Sandstone, Midnight Glass, and Bordered Interactive variants)
  - [x] `SectionHeader` & `Typography` components with serif/sans pairing
  - [x] `Accordion` & `TabGroup` (For FAQ and department switching)

## Phase 3: Global Shell Navigation & Footer System
- [x] Build `Navbar` component with multi-level dropdowns (`About`, `Academics`, `Admissions`, `Campus Life`, `Research`, `Resources`), search modal, and `Apply Now` CTA
- [x] Build `Footer` (`v1 & v2`) with multi-column sitemap, newsletter signup, emergency support bar (`+91-291-276-8888`), Cambridge watermark, and social icon grid
- [x] Implement global emergency notification / admission banner bar (`Admissions Open 2025-26 — Apply Online Today`)

## Phase 4: Core Institutional Pages (`v1` & `v2` Compositions)
- [x] Build `About Us` (`src/app/about/page.tsx`) covering Heritage Timeline (`1998-2024`), Leadership & Governance Matrix, and Sandstone & Silicon Philosophy
- [x] Build `Academic Programs` (`src/app/programs/page.tsx`) with category tabs (`B.Tech`, `M.Tech`, `Cambridge CAIE`, `CBSE`), detailed program cards, and Cambridge vs CBSE comparison matrix
- [x] Build `Admissions Portal` (`src/app/admissions/page.tsx`) incorporating interactive eligibility calculator, fee timeline matrix, scholarship breakdown (`Form A-01`), and multi-step inquiry wizard
- [x] Build `Placements & Career Center` (`src/app/placements/page.tsx`) featuring recruiter logos (`Microsoft`, `Google`), compensation breakdown (`₹42 LPA` top package), and corporate partnership portal
- [x] Build `Campus Life & Residential Hostels` (`src/app/campus-life/page.tsx`) showcasing Sandstone hostel suites, dining halls, sports arenas, and student clubs directory
- [x] Build `High-Tech Computing Labs & Facilities` (`src/app/facilities/page.tsx`) detailing NVIDIA GPU clusters, cybersecurity sandbox, 24/7 library, and robotics center
- [x] Build `Faculty & Research Portal` (`src/app/faculty/page.tsx` & `src/app/research/page.tsx`) featuring Google Scholar publication counts, quantum computing labs, and AI chairs
- [x] Build `Events Calendar & Symposiums` (`src/app/events/page.tsx`) detailing Jodhpur AI Hackfest, Cambridge Model United Nations (`MUN`), and heritage fests
- [x] Build `Resources & FAQ Document Center` (`src/app/resources/page.tsx` & `src/app/faq/page.tsx`) offering downloadable curricula, Form A-01 guidelines, and AI counselor assistance
- [x] Build `Contact & Campus Tour Booking Portal` (`src/app/contact/page.tsx`) with interactive tour scheduling and directory helpdeskight
  - [ ] Student & Alumni Testimonial Carousel (`Voices of CIS`)
  - [ ] Admissions CTA & Upcoming Events Bar
- [ ] **About Us (`/about`)**:
  - [ ] Institutional Heritage (`Founded 1998`, `25+ Years of Excellence`)
  - [ ] Leadership & Visionary Cards (`Director Dr. Vikramaditya Choudhary`, `Dean Dr. Ananya Sharma`)
  - [ ] Accreditation & Global University Partnerships (`Cambridge`, `IIT Jodhpur`, `Microsoft`)
- [ ] **Programs & Curriculum (`/programs`)**:
  - [ ] `v1 & v2` Curriculum Explorer (`Undergraduate B.Tech`, `Postgraduate M.Tech`, `Diploma`)
  - [ ] Interactive Syllabus Preview & Semester Breakdown Matrix
- [x] **Admissions Portal (`/admissions`)**:
  - [x] Step-by-Step Admission Walkthrough (`Registration` -> `Entrance` -> `Counseling` -> `Enrollment`)
  - [x] Fee Structure, Scholarship Cards (`Merit-based up to 100% tuition waiver`), Important Schedules (`Academic Timeline`), and International Applicants (`Global Admissions Hub`)
  - [x] Online Application & Registration Form (`Form A-01` simulation)
- [ ] **Placements & Career Center (`/placements`)**:
  - [ ] Top Corporate Recruiters Grid (`Google`, `Microsoft`, `Amazon`, `Infosys`, `TCS`)
  - [ ] Placement Package Distribution Chart (`Average ₹14.5 LPA`) & Internship Tracker
- [ ] **Campus Life & Facilities (`/campus-life` & `/facilities`)**:
  - [ ] Sandstone Residential Hostels (`Air-conditioned suites`, `High-speed Wi-Fi`, `24/7 Security`)
  - [ ] High-Tech Computing Labs, AI Research Hub, & Sandstone Library Gallery
  - [ ] Student Council & Clubs Directory (`Robotics`, `Cyber Corps`, `FinTech Club`)
- [ ] **Faculty & Research Portal (`/faculty` & `/research`)**:
  - [ ] Faculty Directory (`v1 & v2` profiles, department filters, Google Scholar publication counts)
  - [ ] Research & Innovation Centers (`Center for Quantum Computing`, `Autonomous Robotics Lab`)
- [ ] **Events Calendar (`/events`)**:
  - [ ] Upcoming Symposiums, Hackathons (`Jodhpur AI Hackfest`), & Heritage Festivals
  - [ ] Interactive Monthly Calendar Grid & Past Highlight Gallery
- [ ] **Resources & Document Center (`/resources` & `/faq`)**:
  - [ ] Downloadable Curricula Guides (`IGCSE`, `CBSE`, `B.Tech Syllabus`, `Exam Regulations`)
  - [ ] Comprehensive FAQ Accordion Center (`Admissions`, `Hostel`, `Fees`, `Academics`) with AI Counselor prompt
- [ ] **Contact Us & Journal/Blog (`/contact` & `/blog`)**:
  - [ ] Interactive Jodhpur Campus Map (`NH-62, Pali Road, Jodhpur`), Departmental Extensions Grid, & Direct Support Form
  - [ ] Institutional Journal & Student Editorial Hub (`v1 & v2` layouts)

## Phase 5: Verification, Polish & Production Readiness
- [ ] Perform WCAG 2.2 AA accessibility audit (contrast ratios, focus rings, screen reader labels)
- [ ] Test responsive layouts across desktop (`1440px`), tablet (`768px`), and mobile (`390px`) breakpoints
- [ ] Verify smooth Framer Motion micro-animations and zero-layout-shift performance

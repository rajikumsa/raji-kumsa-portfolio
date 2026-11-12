import { Project, ExperienceItem, Skill, Certification } from './types';
import fitnessMockupImg from './assets/images/fitness_app_mockup_1794385828289.jpg';
import dormitoryApiImg from './assets/images/dormitory_api_docs_1794385830772.jpg';
import portfolioWebImg from './assets/images/portfolio_web_preview_1794385829053.jpg';
import pingpongGameImg from './assets/images/pingpong_game_preview_1794385827985.jpg';
import certAndroidImg from './assets/images/cert_android_developer_udacity.png';
import certProgrammingImg from './assets/images/cert_programming_fundamentals_udacity.png';
import certDataAnalysisImg from './assets/images/cert_data_analysis_udacity.png';

export const PERSONAL_INFO = {
  name: 'Raji Kumsa',
  title: 'Backend & Android Developer',
  headline: 'Backend & Android developer — C#/ASP.NET Core, Java/Firebase. Trilingual (English, Amharic, Afan Oromo). Open to junior roles in Addis Ababa or remote.',
  email: 'rajakumsa38@gmail.com',
  phone: '+251 954846480',
  location: 'Addis Ababa, Ethiopia',
  bio: 'CS Graduate specialized in C#/ASP.NET Core backend APIs and native Java/Firebase Android engineering. Focused on clean architecture, unit testing, and performant code.',
  education: {
    degree: 'BSc. in Computer Science',
    institution: 'Arsi University',
    period: '2021 – 2025',
  },
  socials: {
    github: 'https://github.com/rajikumsa',
    portfolio: 'https://github.com/rajikumsa/raji-kumsa-portfolio',
    linkedin: 'https://www.linkedin.com/in/raji-k-61b30a312/',
    twitter: '#'
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'dormitory-api',
    title: 'Dormitory Management API',
    category: 'Backend',
    description: 'Enterprise REST API for university accommodation allocation with automated xUnit & Moq test suites.',
    fullDescription: 'An enterprise-grade RESTful API designed to solve university dormitory housing allocation bottlenecks. Facilitates student enrollment matching, algorithmic room distribution, check-in statuses, and audit logging. Built with ASP.NET Core, C#, Entity Framework Core, and SQL Server, with comprehensive unit testing via xUnit & Moq.',
    technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'EF Core', 'xUnit & Moq', 'Swagger UI'],
    githubUrl: 'https://github.com/rajikumsa/DormitoryAPI',
    liveDemoUrl: 'https://github.com/rajikumsa/DormitoryAPI#readme',
    demoLabel: 'API Docs & Postman',
    imageUrl: dormitoryApiImg,
    features: [
      'Algorithmic allocation engine matching students by department and seniority.',
      'Comprehensive unit and integration test suites written with xUnit and Moq.',
      'Input validation with sanitization against SQL and model injection.',
      'Complete Swagger OpenAPI 3.0 specification with exportable Postman collection.'
    ],
    architecture: 'Clean Architecture with Repository & Unit of Work patterns separating domain entities, data context, and API controllers.'
  },
  {
    id: 'fitness-app',
    title: 'Fitness Mobile Application',
    category: 'Mobile',
    description: 'Native Android fitness tracking app with real-time Firebase sync, offline caching, and 3-language localization.',
    fullDescription: 'Developed as a Final Year Capstone Project at Arsi University. Enables users to record workouts, track physical metrics, and access structured workout regimens. Built natively in Java for Android, it features Firebase Authentication, live metric listeners, and complete XML string localization for Ethiopia and international users.',
    technologies: ['Java', 'Android SDK', 'Firebase Auth', 'Real-time DB', 'Offline SQLite', 'i18n'],
    githubUrl: 'https://github.com/rajikumsa/Fitness',
    liveDemoUrl: 'https://github.com/rajikumsa/Fitness/releases',
    demoLabel: 'Releases & APK',
    imageUrl: fitnessMockupImg,
    features: [
      'Trilingual UI localized into English, Amharic, and Afan Oromo.',
      'Firebase Authentication and real-time database synchronization.',
      'Local SQLite caching preserving user streaks without internet connection.',
      'Workout log tracking sets, reps, weights, and progress history.'
    ],
    architecture: 'Model-View-Controller (MVC) on Android with background asynchronous UI threads and Firebase snapshot listeners.'
  },
  {
    id: 'raji-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Web',
    description: 'Clean, modern portfolio dossier with 60fps animations, interactive CV modal, and CI/CD deployment.',
    fullDescription: 'Designed and engineered as a responsive developer portfolio dossier using React, TypeScript, and Tailwind CSS. Demonstrates clean component hierarchy, print-ready curriculum vitae generation, interactive project architecture inspection, and zero-clutter layout discipline.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Vite'],
    githubUrl: 'https://github.com/rajikumsa/raji-kumsa-portfolio',
    liveDemoUrl: 'https://rajikumsa.github.io/raji-kumsa-portfolio/',
    demoLabel: 'Live Website',
    imageUrl: portfolioWebImg,
    features: [
      'Modular functional React architecture with smooth Framer Motion reveals.',
      'Print-ready Curriculum Vitae modal with copy & print controls.',
      'Obsidian & Amber dark theme optimized for readability.',
      'Prepared for 1-click zero-config deployment on Vercel or Cloudflare.'
    ],
    architecture: 'Component-driven SPA structure built on Vite with client-side routing, TypeScript interfaces, and Tailwind CSS styling.'
  },
  {
    id: 'ping-pong',
    title: 'Ping Pong 2D Game',
    category: 'Experiments',
    description: 'Classic 60 FPS physics arcade simulation with collision vectors and automated AI paddle.',
    fullDescription: 'A classic Ping Pong simulation created to master event-loop architectures, collision vectors, and interactive UI logic. Built using Python and Pygame, featuring vector physics calculations and automated AI paddles.',
    technologies: ['Python', 'Pygame', 'Physics Vectors', 'Event Loop'],
    githubUrl: 'https://github.com/rajikumsa/pingpong-game',
    liveDemoUrl: 'https://github.com/rajikumsa/pingpong-game#readme',
    demoLabel: 'Source Code',
    imageUrl: pingpongGameImg,
    features: [
      'Real-time collision physics with angle reflections.',
      'Automated player paddle calculating intercept trajectories.',
      'Continuous 60 FPS update-and-render game loop.'
    ],
    architecture: 'Single-thread Game Loop structure separating the Update Physics tick and Render Graphics frames with delta-time synchronization.'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'digaf-microfinance',
    role: 'Digital Loan Officer',
    company: 'Digaf Microfinance',
    location: 'Addis Ababa, Ethiopia',
    period: 'July 2025 – November 2025 (5 mos)',
    description: [
      'Supported digital financial workflows and client verification systems for 100+ customer accounts.',
      'Ensured digital data accuracy and compliance across financial software platforms.'
    ],
    skillsApplied: ['Financial Workflows', 'Digital Systems', 'Data Verification', 'Compliance']
  },
  {
    id: 'ethiopian-airlines',
    role: 'Backend Development Intern',
    company: 'Ethiopian Airlines Group',
    location: 'Addis Ababa, Ethiopia',
    period: 'July 2024 – August 2024',
    description: [
      'Built and maintained backend Web APIs and micro-services using C# and ASP.NET Core.',
      'Collaborated in an Agile squad to optimize database queries and resolve API latency bottlenecks.'
    ],
    skillsApplied: ['C#', 'ASP.NET Core', 'RESTful APIs', 'SQL Server', 'Agile']
  },
  {
    id: 'arsi-project',
    role: 'Lead Project Developer (Final Year Capstone)',
    company: 'Arsi University',
    location: 'Asella, Ethiopia',
    period: 'September 2024 – April 2025',
    description: [
      'Engineered native Android fitness app with Java, Firebase real-time sync, and offline SQLite.',
      'Implemented full 3-language localization in English, Amharic, and Afan Oromo.'
    ],
    skillsApplied: ['Java (Android)', 'Firebase', 'SQLite', 'i18n Localization', 'Git']
  },
  {
    id: 'fira-studio',
    role: 'Web & Media Coordinator (Part-Time)',
    company: 'Fira Production Studio',
    location: 'Addis Ababa, Ethiopia',
    period: 'October 2024 – January 2025',
    description: [
      'Developed responsive promotional client landing pages using HTML, CSS, and JavaScript.',
      'Coordinated multimedia digital visual assets and marketing campaigns.'
    ],
    skillsApplied: ['HTML/CSS/JS', 'Web Layouts', 'Part-Time Coordination']
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'udacity-android',
    title: 'Android Developer Fundamentals',
    issuer: 'Udacity (Part of Accenture)',
    issueDate: 'Sep 23, 2024',
    verificationUrl: 'https://www.udacity.com/certificate/e/419c34ba-7293-11ef-8ee8-fbfc64425f1e',
    credentialId: '419c34ba-7293-11ef-8ee8-fbfc64425f1e',
    image: certAndroidImg,
    skills: ['Android SDK', 'Java', 'UI Lifecycles', 'Layouts'],
  },
  {
    id: 'udacity-programming',
    title: 'Programming Fundamentals',
    issuer: 'Udacity (Part of Accenture)',
    issueDate: 'Sep 26, 2024',
    verificationUrl: 'https://confirm.udacity.com/TXJZ4YHN',
    credentialId: 'TXJZ4YHN',
    image: certProgrammingImg,
    skills: ['Algorithms', 'Data Structures', 'Clean Code'],
  },
  {
    id: 'udacity-data-analysis',
    title: 'Data Analysis Fundamentals',
    issuer: 'Udacity (Part of Accenture)',
    issueDate: 'Sep 27, 2024',
    verificationUrl: 'https://confirm.udacity.com/HNLMYG95',
    credentialId: 'HNLMYG95',
    image: certDataAnalysisImg,
    skills: ['Data Wrangling', 'SQL & Queries', 'Insights'],
  },
];

export const SKILLS_DATA: Skill[] = [
  // Backend
  { name: 'C# / ASP.NET Core', category: 'technical', subCategory: 'Backend', iconName: 'CodeXml', level: 5, description: 'REST APIs, Entity Framework Core, LINQ, and MVC.' },
  { name: 'RESTful API & Swagger', category: 'technical', subCategory: 'Backend', iconName: 'Network', level: 5, description: 'Endpoints, DTOs, routing, and OpenAPI documentation.' },
  { name: 'xUnit & Moq Testing', category: 'technical', subCategory: 'Backend', iconName: 'ShieldCheck', level: 4, description: 'Automated unit tests, mocking layers, and assertions.' },
  { name: 'SQL Server & DB Design', category: 'technical', subCategory: 'Backend', iconName: 'Database', level: 4, description: 'Relational schemas, queries, migrations, and indexes.' },
  // Mobile & Web
  { name: 'Java (Android SDK)', category: 'technical', subCategory: 'Mobile', iconName: 'Smartphone', level: 4, description: 'Native Android architecture, activities, and lifecycles.' },
  { name: 'Firebase Sync & Auth', category: 'technical', subCategory: 'Mobile', iconName: 'Flame', level: 4, description: 'Real-time database, authentication, and offline caching.' },
  { name: 'React & TypeScript', category: 'technical', subCategory: 'Frontend', iconName: 'Globe', level: 4, description: 'Modern components, SPA routing, and responsive design.' },
  // Tools & Practices
  { name: 'Docker & DevOps CI', category: 'technical', subCategory: 'DevOps', iconName: 'Box', level: 4, description: 'Containerization, Dockerfiles, and GitHub Actions CI.' },
  { name: 'Git & GitHub', category: 'technical', subCategory: 'Tools', iconName: 'GitBranch', level: 5, description: 'Branching, code reviews, and version control.' },
  { name: 'Trilingual (EN / AM / OM)', category: 'soft', subCategory: 'Languages', iconName: 'Languages', level: 5, description: 'Fluent in English, Amharic, and Afan Oromo; app localization.' },
  { name: 'Agile & Teamwork', category: 'soft', subCategory: 'Practices', iconName: 'Users', level: 5, description: 'Sprint cycles, standups, and collaborative debugging.' },
];

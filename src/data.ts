import { Project, ExperienceItem, Skill } from './types';
import fitnessMockupImg from './assets/images/fitness_app_mockup_1794385828289.jpg';
import dormitoryApiImg from './assets/images/dormitory_api_docs_1794385830772.jpg';
import portfolioWebImg from './assets/images/portfolio_web_preview_1794385829053.jpg';
import pingpongGameImg from './assets/images/pingpong_game_preview_1794385827985.jpg';

export const PERSONAL_INFO = {
  name: 'Raji Kumsa',
  title: 'Backend & Android Developer',
  headline: 'Backend & Android developer — C#/ASP.NET Core, Java/Firebase. Trilingual (English, Amharic, Afan Oromo). Open to junior roles in Addis Ababa or remote.',
  email: 'rajakumsa38@gmail.com',
  phone: '+251 954846480',
  location: 'Addis Ababa, Ethiopia',
  bio: 'A Computer Science graduate with hands-on experience in backend API development, relational database engineering, and native Android applications. Skilled in C# (ASP.NET Core), SQL Server, Java (Android), and Firebase. Committed to writing clean, maintainable, and unit-tested code.',
  education: {
    degree: 'Bachelor of Science in Computer Science',
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
    description: 'Enterprise RESTful API for university student accommodation allocation, search, and administrative governance with automated xUnit test suites.',
    fullDescription: 'An enterprise-grade RESTful API designed to solve university dormitory housing allocation bottlenecks. Facilitates student enrollment matching, algorithmic room distribution, check-in statuses, and audit logging. Built with ASP.NET Core, C#, Entity Framework Core, and SQL Server, with comprehensive unit testing via xUnit & Moq.',
    technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'Entity Framework Core', 'xUnit & Moq', 'Swagger UI', 'Docker'],
    githubUrl: 'https://github.com/rajikumsa/DormitoryAPI',
    liveDemoUrl: 'https://github.com/rajikumsa/DormitoryAPI#readme',
    demoLabel: 'API Docs & Postman',
    imageUrl: dormitoryApiImg,
    features: [
      'Algorithmic Allocation: Automatic room distribution engine based on student department and academic seniority.',
      'Unit & Integration Testing: Test suites written with xUnit and Moq to validate business rules and mock repository contexts.',
      'Input Validation & Security: Sanitization of client payloads protecting against common SQL and model injection avenues.',
      'API Documentation: Complete Swagger OpenAPI 3.0 specification with exportable Postman collection.'
    ],
    architecture: 'Clean Architecture with Repository & Unit of Work patterns separating domain entities, data context, and API controllers.'
  },
  {
    id: 'fitness-app',
    title: 'Fitness Mobile Application',
    category: 'Mobile',
    description: 'Native Android fitness tracking app with real-time Firebase synchronization, offline caching, and trilingual localization (English, Amharic, Afan Oromo).',
    fullDescription: 'Developed as a Final Year Capstone Project at Arsi University. Enables users to record workouts, track physical metrics, and access structured workout regimens. Built natively in Java for Android, it features Firebase Authentication, live metric listeners, and complete XML string localization for Ethiopia and international users.',
    technologies: ['Java', 'Android SDK', 'Firebase Auth', 'Real-time DB', 'XML Layouts', 'Offline SQLite'],
    githubUrl: 'https://github.com/rajikumsa/Fitness',
    liveDemoUrl: 'https://github.com/rajikumsa/Fitness/releases',
    demoLabel: 'Releases & APK',
    imageUrl: fitnessMockupImg,
    features: [
      'Trilingual Localization: Full interface support for English, Amharic, and Afan Oromo.',
      'Authentication & Cloud Sync: Secure email/password authentication and live real-time sync via Firebase.',
      'Offline Persistence: Local SQLite caching preserving user streaks and session data without network access.',
      'Workout Tracker: Custom workout entry log storing reps, sets, weights, and timestamps.'
    ],
    architecture: 'Model-View-Controller (MVC) on Android with background asynchronous UI threads and Firebase snapshot listeners.'
  },
  {
    id: 'raji-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Web',
    description: 'Modern, high-performance developer portfolio built with React, TypeScript, and Vite. Designed with anti-slop restraint, printable CV, and CI/CD pipelines.',
    fullDescription: 'Designed and engineered as a responsive developer portfolio dossier using React, TypeScript, and Tailwind CSS. Demonstrates clean component hierarchy, print-ready curriculum vitae generation, interactive project architecture inspection, and zero-clutter layout discipline.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
    githubUrl: 'https://github.com/rajikumsa/raji-kumsa-portfolio',
    liveDemoUrl: 'https://rajikumsa.github.io/raji-kumsa-portfolio/',
    demoLabel: 'Live Website',
    imageUrl: portfolioWebImg,
    features: [
      'Component Architecture: Modular functional React components with responsive layouts.',
      'Interactive Curriculum Vitae: Print-friendly CV modal with quick clipboard and export tools.',
      'Anti-Clutter Design: Streamlined UX eliminating repetitive cards and unnecessary bloat.',
      'Continuous Deployment: Ready for 1-click hosting on Vercel, GitHub Pages, or Cloudflare.'
    ],
    architecture: 'Component-driven SPA structure built on Vite with client-side routing, TypeScript interfaces, and Tailwind CSS styling.'
  },
  {
    id: 'ping-pong',
    title: 'Interactive Ping Pong Game',
    category: 'Experiments',
    description: '2D arcade tennis simulation featuring collision vectors, 60 FPS physics loop, and adaptive AI opponent.',
    fullDescription: 'A classic Ping Pong simulation created to master event-loop architectures, collision vectors, and interactive UI logic. Built using Python and the Pygame library, the game runs fluidly at 60 FPS, incorporating physics bouncing angles and automated AI computer paddles.',
    technologies: ['Python', 'Pygame', 'Collision Physics', 'Event Loop'],
    githubUrl: 'https://github.com/rajikumsa/pingpong-game',
    liveDemoUrl: 'https://github.com/rajikumsa/pingpong-game#readme',
    demoLabel: 'Source & Gameplay',
    imageUrl: pingpongGameImg,
    features: [
      'Adaptive AI Engine: An automated player paddle that calculates intercept trajectories to challenge the player.',
      'Real-time Collision Maps: Accurate collision boxes tracking wall reflections, paddle contact points, and deflection angles.',
      'Scoreboards: Live scoreboard update showing victory triggers at final thresholds.'
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
    period: 'July 2025 – November 2025',
    description: [
      'Supported digital platforms and loan verification workflows, improving access to financial services for 100+ clients.',
      'Built familiarity with financial workflows, customer data verification, and digital loan management systems.',
      'Maintained accurate digital records and ensured timely operational compliance across customer accounts.'
    ],
    skillsApplied: ['Financial Workflows', 'Digital Platforms', 'Data Verification', 'Process Optimization']
  },
  {
    id: 'ethiopian-airlines',
    role: 'Backend Development Intern',
    company: 'Ethiopian Airlines Group',
    location: 'Addis Ababa, Ethiopia',
    period: 'July 2024 – August 2024',
    description: [
      'Developed, tested, and maintained backend micro-services and Web APIs using C# and ASP.NET Core.',
      'Collaborated in an Agile development squad to assess legacy routes and optimize query bottlenecks.',
      'Assisted in data integrity protocols and connected mock payloads to live storage engines.'
    ],
    skillsApplied: ['C#', 'ASP.NET Core', 'RESTful APIs', 'SQL Server', 'Agile / Scrum']
  },
  {
    id: 'arsi-project',
    role: 'Lead Project Developer (Final Year Capstone)',
    company: 'Arsi University',
    location: 'Asella, Ethiopia',
    period: 'September 2024 – April 2025',
    description: [
      'Engineered a native Android mobile app targeting public fitness and health routines.',
      'Configured Firebase Real-time DB listeners to securely sync workout metrics, profiles, and historical streaks.',
      'Implemented full 3-language localized translation (English, Amharic, and Afan Oromo) in XML configuration schemas.'
    ],
    skillsApplied: ['Java (Android)', 'Firebase', 'Android SDK', 'Localization (i18n)', 'Git']
  },
  {
    id: 'fira-studio',
    role: 'Multimedia & Web Coordinator (Part-Time)',
    company: 'Fira Production Studio',
    location: 'Addis Ababa, Ethiopia',
    period: 'October 2024 – January 2025 (Part-Time)',
    description: [
      'Created engaging visual assets, graphic layouts, and promotional media content.',
      'Consulted on marketing outreach campaigns and built lightweight client web showcases using HTML, CSS, and JavaScript.'
    ],
    skillsApplied: ['HTML/CSS/JS', 'Digital Media', 'Part-Time Coordination', 'Communication']
  }
];

export const SKILLS_DATA: Skill[] = [
  // Technical Backend & Testing
  {
    name: 'C# / ASP.NET Core',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'CodeXml',
    level: 5,
    description: 'Object-oriented programming, building solid backend routing patterns, Web APIs, and Entity Framework Core.'
  },
  {
    name: 'RESTful API Design',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'Plug',
    level: 5,
    description: 'Designing documented RESTful APIs, HTTP routing structures, and request-response patterns.'
  },
  {
    name: 'Unit Testing (xUnit / Moq)',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'ShieldCheck',
    level: 4,
    description: 'Writing unit and integration tests with xUnit, NUnit, and Moq to validate business logic and mock dependencies.'
  },
  {
    name: 'SQL Server & EF Core',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'Database',
    level: 4,
    description: 'Relational schema design, normalization, queries, indexes, migrations, and Entity Framework data contexts.'
  },
  // Mobile & DevOps
  {
    name: 'Java (Android SDK)',
    category: 'technical',
    subCategory: 'Mobile & Frontend',
    iconName: 'Smartphone',
    level: 4,
    description: 'Developing native mobile utility components, layouts, activity life-cycles, and mobile threading.'
  },
  {
    name: 'Firebase',
    category: 'technical',
    subCategory: 'Mobile & Frontend',
    iconName: 'Flame',
    level: 4,
    description: 'Integrating NoSQL Firebase databases, security rules, Google authentication, and real-time listeners.'
  },
  {
    name: 'Docker & DevOps',
    category: 'technical',
    subCategory: 'Tools & DevOps',
    iconName: 'Boxes',
    level: 4,
    description: 'Containerizing services with Docker, writing Dockerfiles, Postman API collections, and GitHub Actions CI.'
  },
  {
    name: 'Git & Version Control',
    category: 'technical',
    subCategory: 'Tools & DevOps',
    iconName: 'GitBranch',
    level: 5,
    description: 'Managing repository histories, pull request reviews, branching strategies, and resolving merge conflicts.'
  },
  // Soft & Language
  {
    name: 'Trilingual Communication',
    category: 'soft',
    subCategory: 'Languages',
    iconName: 'Languages',
    level: 5,
    description: 'Fluent in English, Amharic, and Afan Oromo; experienced in multilingual string localization.'
  },
  {
    name: 'Teamwork & Agile',
    category: 'soft',
    subCategory: 'Professional Qualities',
    iconName: 'Users',
    level: 5,
    description: 'Participating in daily stand-ups, review sessions, and contributing constructively in Agile circles.'
  },
  {
    name: 'Problem-solving',
    category: 'soft',
    subCategory: 'Professional Qualities',
    iconName: 'Lightbulb',
    level: 5,
    description: 'Systematic root-cause debugging, tracing variables, and assessing core architectural issues.'
  }
];

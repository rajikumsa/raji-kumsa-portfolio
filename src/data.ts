import { Project, ExperienceItem, Skill } from './types';

export const PERSONAL_INFO = {
  name: 'Raji Kumsa',
  title: 'Computer Science Graduate | Backend & Mobile Developer',
  email: 'rajakumsa38@gmail.com',
  phone: '+251 954846480',
  location: 'Addis Ababa, Ethiopia',
  bio: 'A Computer Science graduate with a strong academic record and practical experience in backend development, mobile applications, and IT systems. Skilled in building scalable APIs, database design, and native mobile development. Proficient in Agile methodologies, collaborative teamwork, and creative problem-solving. Committed to writing clean, maintainable, and well-documented code that delivers high-performance solutions.',
  education: {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Arsi University',
    period: '2021 – 2025',
    graduationStatus: 'Graduated in 2025 with strong academic distinction',
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
    id: 'fitness-app',
    title: 'Fitness Mobile Application',
    category: 'Mobile',
    description: 'A comprehensive Android fitness tracking mobile application with real-time sync, multi-language support, and personalized logging.',
    fullDescription: 'This application was developed as a Final Year Capstone Project. It aims to empower users to track workouts, monitor fitness metrics, and access tailored workout regimens. Built natively for Android using Java, it implements a secure authentication flow and synchronized real-time data storage powered by Firebase.',
    technologies: ['Java', 'Firebase', 'Android SDK', 'Real-time Database', 'XML Layouts'],
    githubUrl: 'https://github.com/rajikumsa/Fitness',
    features: [
      'Multi-language Support: English, Amharic, and Afan Oromo options to maximize accessibility.',
      'User Authentication: Secure persistent email/password signup and login utilizing Firebase Auth.',
      'Workout Tracker: Custom workout entry log that stores reps, sets, weights, and timestamps.',
      'Instant Syncing: Live real-time updates of metrics and achievements across multiple devices.',
      'Offline Persistence: Caches user metrics locally when an active internet connection is unavailable.'
    ],
    architecture: 'Model-View-Controller (MVC) architecture on Android, utilizing asynchronous UI threads and Event Listeners matching Firebase triggers.'
  },
  {
    id: 'dormitory-api',
    title: 'Dormitory Management API',
    category: 'Backend',
    description: 'Secure, high-bandwidth backend API for student accommodation allocation, search, and administrative oversight.',
    fullDescription: 'An enterprise-grade RESTful API designed to solve university dormitory housing complexities. This backend facilitates student enrollment matching, room distribution algorithms, check-in statuses, and system user logging. Developed with ASP.NET Core and C#, using Entity Framework Core for robust SQL Server queries.',
    technologies: ['C#', 'ASP.NET Core', 'Web API', 'SQL Server', 'Entity Framework Core', 'RESTful Design'],
    githubUrl: 'https://github.com/rajikumsa/DormitoryAPI',
    features: [
      'Dorm Allocation Engine: Algorithmic distribution of rooms based on student years and departments.',
      'CRUD Operations: Comprehensive student profiles, dormitory structures, maintenance tickets, and staff assignments.',
      'Input Validation & Security: Sanitization of client parameters to protect against common injection avenues.',
      'Performance Tuning: Asynchronous endpoints preventing thread starvation during peak semester entry hours.'
    ],
    architecture: 'Repository and Unit of Work patterns separating domain layer constraints, database access context, and controller structures.'
  },
  {
    id: 'ping-pong',
    title: 'Interactive Ping Pong Game',
    category: 'Games',
    description: 'Interactive graphic tennis simulation featuring scoring matrices, basic physics, and adaptive AI opponents.',
    fullDescription: 'A classic Ping Pong simulation created to master event-loop architectures, collision vectors, and interactive UI logic. Built using Python and the Pygame library, the game runs fluidly at 60 FPS, incorporating physics bouncing angles and automated AI computer paddles.',
    technologies: ['Python', 'Pygame', 'Basic Engine Physics', 'Event-Driven Architectures'],
    githubUrl: 'https://github.com/rajikumsa/pingpong-game',
    features: [
      'Adaptive AI Engine: An automated player paddle that calculates intercept trajectories to challenge the player.',
      'Real-time Collision Maps: Accurate collision boxes tracking wall reflections, paddle contact points, and deflection angles.',
      'Scoreboards: Live scoreboard update showing victory triggers at final thresholds.'
    ],
    architecture: 'Single-thread Game Loop structure separating the Update Physics tick and Render Graphics frames with delta-time synchronization.'
  },
  {
    id: 'raji-portfolio',
    title: 'Personal Developer Portfolio',
    category: 'Web',
    description: 'High-performance developer portfolio showcasing full-stack capabilities, C# REST APIs, Android development, and CV generator.',
    fullDescription: 'Designed and engineered as a modern, responsive developer portfolio using React, TypeScript, and Tailwind CSS. Demonstrates clean component architecture, print-ready curriculum vitae generation, interactive project architecture inspection, and zero-clutter layout discipline.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'],
    githubUrl: 'https://github.com/rajikumsa/raji-kumsa-portfolio',
    features: [
      'Component Architecture: Modular functional React components with responsive layouts.',
      'Interactive Curriculum Vitae: Print-friendly CV modal with quick clipboard and export tools.',
      'Anti-Clutter Design: Streamlined UX eliminating repetitive cards and unnecessary bloat.',
      'Continuous Deployment: Fully configured for fast production builds and Netlify hosting.'
    ],
    architecture: 'Component-driven SPA structure built on Vite with client-side routing, TypeScript interfaces, and Tailwind CSS styling.'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'digaf-microfinance',
    role: 'Digital Loan Officer',
    company: 'Digaf Microfinance',
    location: 'Addis Ababa, Ethiopia',
    period: 'December 2025 – Present',
    description: [
      'Support clients through digital platforms, improving access to financial services.',
      'Maintain accurate records and ensure efficient loan processing workflows.'
    ],
    skillsApplied: ['Digital Platforms', 'Customer Support', 'Process Optimization', 'Record Keeping']
  },
  {
    id: 'ethiopian-airlines',
    role: 'Backend Development Intern',
    company: 'Ethiopian Airlines',
    location: 'Addis Ababa, Ethiopia',
    period: 'July 2024 – August 2024',
    description: [
      'Developed, tested, and maintained backend micro-services and Web APIs using C# and ASP.NET.',
      'Collaborated in an Agile development squad to assess legacy routes and optimize query bottlenecks.',
      'Assisted in data integrity protocols and connected mock payloads to live storage engines.'
    ],
    skillsApplied: ['C#', 'ASP.NET Core', 'RESTful APIs', 'Teamwork', 'Agile Methodologies']
  },
  {
    id: 'arsi-project',
    role: 'Lead Project Developer (Final Year Capstone)',
    company: 'Arsi University',
    location: 'Asella, Ethiopia',
    period: 'September 2024 – April 2025',
    description: [
      'Engineered an Android mobile app targeting public fitness and health routines.',
      'Configured Firebase Real-time DB listeners to securely sync workout metrics, profiles, and historical streaks.',
      'Implemented full 3-language localized translation (English, Amharic, and Afan Oromo) in XML configuration schemas.'
    ],
    skillsApplied: ['Java (Android)', 'Firebase', 'Android SDK', 'Problem-solving', 'Adaptability']
  },
  {
    id: 'fira-studio',
    role: 'Social Media & Multimedia Coordinator',
    company: 'Fira Production Studio',
    location: 'Addis Ababa, Ethiopia',
    period: 'October 2024 – April 2025',
    description: [
      'Created engaging visual assets, graphics layouts, and promotional video clips.',
      'Curated regular posts across Facebook and Instagram leading to elevated user engagement metrics.',
      'Consulted on marketing and client outreach campaigns using interactive web interfaces.'
    ],
    skillsApplied: ['HTML/CSS/JS', 'Communication', 'Quick Learning', 'Design & Aesthetics']
  }
];

export const SKILLS_DATA: Skill[] = [
  // Technical Backend
  {
    name: 'C# / ASP.NET',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'CodeXml',
    level: 5,
    description: 'Object-oriented programming, building solid backend routing patterns and Entity Framework integration.'
  },
  {
    name: 'API Development',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'Plug',
    level: 5,
    description: 'Designing fully documented RESTful APIs, routing structures, and request-response patterns.'
  },
  {
    name: 'SQL Databases',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'Database',
    level: 4,
    description: 'Structuring tables, writing efficient JOIN queries, views, indexes, and maintaining system databases.'
  },
  {
    name: 'RESTful APIs',
    category: 'technical',
    subCategory: 'Backend & Systems',
    iconName: 'Network',
    level: 5,
    description: 'Consuming, building, and securing payload structures over HTTP using clean standard protocols.'
  },
  // Technical Frontend/Mobile
  {
    name: 'Java (Android)',
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
    description: 'Integrating NoSQL Firebase databases, security rules, Google authentication, and notifications.'
  },
  {
    name: 'HTML/CSS/JS',
    category: 'technical',
    subCategory: 'Mobile & Frontend',
    iconName: 'Globe',
    level: 4,
    description: 'Constructing modern responsive web views using modern grids, flexbox, and semantic attributes.'
  },
  {
    name: 'Git & Version Control',
    category: 'technical',
    subCategory: 'Tools & Workflows',
    iconName: 'GitBranch',
    level: 4,
    description: 'Managing repository histories, staging branch combinations, and resolving merge challenges.'
  },
  // Soft Skills
  {
    name: 'Communication',
    category: 'soft',
    subCategory: 'Professional Qualities',
    iconName: 'MessageSquare',
    level: 5,
    description: 'Articulating technical constraints clearly to cross-functional peers and writing documentation.'
  },
  {
    name: 'Teamwork',
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
    description: 'Breaking down multi-step bugs systematically, tracing variables, and assessing core architectural issues.'
  },
  {
    name: 'Adaptability',
    category: 'soft',
    subCategory: 'Professional Qualities',
    iconName: 'RefreshCw',
    level: 4,
    description: 'Pivoting fast when parameters shift, learning new language constructs, and adjusting schedules.'
  },
  {
    name: 'Quick Learning',
    category: 'soft',
    subCategory: 'Professional Qualities',
    iconName: 'GraduationCap',
    level: 5,
    description: 'Absorbing tool documentations rapidly and applying theoretical practices immediately to code.'
  }
];

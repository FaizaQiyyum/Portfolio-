import { Project, Experience, SkillCategory } from './types';

export const PROFILE = {
  name: 'Faiza Qiyyum',
  title: 'Full-Stack Developer & AI Specialist',
  location: 'Lahore, Pakistan 🇵🇰',
  email: 'faizaqiyyum121@gmail.com',
  github: 'https://github.com/FaizaQiyyum',
  linkedin: 'https://linkedin.com/in/faizaqiyyum',
  tagline: 'Hi there! I build clean, simple, and helpful web applications. Let\'s work together or have some warm tea ☕🎨',
  heroHeadline: 'Hi, I am Faiza: Full-Stack Web and AI Developer! ✨',
  bio: 'I am an AI Engineer currently working at a USA-based startup, where I am leading the technical architecture for "Techie Tim\'s World" — an AI-focused literacy platform for neurodiverse children. I integrate OpenAI GPT-4o via Django REST API with Phaser.js game mechanics to deliver real-time, empathetic AI feedback, and build adaptive learning profiles using PostgreSQL and Supabase. I did not complete my full university degree, but I completed my Final Year Project with a perfect 4/4 CGPA and earned an A grade in CS core subjects, proving academic foundations alongside real-world engineering. My team also won 1st place out of 163+ developers in a global 24-hour hackathon. I write simple, clean, and working code.',
};

export const ACHIEVEMENTS = [
  {
    id: 'hackathon',
    title: 'Vercel x Foru.ms Global Hackathon Champion! 🏆',
    subtitle: '1st Place globally in a 24-hour sprint',
    metric: '1st / 163+',
    description: 'We won first place out of 163+ developers worldwide in an intense coding competition! I helped make Forum-AI-Lite.',
    highlight: 'Made a fast tool that summarizes big chat discussions in seconds so it is easy to read.',
  },
  {
    id: 'gpa',
    title: 'Perfect 4/4 CGPA in Final Year Project! 🎓',
    subtitle: 'BSCS — Virtual University of Pakistan (Degree not completed)',
    metric: '4/4 CGPA',
    description: 'Developed and explained my project AccessJobs before examiners. Got a perfect 4.0 GPA in this final project!',
    highlight: 'Built clean search-pairing algorithms and connected the backend database securely.',
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'seek-sight',
    role: 'Full-Stack Web & AI Coder',
    company: 'Seek & Sight',
    companySub: "US Interactive Learning Division",
    location: 'Lahore (Remote)',
    period: 'May 2026 - Present',
    type: 'Full-time Remote',
    points: [
      'Leading the technical architecture for "Techie Tim\'s World," an AI-focused literacy platform for neurodiverse children.',
      'Integrating OpenAI GPT-4o via Django REST API with Phaser.js game mechanics to deliver real-time, empathetic AI feedback.',
      'Building adaptive learning profiles and student progress data pipelines using PostgreSQL and Supabase.'
    ],
    techStack: ['Python', 'Django REST', 'React.js', 'ChatGPT API', 'Phaser.js', 'PostgreSQL']
  },
  {
    id: 'ecoverum',
    role: 'Full Stack Web Developer',
    company: 'EcoVerum',
    location: 'Lahore (Remote)',
    period: 'May 2026 - Present',
    type: 'Full-time Remote',
    points: [
      'Helping build soil health maps and tracking tools for international users.',
      'Making easy React dashboards and graphs that load very fast on mobile screens.',
      'Writing backend APIs and connecting them safely with PostgreSQL databases.'
    ],
    techStack: ['Python', 'Django', 'React.js', 'Tailwind CSS', 'Schema Layouts', 'PostgreSQL']
  },
  {
    id: 'coachbridge',
    role: 'UI Auditor & Conversational QA Expert',
    company: 'CoachBridge AS',
    location: 'Lahore (Remote)',
    period: 'May 2026 - Present',
    type: 'Remote Quality Specialist',
    points: [
      'Testing voice chat applications and finding issues or delays before launch.',
      'Checking AI voice behavior and fixing bugs in the app.',
      'Creating simple bug reports so the team can fix errors quickly.'
    ],
    techStack: ['UI Usability', 'Quality Audits', 'Bug Reporting', 'Voice API Testing', 'Product UX']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'forum-ai-lite',
    title: 'Forum-AI-Lite 🧩',
    subtitle: 'AI Chat Distiller and Summarizer',
    description: 'A smart tool that reads long forum chats and creates clean summaries so anyone can understand quickly.',
    points: [
      'Helped win 1st place out of 163 developers worldwide.',
      'Built using Python Django for backend and React for frontend.',
      'Changes messy forum chats into simple bullet points.'
    ],
    techStack: ['Python', 'Django', 'React', 'JavaScript', 'HTML/CSS', 'AI Summaries'],
    hackathonWinner: true,
    demoUrl: 'https://forumailite.vercel.app/',
    githubUrl: 'https://github.com/FaizaQiyyum/Forum-AI-Lite'
  },
  {
    id: 'access-jobs',
    title: 'AccessJobs 💼',
    subtitle: 'Candidate Skill & Job Matcher',
    description: 'My Final Year Project (FYP) that connects job seekers with matching jobs based on their skills in real-time.',
    points: [
      'Received a 4.0 GPA in this project from my examiners!',
      'Clean and simple dashboards made with Tailwind CSS.',
      'Connected a secure SQL Server database with Django REST backend.'
    ],
    techStack: ['React', 'Python', 'Django', 'SQL Server', 'Match Algorithm', 'Tailwind CSS'],
    gpaIndicator: true,
    demoUrl: '#demo',
    githubUrl: 'https://github.com/FaizaQiyyum/AI-Job-Recommendation'
  },
  {
    id: 'job-market-analyzer',
    title: 'Market Salary & Tech Analyzer 📈',
    subtitle: 'Trends & Salary Range Analyzer',
    description: 'An easy dashboard to see which programming skills are paid well in the software market.',
    points: [
      'Smooth, fast caching using secure, minimal Flask frameworks.',
      'Clean and soft user interface that is easy on the eyes.',
      'Simple filter buttons to view junior and senior salary differences.'
    ],
    techStack: ['Python', 'Pandas', 'Flask', 'JavaScript', 'SQL Server', 'Analytics', 'Dashboard'],
    demoUrl: '#demo',
    githubUrl: 'https://github.com/FaizaQiyyum/Data-Analysis-Assistant'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & Smart Tools ⚡',
    items: [
      { name: 'ChatGPT & GPT-4o Integration', level: 'Expert', description: 'Adding AI features directly into software code.' },
      { name: 'AI Text Summarization', level: 'Expert', description: 'Changing large discussions into simple logs.' },
      { name: 'Testing Voice Interfaces', level: 'Advanced', description: 'Developing and checks speaking features.' },
      { name: 'Search & Match Algorithms', level: 'Advanced', description: 'Making formulas to rank and match candidates.' }
    ]
  },
  {
    title: 'Frontend & React UI 🗡️',
    items: [
      { name: 'Python Development', level: 'Expert', description: 'Building databases and servers.' },
      { name: 'Django REST APIs', level: 'Expert', description: 'Making custom backend endpoints.' },
      { name: 'React Webapps', level: 'Expert', description: 'Designing interactive frontends.' },
      { name: 'JavaScript Coding', level: 'Expert', description: 'Writing clean code for browsers.' },
      { name: 'Database Queries', level: 'Expert', description: 'Retriving and filtering data quickly.' }
    ]
  },
  {
    title: 'Database & Backend 🪨',
    items: [
      { name: 'PostgreSQL & MySQL Databases', level: 'Expert', description: 'Storing and managing tables.' },
      { name: 'Supabase Integration', level: 'Expert', description: 'Adding user authentication.' },
      { name: 'SQL Server Databases', level: 'Expert', description: 'Designing secure tables.' },
      { name: 'Git & GitHub Version Control', level: 'Expert', description: 'Saving code history.' }
    ]
  },
  {
    title: 'Testing & Quality Check 🎯',
    items: [
      { name: 'Usability Testing', level: 'Expert', description: 'Checking pages to make sure they work.' },
      { name: 'Easy Web Navigation', level: 'Expert', description: 'Making clean layouts.' },
      { name: 'Bug Tracking & Reporting', level: 'Expert', description: 'Creating simple bug logs.' }
    ]
  }
];

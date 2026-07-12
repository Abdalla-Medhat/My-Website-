export const portfolio = {
  personal: {
    name: "Abdallah Medhat Kamel",
    title: "Junior Flutter Developer",
    titleAlt: "Mobile Application Developer",
    phone: "01097034786",
    email: "abdallahmedhat.dev@gmail.com",
    location: "Egypt",
    militaryService: "Attended",
    workPreference: "Flexible (On-site & Remote)",
    linkedin: "https://linkedin.com/in/abdallah-medhat1/",
    github: "https://github.com/Abdalla-Medhat",
    summary:
      "Junior Flutter Developer with hands-on experience in building robust mobile applications for the Android platform. Proficient in REST API integration, data management, and UI implementation, with a strong problem-solving mindset and a commitment to continuous learning.",
  },

  skills: {
    "Languages & Frameworks": [
      "Flutter SDK",
      "Dart",
      "Cross-platform Mobile Development",
      "Android Development",
    ],
    "Backend & APIs": [
      "REST API Integration",
      "JSON",
      "HTTP Networking",
      "PHP",
      "MySQL",
      "MariaDB",
    ],
    "State Management": ["setState", "GetX"],
    "Databases & Storage": [
      "SQLite",
      "SharedPreferences",
      "Local Storage",
      "Cloud Firestore",
    ],
    Firebase: [
      "Firebase Authentication",
      "Cloud Firestore",
      "Firebase Storage",
    ],
    "Async & Architecture": [
      "Async Programming",
      "Streams",
      "Futures",
      "Dependency Injection",
    ],
    "UI & Animation": [
      "Responsive UI",
      "Animations",
      "AnimationController",
      "Tween",
    ],
    "Tools & Practices": ["Git", "GitHub", "CRUD Operations"],
  },

  projects: [
    {
      title: "MyNote - Secure Cross-Platform Notes Application",
      status: "CS50x Final Project",
      technologies: ["Flutter", "Dart", "SQLite"],
      github: "https://github.com/Abdalla-Medhat/My-Note",
      description:
        "Secure notes application with multi-user isolation, CRUD operations, rich media attachments, and parameterized SQLite queries to prevent SQL injection.",
      featured: true,
    },
    {
      title: "Mesbahaty - Smart Muslim Dhikr Counter",
      status: null,
      technologies: ["Flutter", "Dart", "SQLite"],
      github: "https://github.com/Abdalla-Medhat/Mesbahaty",
      description:
        "Flutter application for tracking daily dhikr with customizable counters and persistent local storage.",
      featured: true,
    },
    {
      title: "My Notes Cloud - Cloud-Based Notes Application",
      status: null,
      technologies: ["Flutter", "Dart", "REST API", "SharedPreferences"],
      github: "https://github.com/Abdalla-Medhat/My-Notes-Cloud",
      description:
        "Cloud-based notes application with authentication, CRUD operations, and REST API integration.",
      featured: false,
    },
    {
      title: "My Notes Cloud Backend - PHP REST API",
      status: null,
      technologies: ["PHP", "MySQL", "REST API"],
      github: "https://github.com/Abdalla-Medhat/My-Notes-Backend",
      description:
        "RESTful backend supporting the Flutter app with authentication, secure password hashing, and MySQL integration.",
      featured: false,
    },
  ],

  experience: [
    {
      role: "Freelance Flutter Developer",
      company: "Self-Employed",
      description:
        "Self-employed Flutter developer specializing in mobile application development.",
      responsibilities: [
        "Developed multiple Flutter applications targeting Android platforms.",
        "Implemented REST API integrations and local/cloud storage solutions.",
        "Built complete applications from UI implementation to backend connectivity.",
        "Managed personal projects and pursued continuous learning through hands-on development.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor's Degree in Education",
      institution: "Al-Azhar University",
      location: "Egypt",
    },
  ],

  certifications: [
    {
      title: "CS50x: Introduction to Computer Science",
      issuer: "Harvard University (edX)",
      year: null,
      description:
        "Comprehensive course covering fundamental computer science concepts, algorithms, data structures, and web development using C, Python, SQL, and JavaScript.",
      url: "https://cs50.harvard.edu/certificates/f1370425-1247-4e58-99fd-7130453541e3",
    },
    {
      title: "1 Million Prompters Program",
      issuer: "Dubai Future Foundation & Dubai Centre for Artificial Intelligence",
      year: "2026",
      description:
        "Completed practical training in prompt engineering, generative AI, and AI workflow optimization. Applied AI tools for productivity, automation, and real-world problem solving.",
      url: "https://omp.dub.ai/certificate/W0RPcj9ZqTDk",
    },
    {
      title: "Nano Tips for Career Growth from Today's Top Business Leaders",
      issuer: "LinkedIn Learning",
      year: null,
      description:
        "Professional development course covering career growth, leadership, networking, workplace communication, and success strategies.",
      url: "https://lnkd.in/dRS6NdVQ",
    },
  ],

  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Proficient" },
  ],
};

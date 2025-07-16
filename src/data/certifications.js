export const certificationsData = [
  {
    id: 1,
    title: "Introduction to MongoDB",
    provider: "Guvi Geek Networks, IITM Research Park",
    type: "Database Management",
    date: "2024",
    status: "Completed",
    credentialId: "hr3H247j81g4B8R248",
    description: "Comprehensive course covering MongoDB fundamentals, database design, queries, indexing, and performance optimization for NoSQL applications.",
    skills: [
      "NoSQL Database Design",
      "MongoDB Queries",
      "Data Modeling",
      "Indexing Strategies",
      "Performance Optimization",
      "Aggregation Framework"
    ],
    topics: [
      "MongoDB Architecture and Setup",
      "CRUD Operations and Query Optimization",
      "Schema Design and Data Modeling",
      "Indexing and Performance Tuning",
      "Aggregation Pipeline",
      "Replication and Sharding"
    ],
    icon: "SiMongodb",
    color: "#47A248",
    certificate: "/certificates/1746182773101.jfif",
    verificationUrl: "https://www.guvi.in/share-certificate/hr3H247j81g4B8R248"
  },
  {
    id: 2,
    title: "Next.js Development",
    provider: "Guvi Geek Networks, IITM Research Park",
    type: "Frontend Framework",
    date: "2024",
    status: "Completed",
    credentialId: "3h66g6748ry8Aq418Z",
    description: "Advanced Next.js course covering server-side rendering, static site generation, API routes, and modern React patterns for production-ready applications.",
    skills: [
      "Next.js Framework",
      "Server-Side Rendering (SSR)",
      "Static Site Generation (SSG)",
      "API Routes",
      "React Hooks",
      "Performance Optimization"
    ],
    topics: [
      "Next.js Fundamentals and Routing",
      "Server-Side Rendering vs Static Generation",
      "API Routes and Backend Integration",
      "Performance Optimization Techniques",
      "Deployment and Production Best Practices",
      "SEO and Meta Tags Management"
    ],
    icon: "TbBrandNextjs",
    color: "#000000",
    certificate: "/certificates/nextjs-guvi.pdf",
    verificationUrl: "https://www.guvi.in/share-certificate/3h66g6748ry8Aq418Z"
  },
  {
    id: 3,
    title: "Node.js",
    provider: "Guvi Geek Networks, IITM Research Park",
    type: "Node.js",
    date: "2024",
    status: "Completed",
    credentialId: "k14X6M3o676Z313jlF",
    description: "Comprehensive Agile Scrum Master certification covering Scrum framework, team facilitation, sprint planning, and agile project management methodologies.",
    skills: [
      "Node js",
      "Backend Development",
      "Backend Framework",
      "Express js",
      "MongoDB connection",
      "API Creation",
     
    ],
    topics: [
      "Node js Framework",
      "Express js",
      "Database Planning ",
      "Daily Standups and Sprint Reviews",
      "Retrospectives and Continuous Improvement",
      "Agile Metrics and Reporting"
    ],
    icon: "MdGroups",
    color: "#FF6B6B",
    certificate: "/certificates/nodejs-guvi.pdf",
    verificationUrl: "https://www.guvi.in/share-certificate/k14X6M3o676Z313jlF"
  }
];

export const certificationStats = [
  {
    category: "Database Technologies",
    count: certificationsData.filter(cert => cert.type === "Database Management").length,
    icon: "FaDatabase",
    color: "from-green-500 to-teal-500"
  },
  {
    category: "Frontend Frameworks",
    count: certificationsData.filter(cert => cert.type === "Frontend Framework").length,
    icon: "FaReact",
    color: "from-blue-500 to-purple-500"
  },
  {
    category: "Backend Frameworks",
    count: certificationsData.filter(cert => cert.type === "Node.js").length,
    icon: "FaServer",
    color: "from-yellow-500 to-orange-500"
  },
  {
    category: "Total Certifications",
    count: certificationsData.length,
    icon: "FaCertificate",
    color: "from-purple-500 to-pink-500"
  }
];

export const learningPath = [
  {
    phase: "Foundation",
    description: "Building core programming and web development skills",
    certifications: ["Introduction to MongoDB"],
    timeframe: "Early 2024"
  },
  {
    phase: "Advanced Frontend",
    description: "Mastering modern React frameworks and SSR techniques",
    certifications: ["Next.js Development"],
    timeframe: "Mid 2024"
  },
  {
    phase: "Professional Skills",
    description: "Developing project management and team collaboration abilities",
    certifications: ["Agile Scrum Master"],
    timeframe: "Late 2024"
  }
];

export const upcomingCertifications = [
  {
    title: "AWS Cloud Practitioner",
    provider: "Amazon Web Services",
    plannedDate: "Q2 2025",
    reason: "To expand cloud computing knowledge and deployment skills"
  },
  {
    title: "React Advanced Patterns",
    provider: "Meta (Facebook)",
    plannedDate: "Q1 2025",
    reason: "To deepen React expertise and learn advanced optimization techniques"
  },

  {
  title: "Agentic AI Development",
  provider: "Analytics Vidhya",
  plannedDate: "Q2 2025",
  reason: "To enhance overall development skills and deepen understanding of API design."
}

];
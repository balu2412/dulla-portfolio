// All content sourced from the resume PDF + public GitHub repos (github.com/balu2412).
// Edit this file to update copy — components read from here, nothing is hardcoded in JSX.

export const NAV_LINKS = ["About", "Skills", "Projects", "Credentials", "Contact"];

export const SKILL_GROUPS = [
  { label: "Languages", icon: "Code2", items: ["Python", "Java", "C"] },
  { label: "Web Technologies", icon: "Globe", items: ["HTML", "CSS", "REST APIs", "JSON"] },
  { label: "MERN Stack", icon: "Layers", items: ["React.js", "Node.js", "Express.js"] },
  { label: "Cloud & Tools", icon: "Cloud", items: ["Git", "GitHub", "Firebase", "Google Cloud"] },
  { label: "Databases", icon: "Database", items: ["MongoDB", "MySQL"] },
  { label: "Core Concepts", icon: "Terminal", items: ["DSA", "OOP"] },
];

export const PROJECTS = [
  {
    status: "Resolved",
    title: "ASHWINI",
    subtitle: "AI-Powered Healthcare Co-Pilot",
    description:
      "A full-stack assistant that reads medical reports, prescriptions and lab scans, then explains them in plain language. Includes an interactive anatomy module and a Gemini-powered chat assistant with built-in medical disclaimers.",
    metrics: [
      { value: "90%+", label: "insight accuracy" },
      { value: "40%", label: "faster emergency response" },
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini API", "Firebase"],
    repo: "https://github.com/balu2412/project-ashwini",
  },
  {
    status: "In Progress",
    title: "SMART CIVIC",
    subtitle: "Civic Issue Reporting & Resolution Platform",
    description:
      "Started as an OpenCV pothole-detection model and grew into a full reporting platform — citizens log potholes, streetlights, garbage and drainage issues, and track each one through Accepted → In Progress → Resolved, with automated email updates at every step.",
    metrics: [
      { value: "40%", label: "faster issue identification" },
      { value: "5", label: "status stages tracked" },
    ],
    stack: ["React", "Node.js", "Express", "Nodemailer", "MySQL", "OpenCV"],
    repo: "https://github.com/balu2412/smart-civic",
  },
  {
    status: "Shipped",
    title: "AI RESUME SCREENING & COACHING",
    subtitle: "Resume analyzer using LangChain, LangGraph and Ollama",
    description:
      "Multi-agent recruitment and coaching pipeline that parses resumes, matches them to job descriptions, identifies skill gaps, and generates personalized interview preparation. Supports Gemini/OpenAI/Ollama backends and includes a Streamlit dashboard plus a Mock Demo mode for offline testing.",
    metrics: [
      { value: "Multi-Agent", label: "LangGraph pipeline" },
      { value: "Streamlit", label: "Dashboard UI" },
    ],
    stack: [
      "langgraph",
      "langchain",
      "langchain-google-genai",
      "langchain-openai",
      "langchain-community",
      "streamlit",
      "pypdf",
      "python-docx",
      "pydantic",
      "ollama",
    ],
    repo: "https://github.com/balu2412/resume_analyzer_using-langchain-and-ollama",
  },
];

export const MORE_BUILDS = [
  { name: "HR Interview Agent", repo: "https://github.com/balu2412/HR-interview-agent" },
  { name: "Document Analyzer Agent", repo: "https://github.com/balu2412/Document-analyzer-agent" },
  { name: "Gadget Advisor Agent", repo: "https://github.com/balu2412/gadget_advisor_agent" },
  { name: "200+ NeetCode Submissions", repo: "https://github.com/balu2412/neetcode-submissions" },
];

export const CERTIFICATIONS = [
  { name: "Career Essentials in Generative AI", org: "Microsoft & LinkedIn Learning" },
  { name: "Python for Data Science", org: "IBM & Cognitive Class" },
  { name: "Python Fundamentals for Beginners", org: "Great Learning" },
  { name: "Design Fundamentals with AI", org: "Adobe" },
];

export const ACHIEVEMENTS = [
  { value: "7×", label: "Hackathon Winner", detail: "Inter-college & Venus hackathons" },
  { value: "Top 10", label: "of 500 Teams", detail: "Malla Reddy University" },
  { value: "9.13", label: "CGPA", detail: "B.Tech, Electronics & Communication" },
  { value: "200+", label: "LeetCode Solved", detail: "Medium & hard difficulty focus" },
];

export const EDUCATION = [
  {
    school: "Vignan Institute of Technology & Science",
    detail: "B.Tech in Electronics & Communication Engineering · CGPA 9.13",
    period: "2023 — 2027",
  },
  {
    school: "Sri Chaitanya Junior College",
    detail: "Intermediate (MPC) · 93.2%",
    period: "2021 — 2023",
  },
];

export const PROFILE = {
  name: "Dulla Bal Reddy",
  role: "ECE '27 · Full-Stack & AI Developer",
  email: "balreddydulla@gmail.com",
  phone: "+91 73860 80859",
  location: "Hyderabad, Telangana",
  github: "https://github.com/balu2412",
  linkedin: "https://linkedin.com/in/dullabalreddy",
};

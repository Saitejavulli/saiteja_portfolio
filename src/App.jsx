import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  Download,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Wrench,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

import profileImage from "./assets/Profile.jpg";
import resumePdf from "./assets/V_Saiteja_Resume.pdf";
import aetherflowImage from "./assets/Projects/aetherflow.png";
import bankingImage from "./assets/Projects/banking.png";
import parquetImage from "./assets/Projects/parquet.png";
import resumeAnalyzerImage from "./assets/Projects/resume-analyzer.png";
import nycTaxiImage from "./assets/Projects/nyc-taxi.png";
import crackImage from "./assets/Projects/crack.png";

const roles = [
  "Graduate Research Assistant",
  "AI/ML Engineer",
  "Generative AI Researcher",
  "Data Engineer",
  "Software Engineer",
];

const stats = [
  { icon: Award, value: "3.98 / 4.00", label: "Current GPA" },
  { icon: BadgeCheck, value: "4.00", label: "First Semester GPA" },
  { icon: GraduationCap, value: "Dec 2026", label: "Graduation" },
  { icon: MapPin, value: "Glassboro, NJ", label: "Location" },
];

const highlights = [
  "Deep Learning",
  "Generative AI",
  "Machine Learning",
  "Data Engineering",
  "Backend Engineering",
  "Research",
];

const experiences = [
  {
    title: "Graduate Research Assistant",
    company: "Rowan University",
    date: "January 2026 - Present",
    place: "Glassboro, New Jersey",
    icon: BrainCircuit,
    tags: [
      "PyTorch",
      "Python",
      "MONAI",
      "Diffusion Models",
      "Transformers",
      "CLIP",
      "GPU Computing",
      "Deep Learning",
    ],
    points: [
      "Conduct research in Deep Learning and Generative AI.",
      "Design VQ-VAE latent representations and diffusion denoising pipelines.",
      "Build models using PyTorch and MONAI.",
      "Integrate Transformer architectures and CLIP embeddings.",
      "Perform GPU training experiments and hyperparameter optimization.",
      "Collaborate with faculty to advance Generative AI research.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Aagama IT Biz Solutions Pvt Ltd",
    date: "January 2023 - December 2024",
    place: "Hyderabad, India",
    icon: BriefcaseBusiness,
    tags: ["Next.js", "JavaScript", "Bootstrap", "CSS", "REST APIs"],
    points: [
      "Built responsive UI for a real estate management platform.",
      "Developed reusable frontend components and design primitives.",
      "Integrated REST APIs and improved frontend performance.",
      "Delivered user-focused web features end-to-end.",
    ],
  },
];

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["Python", "Java", "C/C++", "JavaScript", "SQL", "HTML", "CSS", "R"],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    skills: [
      "Generative AI",
      "Deep Learning",
      "Machine Learning",
      "Diffusion Models",
      "Transformers",
      "Representation Learning",
      "CNNs",
      "PyTorch",
      "MONAI",
      "TensorFlow",
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: "Software Engineering",
    skills: [
      "Spring Boot",
      "REST APIs",
      "Backend Development",
      "React",
      "Node.js",
      "Flask",
      "FastAPI",
    ],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: [
      "SQL",
      "PostgreSQL",
      "Apache DataFusion",
      "Data Pipelines",
      "Data Analysis",
      "GPU Computing",
    ],
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    skills: [
      "Git",
      "Docker",
      "Google Cloud Platform",
      "VS Code",
      "IntelliJ IDEA",
      "PyCharm",
      "Visual Studio",
      "MATLAB",
    ],
  },
];

const projects = [
  {
    title: "AetherFlow AI Research Data Platform",
    description:
      "AI research data platform for organizing research workflows, datasets, and experiments.",
    tags: ["Python", "AI", "Data Platform", "Research"],
    features: ["Research workflows", "Data organization", "AI-ready platform"],
    github: "https://github.com/Saitejavulli/aetherflow-ai-research-data-platform",
    icon: BrainCircuit,
    style: "project-aetherflow",
    image: aetherflowImage,
  },
  {
    title: "Banking Fraud Detection Pipeline",
    description:
      "Data pipeline for detecting suspicious banking transactions using machine learning and streaming concepts.",
    tags: ["Python", "Machine Learning", "Kafka", "Data Engineering"],
    features: ["Fraud detection", "Data pipeline", "Transaction analysis"],
    github: "https://github.com/Saitejavulli/Banking-Fraud-Detection-pipeline",
    icon: Database,
    style: "project-fraud",
    image: bankingImage,
  },
  {
    title: "Parquet Compactor CLI",
    description:
      "Command-line tool for compacting Parquet files to improve storage organization and analytics efficiency.",
    tags: ["Rust", "Parquet", "CLI", "Data Engineering"],
    features: ["Parquet compaction", "CLI workflow", "Optimized storage"],
    github: "https://github.com/Saitejavulli/parquet_compactor_cli",
    icon: Code2,
    style: "project-parquet",
    image: parquetImage,
  },
  {
    title: "Resume Analyzer",
    description:
      "Full-stack platform that parses PDF resumes, matches skills, and calculates a job-match score.",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
    features: ["Resume upload", "PDF parsing", "Skill matching", "Job match score"],
    frontend: "https://github.com/Saitejavulli/Resume_Analyzer_Frontend",
    backend: "https://github.com/Saitejavulli/Resume_Analyzer_Backend",
    icon: FileText,
    style: "project-resume",
    image: resumeAnalyzerImage,
  },
  {
    title: "NYC Yellow Taxi Data Analysis",
    description:
      "Large-scale analytics project exploring NYC taxi trips, revenue patterns, and trip trends.",
    tags: ["Rust", "Apache DataFusion", "SQL", "Parquet"],
    features: ["Large-scale analytics", "Revenue analysis", "Trip trends", "Optimized queries"],
    github: "https://github.com/Saitejavulli/NYC_yellow_taxi_datafusion",
    icon: Database,
    style: "project-taxi",
    image: nycTaxiImage,
  },
  {
    title: "Crack Detection using TensorFlow",
    description:
      "CNN-based image classification system for detecting surface cracks from visual data.",
    tags: ["Python", "TensorFlow", "CNN", "Google Colab"],
    features: ["Binary classification", "Crack detection", "Model evaluation", "Accuracy optimization"],
    github: "https://github.com/Saitejavulli/crack-detection-tensorflow-",
    icon: BrainCircuit,
    style: "project-crack",
    image: crackImage,
  },
  
];

const certifications = [
  { title: "Convolutional Neural Networks", provider: "Coursera" },
  { title: "Data Analysis with Python", provider: "IBM" },
  { title: "SQL and Relational Databases", provider: "IBM" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setFormMessage("Thank you! Your email application is opening.");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const mailSubject = encodeURIComponent(`${subject} - Portfolio Contact`);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:saitejavulli@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    event.currentTarget.reset();
  };

  const navItems = [
    ["home", "Home"],
    ["about", "About"],
    ["experience", "Experience"],
    ["skills", "Skills"],
    ["projects", "Projects"],
    ["education", "Education"],
    ["certifications", "Certifications"],
    ["contact", "Contact"],
  ];

  return (
    <>
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span>SV</span>
          Saiteja Vulli
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={menuOpen ? "nav-links show" : "nav-links"}>
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}

          <a
            href={resumePdf}
            className="resume-nav"
            download="Saiteja-Vulli-Resume.pdf"
            onClick={closeMenu}
          >
            <Download size={17} />
            Resume
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <div className="availability-pill">
              <span className="status-dot"></span>
              Available for Full-Time Opportunities
              <span className="pill-divider"></span>
              Graduating Dec 2026
            </div>

            <p className="greeting">Hello, I&apos;m</p>
            <h1>Saiteja Vulli</h1>

            <h2 className="typed-role">
              <span>/</span> {roles[roleIndex]}
            </h2>

            <p className="hero-summary">
              I&apos;m a Master&apos;s student in Data Science at Rowan University
              specializing in Generative AI, Deep Learning, Representation Learning,
              and Intelligent Data Systems. I enjoy building scalable AI systems,
              conducting research, and solving real-world engineering problems.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={18} />
                View Resume
              </a>

              <a className="button button-secondary" href="#projects">
                View Projects
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="social-actions">
              <a
                href="https://github.com/Saitejavulli"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={19} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saiteja-vulli-896221247/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={19} />
                LinkedIn
              </a>

              <a href="#contact">
                <Mail size={19} />
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-image-wrap">
            <div className="profile-ring">
              <img src={profileImage} alt="Saiteja Vulli" />
            </div>

            <div className="ai-label">
              <BrainCircuit size={17} />
              Generative AI
            </div>
          </div>
        </section>

        <section className="stats section-shell">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <article className="stat-card" key={stat.label}>
                <div className="stat-icon">
                  <Icon size={23} />
                </div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            );
          })}
        </section>

        <section id="about" className="section-shell content-section">
          <p className="eyebrow">ABOUT</p>
          <h2>About me</h2>
          <p className="section-intro">Engineer, researcher, builder.</p>

          <div className="about-layout">
            <ul className="about-list">
              <li>Master&apos;s student in Data Science at Rowan University.</li>
              <li>Expected graduation: December 2026.</li>
              <li>Current GPA: 3.98 / 4.00.</li>
              <li>Achieved a perfect 4.0 GPA in the first semester.</li>
              <li>Graduate Research Assistant working in Generative AI.</li>
              <li>Passionate about AI, ML, Deep Learning, Software, and Data Engineering.</li>
              <li>Enjoy building scalable systems while conducting AI research.</li>
              <li>Seeking full-time AI/ML, Data, or Software Engineering roles.</li>
            </ul>

            <article className="highlights-card">
              <h3>Professional Highlights</h3>

              <div className="highlights-grid">
                {highlights.map((item) => (
                  <div className="highlight-chip" key={item}>
                    <BadgeCheck size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="soft-section">
          <div className="section-shell content-section">
            <p className="eyebrow">EXPERIENCE</p>
            <h2>Work & research</h2>
            <p className="section-intro">Where I&apos;ve built and researched.</p>

            <div className="timeline">
              {experiences.map((experience) => {
                const Icon = experience.icon;

                return (
                  <article className="experience-card" key={experience.title}>
                    <div className="experience-icon">
                      <Icon size={23} />
                    </div>

                    <h3>{experience.title}</h3>
                    <a href="#contact">{experience.company}</a>

                    <p className="experience-meta">
                      {experience.date} <span>•</span> {experience.place}
                    </p>

                    <ul>
                      {experience.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="tag-list">
                      {experience.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell content-section">
          <p className="eyebrow">SKILLS</p>
          <h2>Tools I work with</h2>

          <div className="skills-grid">
            {skillCategories.map((category) => {
              const Icon = category.icon;

              return (
                <article className="skill-card" key={category.title}>
                  <div className="skill-heading">
                    <span>
                      <Icon size={23} />
                    </span>
                    <h3>{category.title}</h3>
                  </div>

                  <div className="tag-list">
                    {category.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="projects" className="soft-section">
          <div className="section-shell content-section">
            <p className="eyebrow">PROJECTS</p>
            <h2>Selected projects</h2>
            <p className="section-intro">
              Research prototypes, systems, and applied machine learning.
            </p>

            <div className="projects-grid">
              {projects.map((project) => {
                const Icon = project.icon;

                return (
                  <article className="project-card" key={project.title}>
                    <div className={`project-image ${project.style}`}>
                      {project.image && (
                        <img
                          src={project.image}
                          alt={`${project.title} project preview`}
                          className="project-thumbnail"
                          loading="lazy"
                        />
                      )}

                      <div className="project-image-icon">
                        <Icon size={27} />
                      </div>
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>

                      <ul className="feature-list">
                        {project.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <div className="project-actions">
                        {project.github && (
                          <a
                            className="project-button"
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size={17} />
                            GitHub
                          </a>
                        )}

                        {project.frontend && (
                          <a
                            className="project-button"
                            href={project.frontend}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size={17} />
                            Frontend
                          </a>
                        )}

                        {project.backend && (
                          <a
                            className="project-button"
                            href={project.backend}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaGithub size={17} />
                            Backend
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="coming-soon">
              <BrainCircuit size={21} />
              More AI, ML, and Data Engineering projects are coming soon.
            </div>
          </div>
        </section>

        <section id="education" className="section-shell content-section">
          <p className="eyebrow">EDUCATION</p>
          <h2>Academic background</h2>

          <div className="education-grid">
            <article className="education-card">
              <GraduationCap size={26} />

              <div>
                <h3>Rowan University</h3>
                <p>Master of Science in Data Science</p>
                <span>January 2025 - December 2026</span>
                <strong>Current GPA: 3.98 / 4.00</strong>
                <small>Achievement: Perfect 4.0 GPA in First Semester</small>
              </div>
            </article>

            <article className="education-card">
              <GraduationCap size={26} />

              <div>
                <h3>SR University</h3>
                <p>Bachelor of Technology in Electrical and Electronics Engineering</p>
                <span>June 2020 - May 2024</span>
              </div>
            </article>
          </div>
        </section>

        <section id="certifications" className="soft-section">
          <div className="section-shell content-section">
            <p className="eyebrow">CERTIFICATIONS</p>
            <h2>Continuous learning</h2>

            <div className="certifications-grid">
              {certifications.map((certification) => (
                <article className="certificate-card" key={certification.title}>
                  <Award size={25} />

                  <div>
                    <h3>{certification.title}</h3>
                    <p>{certification.provider}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="resume" className="section-shell content-section">
          <p className="eyebrow">RESUME</p>
          <h2>Take my resume with you</h2>

          <article className="resume-card">
            <div className="resume-icon">
              <FileText size={30} />
            </div>

            <h3>Interested in learning more about my experience?</h3>
            <p>Download a copy of my resume or open it directly in your browser.</p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={resumePdf}
                download="Saiteja-Vulli-Resume.pdf"
              >
                <Download size={18} />
                Download Resume
              </a>

              <a
                className="button button-secondary"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={18} />
                View Resume Online
              </a>
            </div>
          </article>
        </section>

        <section id="contact" className="soft-section">
          <div className="section-shell content-section">
            <p className="eyebrow">CONTACT</p>
            <h2>Get in touch</h2>
            <p className="section-intro">
              Open to full-time roles, research collaborations, and interesting problems.
            </p>

            <div className="contact-layout">
              <article className="contact-details">
                <h3>Contact details</h3>

                <a href="tel:+18563479826">
                  <Phone size={21} />
                  <div>
                    <span>PHONE</span>
                    +1 856-347-9826
                  </div>
                </a>

                <a href="mailto:saitejavulli@gmail.com">
                  <Mail size={21} />
                  <div>
                    <span>EMAIL</span>
                    saitejavulli@gmail.com
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/saiteja-vulli-896221247/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={21} />
                  <div>
                    <span>LINKEDIN</span>
                    linkedin.com/in/saiteja-vulli-896221247
                  </div>
                </a>

                <a
                  href="https://github.com/Saitejavulli"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={21} />
                  <div>
                    <span>GITHUB</span>
                    github.com/Saitejavulli
                  </div>
                </a>

                <div className="contact-location">
                  <MapPin size={21} />
                  <div>
                    <span>LOCATION</span>
                    Glassboro, New Jersey
                  </div>
                </div>
              </article>

              <form className="contact-form" onSubmit={handleContactSubmit}>
                <h3>Send a message</h3>

                <div className="form-row">
                  <label>
                    Name
                    <input name="name" type="text" required />
                  </label>

                  <label>
                    Email
                    <input name="email" type="email" required />
                  </label>
                </div>

                <label>
                  Subject
                  <input name="subject" type="text" required />
                </label>

                <label>
                  Message
                  <textarea name="message" rows="6" required></textarea>
                </label>

                <button className="button button-primary" type="submit">
                  <Send size={18} />
                  Send Message
                </button>

                {formMessage && <p className="form-message">{formMessage}</p>}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Saiteja Vulli</p>

        <div>
          <a
            href="https://github.com/Saitejavulli"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/saiteja-vulli-896221247/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={19} />
          </a>

          <a href="mailto:saitejavulli@gmail.com" aria-label="Email">
            <Mail size={19} />
          </a>
        </div>

        <p>Designed with passion for AI, Machine Learning, and Software Engineering.</p>
      </footer>
    </>
  );
}

export default App;
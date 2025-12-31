/*export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-accent">
        Sruthy RB · Data Science Portfolio
      </h1>
    </div>
  );
}

import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Sruthy RB
        </h1>

        <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
          Data Science Graduate Student · Machine Learning · Analytics
        </h2>

        <p className="text-gray-300 leading-relaxed mb-8">
          I build data-driven solutions using machine learning, deep learning,
          and analytics. Currently pursuing a Master’s in Data Science and
          actively seeking internship and full-time opportunities.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent text-bgDark font-semibold hover:bg-sky-400 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-bgDark transition"
          >
            Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}*/


import { motion } from "framer-motion";

const projects = [
  {
    title: "Protein Function Prediction using GO Ontology",
    description:
      "Currently building a multi-label machine learning system to predict protein functions from amino acid sequences. So far implemented amino acid composition features, One-vs-Rest Logistic Regression, label frequency filtering, and IA-weighted F1 evaluation across GO subontologies (BP, MF, CC).",
    tech: [
      "Python",
      "Machine Learning",
      "Bioinformatics",
      "Multi-label Classification",
      "GO Ontology",
      "Sparse Matrices"
    ],
    ongoing: true,
    featured: true,
    github: "https://github.com/sruthyrb-create/protein-function-prediction-go"
  },

  {
    title: "Crime Data Analysis & Pattern Detection (Major Project)",
    description:
      "Performed large-scale crime data analysis to identify crime patterns, hotspots, and temporal trends. Applied statistical analysis and data visualization techniques to support data-driven insights for crime prevention and policy planning.",
    tech: ["Python", "Data Analysis", "Statistics", "Data Visualization", "Crime Analytics"],
    featured: true,
    github: "https://github.com/sruthyrb-create/detroit-crime-analysis",
  },
  {
    title: "Leaf Disease Classification with Transfer Learning",
    description:
      "Built and evaluated deep learning models using InceptionV3, VGG19, and ResNet50 architectures for leaf disease classification. Achieved 98.48% accuracy through transfer learning and fine-tuning techniques.",
    tech: ["TensorFlow", "CNN", "Transfer Learning", "Deep Learning"],
    featured: true,
    github:"https://github.com/sruthyrb-create/leaf-disease-classification",
  },
  {
    title: "PostgreSQL COVID-19 Data Analytics",
    description:
      "Designed and implemented a relational database for COVID-19 datasets. Optimized SQL queries and performed analytical reporting to extract insights from large-scale data.",
    tech: ["PostgreSQL", "SQL", "Data Modeling", "Analytics","Database Management"],
    featured: true,
  },
  {
    title: "Business Intelligence: Sales Trends & Predictive Modeling (2025)",
    description:
      "Performed end-to-end ETL and exploratory data analysis on 500k+ transaction records. Identified the top 10% SKUs contributing to 60% of total profit and detected three underperforming regions. Built predictive insights to support data-driven business decisions.",
    tech: ["Python", "ETL", "EDA", "Predictive Modeling", "Business Intelligence"],
    featured: true,
  },
  {
    title: "Business Analytics Case Study – Data-Driven Decision Making (Winning Model)",
    description:
      "Analyzed real-world company datasets as part of a competitive analytics challenge. Identified key business performance drivers and customer behavior patterns, resulting in a winning decision-making model.",
    tech: ["Business Analytics", "Data Analysis", "Statistics", "Python"],
    featured: true,
  },
  {
    title: "Retinal Image Classification Using Neural Networks",
    description:
      "Developed a deep learning model to classify retinal images to support medical diagnosis. Presented the research paper at EDGE 2022, an international conference on Engineering and Digital Green Era.",
    tech: ["Python", "Neural Networks", "Deep Learning", "Medical Imaging"],
    featured: true,
  },
  {
    title: "Night Patrolling Robot (IoT Project)",
    description:
      "Designed and implemented an IoT-based autonomous robot for night patrolling. Enhanced security automation through sensor integration, obstacle detection, and real-time monitoring.",
    tech: ["IoT", "Embedded Systems", "Sensors", "Automation"],
    
    featured: false,
  },
  {
    title: "IoT Smart Boat System",
    description:
      "Designed an integrated system to convert a conventional boat into a smart boat. This project was developed under the Industry–Institute Interaction Cell, focusing on real-time monitoring and system automation.",
    tech: ["IoT", "System Design", "Automation", "Industry Project"],
    featured: false,
  },
  
  
  
];


const skills = {
  "Programming & Tools": [
    "Python",
    "SQL",
    "Java",
    "PostgreSQL",
    "Git",
    "Linux",
  ],
  "Data Science & ML": [
    "Machine Learning",
    "Deep Learning",
    "CNNs",
    "Data Analysis",
    "Data Visualization",
    "Statistics",
  ],
  "Frameworks & Tech": [
    "TensorFlow",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "React",
    "Tailwind CSS",
  ],
};


export default function App() {
  return (
    <div className="bg-bgDark text-gray-200">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Sruthy Rajesh Bindhu
          </h1>

          <h2 className="text-xl md:text-2xl text-accent font-medium mb-6">
            Data Science Graduate Student · Machine Learning · Analytics
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            I build data-driven solutions using machine learning, deep learning,
            and analytics. Currently pursuing a Master’s in Data Science and
            actively seeking internship and full-time opportunities.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-accent text-bgDark font-semibold hover:bg-sky-400 transition"
            >
              View Projects
            </a>

            <a
              ///href="/resume.pdf"
              ///className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-bgDark transition"
              
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-bgDark transition"
            >
              Resume      
            
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-accent text-bgDark font-semibold hover:bg-sky-400 transition"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">
          Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl p-6 shadow-lg border transition-all${
                project.featured
                ? "bg-slate-900 border-accent/40 hover:shadow-accent/20"
                : "bg-slate-900 border-slate-800 hover:border-accent/30"
              }`} 
            >
              <h4 className="text-2xl font-semibold text-white mb-1">
                {project.title}
              </h4>

              {project.featured && (
                <span className="inline-block mb-3 text-xs px-3 py-1 rounded-full bg-accent/20 text-accent">
                  Featured Project
                </span>
              )}
              {project.ongoing && (
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400">
                  Ongoing
                </span>
              )}



              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 rounded-full bg-slate-800 text-accent"
                  >
                    {tech}
                  </span>
                ))}

              </div>
              {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-accent hover:underline"
                  >
                    View on GitHub →
                  </a>
                )}
            </motion.div>
          ))}
        </div>
      </section>

            {/* SKILLS SECTION */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold text-white mb-12 text-center">
          Skills
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >
              <h4 className="text-xl font-semibold text-accent mb-4">
                {category}
              </h4>

              <ul className="space-y-2 text-gray-300">
                {items.map((skill, i) => (
                  <li key={i}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

          {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 text-center border-t border-slate-800">
        <h3 className="text-4xl font-bold text-white mb-6">
          Let’s Connect
        </h3>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I’m actively seeking internships and full-time opportunities in Data Science,
          Machine Learning, and Analytics. Feel free to reach out.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          
          <a
            href="mailto:sruthyrb@umich.edu"
            className="px-6 py-3 rounded-lg bg-accent text-bgDark font-semibold hover:bg-sky-400 transition"
          >
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/sruthy-rb"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-bgDark transition"
          >
            LinkedIn
          </a>

          <a    
            href="https://github.com/sruthyrb-create"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-accent text-accent hover:bg-accent hover:text-bgDark transition"
          >
            GitHub
          </a>
        </div>
      </section>  

    </div>
  );
}

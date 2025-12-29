import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-cyan-300 mb-12">
        Projects
      </h2>

      {/* FEATURED PROJECT */}
      <div className="max-w-4xl mx-auto mb-16">
        <ProjectCard
          title="Protein Function Prediction"
          subtitle="Multi-Label Classification & Ontology-Aware Evaluation"
          description="Built an end-to-end machine learning pipeline to predict protein functions from amino acid sequences using sparse multi-label learning and Gene Ontology–based evaluation."
          highlights={[
            "Processed ~20k proteins with ~29k GO terms using sparse matrices",
            "Engineered amino acid composition (AAC) features from raw sequences",
            "Reduced label space to ~9.5k by filtering rare GO terms (k ≥ 20)",
            "Trained One-vs-Rest Logistic Regression with calibrated probabilities",
            "Evaluated using Information Accretion–weighted F1 across BP, MF, CC",
          ]}
          tech={[
            "Python",
            "Scikit-learn",
            "Sparse Matrices",
            "Multi-Label ML",
            "Bioinformatics",
            "Gene Ontology",
          ]}
          github="https://github.com/your-username/protein-function-prediction"
        />
      </div>

      {/* OTHER PROJECTS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Your existing project cards stay here */}
      </div>
    </section>
  );
}

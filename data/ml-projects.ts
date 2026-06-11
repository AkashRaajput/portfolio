import type { Project } from "@/types";

export const mlProjects: Project[] = [
  {
    slug: "credit-card-fraud-detection",
    title: "Credit Card Fraud Detection System",
    category: "Personal Project",
    period: "Feb 2024 – Jun 2024",
    overview:
      "Built a machine learning-based fraud detection system capable of identifying suspicious credit card transactions using classification algorithms, feature engineering, and predictive analytics.",
    problem:
      "Fraudulent transactions are rare compared with legitimate activity, making reliable pattern discovery difficult while false positives carry real business cost.",
    solution:
      "Engineered transaction features and trained classification models with precision-recall-focused evaluation, then packaged inference logic in a Flask deployment prototype.",
    technologies: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Flask"],
    keyContributions: [
      "Performed data preprocessing and cleaning for imbalanced transaction datasets.",
      "Engineered features to improve model signal on high-variance fraud indicators.",
      "Trained and evaluated classification models with accuracy and validation tuning.",
      "Built a fraud prediction engine for scoring suspicious transaction patterns.",
      "Optimized model thresholds to balance detection accuracy against false positives.",
      "Deployed a Flask prototype for demonstrating prediction workflows.",
    ],
    results: [
      "Improved fraud detection accuracy while minimizing false positives through model tuning and validation techniques.",
    ],
    metric: "ML fraud detection",
    accent: "from-amber-400/24 via-rose-400/10 to-transparent",
    headline: "Machine Learning Classification",
  },
];

import { Project, Experience, Publication } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'VidSentry - Video Safety Reinvented',
    description: 'The world\'s next-generation AI moderation platform detecting hate speech, violence, and nudity in real-time',
    longDescription: 'Founded and architected VidSentry, a high-performance AI video moderation platform that\'s shaping the future of trust & safety at scale. Built with Sightengine + custom ML orchestration, FFmpeg processing workers, and Supabase storage for real-time compliance enforcement.',
    technologies: ['Python', 'TensorFlow', 'FFmpeg', 'Supabase', 'Sightengine API', 'React', 'Node.js', 'Docker'],
    image: 'https://github.com/VidSentry/assets/blob/main/vidsentry-main-about.webp?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://vidsentry.com',
    category: 'AI/ML',
    impact: '90% reduction in manual moderation time',
    year: 2024
  },
  {
    id: '2',
    title: 'Aethermuse - Virtual Museum of AI Art',
    description: 'Exhibition & marketplace for premium AI-generated collections with global print fulfillment',
    longDescription: 'Created a revolutionary platform democratizing art ownership through computational creativity. Features an AI curation engine based on style, emotion, and concept similarity, connecting digital collectors with premium AI-generated art worldwide.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'Stripe', 'AWS S3', 'PostgreSQL', 'Next.js'],
    image: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=800',
    demoUrl: 'https://aethermuse.netlify.app',
    category: 'SaaS',
    impact: 'Featured in digital art showcases',
    year: 2024
  },
  {
    id: '3',
    title: 'AutoOutreach - Personalized Sales Automation',
    description: 'GPT-powered outbound engine using live LinkedIn + website signals for ultra-personalized cold emails',
    longDescription: 'Architected an intelligent sales automation platform that analyzes LinkedIn profiles and website data to generate highly personalized outreach campaigns. Achieved 4× lead conversion improvement in field trials through advanced AI personalization.',
    technologies: ['GPT-4', 'Python', 'LinkedIn API', 'React', 'PostgreSQL', 'Redis', 'Celery'],
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'SaaS',
    impact: '4× lead conversion improvement',
    year: 2023
  },
  {
    id: '4',
    title: 'Clinical Data Intelligence — UCT Paediatrics',
    description: 'Advanced ML research on 100M+ medical records supporting lifesaving paediatric health outcomes',
    longDescription: 'Led data analysis and ML research at UCT Department of Paediatrics, cleaning and analyzing over 100 million medical records. Built reproducible pipelines and dashboards supporting critical research on paediatric health outcomes and future medical AI diagnostics.',
    technologies: ['Python', 'SQL', 'BigQuery', 'Power BI', 'PyTorch', 'Pandas', 'Scikit-learn'],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Research',
    impact: 'Supporting lifesaving research',
    year: 2024
  },
  {
    id: '5',
    title: 'Honours Thesis — AI Disease Detection',
    description: 'ML system for radiology + clinical data fusion targeting life-threatening disease diagnosis',
    longDescription: 'Developed an advanced machine learning system combining radiology imaging with clinical data for early detection of life-threatening diseases. Focused on accuracy, explainability using Grad-CAM, and fairness across demographics for deployment in resource-constrained hospitals.',
    technologies: ['PyTorch', 'OpenCV', 'Grad-CAM', 'DICOM', 'Python', 'Jupyter', 'scikit-learn'],
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Research',
    impact: 'Zero-delay diagnosis potential',
    year: 2024
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'VidSentry (Pty) Ltd',
    role: 'Founder & Lead Data Scientist',
    period: '2024 - Present',
    description: 'Founded and lead VidSentry, the world\'s next-generation AI moderation platform safeguarding digital spaces for billions of viewers.',
    achievements: [
      'Built full AI moderation pipeline with real-time processing',
      'Achieved 90% reduction in manual moderation review time',
      'Developed developer API for broadcasters and streaming platforms',
      'Established strong tech moat with compliance strategy',
      'Targeting 2 billion viewers annually protection'
    ],
    logo: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '2',
    company: 'University of Cape Town - Paediatrics',
    role: 'Data Scientist & ML Research Scientist',
    period: '2024 - 2025',
    description: 'Leading advanced clinical data intelligence work, analyzing 100M+ medical records to support lifesaving paediatric research.',
    achievements: [
      'Cleaned, merged & analyzed 100M+ medical records',
      'Published peer-reviewed clinical reports',
      'Built reproducible ML pipelines and dashboards',
      'Supported critical paediatric health outcomes research',
      'Established foundation for future medical AI diagnostics'
    ],
    logo: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '3',
    company: 'Independent Practice',
    role: 'ML Developer & Consultant',
    period: '2023 - 2024',
    description: 'Delivered advanced analytics and AI automation solutions for SMEs, building 4 startups with full product execution.',
    achievements: [
      'Built 4 startups from concept to deployment',
      'Delivered analytics and automation for multiple SMEs',
      'Mastered full-stack ML deployment pipeline',
      'Developed expertise across AWS, Supabase, and modern ML stack',
      'Established reputation as product execution machine'
    ],
    logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=100'
  },
  {
    id: '4',
    company: 'University Research Projects',
    role: 'Tech Lead - Research Projects',
    period: '2021 - 2022',
    description: 'Led technical development of ML prototypes for public presentations and academic initiatives.',
    achievements: [
      'Deployed ML prototypes for public presentations',
      'Led research project technical development',
      'Collaborated with academic supervisors on cutting-edge research',
      'Built foundation for future clinical AI work',
      'Recognized for technical clarity and execution'
    ],
    logo: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=100'
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'AI for Responsible Media: Scaling Trust & Safety in Digital Platforms',
    authors: ['Pride Chamisa'],
    venue: 'AI/Media Symposium (Accepted)',
    year: 2025,
    abstract: 'Presents novel approaches to AI-powered content moderation, focusing on real-time video analysis and scalable trust & safety systems for protecting billions of digital platform users.',
    citations: 0
  },
  {
    id: '2',
    title: 'Pediatric Respiratory Disease Modelling: A Machine Learning Approach',
    authors: ['Pride Chamisa', 'UCT Medical Research Team'],
    venue: 'UCT Medical Publication Pipeline',
    year: 2024,
    abstract: 'Contribution to advanced pediatric health research utilizing machine learning techniques for early detection and intervention in respiratory diseases affecting children in resource-constrained environments.',
    citations: 0
  },
  {
    id: '3',
    title: 'The Future of Personalized AI: From Research to Real-World Impact',
    authors: ['Pride Chamisa'],
    venue: 'Data Innovation Meetups (Planned)',
    year: 2025,
    abstract: 'Explores the intersection of personalized AI systems and real-world deployment challenges, with focus on ethical considerations, fairness, and interpretability in production environments.',
    citations: 0
  },
  {
    id: '4',
    title: 'Explainable AI in Medical Diagnosis: Grad-CAM Applications in Radiology',
    authors: ['Pride Chamisa'],
    venue: 'Honours Thesis - University of Cape Town',
    year: 2024,
    abstract: 'Development of interpretable machine learning systems for medical diagnosis, combining radiology imaging with clinical data while ensuring fairness across demographic groups and explainability for clinical practitioners.',
    citations: 0
  }
];

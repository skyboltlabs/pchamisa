import React from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, HeartPulse, UserCheck, Shield, GitMerge, BarChart2, Lock, Scale, Microscope, Quote } from 'lucide-react';

const ClinicalDataDetails: React.FC = () => {
    return (
        <div className="text-white">
            {/* Hero Header */}
            <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Database size={300} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
                        <HeartPulse size={14} />
                        Paediatric Healthcare Research
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
                        Clinical Data Intelligence
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light">
                        Advanced Analytics & Machine Learning for Paediatric Healthcare
                    </p>
                </motion.div>
            </div>

            <div className="p-8 md:p-12 space-y-16">
                {/* Overview */}
                <section className="max-w-4xl">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white/90">
                        <Microscope className="text-blue-400" />
                        Overview
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-6">
                        At the University of Cape Town’s Department of Paediatrics, I worked at the intersection of clinical medicine, large-scale data engineering, and applied machine learning — transforming complex, fragmented health data into actionable intelligence that supports paediatric research and decision-making.
                    </p>
                    <p className="text-xl font-semibold text-white/90 italic border-l-4 border-blue-500 pl-4">
                        This work demanded rigor, discretion, and absolute reliability. When the data represents children’s lives, there is no room for shortcuts.
                    </p>
                </section>

                {/* The Context */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The Context</h2>
                        <p className="text-white/70 mb-4">
                            Paediatric healthcare data is uniquely challenging:
                        </p>
                        <ul className="space-y-3 mb-6">
                            {[
                                "Highly sensitive and privacy-critical",
                                "Fragmented across systems, formats, and time",
                                "Noisy, incomplete, and clinically nuanced",
                                "Generated in resource-constrained environments"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                                    <span className="text-white/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The Opportunity</h2>
                        <p className="text-white/70 mb-6">
                            Yet within this data lies the ability to:
                        </p>
                        <div className="space-y-4">
                            {[
                                "Detect disease earlier",
                                "Improve treatment outcomes",
                                "Allocate limited healthcare resources more effectively"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                        <HeartPulse size={14} />
                                    </div>
                                    <span className="text-white/80 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-8 text-white/60 text-sm text-center italic">
                            The challenge was not just analysis — it was making the data trustworthy enough to matter.
                        </p>
                    </div>
                </section>

                {/* My Role */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white/90">
                        <UserCheck className="text-purple-400" />
                        My Role
                    </h2>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                        <p className="text-white/80 mb-6">
                            I worked closely with clinicians and researchers to design, clean, merge, and analyze large-scale paediatric datasets, supporting ongoing medical research and clinical reporting.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Merging and harmonizing multi-source clinical datasets",
                                "Designing robust data-cleaning and validation pipelines",
                                "Performing exploratory and inferential statistical analysis",
                                "Building reproducible analytics workflows for research teams",
                                "Translating technical findings into clinically interpretable insights"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <GitMerge size={18} className="text-blue-400 mt-1 shrink-0" />
                                    <span className="text-white/70">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/60">
                            This role required constant collaboration with doctors — aligning statistical rigor with real-world clinical understanding.
                        </div>
                    </div>
                </section>

                {/* Scale & Impact */}
                <section className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1 bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-white/10 p-6 rounded-xl flex flex-col justify-center items-center text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">100M+</div>
                        <div className="text-white/70">Clinical records processed</div>
                    </div>
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white/90">
                                <BarChart2 className="text-green-400" />
                                Scale & Impact
                            </h2>
                            <p className="text-white/70 mb-4">
                                Across projects, I worked with longitudinal patient data spanning multiple years and high-dimensional variables including vitals, labs, diagnoses, and outcomes.
                            </p>
                            <h3 className="text-lg font-semibold text-white/90 mb-2">The outputs supported:</h3>
                            <ul className="list-disc list-inside space-y-2 text-white/70 ml-2">
                                <li>Internal clinical research and reporting</li>
                                <li>Preparation of datasets for peer-reviewed publications</li>
                                <li>Evidence-based discussions on paediatric health outcomes</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Technical Contributions */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white/90">
                        <Database className="text-cyan-400" />
                        Technical Contributions
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-white mb-4">Pipeline & Stack</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white/70">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                    Python for processing & modeling
                                </li>
                                <li className="flex items-center gap-3 text-white/70">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                    SQL / BigQuery for scalable querying
                                </li>
                                <li className="flex items-center gap-3 text-white/70">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                                    Power BI / Tableau / Looker dashboards
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-white mb-4">Quality & Integrity</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white/70">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                                    Data quality assurance
                                </li>
                                <li className="flex items-center gap-3 text-white/70">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                                    Bias detection and mitigation
                                </li>
                                <li className="flex items-center gap-3 text-white/70">
                                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                                    Transparent analytical assumptions
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-white/50 italic">
                        This was not dashboard vanity — it was clinical-grade analytics.
                    </p>
                </section>

                {/* Machine Learning & Research Focus */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
                    <h2 className="text-2xl font-bold mb-6 text-white/90">Machine Learning & Research Focus</h2>
                    <p className="text-white/80 mb-8">
                        Beyond analytics, my work directly informed my honours research into machine learning for early detection of life-threatening diseases. This research mindset shaped how I approach all high-stakes AI systems — including VidSentry.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Feature engineering from clinical time-series",
                            "Model interpretability and explainability",
                            "Fairness across demographic groups",
                            "Deployment in low-resource settings"
                        ].map((item, i) => (
                            <div key={i} className="bg-black/20 p-4 rounded-lg border border-white/5 text-center text-sm text-white/70 flex items-center justify-center">
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why This Experience Matters */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white/90">
                        <Scale className="text-orange-400" />
                        Why This Experience Matters
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <p className="text-white/70 mb-4">
                                Working in paediatric healthcare fundamentally shaped how I build AI systems. It taught me that:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-white/80">
                                    <Shield size={16} className="text-orange-400" />
                                    Accuracy without context is dangerous
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <Shield size={16} className="text-orange-400" />
                                    Interpretability is not optional
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <Shield size={16} className="text-orange-400" />
                                    Ethics must be engineered, not promised
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <Shield size={16} className="text-orange-400" />
                                    Real-world data is never clean — systems must be resilient
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <Quote className="text-blue-400 mb-4 opacity-50" size={32} />
                            <p className="text-lg italic text-white/80 mb-4">
                                “Healthcare data doesn’t tolerate ego or shortcuts. My time working with paediatric clinicians taught me how to build systems that are cautious, explainable, and worthy of trust — lessons I carry into every AI product I create.”
                            </p>
                            <footer className="text-white/60 text-sm font-medium">
                                — Pride Chamisa
                            </footer>
                        </div>
                    </div>
                </section>


                {/* Environment & Status */}
                <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                        <h3 className="font-bold text-white mb-4">Environment & Collaboration</h3>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li>• Close collaboration with paediatric clinicians</li>
                            <li>• High-trust handling of sensitive medical data</li>
                            <li>• Research-driven, publication-oriented workflows</li>
                            <li>• Strict adherence to privacy and governance</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-white mb-4">Status</h3>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li>• Contributions integrated into ongoing research</li>
                            <li>• Reports submitted for clinical publications</li>
                            <li>• Experience directly informing current medical AI work</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center text-white/40 text-sm pt-12">
                    This work represents the foundation of my approach to artificial intelligence: when the stakes are high, intelligence must be responsible, interpretable, and built to serve human life first.
                </div>
            </div>
        </div>
    );
};

export default ClinicalDataDetails;

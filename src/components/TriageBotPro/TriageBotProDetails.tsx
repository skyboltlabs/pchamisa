import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Activity, ClipboardCheck, Brain, Zap, ArrowRight, ShieldCheck, Database, FileText } from 'lucide-react';

const TriageBotProDetails: React.FC = () => {
    return (
        <div className="text-white">
            {/* Hero Header */}
            <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-[#0f172a] to-[#082f49]">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Activity size={300} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium mb-6 border border-cyan-500/30">
                        <Stethoscope size={14} />
                        Clinical AI Assistant
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
                        TriageBotPro
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
                        AI-Powered Clinical Triage Assistant for Healthcare Triage Teams
                    </p>
                </motion.div>
            </div>

            <div className="p-8 md:p-12 space-y-16">
                {/* Overview */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Activity className="text-cyan-400" />
                        Overview
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-6">
                        TriageBotPro is an intelligent clinical triage assistant designed to help healthcare providers make faster, more accurate decisions in high-pressure environments. Built with scalable AI and clinical logic, TriageBotPro streamlines patient intake and risk assessment — reducing clinician workload and improving care outcomes.
                    </p>
                    <p className="text-xl font-semibold text-white/90 italic">
                        Developed and refined by Pride Chamisa, TriageBotPro embodies the intersection of machine intelligence and compassionate care, helping clinicians focus on what matters most: patients.
                    </p>
                </section>

                {/* The Problem */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The Problem</h2>
                        <p className="text-white/70 mb-4">
                            Healthcare triage is chaotic, time-sensitive, and data-intensive. Traditional systems often:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Rely on manual documentation under pressure</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Leave critical risk cues buried in narratives</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Vary widely in accuracy across practitioners</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Increase wait times and operational inefficiencies</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-white/60">
                            Clinicians need decision support, not distractions.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The TriageBotPro Solution</h2>
                        <p className="text-white/70 mb-6">
                            TriageBotPro gives clinical teams an AI-assisted assistant that:
                        </p>
                        <div className="space-y-4">
                            {[
                                "Analyzes patient symptoms and histories in real time",
                                "Applies evidence-informed guidelines to assign risk levels",
                                "Generates clear triage summaries and recommendations",
                                "Reduces cognitive load during surges and emergencies",
                                "Integrates with existing workflows via API or export formats"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                                        <ArrowRight size={14} />
                                    </div>
                                    <span className="text-white/80 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-white/90 font-medium text-center">
                            This is clinical triage automation that supports, not replaces, professional judgment.
                        </p>
                    </div>
                </section>

                {/* Key Features */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Zap className="text-yellow-400" />
                        Key Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 w-fit mb-4">
                                <Brain size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white">Symptom & History Parsing</h3>
                            <p className="text-white/60 text-sm">
                                Combines natural language processing with structured input to transform messy patient information into actionable insights.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <div className="p-3 bg-red-500/20 rounded-lg text-red-400 w-fit mb-4">
                                <Activity size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white">Risk Scoring & Prioritization</h3>
                            <p className="text-white/60 text-sm">
                                Uses scoring algorithms and ML patterns to suggest triage categories — urgent, routine, or deferred — with transparency and confidence levels.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <div className="p-3 bg-green-500/20 rounded-lg text-green-400 w-fit mb-4">
                                <FileText size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white">Clear Clinical Summaries</h3>
                            <p className="text-white/60 text-sm">
                                Delivers concise, clinician-friendly summaries that highlight risk factors, next steps, and reasoning.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400 w-fit mb-4">
                                <Database size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-white">Integration & Workflow Support</h3>
                            <p className="text-white/60 text-sm">
                                Exports results to EHR systems or dashboards, supports CSV/JSON outputs, and can be embedded into clinic intake forms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <ShieldCheck className="text-blue-400" />
                        Technical Architecture (Founder Perspective)
                    </h2>
                    <p className="text-white/70 mb-6">
                        TriageBotPro’s backend is built with:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "NLP modules trained on medical dialogues and triage protocols",
                            "A hybrid engine combining rules and ML for explainability",
                            "Scalable serverless functions for real-time processing",
                            "Secure data handling, privacy compliance, and role-based views"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-3">
                                <ClipboardCheck size={16} className="text-blue-400" />
                                <span className="text-sm text-white/80">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-white/60 text-sm italic">
                        Unlike black-box systems, TriageBotPro emphasizes transparent reasoning so clinicians can trust recommendations.
                    </p>
                </section>

                {/* Why It Matters */}
                <section className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-white/10">
                    <h2 className="text-2xl font-bold mb-6 text-white">Why It Matters</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-white/70 mb-4">
                                TriageBotPro tackles real challenges:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-white/80">
                                    <ArrowRight size={16} className="text-cyan-400" />
                                    Reduces bottlenecks in emergency and primary care triage
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <ArrowRight size={16} className="text-cyan-400" />
                                    Improves consistency across clinicians and shifts
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <ArrowRight size={16} className="text-cyan-400" />
                                    Decreases cognitive overload during peak demand
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <ArrowRight size={16} className="text-cyan-400" />
                                    Offers a safety net for early risk signals that might otherwise be missed
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-xl font-light italic text-center text-white/90 p-6 bg-white/5 rounded-xl border border-white/10">
                                "This is responsible clinical AI — designed to augment, not override, expert judgment."
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact & Founder's Perspective */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Activity className="text-green-400" />
                            Impact & Outcomes
                        </h2>
                        <ul className="space-y-2 text-white/70">
                            <li>Faster triage turnarounds</li>
                            <li>Lower variation in risk categorization between clinicians</li>
                            <li>Reduced documentation fatigue</li>
                            <li>Higher patient satisfaction scores in pilot settings</li>
                        </ul>
                        <p className="mt-4 text-white/60 text-sm">
                            TriageBotPro’s mission: Make every patient’s first clinical contact count.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white">Founder’s Perspective</h2>
                        <blockquote className="border-l-4 border-cyan-500 pl-4 py-2 bg-white/5 rounded-r-lg">
                            <p className="text-lg italic text-white/80 mb-4">
                                "In high-stakes environments like healthcare, speed without reliability can be dangerous. TriageBotPro blends the efficiency of AI with the clinical trustworthiness clinicians need — freeing human experts to focus on healing, not paperwork."
                            </p>
                            <footer className="text-white/60 text-sm">
                                — Pride Chamisa, Creator
                            </footer>
                        </blockquote>
                    </div>
                </section>

                {/* Current Status */}
                <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                    <h2 className="text-lg font-bold mb-4 text-white">Current Status</h2>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Live prototype deployed at triagebotpro.netlify.app
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <div className="w-2 h-2 rounded-full bg-blue-500" />
                            Open for pilot partnerships with clinics and hospitals
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <div className="w-2 h-2 rounded-full bg-purple-500" />
                            Future roadmap includes EHR integration and mobile support
                        </div>
                    </div>
                </section>

                <div className="text-center text-white/40 text-sm pt-8">
                    TriageBotPro is not just automation — it’s clinical empowerment powered by responsible AI.
                </div>
            </div>
        </div>
    );
};

export default TriageBotProDetails;

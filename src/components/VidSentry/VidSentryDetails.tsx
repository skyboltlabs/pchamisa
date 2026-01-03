import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Cpu, Users, ArrowRight, ExternalLink, Activity } from 'lucide-react';

const VidSentryDetails: React.FC = () => {
    return (
        <div className="text-white">
            {/* Hero Header */}
            <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-[#1a1c23] to-[#0f1115]">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Shield size={300} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 border border-blue-500/30">
                        <Shield size={14} />
                        Context-Aware AI
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
                        VidSentry
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
                        Context-Aware AI for Trust, Safety, and Cultural Intelligence
                    </p>
                </motion.div>
            </div>

            <div className="p-8 md:p-12 space-y-16">
                {/* Overview */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Activity className="text-purple-400" />
                        Overview
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-6">
                        VidSentry is a high-performance AI video moderation platform built to protect digital communities without erasing cultural identity. Founded and architected by Pride Chamisa, VidSentry was created in response to a critical gap in modern AI systems: most global moderation models are trained on Western data and often fail when deployed in African and Global South contexts.
                    </p>
                    <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl text-red-200">
                        <h3 className="font-semibold mb-2 text-red-400">The Reality</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>Traditional dances flagged as violence</li>
                            <li>Ceremonial body paint misclassified as nudity</li>
                            <li>Cultural expressions treated as policy violations</li>
                        </ul>
                    </div>
                    <p className="mt-6 text-xl font-semibold text-white/90">
                        VidSentry exists to fix this.
                    </p>
                </section>

                {/* The Problem */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The Problem: Context Blindness</h2>
                        <div className="space-y-4 text-white/70">
                            <p>
                                Most trust & safety systems are built in Silicon Valley, trained primarily on Western datasets, and exported globally as one-size-fits-all solutions.
                            </p>
                            <p>
                                In African contexts, this isn’t just a technical flaw — it’s a cultural bias problem embedded in AI pipelines:
                            </p>
                            <ul className="space-y-3 mt-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                    <span>Misclassification of traditional dances as violent activity</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                    <span>Cultural attire and rituals flagged as sexual or explicit</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                    <span>Over-moderation of indigenous expression</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                    <span>Suppression of local creators, educators, and broadcasters</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The Solution: The African Immune System</h2>
                        <p className="text-white/70 mb-6">
                            VidSentry is designed as a cultural immune system for digital platforms — an AI layer that distinguishes between harm and heritage.
                        </p>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                    <Globe size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Context-Aware Moderation</h4>
                                    <p className="text-sm text-white/60">Tuned for African and Global South media</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                    <Cpu size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Cultural Sensitivity</h4>
                                    <p className="text-sm text-white/60">Embedded at model, rule, and workflow levels</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                                    <Users size={20} />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">Human-in-the-Loop</h4>
                                    <p className="text-sm text-white/60">Feedback loops from local moderators</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Cpu className="text-blue-400" />
                        Technical Architecture (Founder-Led)
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Modular AI inference pipeline (Sightengine + contextual orchestration)",
                            "Metadata-enriched frame analysis (movement, rhythm, attire, setting)",
                            "FFmpeg-powered video transformation workers",
                            "Supabase-backed storage, audit logs, and regional policy tagging"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-5 rounded-xl text-sm text-white/80">
                                {item}
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-center text-white/60 italic">
                        "The system is built to evolve as cultures evolve — not freeze them into outdated labels."
                    </p>
                </section>

                {/* Impact & Why This Matters */}
                <section className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 md:p-12 border border-white/10">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Why This Matters</h3>
                            <ul className="space-y-3 text-white/70">
                                <li className="flex items-center gap-2">
                                    <ArrowRight size={16} className="text-blue-400" />
                                    Protect users without cultural erasure
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight size={16} className="text-blue-400" />
                                    Reduce false positives in emerging markets
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight size={16} className="text-blue-400" />
                                    Expand safely into new regions
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight size={16} className="text-blue-400" />
                                    Ethical compliance, not performative
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white">Early Pilot Results</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/70">False-Positive Reduction</span>
                                    <span className="text-green-400 font-bold">Significant</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/70">Creator Retention</span>
                                    <span className="text-green-400 font-bold">Improved</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                    <span className="text-white/70">Contextual Confidence</span>
                                    <span className="text-green-400 font-bold">Higher</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder's Quote */}
                <section className="text-center max-w-4xl mx-auto py-8">
                    <p className="text-2xl md:text-3xl font-light italic text-white/90 mb-6">
                        "Most AI moderation systems see African culture as noise or risk. I see it as signal. VidSentry was built to understand context — not overwrite it."
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="text-left">
                            <div className="font-bold text-white">Pride Chamisa</div>
                            <div className="text-white/50 text-sm">Founder & Architect</div>
                        </div>
                    </div>
                </section>

                {/* Vision & Status */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white/90">Vision</h3>
                        <ul className="space-y-2 text-white/70">
                            <li>The default trust & safety layer for African media</li>
                            <li>A bridge between global compliance and local expression</li>
                            <li>Proof that world-class AI can be built from Africa</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white/90">Current Status</h3>
                        <ul className="space-y-2 text-white/70">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Active development and pilot engagements
                            </li>
                            <li>Designed for SaaS and API deployment</li>
                            <li>Open to broadcasters, platforms, NGOs</li>
                        </ul>
                    </div>
                </section>

                {/* CTAs */}
                <section className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-white/10">
                    <a
                        href="https://vidsentry.com/request-access"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        Request Demo
                        <ExternalLink size={18} />
                    </a>
                    <a
                        href="https://vidsentry.com/api"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-sm"
                    >
                        Developer API
                        <Cpu size={18} />
                    </a>
                </section>

                <div className="text-center text-white/40 text-sm pt-8">
                    VidSentry is Africa's digital immune system — protecting platforms while preserving culture.
                </div>
            </div>
        </div>
    );
};

export default VidSentryDetails;

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Eye, Cpu, Globe, ArrowRight, Sparkles, History, Box, Heart } from 'lucide-react';

const AethermuseDetails: React.FC = () => {
    return (
        <div className="text-white">
            {/* Hero Header */}
            <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-[#1a1c23] to-[#0f1115]">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Palette size={300} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium mb-6 border border-purple-500/30">
                        <Sparkles size={14} />
                        Artificial Creativity
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-white bg-clip-text text-transparent">
                        Aethermuse
                    </h1>

                    <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light">
                        A Living Museum for the Age of Artificial Creativity
                    </p>
                </motion.div>
            </div>

            <div className="p-8 md:p-12 space-y-16">
                {/* Overview */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Eye className="text-purple-400" />
                        Overview
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-6">
                        Aethermuse is a virtual museum dedicated to exhibiting, curating, and preserving AI-generated art as a first-class cultural medium. Founded by Pride Chamisa, Aethermuse explores the intersection of computation, aesthetics, and human imagination — rethinking what a museum can be when creativity is no longer bound by canvas or geography.
                    </p>
                    <p className="text-xl font-semibold text-white/90 italic">
                        Aethermuse treats generative art not as novelty, but as heritage in the making.
                    </p>
                </section>

                {/* The Problem */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The Problem</h2>
                        <p className="text-white/70 mb-4">
                            Digital art has outpaced the institutions meant to preserve it. AI-generated works are:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Created at unprecedented scale</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Poorly curated or buried in algorithmic feeds</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Rarely contextualized or archived with intent</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5" />
                                <span className="text-white/70">Often reduced to speculative assets rather than cultural artifacts</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-white/60">
                            Without thoughtful curation, an entire era of computational creativity risks becoming ephemeral.
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold mb-6 text-white/90">The Aethermuse Vision</h2>
                        <p className="text-white/70 mb-6">
                            Aethermuse reimagines the museum as a living, adaptive space — one that evolves alongside the algorithms that produce the art.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Curated AI exhibitions with thematic and historical framing",
                                "Artist-model collaborations and provenance tracking",
                                "Public viewing experiences with gallery-grade presentation",
                                "Physical print fulfillment for collectors and institutions"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                        <ArrowRight size={14} />
                                    </div>
                                    <span className="text-white/80 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-white/90 font-medium text-center">
                            Aethermuse asks not “Can AI make art?” <br />
                            But “How should AI art be seen, preserved, and understood?”
                        </p>
                    </div>
                </section>

                {/* Curation Philosophy */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Heart className="text-pink-400" />
                        Curation Philosophy
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-white">1. Intent Over Output</h3>
                            <p className="text-white/60 text-sm">
                                Art is not judged by how it was generated, but by the idea it expresses. Models are tools — meaning is the metric.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-white">2. Context Creates Value</h3>
                            <p className="text-white/60 text-sm">
                                Each work is presented with narrative framing: prompts, themes, cultural references, and technical lineage.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <h3 className="font-bold text-lg mb-2 text-white">3. Accessibility Without Dilution</h3>
                            <p className="text-white/60 text-sm">
                                Anyone can experience the museum — without sacrificing curatorial rigor or artistic depth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Foundation */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                        <Cpu className="text-blue-400" />
                        Technical Foundation (Founder-Built)
                    </h2>
                    <p className="text-white/70 mb-6">
                        Aethermuse is architected as both a cultural platform and a scalable product.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            "Generative pipelines using modern diffusion and transformer models",
                            "Metadata-rich artwork storage and categorization",
                            "High-fidelity rendering optimized for web galleries",
                            "Print-on-demand integration for physical artwork delivery",
                            "Secure payment and ownership workflows"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-3">
                                <Box size={16} className="text-blue-400" />
                                <span className="text-sm text-white/80">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-4 text-white/60 text-sm">
                        The system is designed to scale from solo collectors to institutional exhibitions.
                    </p>
                </section>

                {/* What Makes It Different */}
                <section className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 border border-white/10">
                    <h2 className="text-2xl font-bold mb-6 text-white">What Makes Aethermuse Different</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-white/70 mb-4">
                                Most AI art platforms optimize for volume or speculation. <br />
                                <span className="text-white font-semibold">Aethermuse optimizes for meaning.</span>
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-white/80">
                                    <Sparkles size={16} className="text-purple-400" />
                                    Museum-grade presentation, not social-feed chaos
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <Sparkles size={16} className="text-purple-400" />
                                    Curated collections instead of endless prompts
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <Sparkles size={16} className="text-purple-400" />
                                    Long-term archival thinking, not trend chasing
                                </li>
                                <li className="flex items-center gap-2 text-white/80">
                                    <Sparkles size={16} className="text-purple-400" />
                                    A founder with both technical and philosophical grounding
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-xl font-light italic text-center text-white/90 p-6 bg-white/5 rounded-xl border border-white/10">
                                "Aethermuse treats AI art as culture — not content."
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact & Founder's Perspective */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Globe className="text-green-400" />
                            Impact & Trajectory
                        </h2>
                        <ul className="space-y-2 text-white/70">
                            <li>Become a reference point for serious AI art curation</li>
                            <li>Bridge digital and physical art ownership</li>
                            <li>Support emerging creators working with computational tools</li>
                            <li>Influence how future generations understand AI creativity</li>
                        </ul>
                        <p className="mt-4 text-white/60 text-sm">
                            The long-term goal is to establish Aethermuse as a globally recognized digital museum.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6 text-white">Founder’s Perspective</h2>
                        <blockquote className="border-l-4 border-purple-500 pl-4 py-2 bg-white/5 rounded-r-lg">
                            <p className="text-lg italic text-white/80 mb-4">
                                "Art has always reflected the tools of its time. Aethermuse exists to ensure that the age of artificial creativity is not forgotten, flattened, or misunderstood — but curated with care and intention."
                            </p>
                            <footer className="text-white/60 text-sm">
                                — Pride Chamisa, Founder
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
                            Active development and collection curation
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Preparing themed exhibitions and artist collaborations
                        </div>
                        <div className="flex items-center gap-2 text-white/70 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            Exploring institutional partnerships and physical showcases
                        </div>
                    </div>
                </section>

                {/* Calls to Action */}
                <section className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-white/10">
                    <button className="flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25">
                        Explore the Museum
                    </button>
                    <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold transition-all backdrop-blur-sm">
                        View Current Exhibitions
                    </button>
                </section>

                <div className="text-center text-white/40 text-sm pt-8">
                    Aethermuse is not a gallery of algorithms — it is a museum for the imagination of the future.
                </div>
            </div>
        </div>
    );
};

export default AethermuseDetails;

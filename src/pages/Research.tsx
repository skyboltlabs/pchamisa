import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Quote, Award, TrendingUp } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import { publications } from '../data/portfolio';

const Research: React.FC = () => {
  const researchAreas = [
    {
      title: 'Medical AI & Diagnostics',
      description: 'Life-threatening disease detection using explainable AI',
      icon: Award,
      papers: 2,
      citations: 0
    },
    {
      title: 'AI Safety & Moderation',
      description: 'Real-time video content moderation and trust systems',
      icon: TrendingUp,
      papers: 1,
      citations: 0
    },
    {
      title: 'Clinical Data Intelligence',
      description: 'Large-scale medical record analysis and pediatric research',
      icon: FileText,
      papers: 1,
      citations: 0
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Research & Clinical Impact
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Advancing responsible AI, medical diagnostics, and trust & safety through 
            rigorous research and real-world clinical applications that save lives.
          </p>
        </motion.section>

        {/* Research Areas */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Research Focus Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center">
                  <area.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-white/70 mb-6">
                    {area.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold text-blue-400">
                        {area.papers}
                      </div>
                      <div className="text-white/60 text-sm">Papers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">
                        {area.citations}
                      </div>
                      <div className="text-white/60 text-sm">Citations</div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Publications & Research
          </h2>
          <div className="space-y-8">
            {publications.map((publication, index) => (
              <motion.div
                key={publication.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <FileText className="w-6 h-6 text-blue-400" />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                          {publication.venue} • {publication.year}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {publication.title}
                      </h3>
                      
                      <p className="text-blue-400 mb-4">
                        {publication.authors.join(', ')}
                      </p>
                      
                      <div className="bg-white/5 border-l-4 border-blue-400 p-4 mb-6">
                        <Quote className="w-5 h-5 text-blue-400 mb-2" />
                        <p className="text-white/80 italic">
                          {publication.abstract}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-green-400 font-semibold">
                            {publication.citations} citations
                          </span>
                        </div>
                        {publication.pdfUrl && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={publication.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                          >
                            Read Paper
                            <ExternalLink size={16} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Stats */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <GlassCard className="p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Research & Clinical Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
                <div className="text-white/70">Publications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">100M+</div>
                <div className="text-white/70">Records Analyzed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">2B+</div>
                <div className="text-white/70">Users Protected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">7+</div>
                <div className="text-white/70">Years Experience</div>
              </div>
            </div>
          </GlassCard>
        </motion.section>
      </div>
    </div>
  );
};

export default Research;
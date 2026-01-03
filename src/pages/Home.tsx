import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/UI/GlassCard';
import { projects } from '../data/portfolio';

const Home: React.FC = () => {
  const stats = [
    { icon: TrendingUp, label: 'Medical Records Analyzed', value: '100M+' },
    { icon: Users, label: 'Viewers Protected', value: '2B+' },
    { icon: Award, label: 'Startups Built', value: '4+' },
    { icon: Sparkles, label: 'Years Experience', value: '7+' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Pride Chamisa
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto"
            >
              Founder · Data Scientist · Machine Learning Engineer · Product Architect
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-white/70 mb-8 max-w-4xl mx-auto"
            >
              Building AI systems that save lives, protect online communities, and unlock new creative and commercial possibilities through
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                {' '}responsible artificial intelligence
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-2xl transition-all duration-300"
                >
                  Explore My Work
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Breakthrough Innovations
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              AI systems protecting communities, advancing medical research, and unlocking new digital economies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {project.id === '1' ? (
                  <Link to="/vidsentry">
                    <GlassCard className="overflow-hidden h-full">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                            {project.category}
                          </span>
                          <span className="text-white/60 text-sm">{project.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-white/70 mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-green-400 font-semibold">
                            {project.impact}
                          </span>
                          <button
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                          >
                            Learn More
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                ) : (
                  <Link to={
                    project.id === '2' ? '/aethermuse' :
                      project.id === '3' ? '/triagebotpro' :
                        `/projects/${project.id}`
                  }>
                    <GlassCard className="overflow-hidden h-full">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                            {project.category}
                          </span>
                          <span className="text-white/60 text-sm">{project.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <p className="text-white/70 mb-4">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-green-400 font-semibold">
                            {project.impact}
                          </span>
                          <span
                            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                          >
                            Learn More
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300"
              >
                View All Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Home;

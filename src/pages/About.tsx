import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Users, Award, Code, TrendingUp } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import { experiences } from '../data/portfolio';

const About: React.FC = () => {
  const skills = [
    { name: 'Machine Learning', level: 95, icon: Brain },
    { name: 'Product Architecture', level: 92, icon: Rocket },
    { name: 'Data Science', level: 94, icon: TrendingUp },
    { name: 'Medical AI', level: 88, icon: Award },
    { name: 'Video Processing', level: 90, icon: Code },
    { name: 'Research', level: 91, icon: Users }
  ];

  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Visionary AI Pioneer
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            A visionary South African based founder and data scientist pioneering responsible artificial intelligence. 
            Leading product engineering, ML research, and data architecture across social impact systems 
            and commercial platforms that protect communities and save lives.
          </p>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <GlassCard className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  The Mission
                </h2>
                <div className="space-y-4 text-white/80 leading-relaxed">
                  <p>
                    As founder of VidSentry, I am shaping the future of AI trust & safety at global scale while leading advanced research in clinical disease detection at the University of Cape Town.
                  </p>
                  <p>
                    My work spans video safety and compliance technologies, medical AI for life-threatening disease detection, generative media ecosystems, and intelligent automation for global business.
                  </p>
                  <p>
                    I believe in interpretable and fair AI — and in bridging research and production to deliver real-world impact. My mission is to build AI systems that protect people, accelerate scientific discovery, and amplify human creativity.
                  </p>
                </div>
              </div>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <img
                    src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Pride Chamisa"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                  </div>
                  <div className="relative">
                    <div className="bg-white/10 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full"
                      />
                    </div>
                    <span className="text-white/70 text-sm">{skill.level}%</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Professional Journey
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-16 h-16 rounded-lg object-cover mb-4"
                      />
                      <div className="text-blue-400 font-semibold">{exp.period}</div>
                    </div>
                    <div className="lg:col-span-3">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-blue-400 mb-4">
                        {exp.company}
                      </h4>
                      <p className="text-white/80 mb-4">
                        {exp.description}
                      </p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-white/70">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Pride Chamisa</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Visionary South African based founder and data scientist pioneering responsible AI 
              systems that protect communities, advance medical research, and save lives.
            </p>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/VidSentry"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/chamisapride"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://twitter.com/VidSentry"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:pride.chamisa@vidsentry.com"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/research" className="text-gray-300 hover:text-white transition-colors">Research</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Expertise</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">AI Safety & Moderation</li>
              <li className="text-gray-300">Medical AI</li>
              <li className="text-gray-300">Clinical Research</li>
              <li className="text-gray-300">Product Architecture</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-400" size={16} /> by Pride Chamisa
          </p>
          <p className="text-gray-400 text-sm mt-2">
            © 2026 Pride Chamisa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

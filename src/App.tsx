import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import AnimatedBackground from './components/UI/AnimatedBackground';
import LoadingSpinner from './components/UI/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Research = React.lazy(() => import('./pages/Research'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen relative">
          <AnimatedBackground />
          <Header />
          
          <main>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/research" element={<Research />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Twitter, Sparkles, Code, Zap } from 'lucide-react';
import { mockData } from '../data/mock';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Web Developer'];

  // Typing animation effect
  useEffect(() => {
    const word = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(word.substring(0, typedText.length + 1));
        if (typedText === word) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(word.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentWordIndex, words]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    { icon: Github, href: mockData.social.github, label: 'GitHub', color: 'hover:text-gray-700' },
    { icon: Linkedin, href: mockData.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: mockData.social.twitter, label: 'Twitter', color: 'hover:text-blue-400' }
  ];

  const features = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
    { icon: Zap, title: 'Fast Performance', description: 'Optimized applications for speed' },
    { icon: Sparkles, title: 'Modern Design', description: 'Beautiful and intuitive interfaces' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxjb2Rpbmd8ZW58MHx8fHwxNzUyNDc5ODkxfDA&ixlib=rb-4.1.0&q=85"
            alt="Coding background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-pink-900/40"></div>
          
          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            id="animate-hero"
            className={`space-y-8 transition-all duration-1000 ${
              isVisible['animate-hero'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Animated Greeting */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Welcome to my digital space</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block text-white mb-2 animate-fade-in-up">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  {mockData.personal.name}
                </span>
              </h1>
              
              {/* Typing Animation */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-200 h-10">
                <span className="border-r-2 border-cyan-400 animate-pulse">
                  {typedText}
                </span>
              </div>
            </div>

            {/* Brief Description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
              I create beautiful, responsive, and user-friendly web applications that bring ideas to life 
              with modern technologies and creative solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
              <Link to="/projects">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              < a href='Vishwas Saxena-Front-End Developer-Resume.pdf' download >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </Button> </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 animate-fade-in-up">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${color} transition-all duration-300 transform hover:scale-125 hover:rotate-12 p-3 rounded-full hover:bg-white/10 backdrop-blur-sm`}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        id="animate-features"
        className={`py-20 bg-gray-50 dark:bg-gray-900 transition-all duration-1000 ${
          isVisible['animate-features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Bring to the Table
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section 
        id="animate-projects"
        className={`py-20 bg-white dark:bg-gray-800 transition-all duration-1000 ${
          isVisible['animate-projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for frontend development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockData.projects.filter(project => project.featured).map((project, index) => (
              <div 
                key={project.id} 
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-rotate-1 group`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                      Click to explore
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.liveDemo, "_blank");
                        }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex-1 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                        Live Demo
                      </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, "_blank");
                        }}
                        className="flex-1 group/btn"
                      >
                        <Github className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                        Code
                      </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 group"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-up:nth-child(1) { animation-delay: 0.2s; }
        .animate-fade-in-up:nth-child(2) { animation-delay: 0.4s; }
        .animate-fade-in-up:nth-child(3) { animation-delay: 0.6s; }
        .animate-fade-in-up:nth-child(4) { animation-delay: 0.8s; }
      `}</style>
    </div>
  );
};

export default Home;

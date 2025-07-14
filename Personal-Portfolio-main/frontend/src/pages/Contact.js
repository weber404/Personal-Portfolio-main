import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Heart, Code, Coffee } from 'lucide-react';
import { mockData } from '../data/mock';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});

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
    { 
      icon: Github, 
      href: mockData.social.github, 
      label: 'GitHub', 
      color: 'hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
      bgColor: 'bg-gray-50 dark:bg-gray-800'
    },
    { 
      icon: Linkedin, 
      href: mockData.social.linkedin, 
      label: 'LinkedIn', 
      color: 'hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      icon: Twitter, 
      href: mockData.social.twitter, 
      label: 'Twitter', 
      color: 'hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    { 
      icon: Mail, 
      href: `mailto:${mockData.social.email}`, 
      label: 'Email', 
      color: 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: mockData.personal.email,
      href: `mailto:${mockData.personal.email}`,
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      description: 'Drop me a line anytime!'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: mockData.personal.phone,
      href: `tel:${mockData.personal.phone}`,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      description: 'Let\'s have a chat!'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: mockData.personal.location,
      href: null,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      description: 'Currently based in'
    }
  ];

  const stats = [
    { number: '5+', label: 'Years Experience', icon: Code },
    { number: '50+', label: 'Projects Completed', icon: Heart },
    { number: '∞', label: 'Cups of Coffee', icon: Coffee }
  ];

  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Header */}
        <div 
          id="animate-header" 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible['animate-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Let's Work Together
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects 
            and create something extraordinary together.
          </p>
        </div>

      {/* Stats Section */}
        

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Information */}
          <div 
            id="animate-contact-info"
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible['animate-contact-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Have a project in mind? Want to discuss opportunities? Or just want to say hello? 
                I'd love to hear from you! Choose your preferred way to connect.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center space-x-4 p-6 rounded-2xl ${item.bgColor} hover:shadow-lg transition-all duration-300 transform hover:scale-105 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-3 rounded-full ${item.color} bg-white dark:bg-gray-800 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                      {item.description}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                      >
                        <span>{item.value}</span>
                        <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </a>
                    ) : (
                      <span className="text-gray-700 dark:text-gray-300">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links & CTA */}
          <div 
            id="animate-social-cta"
            className={`space-y-8 transition-all duration-1000 delay-500 ${
              isVisible['animate-social-cta'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* Large Social Section */}
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Connect With Me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Let's stay connected! Follow me on social media for updates on my latest projects and insights.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map(({ icon: Icon, href, label, color, bgColor }, index) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-3 p-4 rounded-xl ${bgColor} ${color} transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  Available for new projects
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Currently accepting freelance projects and full-time opportunities
              </p>
            </div>

            {/* Fun Fact */}
            <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Fun Fact</h4>
              <p className="text-sm opacity-90">
                I debug code faster after my third cup of coffee ☕
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div 
          id="animate-bottom-cta"
          className={`text-center mt-20 transition-all duration-1000 delay-700 ${
            isVisible['animate-bottom-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Let's turn your vision into reality. I'm just one message away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${mockData.personal.email}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href={mockData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Download, MapPin, Mail, Phone, Award, Calendar, User, Briefcase } from 'lucide-react';
import { mockData } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [skillsAnimated, setSkillsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            
            // Trigger skills animation
            if (entry.target.id === 'animate-skills') {
              setTimeout(() => setSkillsAnimated(true), 500);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const timelineItems = [
    {
      year: '05/2024 - 06/2024',
      role: 'Web Developer Intern',
      company: 'Oasis Infobyte',
      description: 'Developed a fully responsive e-commerce website named Forever during my internship, aimed at delivering a smooth and engaging online shopping experience. The project highlights my skills in front-end development, user interface design, and integration of core e-commerce functionalities.',
      side: 'right',
      link: 'https://drive.google.com/file/d/1rAIb-OvgS0gcZ7g-Eba-gbRy1A-POP6h/view?usp=drive_link'
      
    },
    {
      year: '04/2024 - 05/2024',
      role: 'Web Developer Intern',
      company: 'Codsoft',
      description: 'Developed a web-based temperature converter during my internship that accurately converts temperature values from Kelvin to Fahrenheit. This project demonstrates my foundational skills in web development and practical application of JavaScript for real-time calculations.',
      side: 'left',
      link: 'https://drive.google.com/file/d/19VaF7c6ytikJH-c4UNeigAPLVt8mqnMW/view?usp=drive_link'
      
    },
    {
      year: '2022 - 2025',
      role: 'Bachelor of Computer Application (BCA)',
      company: 'DBRAU',
      description: 'Graduated with honors, focused on web development and software engineering. Active member of the computer science club.',
      side: 'right'
    }
  ];

  return (
    <div className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Header */}
        <div 
          id="animate-header"
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible['animate-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for frontend development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <div 
            id="animate-image"
            className={`relative transition-all duration-1000 ${
              isVisible['animate-image'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
           <div className="relative group w-96 h-96 mx-auto">
  {/* Background gradient border effect */}
  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl z-0 transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

  {/* Profile Image */}
  <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl">
    <img
      src="Vishwas Profile Picture.jpg"
      alt="Vishwas Saxena"
      className="w-full h-full object-cover object-top transition-transform duration-500 transform group-hover:scale-105"
    />
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
  </div>
</div>
</div>

          {/* Content Section */}
          <div 
            id="animate-content"
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible['animate-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Hello! I'm {mockData.personal.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {mockData.personal.bio}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group">
                <MapPin className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span>{mockData.personal.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group">
                <Mail className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span>{mockData.personal.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group">
                <Phone className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <span>{mockData.personal.phone}</span>
              </div>
            </div>

            <a href='Vishwas Saxena-Front-End Developer-Resume.pdf' download>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <Download className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Download Resume
            </Button> </a>
          </div>
        </div>

       

        {/* Skills Section */}
        <div 
          id="animate-skills"
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible['animate-skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockData.skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="space-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.color} transform origin-left ${
                      skillsAnimated ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    style={{ 
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div 
          id="animate-timeline"
          className={`transition-all duration-1000 delay-500 ${
            isVisible['animate-timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Experience & Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
              
              {/* Timeline items */}
              <div className="space-y-12" >
                {timelineItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${
                      item.side === 'right' ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div 
                      className={`flex-1 ${
                        item.side === 'right' ? 'text-right pr-8' : 'text-left pl-8'
                      }`}
                    >
                     {index < 2 ? (
                    // First two boxes → clickable link
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                    >
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </a>
                  ) : (
                    // Last box → plain div
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                      <div className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-2 group-hover:scale-110 transition-transform duration-300">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  )}
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative z-10 shadow-lg hover:scale-125 transition-transform duration-300"></div>
                    
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
};

export default About;
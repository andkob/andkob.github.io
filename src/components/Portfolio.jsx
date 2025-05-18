import React, { useState, useEffect, useRef } from 'react';
import { 
  GithubIcon, 
  LinkedinIcon, 
  MailIcon, 
  ExternalLinkIcon, 
  CodeIcon,
  ShieldIcon, 
  DatabaseIcon,
  SunIcon,
  MoonIcon
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const projectRefs = useRef([]);

  // Initialize project refs
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
  }, []);

  useEffect(() => {
    // Check system preference on initial load
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }

      // Parallax effect for hero section
      if (heroRef.current) {
        const scrollValue = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollValue * 0.4}px)`;
        heroRef.current.style.opacity = 1 - scrollValue * 0.002;
      }

      // Animate in projects when they come into view
      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.8;
          
          if (isVisible) {
            ref.style.opacity = '1';
            ref.style.transform = 'translateY(0)';
          }
        }
      });
    };

    // Track mouse position for interactive elements
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial call to set up animations
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const skills = [
    { name: 'Full-Stack Development', icon: <CodeIcon className="w-6 h-6" />, description: 'Building end-to-end applications with modern frameworks'},
    { name: 'Cybersecurity', icon: <ShieldIcon className="w-6 h-6" />, description: 'Implementing secure systems and best practices'},
    { name: 'Database Design', icon: <DatabaseIcon className="w-6 h-6" />, description: 'Designing efficient and scalable data structures'},
  ];

  const projects = [
    {
      title: 'Planly',
      description: 'A full-stack organization management platform using Spring Boot and React with real-time updates.',
      link: 'https://github.com/andkob/Planly',
      tags: ['React', 'Spring Boot', 'REST API']
    },
    {
      title: 'Slice',
      description: 'Personal finance management app with third-party banking API integration and real-time tracking.',
      link: 'https://github.com/andkob/Slice',
      tags: ['React', 'express.js', 'APIs', 'Financial Tech']
    },
    {
      title: 'EduChain',
      description: 'Educational blockchain implementation in Java demonstrating core concepts and principles.',
      link: 'https://github.com/andkob/EduChain',
      tags: ['Java', 'Blockchain', 'Cryptography']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 overflow-hidden">
      {/* Floating interactive background circles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute rounded-full bg-blue-200 dark:bg-blue-900 blur-3xl opacity-20 w-96 h-96 transition-transform duration-1000 ease-in-out"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
            transform: `translate(-50%, -50%) scale(${1 + Math.sin(Date.now() / 3000) * 0.2})`
          }}
        />
        <div
          className="absolute rounded-full bg-indigo-300 dark:bg-indigo-800 blur-3xl opacity-20 w-64 h-64 transition-transform duration-1000 ease-in-out"
          style={{
            right: `${mousePosition.x / 25}px`,
            bottom: `${mousePosition.y / 25}px`,
            transform: `translate(50%, 50%) scale(${1 + Math.cos(Date.now() / 2500) * 0.2})`
          }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolling ? 'bg-white dark:bg-gray-800 shadow-lg backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80' : 'bg-transparent'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600 relative overflow-hidden group">
              <span className="relative z-10">AK</span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </span>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`transition-colors duration-300 relative group ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      activeSection === item.toLowerCase() ? 'w-full bg-blue-600' : 'bg-blue-400 group-hover:w-full'
                    } transition-all duration-300`}></span>
                  </button>
                ))}
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110"
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900 z-10"></div>
          <div className="grid grid-cols-5 grid-rows-5 w-full h-full opacity-10 dark:opacity-5">
            {Array(25).fill().map((_, i) => (
              <div key={i} className="border border-gray-800 dark:border-gray-300"></div>
            ))}
          </div>
        </div>
        
        <div ref={heroRef} className="px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            <span className="inline-block transform transition-transform duration-700 hover:translate-y-[-5px]">Andrew Kobus</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Software Developer | Cybersecurity Enthusiast | BSU Computer Science
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://github.com/andkob" 
              className="p-2 rounded-full bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/andrew-kobus" 
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:andrewkobus4@gmail.com" 
              className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:rotate-3"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section with fade-in effect */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500 relative z-10">
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 relative overflow-hidden">
            About Me
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-4 transform transition-transform duration-300 hover:scale-x-150"></span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6">
            <p className="text-lg opacity-0 transform translate-y-4 animate-fade-in-up">
              Hello! I'm Andrew Kobus, a Computer Science senior at Boise State University. 
              I love working on new types of projects and learning new things.
            </p>
            <p className="text-lg opacity-0 transform translate-y-4 animate-fade-in-up animation-delay-200">
              I'm passionate about understanding systems at every level—from high-level application 
              development to low-level hardware interactions.
            </p>
            <p className="text-lg opacity-0 transform translate-y-4 animate-fade-in-up animation-delay-400">
              Whether it's building software applications or diving deep into digital logic design, 
              my desire to learn drives me to explore new technologies and continuously improve my 
              skills across the entire spectrum of computing.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section with animated skill bars */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500 relative z-10">
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-indigo-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-20 -z-10 transform translate-x-1/2 translate-y-1/2"></div>
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 relative overflow-hidden">
            Core Skills
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-4 transform transition-transform duration-300 hover:scale-x-150"></span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Java', 'JavaScript', 'React.js', 'Spring Framework', 'Python', 'Django', 'express.js', 'C/C++', 'SQL', 'Linux', 'REST APIs', 'AWS'].map((tech, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-blue-50 dark:hover:bg-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with staggered reveal */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-500 relative z-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12 relative overflow-hidden">
            Featured Projects
            <span className="block h-1 w-24 bg-blue-500 mx-auto mt-4 transform transition-transform duration-300 hover:scale-x-150"></span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                ref={el => projectRefs.current[index] = el}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-all duration-700 transform opacity-0 translate-y-12 hover:shadow-xl group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute right-0 top-0 w-20 h-20 bg-blue-500 dark:bg-blue-600 rounded-bl-full transform translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 relative group"
                >
                  <span>View Project</span> 
                  <ExternalLinkIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with hover interactions */}
      <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="grid grid-cols-8 grid-rows-8 w-full h-full">
            {Array(64).fill().map((_, i) => (
              <div key={i} className="border border-gray-700"></div>
            ))}
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-lg mb-4">Let's Connect</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/andkob" 
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/andrew-kobus" 
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:andrewkobus4@gmail.com" 
              className="hover:text-blue-400 transition-all duration-300 transform hover:scale-125"
            >
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Andrew Kobus. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s forwards;
          animation-delay: 0.2s;
        }
        
        .animation-delay-200 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
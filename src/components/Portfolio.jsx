import React, { useState, useEffect } from 'react';
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
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const skills = [
    { name: 'Full-Stack Development', icon: <CodeIcon className="w-6 h-6" />, description: 'Building end-to-end applications with modern frameworks' },
    { name: 'Cybersecurity', icon: <ShieldIcon className="w-6 h-6" />, description: 'Implementing secure systems and best practices' },
    { name: 'Database Design', icon: <DatabaseIcon className="w-6 h-6" />, description: 'Designing efficient and scalable data structures' },
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
      tags: ['React', 'APIs', 'Financial Tech']
    },
    {
      title: 'EduChain',
      description: 'Educational blockchain implementation in Java demonstrating core concepts and principles.',
      link: 'https://github.com/andkob/EduChain',
      tags: ['Java', 'Blockchain', 'Cryptography']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolling ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">AK</span>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 pt-16">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Andrew Kobus
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer | Cybersecurity Enthusiast | BSU Computer Science
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/andkob" className="p-2 rounded-full bg-gray-900 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/andrew-kobus" className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="mailto:andrewkobus4@gmail.com" className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6">
            <p className="text-lg">
              Hello! I'm Andrew Kobus, a Junior year Computer Science student at Boise State University. 
              I love working on new types of projects and learning new things.
            </p>
            <p className="text-lg">
              I'm passionate about understanding systems at every level—from high-level application 
              development to low-level hardware interactions.
            </p>
            <p className="text-lg">
              Whether it's building software applications or diving deep into digital logic design, 
              my desire to learn drives me to explore new technologies and continuously improve my 
              skills across the entire spectrum of computing.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Core Skills</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 dark:text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{skill.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Java', 'JavaScript', 'React.js', 'Spring Framework', 'Python', 'C/C++', 'Linux', 'REST APIs'].map((tech, index) => (
              <span key={index} className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-700 dark:text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  View Project <ExternalLinkIcon className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-4">Let's Connect</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/andkob" className="hover:text-blue-400 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/andrew-kobus" className="hover:text-blue-400 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="mailto:andrewkobus4@gmail.com" className="hover:text-blue-400 transition-colors">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
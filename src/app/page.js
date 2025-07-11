'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Github, Linkedin, Mail, ExternalLink, Shield, Terminal, Award, 
  FileText, BookOpen, Users, Eye, X, ChevronLeft, ChevronRight, Calendar,
  MapPin, Sparkles, Zap, Heart, Image as ImageIcon, Code, Globe
} from 'lucide-react';
import { portfolioData } from './data/portfolioData'; 

const SecurityPortfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [imageModal, setImageModal] = useState({ isOpen: false, images: [], currentIndex: 0, title: '' });
  const [activeProjectTabs, setActiveProjectTabs] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { profile, clubs, projects, learningActivities, awards, certificates, externalActivities, skills, blogPosts } = portfolioData;

  // 이미지 모달 열기
  const openImageModal = (images, currentIndex = 0, title = '') => {
    setImageModal({ isOpen: true, images, currentIndex, title });
  };

  // 이미지 모달 닫기
  const closeImageModal = () => {
    setImageModal({ isOpen: false, images: [], currentIndex: 0, title: '' });
  };

  // 이미지 네비게이션
  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (imageModal.currentIndex + 1) % imageModal.images.length
      : (imageModal.currentIndex - 1 + imageModal.images.length) % imageModal.images.length;
    setImageModal(prev => ({ ...prev, currentIndex: newIndex }));
  };

  // 프로젝트 탭 변경
  const setActiveTab = (projectId, tab) => {
    setActiveProjectTabs(prev => ({ ...prev, [projectId]: tab }));
  };

  // 프로필 이미지 처리
  const renderProfileImage = () => {
    if (profile.imageUrl && profile.imageUrl !== "/images/profile.jpg") {
      return (
        <img 
          src={profile.imageUrl} 
          alt={profile.name}
          className="w-full h-full object-cover rounded-full"
        />
      );
    }
    return (
      <div className="w-full h-full rounded-full flex items-center justify-center text-8xl bg-gradient-to-br from-green-400/20 to-blue-500/20">
        🛡️
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Cybersecurity Grid Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(${darkMode ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(34, 197, 94, 0.1)' : 'rgba(34, 197, 94, 0.05)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}/>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Security Portfolio
          </div>
          <div className="flex items-center space-x-8">
            <a href="#about" className="hover:text-green-400 transition-colors duration-300">About</a>
            <a href="#clubs" className="hover:text-green-400 transition-colors duration-300">Club</a>
            <a href="#projects" className="hover:text-green-400 transition-colors duration-300">Projects</a>
            <a href="#learning" className="hover:text-green-400 transition-colors duration-300">Learning</a>
            <a href="#achievements" className="hover:text-green-400 transition-colors duration-300">Achievements</a>
            <a href="#skills" className="hover:text-green-400 transition-colors duration-300">Skills</a>
            <a href="#blog" className="hover:text-green-400 transition-colors duration-300">Blog</a>
            <a href="#contact" className="hover:text-green-400 transition-colors duration-300">Contact</a>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <div className="mb-8 animate-fade-in">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 mb-6 hover:scale-105 transition-transform duration-500">
              <div className={`w-full h-full rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
                {renderProfileImage()}
              </div>
            </div>
          </div>
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-slide-up">
            {profile.name}
          </h1>
          <div className="mb-6">
            <div className="text-3xl mb-2 flex items-center justify-center gap-3 animate-slide-up-delay">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse" />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                {profile.tagline}
              </span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse" />
            </div>
            <p className="text-xl text-green-400 opacity-80 animate-fade-in-slow">
              {profile.subtitle}
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up-delay-2">
            <a href={profile.contact.github} className="p-3 rounded-full bg-green-500/20 hover:bg-green-500/30 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Github className="w-8 h-8 text-green-400" />
            </a>
            <a href={profile.contact.linkedin} className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Linkedin className="w-8 h-8 text-blue-400" />
            </a>
            <a href={`mailto:${profile.contact.email}`} className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <Mail className="w-8 h-8 text-purple-400" />
            </a>
            <a href={profile.contact.blog} className="p-3 rounded-full bg-orange-500/20 hover:bg-orange-500/30 transition-all duration-300 hover:scale-110 hover:rotate-12">
              <FileText className="w-8 h-8 text-orange-400" />
            </a>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full animate-float" />
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-blue-500 rounded-full animate-float-delay" />
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-1/3 right-20 w-3 h-3 bg-orange-400 rounded-full animate-float" />
        
        <ChevronDown className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-8 h-8 animate-bounce text-green-400" />
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Education Card */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group`}>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold">{profile.education.university}</h4>
                  <p className="text-blue-400">{profile.education.major}</p>
                  <p className="opacity-80">{profile.education.status}</p>
                  {profile.education.gpa && (
                    <p className="text-green-400 font-semibold">GPA: {profile.education.gpa}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 group`}>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Experience</h3>
              </div>
              
              <div className="space-y-4">
                {profile.experience.map((exp, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-purple-400">{exp.organization}</p>
                    <p className="opacity-80 text-sm">{exp.track}</p>
                    <p className="text-green-400 text-sm">{exp.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy Card */}
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-2 group`}>
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Philosophy</h3>
              </div>
              
              <div className="space-y-4">
                {profile.introduction.map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed opacity-90">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Club Section */}
      <section id="clubs" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <Users className="inline-block w-10 h-10 mr-4" />
            동아리 활동
          </h2>
          <div className="grid gap-8">
            {clubs.map((club) => (
              <div 
                key={club.id}
                className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{club.name}</h3>
                    </div>
                    <div className="mb-4">
                      <p className="text-blue-400 font-semibold">{club.university}</p>
                      <p className="text-lg">{club.role} | {club.period}</p>
                    </div>
                    <p className="opacity-80 mb-6 leading-relaxed">{club.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-green-400">주요 활동</h4>
                      <ul className="space-y-3">
                        {club.activities.map((activity, i) => (
                          <li key={i} className="opacity-80 flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-purple-400">주요 성과</h4>
                      <ul className="space-y-3">
                        {club.achievements.map((achievement, i) => (
                          <li key={i} className="opacity-80 flex items-start gap-3">
                            <Award className="w-5 h-5 text-yellow-400 mt-0.5" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300">
                      <Users className="w-24 h-24 text-blue-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Updated with Tab System */}
      {/* Projects Section - Updated with Period */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <Shield className="inline-block w-10 h-10 mr-4" />
            Projects
          </h2>
          <div className="grid gap-8">
            {projects.map((project) => {
              const activeTab = activeProjectTabs[project.id] || 'overview';
              return (
                <div 
                  key={project.id}
                  className={`p-8 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-green-500/20 transition-all duration-500`}
                >
                  {/* Project Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-green-400">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{project.period}</span>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === '완료' 
                            ? 'bg-green-500/20 text-green-400' 
                            : project.status === '진행중'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tab Navigation */}
                  <div className="flex space-x-4 mb-6 border-b border-gray-600">
                    <button 
                      onClick={() => setActiveTab(project.id, 'overview')}
                      className={`pb-3 px-4 transition-colors duration-300 ${activeTab === 'overview' ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-green-400'}`}
                    >
                      <Terminal className="w-5 h-5 inline mr-2" />
                      Overview
                    </button>
                    <button 
                      onClick={() => setActiveTab(project.id, 'gallery')}
                      className={`pb-3 px-4 transition-colors duration-300 ${activeTab === 'gallery' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-blue-400'}`}
                    >
                      <ImageIcon className="w-5 h-5 inline mr-2" />
                      Gallery
                    </button>
                    <button 
                      onClick={() => setActiveTab(project.id, 'links')}
                      className={`pb-3 px-4 transition-colors duration-300 ${activeTab === 'links' ? 'text-purple-400 border-b-2 border-purple-400' : 'text-gray-400 hover:text-purple-400'}`}
                    >
                      <Globe className="w-5 h-5 inline mr-2" />
                      Links
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="min-h-[300px]">
                    {activeTab === 'overview' && (
                      <div className="animate-fade-in">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <p className="opacity-80 mb-6 leading-relaxed">{project.overview}</p>
                            <div className="mb-6">
                              <h4 className="font-semibold mb-3 text-green-400">주요 기여</h4>
                              <ul className="space-y-3">
                                {project.contribution.map((item, i) => (
                                  <li key={i} className="opacity-80 flex items-start gap-3">
                                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mb-6">
                              <h4 className="font-semibold mb-3 text-blue-400">기술 스택</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                  <span key={i} className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm hover:bg-green-500/30 transition-colors duration-300">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <img 
                              src={project.thumbnail || "/images/default_project.png"} 
                              alt={project.title}
                              className="w-full max-w-sm h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'gallery' && (
                      <div className="animate-fade-in">
                        <h4 className="font-semibold mb-4 text-blue-400">프로젝트 갤러리</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          {project.images && project.images.map((image, i) => (
                            <div key={i} className="relative group cursor-pointer">
                              <img 
                                src={image} 
                                alt={`${project.title} ${i + 1}`}
                                className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                                onClick={() => openImageModal(project.images, i, project.title)}
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <Eye className="w-8 h-8 text-white" />
                              </div>
                              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                {i + 1} / {project.images.length}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeTab === 'links' && (
                      <div className="animate-fade-in">
                        <h4 className="font-semibold mb-4 text-purple-400">관련 링크</h4>
                        <div className="grid md:grid-cols-3 gap-8">
                          {Object.entries(project.links).map(([category, links]) => (
                            <div key={category} className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100/50'} hover:scale-105 transition-transform duration-300`}>
                              <h5 className="font-semibold mb-4 capitalize text-lg flex items-center gap-2">
                                {category === 'github' && <Code className="w-5 h-5 text-green-400" />}
                                {category === 'docs' && <FileText className="w-5 h-5 text-blue-400" />}
                                {category === 'demo' && <Globe className="w-5 h-5 text-purple-400" />}
                                <span className={`${category === 'github' ? 'text-green-400' : category === 'docs' ? 'text-blue-400' : 'text-purple-400'}`}>
                                  {category === 'github' ? 'GitHub' : category === 'docs' ? 'Documentation' : 'Demo'}
                                </span>
                              </h5>
                              <div className="space-y-3">
                                {links.map((link, i) => (
                                  <a key={i} href={link.url} className="flex items-center space-x-3 hover:text-green-400 transition-colors duration-300 group">
                                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                    <span className="text-sm">{link.name}</span>
                                  </a>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Activities Section */}
      <section id="learning" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <BookOpen className="inline-block w-10 h-10 mr-4" />
            Learning & Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningActivities.map((activity, index) => (
              <div 
                key={activity.id}
                className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {activity.title}
                </h3>
                
                <div className="mb-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="text-blue-400">{activity.organization}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <span>{activity.period}</span>
                  </div>
                  {activity.instructor && (
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-purple-400" />
                      <span className="text-purple-400">{activity.instructor}</span>
                    </div>
                  )}
                </div>
                
                <p className="opacity-80 mb-4 text-sm leading-relaxed">{activity.description}</p>
                
                {activity.materials && activity.materials.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-orange-400 text-sm">학습 자료</h4>
                    {activity.materials.map((material, i) => (
                      <a key={i} href={material.url} className="flex items-center space-x-3 text-orange-400 hover:text-orange-300 transition-colors duration-300 group">
                        <FileText className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-sm">{material.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            <Award className="inline-block w-10 h-10 mr-4" />
            Achievements
          </h2>
          
          {/* Awards */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400">수상 기록</h3>
            <div className="grid gap-6">
              {awards.map((award, index) => (
                <div 
                  key={award.id}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-green-500/20 transition-all duration-500 hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{award.title}</h4>
                      <p className="text-green-400 mb-2">{award.organizer}</p>
                      <p className="opacity-80 mb-4 leading-relaxed">{award.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm opacity-60">{award.date}</span>
                      {award.proofImage && (
                        <button 
                          onClick={() => openImageModal([award.proofImage], 0, award.title)}
                          className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded hover:bg-green-500/30 transition-all duration-300 hover:scale-105"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">이미지 보기</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">자격증 및 수료증</h3>
            <div className="grid gap-6">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                      <p className="text-blue-400 mb-2">{cert.organizer}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm opacity-60">{cert.date}</span>
                      {cert.certificateImage && (
                        <button 
                          onClick={() => openImageModal([cert.certificateImage], 0, cert.name)}
                          className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/30 transition-all duration-300 hover:scale-105"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">이미지 보기</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* External Activities */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400">외부 활동</h3>
            <div className="grid gap-6">
              {externalActivities.map((activity, index) => (
                <div 
                  key={activity.id}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-1`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{activity.name}</h4>
                      <p className="text-purple-400 mb-2">{activity.role}</p>
                      <p className="opacity-80 leading-relaxed">{activity.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm opacity-60">{activity.date}</span>
                      {activity.activityImage && (
                        <button 
                          onClick={() => openImageModal([activity.activityImage], 0, activity.name)}
                          className="flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-400 rounded hover:bg-purple-500/30 transition-all duration-300 hover:scale-105"
                        >
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">이미지 보기</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const colors = [
                { text: 'text-green-400', bg: 'from-green-400/20 to-emerald-500/20', shadow: 'hover:shadow-green-500/20' },
                { text: 'text-blue-400', bg: 'from-blue-400/20 to-cyan-500/20', shadow: 'hover:shadow-blue-500/20' },
                { text: 'text-purple-400', bg: 'from-purple-400/20 to-pink-500/20', shadow: 'hover:shadow-purple-500/20' }
              ];
              const color = colors[index];
              return (
                <div 
                  key={category}
                  className={`p-6 rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-2xl ${color.shadow} transition-all duration-500 hover:-translate-y-2 group`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${color.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {index === 0 && <Code className="w-8 h-8 text-green-400" />}
                    {index === 1 && <Shield className="w-8 h-8 text-blue-400" />}
                    {index === 2 && <Terminal className="w-8 h-8 text-purple-400" />}
                  </div>
                  <h3 className={`text-xl font-bold mb-6 ${color.text}`}>{category}</h3>
                  <div className="space-y-4">
                    {skillList.map((skill, i) => (
                      <div key={i} className="space-y-2 group/skill">
                        <h4 className="font-semibold group-hover/skill:text-green-400 transition-colors duration-300">{skill.name}</h4>
                        <p className="text-sm opacity-80 leading-relaxed">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Recent Blog Posts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`rounded-2xl backdrop-blur-sm border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/50 border-gray-200'} shadow-xl hover:shadow-orange-500/20 transition-all duration-500 group hover:-translate-y-2 overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden">
                  <img 
                    src={post.thumbnail || "/images/default_blog.png"} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2 text-sm text-orange-400">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="opacity-80 mb-4 leading-relaxed">{post.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-xs hover:bg-orange-500/30 transition-colors duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a href={post.url} className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors duration-300 group/link">
                    <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                    <span>글 읽어보기</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-xl mb-8 opacity-80 leading-relaxed">
            보안 분야에서의 새로운 도전이나 협업 기회에 관심이 있으시다면 언제든 연락주세요!
          </p>
          <div className="flex justify-center space-x-6">
            <a href={`mailto:${profile.contact.email}`} className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105">
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a href={profile.contact.github} className="flex items-center space-x-2 px-6 py-3 border border-green-400 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a href={profile.contact.blog} className="flex items-center space-x-2 px-6 py-3 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-105">
              <FileText className="w-5 h-5" />
              <span>Blog</span>
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {imageModal.isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-300 hover:scale-110"
            >
              <X className="w-8 h-8" />
            </button>
            
            {imageModal.title && (
              <h3 className="text-white text-xl font-bold mb-4 text-center animate-slide-up">{imageModal.title}</h3>
            )}
            
            <div className="relative">
              <img 
                src={imageModal.images[imageModal.currentIndex]} 
                alt="Modal content"
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-scale-in"
              />
              
              {imageModal.images.length > 1 && (
                <>
                  <button 
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 bg-black/50 rounded-full p-2 hover:scale-110"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-all duration-300 bg-black/50 rounded-full p-2 hover:scale-110"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full">
                    {imageModal.currentIndex + 1} / {imageModal.images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-fade-in-slow {
          animation: fade-in 1.2s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-slide-up-delay {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
        
        .animate-slide-up-delay-2 {
          animation: slide-up 0.8s ease-out 0.4s both;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
};
export default SecurityPortfolio;

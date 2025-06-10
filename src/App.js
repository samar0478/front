import React, { useState, useEffect } from 'react';
import './App.css';
import OfflineIndicator from './components/OfflineIndicator';
import InstallPrompt from './components/InstallPrompt';
import useServiceWorker from './hooks/useServiceWorker';
import SAMPLE_CONTENT from './content'
 
// Enhanced Content Data with Beautiful Essential Skills Navigation


function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [currentGrade, setCurrentGrade] = useState(null);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [visitedLessons, setVisitedLessons] = useState(() => {
    const saved = localStorage.getItem('visitedLessons');
    return saved ? JSON.parse(saved) : [];
  });
  const [showOfflineSettings, setShowOfflineSettings] = useState(false);

  // Service Worker integration
  const { 
    isServiceWorkerReady, 
    isServiceWorkerUpdated, 
    cacheSize, 
    updateServiceWorker,
    updateCacheSize,
    clearCache 
  } = useServiceWorker();

  // Force re-render when language changes
  const [, forceUpdate] = useState({});
  
  const content = SAMPLE_CONTENT[language] || SAMPLE_CONTENT.en;

  // Search functionality - fixed to actually work
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = [];
    const grades = ['grade9', 'grade10', 'essentials'];
    
    grades.forEach(gradeKey => {
      const grade = content.grades[gradeKey];
      if (grade && grade.topics) {
        grade.topics.forEach(topic => {
          if (topic.lessons) {
            topic.lessons.forEach(lesson => {
              if (lesson && lesson.title && lesson.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                results.push({
                  grade: gradeKey,
                  gradeTitle: grade.title,
                  topic: topic.id,
                  topicTitle: topic.title,
                  lesson: lesson.id,
                  lessonTitle: lesson.title,
                  icon: topic.icon
                });
              }
            });
          }
        });
      }
    });
    
    setSearchResults(results);
    setShowSearchResults(results.length > 0);
  }, [searchTerm, content]);

  const handleSearchResultClick = (result) => {
    setCurrentGrade(result.grade);
    setCurrentTopic(result.topic);
    setCurrentLesson(result.lesson);
    setSearchTerm('');
    setShowSearchResults(false);
    setSidebarOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('visitedLessons', JSON.stringify(visitedLessons));
  }, [visitedLessons]);

  useEffect(() => {
    if (currentLesson) {
      const lessonId = `${currentGrade}-${currentTopic}-${currentLesson}`;
      if (!visitedLessons.includes(lessonId)) {
        setVisitedLessons([...visitedLessons, lessonId]);
      }
    }
  }, [currentLesson, currentGrade, currentTopic, visitedLessons]);

  // Force re-render when language changes
  useEffect(() => {
    forceUpdate({});
  }, [language]);

  const handleLanguageChange = (newLanguage) => {
    console.log('Changing language to:', newLanguage);
    setLanguage(newLanguage);
    // Force component re-render
    setTimeout(() => forceUpdate({}), 10);
  };

  const getCurrentLessonData = () => {
    if (!currentGrade || !currentTopic || !currentLesson) return null;
    const grade = content.grades[currentGrade];
    const topic = grade?.topics.find(t => t.id === currentTopic);
    const lesson = topic?.lessons.find(l => l.id === currentLesson);
    return { grade, topic, lesson };
  };

  const navigateLesson = (direction) => {
    const { grade, topic } = getCurrentLessonData();
    if (!grade || !topic) return;

    const currentLessonIndex = topic.lessons.findIndex(l => l.id === currentLesson);
    if (direction === 'next' && currentLessonIndex < topic.lessons.length - 1) {
      setCurrentLesson(topic.lessons[currentLessonIndex + 1].id);
    } else if (direction === 'prev' && currentLessonIndex > 0) {
      setCurrentLesson(topic.lessons[currentLessonIndex - 1].id);
    }
  };

  const downloadPDF = () => {
    const { lesson } = getCurrentLessonData();
    if (!lesson) return;
    
    // Simple PDF generation (in real implementation, use jsPDF or similar)
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>${lesson.title}</title>
          <meta charset="UTF-8">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">
          <h1>${lesson.title}</h1>
          ${lesson.content}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  // Handle Essential Skills Navigation View
  if (currentGrade === 'essentials' && !currentTopic) {
    return (
      <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        {/* Floating particles background effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-20 left-32 w-5 h-5 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-40 right-10 w-3 h-3 bg-indigo-300 rounded-full animate-pulse opacity-70"></div>
        </div>

        {/* Offline Indicator */}
        <OfflineIndicator />
        
        {/* Install Prompt */}
        <InstallPrompt />

        {/* Enhanced Header */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/90 border-purple-500/20' : 'bg-white/90 border-blue-200/50'} backdrop-blur-xl border-b shadow-lg`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div 
                onClick={() => setCurrentGrade(null)}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">📚</div>
                <h1 className={`text-2xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                  {content.siteName}
                </h1>
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Enhanced Language Toggle */}
                <div className={`flex items-center space-x-1 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md rounded-xl p-1.5 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'en' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('np')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'np' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    नेपाली
                  </button>
                </div>

                {/* Enhanced Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 shadow-lg' : 'bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-400 shadow-lg'}`}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Essential Navigation Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r ${darkMode ? 'from-blue-400 via-purple-400 to-pink-400' : 'from-blue-600 via-purple-600 to-pink-600'} bg-clip-text text-transparent animate-pulse`}>
              Essential Navigation ⚡
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
              Life skills that every student should master - from safety tips to money management!
            </p>
          </div>

          {/* Enhanced Essential Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {content.grades.essentials.topics.map((topic, index) => (
              <div 
                key={topic.id}
                onClick={() => setCurrentTopic(topic.id)}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'} relative overflow-hidden`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 6 === 0 ? 'from-blue-500/10 to-purple-500/10' :
                  index % 6 === 1 ? 'from-green-500/10 to-teal-500/10' :
                  index % 6 === 2 ? 'from-orange-500/10 to-red-500/10' :
                  index % 6 === 3 ? 'from-purple-500/10 to-pink-500/10' :
                  index % 6 === 4 ? 'from-red-500/10 to-orange-500/10' :
                  'from-indigo-500/10 to-blue-500/10'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r ${
                    index % 6 === 0 ? 'group-hover:from-blue-500 group-hover:to-purple-500' :
                    index % 6 === 1 ? 'group-hover:from-green-500 group-hover:to-teal-500' :
                    index % 6 === 2 ? 'group-hover:from-orange-500 group-hover:to-red-500' :
                    index % 6 === 3 ? 'group-hover:from-purple-500 group-hover:to-pink-500' :
                    index % 6 === 4 ? 'group-hover:from-red-500 group-hover:to-orange-500' :
                    'group-hover:from-indigo-500 group-hover:to-blue-500'
                  } group-hover:bg-clip-text transition-all duration-300`}>
                    {topic.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    {topic.description}
                  </p>
                  
                  {/* Lesson count badge */}
                  <div className={`mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} group-hover:bg-gradient-to-r ${
                    index % 6 === 0 ? 'group-hover:from-blue-500 group-hover:to-purple-500' :
                    index % 6 === 1 ? 'group-hover:from-green-500 group-hover:to-teal-500' :
                    index % 6 === 2 ? 'group-hover:from-orange-500 group-hover:to-red-500' :
                    index % 6 === 3 ? 'group-hover:from-purple-500 group-hover:to-pink-500' :
                    index % 6 === 4 ? 'group-hover:from-red-500 group-hover:to-orange-500' :
                    'group-hover:from-indigo-500 group-hover:to-blue-500'
                  } group-hover:text-white transition-all duration-300`}>
                    {topic.lessons?.length || 0} lessons
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentGrade(null)}
              className={`px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentGrade) {
    return (
      <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`}>
        {/* Floating particles background effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-purple-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-20 left-32 w-5 h-5 bg-pink-300 rounded-full animate-pulse opacity-50"></div>
          <div className="absolute bottom-40 right-10 w-3 h-3 bg-indigo-300 rounded-full animate-pulse opacity-70"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-80"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-green-300 rounded-full animate-pulse opacity-60"></div>
        </div>

        {/* Offline Indicator */}
        <OfflineIndicator />
        
        {/* Install Prompt */}
        <InstallPrompt />

        {/* Service Worker Update Banner */}
        {isServiceWorkerUpdated && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 text-center shadow-2xl">
            <div className="flex items-center justify-center space-x-4">
              <span className="font-semibold">✨ A new version is available!</span>
              <button
                onClick={updateServiceWorker}
                className="bg-white text-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Update Now
              </button>
            </div>
          </div>
        )}

        {/* Enhanced Header */}
        <header className={`sticky top-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/90 border-purple-500/20' : 'bg-white/90 border-blue-200/50'} backdrop-blur-xl border-b shadow-2xl`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center space-x-4">
                <div className="text-3xl animate-bounce">📚</div>
                <h1 className={`text-2xl font-bold bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                  {content.siteName}
                </h1>
                {/* Enhanced Offline Status Indicator */}
                {isServiceWorkerReady && (
                  <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-xs font-medium ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                      Offline Ready
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center space-x-6">
                {/* Enhanced Search */}
                <div className="hidden sm:block relative">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={content.search}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={`pl-12 pr-4 py-3 rounded-2xl border-2 ${darkMode ? 'bg-gray-800/80 border-gray-600 text-white placeholder-gray-400' : 'bg-white/80 border-gray-300 placeholder-gray-500'} focus:outline-none focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 transition-all duration-300 backdrop-blur-md shadow-lg w-64`}
                    />
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      🔍
                    </div>
                  </div>
                  
                  {/* Enhanced Search Results Dropdown */}
                  {showSearchResults && (
                    <div className={`absolute top-full left-0 right-0 mt-2 ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-xl border-2 ${darkMode ? 'border-gray-600' : 'border-gray-200'} rounded-2xl shadow-2xl max-h-60 overflow-y-auto z-50`}>
                      {searchResults.map((result, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchResultClick(result)}
                          className={`w-full text-left px-6 py-4 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'} last:border-b-0 transition-all duration-300`}
                        >
                          <div className="flex items-center space-x-4">
                            <span className="text-2xl">{result.icon}</span>
                            <div>
                              <div className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {result.lessonTitle}
                              </div>
                              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                {result.gradeTitle} • {result.topicTitle}
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Enhanced Offline Settings Button */}
                <button
                  onClick={() => setShowOfflineSettings(!showOfflineSettings)}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-400 hover:text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:text-gray-700 hover:bg-gray-200'} shadow-lg`}
                  title="Offline Settings"
                >
                  ⚙️
                </button>

                {/* Enhanced Language Toggle */}
                <div className={`flex items-center space-x-1 ${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md rounded-xl p-1.5 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'en' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => handleLanguageChange('np')}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${language === 'np' ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                  >
                    नेपाली
                  </button>
                </div>

                {/* Enhanced Dark Mode Toggle */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-xl transition-all duration-300 transform hover:scale-110 ${darkMode ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 shadow-lg' : 'bg-gradient-to-br from-gray-800 to-gray-900 text-yellow-400 shadow-lg'}`}
                >
                  {darkMode ? '☀️' : '🌙'}
                </button>
              </div>
            </div>
            
            {/* Enhanced Offline Settings Panel */}
            {showOfflineSettings && (
              <div className={`absolute top-full left-0 right-0 ${darkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur-xl border-t-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-2xl p-6 z-40`}>
                <div className="max-w-7xl mx-auto">
                  <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-400' : 'from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                    Offline Settings ⚙️
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50/80'} backdrop-blur-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-green-500 text-xl">✓</span>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          App Status
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {isServiceWorkerReady ? 'Ready for offline use' : 'Setting up offline mode...'}
                      </p>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50/80'} backdrop-blur-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-blue-500 text-xl">💾</span>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Cache Size
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-3`}>
                        {cacheSize}
                      </p>
                      <div className="flex space-x-2">
                        <button
                          onClick={updateCacheSize}
                          className="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Refresh
                        </button>
                        <button
                          onClick={clearCache}
                          className="text-xs px-3 py-1.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50/80'} backdrop-blur-md border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-purple-500 text-xl">📱</span>
                        <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          Install App
                        </span>
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Install for the best offline experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Enhanced Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <div className="mb-12 relative">
              <img 
                src="images/font.png" 
                alt="Students learning programming together"
                className="mx-auto w-full max-w-lg rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              {/* Floating badges around image */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                Interactive! 🎯
              </div>
          
            </div>
            
            <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'} leading-tight`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                {content.subtitle}
              </span>
            </h2>
            <p className={`text-xl md:text-2xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}>
              {content.tagline}
            </p>
            
            {/* Enhanced Grade Selection Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div 
                onClick={() => setCurrentGrade('grade9')}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/80 hover:bg-blue-50/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-blue-200/50'} relative overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
                    {content.startGrade9}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    Computer Basics & Fundamentals
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              <div 
                onClick={() => setCurrentGrade('grade10')}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/80 hover:bg-purple-50/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-purple-200/50'} relative overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
                  <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300`}>
                    {content.startGrade10}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    Programming & Advanced Concepts
                  </p>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-0 group-hover:w-3/4 transition-all duration-1000"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Essential Skills Section */}
              <div 
                onClick={() => setCurrentGrade('essentials')}
                className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-700/50' : 'bg-white/80 hover:bg-green-50/80'} backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl border ${darkMode ? 'border-gray-700/50' : 'border-green-200/50'} relative overflow-hidden`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-teal-500 group-hover:bg-clip-text transition-all duration-300`}>
                    {content.startEssentials}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                    Life Hacks & Practical Skills
                  </p>
                  
                  {/* Special badge for Essential Skills */}
                  <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg">
                    🔥 Most Popular
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="mt-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Features Section */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {[
              { icon: "🌍", title: "Multilingual", desc: "Learn in English or Nepali", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
              { icon: "📱", title: "Mobile Friendly", desc: "Works perfectly on all devices", image: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5" },
              { icon: "🔍", title: "Smart Search", desc: "Find lessons instantly", image: "https://images.pexels.com/photos/7972949/pexels-photo-7972949.jpeg" },
              { icon: "🆓", title: "Completely Free", desc: "No signup required", image: "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg" }
            ].map((feature, index) => (
              <div key={index} className={`group text-center p-8 rounded-3xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
                <div className="relative mb-6">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-16 h-16 mx-auto rounded-2xl object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 text-2xl group-hover:scale-125 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300`}>
                  {feature.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed group-hover:text-gray-500 dark:group-hover:text-gray-200 transition-colors duration-300`}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className={`inline-flex items-center px-8 py-4 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-lg shadow-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}>
              <span className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mr-3`}>Ready to start learning?</span>
              <span className="text-2xl animate-bounce">👆</span>
            </div>
          </div>
        </main>
      </div>
    );
  }

  const currentLessonData = getCurrentLessonData();
  const gradeData = content.grades[currentGrade];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`md:hidden p-2 rounded-lg ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                ☰
              </button>
              
              <div 
                onClick={() => setCurrentGrade(null)}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div className="text-2xl">📚</div>
                <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {content.siteName}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden sm:block relative">
                <input
                  type="text"
                  placeholder={content.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                
                {/* Search Results Dropdown */}
                {showSearchResults && (
                  <div className={`absolute top-full left-0 right-0 mt-1 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50`}>
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result)}
                        className={`w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-200 dark:border-gray-600 last:border-b-0`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-lg">{result.icon}</span>
                          <div>
                            <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {result.lessonTitle}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              {result.gradeTitle} • {result.topicTitle}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Language Toggle */}
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLanguageChange('np')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'np' ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  नेपाली
                </button>
              </div>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
              >
                {darkMode ? content.lightMode : content.darkMode}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-40 w-80 transition-transform duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r overflow-y-auto`}>
          <div className="p-6">
            <h2 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {gradeData.title}
            </h2>
            
            {gradeData.topics.map(topic => (
              <div key={topic.id} className="mb-6">
                <h3 
                  onClick={() => setCurrentTopic(currentTopic === topic.id ? null : topic.id)}
                  className={`flex items-center justify-between cursor-pointer font-semibold text-lg mb-3 p-3 rounded-lg transition-colors ${darkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-50'}`}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-xl">{topic.icon}</span>
                    <span>{topic.title}</span>
                  </span>
                  <span className={`transform transition-transform ${currentTopic === topic.id ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </h3>
                
                {currentTopic === topic.id && (
                  <div className="ml-4 space-y-2">
                    {topic.lessons.map(lesson => {
                      const lessonId = `${currentGrade}-${topic.id}-${lesson.id}`;
                      const isVisited = visitedLessons.includes(lessonId);
                      const isActive = currentLesson === lesson.id;
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => setCurrentLesson(lesson.id)}
                          className={`w-full text-left p-3 rounded-lg transition-colors flex items-center space-x-2 ${
                            isActive 
                              ? 'bg-blue-500 text-white' 
                              : darkMode 
                                ? 'text-gray-300 hover:bg-gray-700' 
                                : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${isVisited ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                          <span>{lesson.title}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {currentLessonData?.lesson ? (
            <div className="max-w-4xl mx-auto p-6">
              {/* Lesson Header */}
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-6 mb-6`}>
                <h1 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentLessonData.lesson.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                    {currentLessonData.topic.title}
                  </span>
                  <button
                    onClick={downloadPDF}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                  >
                    {content.downloadPdf}
                  </button>
                </div>
              </div>

              {/* Lesson Content */}
              <div className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} rounded-lg shadow-lg p-8 mb-6 lesson-content`}>
                <div dangerouslySetInnerHTML={{ __html: currentLessonData.lesson.content }} />
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => navigateLesson('prev')}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                >
                  {content.previous}
                </button>
                
                <button
                  onClick={() => navigateLesson('next')}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  {content.next}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="text-6xl mb-4">📖</div>
                <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Select a Lesson
                </h2>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Choose a topic and lesson from the sidebar to get started
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import { Engineering, Medical, Foundation } from './pages/Divisions';
import { Admissions, Fees } from './pages/AdmissionsInfo';
import { FacultyPage, Blog, Results } from './pages/Extras';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

const MainContent: React.FC = () => {
  const { currentPage } = useNavigation();

  // If on login page, render it without header/footer context if desired, 
  // but for now we keep header/footer or handle inside component.
  // Actually, Login page has its own full screen layout, let's check.
  // The design implies a full screen experience.
  // We can condition rendering Header/Footer in App component based on page.

  if (currentPage === 'login') {
    return <Login />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'engineering': return <Engineering />;
      case 'medical': return <Medical />;
      case 'foundation': return <Foundation />;
      case 'admissions': return <Admissions />;
      case 'fees': return <Fees />;
      case 'faculty': return <FacultyPage />;
      case 'blog': return <Blog />;
      case 'results': return <Results />;
      default: return <Home />;
    }
  };

  return <main>{renderPage()}</main>;
};

const AppLayout: React.FC = () => {
  const { currentPage } = useNavigation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

  // If login page, don't show standard header/footer
  if (currentPage === 'login') {
     return <Login />;
  }

  return (
    <div className="min-h-screen font-sans selection:bg-teal selection:text-white flex flex-col">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <MainContent />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AppLayout />
    </NavigationProvider>
  );
};

export default App;
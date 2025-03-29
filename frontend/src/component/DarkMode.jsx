import React, { useEffect, useState } from 'react';

const DarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const element = document.documentElement;
      if (theme === 'dark') {
        element.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        element.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [theme])
  return (
    <div className="relative">
      <img
        src="/images/light-mode-button.png"
        alt="Light button"
        onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src="/images/dark-mode-button.png"
        alt="Dark button"
        onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

// Optional: Create an Error Boundary component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500">Theme toggle failed</div>;
    }
    return this.props.children;
  }
}

// Wrap your component with the boundary
export default function SafeDarkMode() {
  return (
    <ErrorBoundary>
      <DarkMode />
    </ErrorBoundary>
  );
}
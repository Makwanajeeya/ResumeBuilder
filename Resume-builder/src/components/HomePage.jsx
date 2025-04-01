import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check login status
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home page after logout
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#6D28D9] via-[#D946EF] to-[#F472B6] relative overflow-hidden">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="w-screen px-4">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-white">
                Resume<span className="text-[#FFD700]">Builder</span>
              </Link>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="hidden sm:flex sm:space-x-2 md:space-x-6">
                <Link
                  to="/"
                  className={`text-white hover:text-[#FFD700] px-2 md:px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    isActive('/') ? 'border-[#FFD700]' : 'border-transparent hover:border-[#FFD700]'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/templates"
                  className={`text-white hover:text-[#FFD700] px-2 md:px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    isActive('/templates') ? 'border-[#FFD700]' : 'border-transparent hover:border-[#FFD700]'
                  }`}
                >
                  Templates
                </Link>
                <Link
                  to="/dashboard"
                  className={`text-white hover:text-[#FFD700] px-2 md:px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    isActive('/dashboard') ? 'border-[#FFD700]' : 'border-transparent hover:border-[#FFD700]'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/about"
                  className={`text-white hover:text-[#FFD700] px-2 md:px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    isActive('/about') ? 'border-[#FFD700]' : 'border-transparent hover:border-[#FFD700]'
                  }`}
                >
                  About Us
                </Link>
                {isLoggedIn && (
                  <Link
                    to="/account"
                    className={`text-white hover:text-[#FFD700] px-2 md:px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 ${
                      isActive('/account') ? 'border-[#FFD700]' : 'border-transparent hover:border-[#FFD700]'
                    }`}
                  >
                    Your Account
                  </Link>
                )}
              </div>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-2 md:space-x-4">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="text-white hover:text-[#FFD700] text-sm font-medium transition-colors duration-200"
                  >
                    Logout
                  </button>
                ) : (
                  <div className="flex items-center space-x-2 md:space-x-4">
                    <Link
                      to="/login"
                      className="text-white hover:text-[#FFD700] text-sm font-medium transition-colors duration-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-[#FFD700] text-[#6D28D9] px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-200"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center">
          <div className="w-full text-center px-4">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Create Your Perfect Resume
            </h1>
            <p className="mt-3 text-base text-white/90 sm:text-lg md:mt-5 md:text-xl">
              Build and download a polished resume with ease. Our intuitive builder helps you create a professional resume that stands out.
            </p>
            <div className="mt-10">
              <Link
                to={isLoggedIn ? "/dashboard" : "/register"}
                className="inline-flex items-center px-8 py-3 text-base font-medium rounded-full text-[#6D28D9] bg-[#FFD700] hover:shadow-lg hover:shadow-[#FFD700]/50 md:py-4 md:text-lg md:px-10 transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
              <p className="mt-3 text-sm text-white/80">
                No credit card required
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-screen bg-white/10 backdrop-blur-md">
          <div className="w-full py-6">
            <p className="text-center text-white/80 text-sm">
              © 2024 ResumeBuilder. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage; 
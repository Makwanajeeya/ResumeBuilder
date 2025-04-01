import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#6D28D9] via-[#D946EF] to-[#F472B6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Create Your Professional Resume
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Build stunning resumes in minutes with our easy-to-use templates
            </p>
            {user ? (
              <Link
                to="/dashboard"
                className="inline-block bg-[#FFD700] text-[#6D28D9] px-8 py-3 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-200"
              >
                Go to Dashboard
              </Link>
            ) : (
              <Link
                to="/register"
                className="inline-block bg-[#FFD700] text-[#6D28D9] px-8 py-3 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-200"
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Resume Builder?
            </h2>
            <p className="text-xl text-gray-600">
              Create professional resumes with ease
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#6D28D9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#6D28D9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Templates
              </h3>
              <p className="text-gray-600">
                Choose from a variety of professionally designed templates
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#6D28D9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#6D28D9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy to Edit
              </h3>
              <p className="text-gray-600">
                Simple and intuitive interface for editing your resume
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#6D28D9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#6D28D9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Instant Download
              </h3>
              <p className="text-gray-600">
                Download your resume in PDF format instantly
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Create Your Resume?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of professionals who trust our resume builder
          </p>
          {!user && (
            <Link
              to="/register"
              className="inline-block bg-[#6D28D9] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#5B21B6] transition-all duration-200"
            >
              Create Your Resume Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home; 
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#6D28D9] via-[#D946EF] to-[#F472B6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ResumeBuilder
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Empowering professionals to create stunning resumes
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Story */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              ResumeBuilder was founded with a simple mission: to help professionals create beautiful, 
              professional resumes without the hassle. We understand that your resume is often the first 
              impression you make on potential employers, and we're here to make that impression count.
            </p>
            <p className="text-gray-600">
              Our platform combines modern design with user-friendly functionality to help you create 
              the perfect resume in minutes, not hours.
            </p>
          </div>

          {/* Our Mission */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe that everyone deserves a professional resume that showcases their skills and 
              experience effectively. Our mission is to democratize resume creation by providing 
              accessible, high-quality tools that help job seekers stand out.
            </p>
            <p className="text-gray-600">
              We're committed to continuous improvement and innovation to ensure our platform meets 
              the evolving needs of today's job market.
            </p>
          </div>

          {/* Features */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#6D28D9]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#6D28D9]"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Templates</h3>
                <p className="text-gray-600">
                  Choose from a variety of professionally designed templates that are ATS-friendly
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#6D28D9]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#6D28D9]"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy to Use</h3>
                <p className="text-gray-600">
                  Intuitive interface that makes resume creation simple and efficient
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-[#6D28D9]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#6D28D9]"
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Download</h3>
                <p className="text-gray-600">
                  Download your resume in PDF format instantly, ready to share
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Create your professional resume in minutes
            </p>
            <Link
              to="/register"
              className="inline-block bg-[#6D28D9] text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-[#5B21B6] transition-all duration-200"
            >
              Create Your Resume Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 
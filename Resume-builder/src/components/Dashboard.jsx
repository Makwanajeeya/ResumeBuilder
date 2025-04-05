import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Download } from '@mui/icons-material';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [resumes, setResumes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize the loadResumes function
  const loadResumes = useCallback(() => {
    try {
      const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
      setResumes(savedResumes);
    } catch (error) {
      console.error('Error loading resumes:', error);
      setResumes([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadResumes();
  }, [loadResumes]);

  const handleDeleteResume = useCallback((createdAt) => {
    try {
      const updatedResumes = resumes.filter(r => r.createdAt !== createdAt);
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
      setResumes(updatedResumes);
    } catch (error) {
      console.error('Error deleting resume:', error);
    }
  }, [resumes]);

  const handleDownloadResume = useCallback((resume) => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    
    // Write the resume content to the new window
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${resume.title}</title>
          <style>
            @media print {
              body {
                margin: 0;
                padding: 0;
              }
              .resume-container {
                width: 210mm;
                height: 297mm;
                margin: 0;
                padding: 20mm;
                box-sizing: border-box;
              }
            }
          </style>
        </head>
        <body>
          <div class="resume-container">
            <h1>${resume.data.personalInfo.name}</h1>
            <p>${resume.data.personalInfo.email}</p>
            <p>${resume.data.personalInfo.phone}</p>
            <p>${resume.data.personalInfo.location}</p>
            
            <h2>Education</h2>
            <p>${resume.data.education.degree}</p>
            <p>${resume.data.education.institution}</p>
            <p>${resume.data.education.dates}</p>
            
            <h2>Experience</h2>
            <p>${resume.data.experience.jobTitle}</p>
            <p>${resume.data.experience.company}</p>
            <p>${resume.data.experience.dates}</p>
            <p>${resume.data.experience.description}</p>
            
            <h2>Skills</h2>
            <ul>
              ${resume.data.skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
          </div>
        </body>
      </html>
    `);
    
    // Wait for the content to load before printing
    printWindow.document.close();
    printWindow.onload = function() {
      printWindow.print();
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#6D28D9] via-[#D946EF] to-[#F472B6] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6D28D9] via-[#D946EF] to-[#F472B6] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome{user?.name ? `, ${user.name}` : ''}!
          </h1>
          <p className="text-white/80 text-lg">Manage your resumes and create new ones</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create New Resume Card */}
          <Link
            to="/templates"
            className="group bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all duration-200 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <svg className="w-8 h-8 text-[#6D28D9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Create New Resume</h3>
              <p className="text-white/80 text-center">Start with a professional template</p>
            </div>
          </Link>

          {/* Recent Resumes Section */}
          <div className="md:col-span-2 lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Recent Resumes</h2>
            {resumes.length === 0 ? (
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center">
                <p className="text-white/80 text-lg">You haven't created any resumes yet.</p>
                <Link
                  to="/templates"
                  className="inline-block mt-4 px-6 py-3 bg-[#FFD700] text-[#6D28D9] rounded-lg font-medium hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-200"
                >
                  Create Your First Resume
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumes.map((resume) => (
                  <div 
                    key={resume.createdAt} 
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{resume.title}</h3>
                        <p className="text-white/60 text-sm">
                          Last edited: {new Date(resume.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => navigate(`/resume-builder?edit=${resume.createdAt}`)}
                          className="p-2 text-white/80 hover:text-[#FFD700] transition-colors"
                          aria-label="Edit resume"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleDownloadResume(resume)}
                          className="p-2 text-white/80 hover:text-[#FFD700] transition-colors"
                          aria-label="Download resume"
                        >
                          <Download className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleDeleteResume(resume.createdAt)}
                          className="p-2 text-white/80 hover:text-red-500 transition-colors"
                          aria-label="Delete resume"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
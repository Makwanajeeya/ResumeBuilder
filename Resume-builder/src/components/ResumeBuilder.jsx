import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResumeBuilder = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      location: ''
    },
    education: {
      degree: '',
      institution: '',
      dates: '',
      gpa: ''
    },
    experience: {
      jobTitle: '',
      company: '',
      dates: '',
      description: ''
    },
    skills: []
  });

  useEffect(() => {
    const editId = searchParams.get('edit');
    if (editId) {
      const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
      const resumeToEdit = savedResumes.find(resume => resume.createdAt === editId);
      if (resumeToEdit) {
        setFormData(resumeToEdit.data);
      }
    }
  }, [searchParams]);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSkillAdd = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const handleSkillRemove = (skillToRemove) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSave = () => {
    const resumeName = prompt('Enter a name for your resume:', formData.personalInfo.name || 'Untitled Resume');
    if (!resumeName) return;

    const savedResumes = JSON.parse(localStorage.getItem('resumes') || '[]');
    const editId = searchParams.get('edit');
    
    if (editId) {
      const updatedResumes = savedResumes.map(resume => 
        resume.createdAt === editId
          ? { ...resume, title: resumeName, data: formData }
          : resume
      );
      localStorage.setItem('resumes', JSON.stringify(updatedResumes));
    } else {
      const newResume = {
        id: Date.now(),
        title: resumeName,
        createdAt: new Date().toISOString(),
        data: formData
      };
      localStorage.setItem('resumes', JSON.stringify([...savedResumes, newResume]));
    }
    
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6D28D9] via-[#D946EF] to-[#F472B6] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
          
          {/* Personal Info */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Personal Information</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.personalInfo.name}
                onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.personalInfo.email}
                onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={formData.personalInfo.phone}
                onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="text"
                placeholder="Location"
                value={formData.personalInfo.location}
                onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Degree"
                value={formData.education.degree}
                onChange={(e) => handleInputChange('education', 'degree', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="text"
                placeholder="Institution"
                value={formData.education.institution}
                onChange={(e) => handleInputChange('education', 'institution', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="text"
                placeholder="Dates"
                value={formData.education.dates}
                onChange={(e) => handleInputChange('education', 'dates', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="text"
                placeholder="GPA"
                value={formData.education.gpa}
                onChange={(e) => handleInputChange('education', 'gpa', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Work Experience</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Job Title"
                value={formData.experience.jobTitle}
                onChange={(e) => handleInputChange('experience', 'jobTitle', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="text"
                placeholder="Company"
                value={formData.experience.company}
                onChange={(e) => handleInputChange('experience', 'company', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <input
                type="text"
                placeholder="Dates"
                value={formData.experience.dates}
                onChange={(e) => handleInputChange('experience', 'dates', e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
              <textarea
                placeholder="Description"
                value={formData.experience.description}
                onChange={(e) => handleInputChange('experience', 'description', e.target.value)}
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
              />
            </div>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Skills</h3>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Enter a skill"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#FFD700]"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSkillAdd(e.target.value);
                      e.target.value = '';
                    }
                  }}
                />
                <button
                  onClick={() => {
                    const input = document.querySelector('input[placeholder="Enter a skill"]');
                    handleSkillAdd(input.value);
                    input.value = '';
                  }}
                  className="px-4 py-2 bg-[#FFD700] text-[#6D28D9] rounded-lg font-medium hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-200"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm flex items-center"
                  >
                    {skill}
                    <button
                      onClick={() => handleSkillRemove(skill)}
                      className="ml-2 text-white/80 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full py-3 px-6 rounded-xl bg-[#FFD700] text-[#6D28D9] font-bold text-lg hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all duration-200"
          >
            Save Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
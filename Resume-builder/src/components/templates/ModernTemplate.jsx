import React from 'react';

const ModernTemplate = ({ data }) => {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div className="w-[800px] h-[1125px] bg-white p-12 print:p-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-[#1a365d] mb-2">{personalInfo.name || 'Your Name'}</h1>
        <div className="h-1 w-24 bg-[#FFD700] mb-4"></div>
        <div className="flex gap-4 text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
        </div>
      </div>

      {/* Education */}
      {(education.degree || education.university) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Education</h2>
          <div className="flex gap-8">
            <div className="text-gray-600 min-w-[120px]">
              {education.dates}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{education.degree}</h3>
              <p className="text-gray-600">{education.university}</p>
            </div>
          </div>
        </div>
      )}

      {/* Experience */}
      {(experience.jobTitle || experience.company) && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Experience</h2>
          <div className="flex gap-8">
            <div className="text-gray-600 min-w-[120px]">
              {experience.duration}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{experience.jobTitle}</h3>
              <p className="text-gray-600">{experience.company}</p>
            </div>
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-2 w-24 bg-gray-200 rounded-full">
                  <div className="h-full w-3/4 bg-[#FFD700] rounded-full"></div>
                </div>
                <span className="text-gray-600">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernTemplate; 
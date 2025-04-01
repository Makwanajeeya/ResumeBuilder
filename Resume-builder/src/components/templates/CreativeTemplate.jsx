import React from 'react';

const CreativeTemplate = ({ data }) => {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div className="w-[800px] h-[1125px] bg-white p-12 print:p-12">
      {/* Header with Profile Circle */}
      <div className="flex items-center gap-8 mb-12">
        <div className="w-32 h-32 rounded-full bg-[#6D28D9] flex items-center justify-center text-white text-4xl font-bold">
          {personalInfo.name ? personalInfo.name.charAt(0).toUpperCase() : 'Y'}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-[#6D28D9] mb-2">{personalInfo.name || 'Your Name'}</h1>
          <div className="flex gap-4 text-gray-600">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
          </div>
        </div>
      </div>

      {/* Education */}
      {(education.degree || education.university) && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
            <h2 className="text-2xl font-bold text-[#6D28D9]">Education</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800">{education.degree}</h3>
            <p className="text-gray-600">{education.university}</p>
            <p className="text-gray-500 text-sm mt-2">{education.dates}</p>
          </div>
        </div>
      )}

      {/* Experience */}
      {(experience.jobTitle || experience.company) && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
            <h2 className="text-2xl font-bold text-[#6D28D9]">Experience</h2>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg text-gray-800">{experience.jobTitle}</h3>
            <p className="text-gray-600">{experience.company}</p>
            <p className="text-gray-500 text-sm mt-2">{experience.duration}</p>
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-[#14B8A6] rounded-full"></div>
            <h2 className="text-2xl font-bold text-[#6D28D9]">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#6D28D9] text-white rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreativeTemplate; 
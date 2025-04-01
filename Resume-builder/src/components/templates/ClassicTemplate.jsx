import React from 'react';

const ClassicTemplate = ({ data }) => {
  const { personalInfo, education, experience, skills } = data;

  return (
    <div className="w-[800px] h-[1125px] bg-white p-12 print:p-12">
      <div className="grid grid-cols-[30%_70%] gap-8">
        {/* Left Sidebar */}
        <div className="bg-gray-50 p-6">
          {/* Contact Info */}
          <div className="mb-8">
            <h2 className="font-serif text-2xl text-gray-800 mb-4">Contact</h2>
            <div className="space-y-2 text-gray-600">
              {personalInfo.email && <p>{personalInfo.email}</p>}
              {personalInfo.phone && <p>{personalInfo.phone}</p>}
            </div>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2 className="font-serif text-2xl text-gray-800 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div>
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl text-gray-800 mb-2">{personalInfo.name || 'Your Name'}</h1>
            <div className="h-1 w-24 bg-gray-800"></div>
          </div>

          {/* Education */}
          {(education.degree || education.university) && (
            <div className="mb-8">
              <h2 className="font-serif text-2xl text-gray-800 mb-4">Education</h2>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute left-[-9px] top-2 w-4 h-4 bg-gray-800 rounded-full"></div>
                <div className="mb-4">
                  <h3 className="font-semibold text-lg">{education.degree}</h3>
                  <p className="text-gray-600">{education.university}</p>
                  <p className="text-gray-500 text-sm">{education.dates}</p>
                </div>
              </div>
            </div>
          )}

          {/* Experience */}
          {(experience.jobTitle || experience.company) && (
            <div>
              <h2 className="font-serif text-2xl text-gray-800 mb-4">Experience</h2>
              <div className="relative pl-6 border-l-2 border-gray-200">
                <div className="absolute left-[-9px] top-2 w-4 h-4 bg-gray-800 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-lg">{experience.jobTitle}</h3>
                  <p className="text-gray-600">{experience.company}</p>
                  <p className="text-gray-500 text-sm">{experience.duration}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate; 
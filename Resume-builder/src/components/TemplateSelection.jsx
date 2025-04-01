import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { templates } from '../data/templates';

const TemplateSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleUseTemplate = () => {
    if (selectedTemplate) {
      navigate('/resume-builder', { state: { template: selectedTemplate } });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Template</h1>
          <p className="text-lg text-gray-600">Select a professional template to start building your resume</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`relative group cursor-pointer transition-all duration-200 ${
                selectedTemplate === template.id ? 'ring-2 ring-[#FFD700]' : ''
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="w-[300px] h-[424px] bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-200 group-hover:scale-[1.02]">
                <div className={template.preview.style.header}>
                  <h2 className={`text-2xl font-bold ${template.preview.style.title}`}>John Doe</h2>
                  <p className={template.preview.style.subtitle}>Software Engineer</p>
                </div>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className={`font-semibold mb-2 ${template.preview.style.sectionTitle}`}>Education</h3>
                    <p className="text-sm">Bachelor of Computer Science</p>
                    <p className="text-sm text-gray-600">University of Technology</p>
                  </div>
                  <div>
                    <h3 className={`font-semibold mb-2 ${template.preview.style.sectionTitle}`}>Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 py-1 text-sm ${template.preview.style.skills}`}>React</span>
                      <span className={`px-2 py-1 text-sm ${template.preview.style.skills}`}>JavaScript</span>
                      <span className={`px-2 py-1 text-sm ${template.preview.style.skills}`}>Node.js</span>
                    </div>
                  </div>
                </div>
              </div>
              {selectedTemplate === template.id && (
                <div className="absolute top-2 right-2 bg-[#FFD700] text-white px-2 py-1 rounded-full text-xs font-medium">
                  Selected
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleUseTemplate}
            disabled={!selectedTemplate}
            className={`px-8 py-3 rounded-lg font-medium text-white transition-all duration-200 ${
              selectedTemplate
                ? 'bg-[#6D28D9] hover:bg-[#5B21B6] hover:shadow-lg'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {selectedTemplate ? 'Use Selected Template' : 'Select a Template'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelection;
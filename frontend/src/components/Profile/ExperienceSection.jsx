

import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "OpenAI",
      title: "Software Developer Intern",
      duration: "June 2025 - Aug 2025"
    },
    {
      company: "CipherSchools",
      title: "Full Stack Web Developer",
      duration: "Jan 2025 - May 2025"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg mt-4">
      <h3 className="text-lg font-semibold mb-3">Experience</h3>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <h4 className="font-semibold text-gray-800">{exp.title}</h4>
          <p className="text-sm text-gray-600">{exp.company}</p>
          <p className="text-xs text-gray-500">{exp.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
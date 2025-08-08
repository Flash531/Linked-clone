

import React from 'react';

const EducationSection = () => {
  const education = [
    {
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      degree: "B.Tech in Computer Science",
      period: "2021 - 2025",
    },
    {
      institution: "XYZ Inter College",
      degree: "Intermediate (PCM)",
      period: "2019 - 2021",
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg mt-4">
      <h3 className="text-lg font-semibold mb-3">Education</h3>
      {education.map((edu, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <h4 className="font-semibold text-gray-800">{edu.institution}</h4>
          <p className="text-sm text-gray-600">{edu.degree}</p>
          <p className="text-xs text-gray-500">{edu.period}</p>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;
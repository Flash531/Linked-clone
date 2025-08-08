

import React from 'react';

const SkillSection = () => {
  // Dummy skills data
  const skills = ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"];

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg mt-4">
      <h3 className="text-lg font-semibold mb-3">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
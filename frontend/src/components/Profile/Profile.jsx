import React from 'react';
import ProfileHeader from './ProfileHeader';
import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillSection from './SkillSection';

const Profile = () => {
  return (
    <div className="bg-[#F3F2EF] min-h-screen pb-10 px-4 sm:px-6">
      <div className="w-full max-w-3xl mx-auto">
        <ProfileHeader />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillSection />
      </div>
    </div>
  );
};

export default Profile;
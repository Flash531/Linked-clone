

import React from 'react';

const AboutSection = () => {
  const user = {
    name: "Farhan Khan",
    headline: "Software Engineer | MERN Stack Developer",
    bio: "Passionate about building full-stack web apps and learning new technologies.",
    posts: [
      {
        id: 1,
        content: "Just deployed my new project using Vercel and MongoDB Atlas!",
        timestamp: "2 hours ago"
      },
      {
        id: 2,
        content: "Started working on a LinkedIn clone to level up my full-stack skills.",
        timestamp: "1 day ago"
      }
    ]
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-lg mt-6">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">{user.name}</h2>
        <p className="text-gray-600">{user.headline}</p>
        <p className="mt-2 text-sm text-gray-800">{user.bio}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Posts</h3>
        {user.posts.map(post => (
          <div key={post.id} className="border-t py-2">
            <p className="text-sm text-gray-900">{post.content}</p>
            <span className="text-xs text-gray-500">{post.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
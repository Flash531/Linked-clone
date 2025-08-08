import React, { useState } from 'react';
import { FaImage, FaVideo, FaRegCalendarAlt } from 'react-icons/fa';

const PostInput = ({ onPost }) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!content.trim()) return;
    onPost(content);
    setContent('');
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex items-start gap-3">
        <img src="https://via.placeholder.com/40" alt="Profile" className="rounded-full w-10 h-10" />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 p-2 border rounded resize-none text-sm focus:outline-none"
          placeholder="Start a post"
          rows={3}
        />
      </div>
      <div className="flex justify-between mt-3 px-4 text-blue-600 text-sm">
        <button className="flex items-center gap-1" onClick={handleSubmit}>
          Post
        </button>
        <button className="flex items-center gap-1"><FaImage /> Photo</button>
        <button className="flex items-center gap-1"><FaVideo /> Video</button>
        <button className="flex items-center gap-1"><FaRegCalendarAlt /> Event</button>
      </div>
    </div>
  );
};

export default PostInput;
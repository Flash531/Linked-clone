import React from 'react';

const PostCard = ({ post, onLike, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-start mb-2">
        <div className="flex gap-3">
          <img src={post.avatar} alt="Avatar" className="w-10 h-10 rounded-full" />
          <div>
            <h4 className="font-semibold">{post.name}</h4>
            <p className="text-sm text-gray-500">{post.title}</p>
          </div>
        </div>
        <button
          onClick={onDelete}
          className="text-sm text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
      <p className="text-gray-800 text-sm">{post.content}</p>
      <div className="mt-3">
        <button
          onClick={onLike}
          className={`text-sm font-medium flex items-center gap-1 ${post.liked ? 'text-blue-600' : 'text-gray-600'}`}
        >
          👍 {post.likes}
        </button>
      </div>
    </div>
  );
};

export default PostCard;
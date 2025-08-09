import React, { useState } from 'react';
import PostInput from './PostInput';
import PostCard from './PostCard';
import RightSidebar from '../RightSideBar/RightSidebar';

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "John Doe",
      title: "Frontend Developer",
      avatar: "https://via.placeholder.com/40",
      content: "Just finished a cool project using React and Tailwind!",
      likes: 0,
      liked: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Product Designer",
      avatar: "https://via.placeholder.com/40",
      content: "Excited to be starting a new role at ABC Corp!",
      likes: 0,
      liked: false,
    },
  ]);

  const handleNewPost = (content) => {
    const newPost = {
      id: Date.now(),
      name: "Farhan Khan",
      title: "Software Engineer",
      avatar: "https://via.placeholder.com/40",
      content,
      likes: 0,
      liked: false,
    };
    setPosts([newPost, ...posts]);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const handleLikePost = (id) => {
    setPosts(posts.map(post =>
      post.id === id
        ? {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  return (
    <div className="bg-[#F3F2EF] py-6 px-4 sm:px-6 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <PostInput onPost={handleNewPost} />
          {posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
              onDelete={() => handleDeletePost(post.id)}
              onLike={() => handleLikePost(post.id)}
            />
          ))}
        </div>
        <div className="hidden lg:block w-[280px]">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Feed;

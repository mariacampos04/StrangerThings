import React, { useState, useEffect } from 'react';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data.data.posts);
      })
      .catch(error => {
        console.error('Uh oh, trouble fetching posts!', error);
      });
  }, []);

  return (
    <div className = "posts">
      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <div key={post._id}>{post.title}</div>
        ))}
      </ul>
    </div>
  );
}
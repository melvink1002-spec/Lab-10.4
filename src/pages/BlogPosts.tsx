import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../lib/posts.js';

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <h2 style={{ padding: '1rem' }}>Post not found</h2>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
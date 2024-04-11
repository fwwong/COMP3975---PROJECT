import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './nav/Navbar';

interface Post {
  id: number;
  title: string;
  description: string;
  price: string;
  // Add other fields as necessary
}

const PostDetails: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams(); // This retrieves the `id` parameter from the URL

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8888/api/posts/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            // Include Authorization header if needed
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch post details');
        }

        const data: Post = await response.json();
        setPost(data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    if (id) {
      fetchPostDetails();
    }
  }, [id]); // Depend on `id` to re-fetch if it changes

  if (!post) return <div>Loading post details...</div>;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
        <p className="mb-4">{post.description}</p>
        <p className="text-lg font-bold">Price: {post.price}</p>
      </div>
    </div>
  );
};

export default PostDetails;

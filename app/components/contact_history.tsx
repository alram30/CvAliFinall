'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import axios from 'axios';

// Definisikan tipe data untuk komentar
interface comments {
  [x: string]: ReactNode;
  id: number;
  name: string;
  rating: number;
  comments: string;
  created_at: string;
}

const ContactHistory: React.FC = () => {
  // Pastikan kita menyatakan tipe state sebagai array of comments
  const [comments, setcomments] = useState<comments[]>([]);

  useEffect(() => {
    const fetchcomments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/comments');
        setcomments(response.data);
      } catch (error) {
        console.error('Error fetching comments', error);
      }
    };
    fetchcomments();
  }, []);

  // Menghitung rata-rata rating
  const calculateAverageRating = (comments: comments[]) => {
    if (comments.length === 0) return 0;
    const totalRating = comments.reduce((acc, comment) => acc + comment.rating, 0);
    return totalRating / comments.length;
  };

  const averageRating = calculateAverageRating(comments);

  // Styling untuk elemen
  const containerStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#333',
    fontSize: '1.8rem',
    marginBottom: '20px',
  };

  const listStyle: React.CSSProperties = {
    listStyleType: 'none',
    paddingLeft: '0',
  };

  const listItemStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const commentTextStyle: React.CSSProperties = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  };

  const metaStyle: React.CSSProperties = {
    fontSize: '0.875rem',
    color: '#888',
  };

  const averageRatingStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Comments History</h2>
      <div style={averageRatingStyle}>
        <p>Average Rating: {averageRating.toFixed(1)} / 5</p>
      </div>
      {comments.length > 0 ? (
        <ul style={listStyle}>
          {/* Gunakan map untuk menampilkan daftar komentar */}
          {comments.map((comment) => (
            <li key={comment.id} style={listItemStyle}>
              <strong>{comment.name}</strong> (Rating: {comment.rating})
              <p style={commentTextStyle}>{comment.comments}</p>
              <small style={metaStyle}>
                {new Date(comment.created_at).toLocaleString()}
              </small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default ContactHistory;

'use client';

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comments, setcomments] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/add-comments', {
        name,
        rating,
        comments,
      });
      setName('');
      setRating(1);
      setcomments('');
      alert('comments added!');
    } catch (error) {
      console.error('Error adding comments', error);
    }
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const formStyle: React.CSSProperties = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const textareaStyle: React.CSSProperties = {
    width: '100%',
    height: '100px',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center' as 'center', // Specify 'center' explicitly
    marginBottom: '20px',
    color: '#333',
    fontSize: '1.5rem',
  };

  const starsContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px',
  };

  const starStyle: React.CSSProperties = {
    fontSize: '30px',
    cursor: 'pointer',
    color: '#ccc',
  };

  const activeStarStyle: React.CSSProperties = {
    color: '#FFD700', // Gold color for active stars
  };

  return (
    <div style={formStyle}>
      <h2 style={headerStyle}>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <div style={starsContainerStyle}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              style={{
                ...starStyle,
                ...(rating >= star ? activeStarStyle : {}),
              }}
              onClick={() => handleRatingChange(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          style={textareaStyle}
          placeholder="Your comments"
          value={comments}
          onChange={(e) => setcomments(e.target.value)}
          required
        ></textarea>
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

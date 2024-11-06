import React from 'react';
import Image from 'next/image';
import hobby1 from '../hobi1.jpg';
import hobby2 from '../hobi2.jpg';
import hobby3 from '../hobi3.jpeg';
import hobby4 from '../hobi4.jpg';

const HobbiesGallery: React.FC = () => {
  const hobbies = [
    { id: 1, title: 'Programing', image: hobby1 },
    { id: 2, title: 'Bermain Musik', image: hobby2 },
    { id: 3, title: 'Tenis Meja', image: hobby3 },
    { id: 4, title: 'Menggambar', image: hobby4 },
  ];

  // Objek gaya tanpa mendeklarasikan tipe
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    } as React.CSSProperties,
    title: {
      color: 'teal',
    } as React.CSSProperties,
    gallery: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap' as 'wrap', // Menegaskan tipe
      marginTop: '20px',
    } as React.CSSProperties,
    card: {
        width: '100px',       // Lebar card yang lebih kecil
        margin: '10px',        // Margin yang lebih kecil
        border: '1px solid #ccc',
        borderRadius: '5px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // Sedikit bayangan
        textAlign: 'center'    // Mengatur teks di tengah
    } as React.CSSProperties,
    hobbyTitle: {
      margin: '10px 0',
      fontSize: '16px',
    } as React.CSSProperties,
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>My Gallery</h2>
      <div style={styles.gallery}>
        {hobbies.map((hobby) => (
          <div key={hobby.id} style={styles.card}>
            <Image
              src={hobby.image}
              alt={hobby.title}
              layout="responsive"
              width={50}
              height={50}
            />
            <h3 style={styles.hobbyTitle}>{hobby.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HobbiesGallery;

import React from 'react';

const PersonalInfo: React.FC = () => {
  const personalData = {
    name: 'Ali Ramdani',
    birthDate: '30 November 2002',
    email: 'aliramdani01@gmail.com',
    phone: '0881023483877',
    address: 'Jl. Sindanghurip No. 01, Sodonghilir, Tasikmalaya, Jawa Barat',
    occupation: 'Web Developer',
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Informasi Pribadi</h2>
      <div style={styles.grid}>
        {Object.entries(personalData).map(([key, value]) => (
          <div style={styles.gridItem} key={key}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '500px',
    margin: '20px auto',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Roboto, sans-serif',
  },
  title: {
    color: '#2C3E50',
    fontWeight: '700',
    marginBottom: '15px',
    textAlign: 'center' as 'center', // Menggunakan casting untuk memastikan tipe yang benar
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
  },
  gridItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    color: '#34495E',
  },
};

export default PersonalInfo;

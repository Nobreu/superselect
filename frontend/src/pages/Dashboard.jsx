import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Bem-vindo ao Dashboard!</h1>
      <p>Você está autenticado.</p>
      <button onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

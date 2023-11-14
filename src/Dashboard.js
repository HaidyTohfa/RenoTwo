// Dashboard.js
import React from 'react';
import Table from './Table'; // Import the Table component

const Dashboard = () => {
  // Initially, the table will have only the header components
  const emptyData = [];

  return (
    <div>
      <h2>Dashboard Page</h2>
      <Table data={emptyData} />
    </div>
  );
};

export default Dashboard;

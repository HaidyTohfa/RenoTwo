// Table.js
import React from 'react';
import './Table.css'; // Import the stylesheet

const Table = ({ data }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Email Address</th>
          <th>Group Status</th>
          <th>Created On</th>
        </tr>
      </thead>
      <tbody>
        {/* Render table rows only if data is available */}
        {data &&
          data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.userName}</td>
              <td>{row.email}</td>
              <td>{row.groupStatus}</td>
              <td>{row.createdOn}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

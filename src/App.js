// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar';
import MainContent from './maincontent';
import Table from './Table'; // Import the Table component
import Dashboard from './Dashboard'; // Import the updated Dashboard component
import './App.css';

const data = [
  {
    name: 'John Doe',
    userName: 'john_doe123',
    email: 'john.doe@example.com',
    groupStatus: 'Active',
    createdOn: '2023-01-01',
  },
  // Add more data objects as needed
];

const Home = () => <div>Home Page</div>;
// const Dashboard = () => (
//   <div>
//     <h2>Dashboard Page</h2>
//     {/* Display the Table component on the Dashboard page */}
//     <Table data={data} />
//   </div>
// );
const SubItem1 = () => <div>Sub Item 1 Page</div>;
const SubItem2 = () => <div>Sub Item 2 Page</div>;
const Contact = () => <div>Contact Page</div>;

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <MainContent>
          {/* Use Routes instead of Switch */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/submenu/item1" element={<SubItem1 />} />
            <Route path="/submenu/item2" element={<SubItem2 />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
}

export default App;

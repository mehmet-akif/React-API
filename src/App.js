import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

const UserList = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="user-table-container">
      <h1 class="centertext" >User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

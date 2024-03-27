import React, { useEffect, useState } from 'react';
import './sidebar.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export const Sidebar = () => {
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();
  useEffect(() => {
    // Récupérer les données de l'utilisateur depuis le localStorage
    const userData = localStorage.getItem('user-info');
    const parsedUser = userData ? JSON.parse(userData).user ?? "" : null;

    setUser(parsedUser);
  }, []);

  function LogOut() {
    localStorage.clear();
    Navigate('/');
  }

  return (
    <div className="sidebar">
      {user && (
        <div className="profile">
          <img src="/img/sedkii.jpg" alt="Profile" />
          <h4>{user.name}</h4>
        </div>
      )}
      <nav>
        {user && (
        <ul>
          {user.role === "Admin" ? (<li><a href='UsersPage'>Users</a></li>):null}
          <li><a href=''>Biens</a></li>
          <li> <Button variant="primary" onClick={LogOut} style={{ border: 'none', background: 'none', color: 'red', padding: '0px' }}>
            Logout
          </Button>
          </li>
        </ul>
         )}
      </nav>
    </div>
  );
};



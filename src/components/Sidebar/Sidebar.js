import React, { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
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
            {user.role === "Admin" && (
              <li>
                <a href='/usersPage' style={{ color: '#4A536B' }}>
                  <FaUser /> Users {/* Icône d'utilisateur */}
                </a>
              </li>
            )}
            <li>
              <a href='/Admin/Biens' style={{ color: '#4A536B' }}>
                <FaHome /> Biens
              </a>
            </li>
            <li>
              <a href='/home'>
              <button  onClick={LogOut} style={{ border: 'none', background: 'none', color: 'red', padding: '0px' }}>
                <FaSignOutAlt /> {/* Icône de déconnexion */}
                Logout
              </button>
              </a>
             
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};



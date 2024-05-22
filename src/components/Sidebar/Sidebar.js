import React, { useEffect, useState } from 'react';
import { BiStats } from 'react-icons/bi';
import { FaCalculator, FaComment, FaEnvelope, FaHome, FaSearch, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './sidebar.css'; // Import the CSS file

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
          <img src={"http://localhost:8000/uploads/profiles/"+user.image} alt="Profile" />
          <h4>{user.name + " " + user.last_name}</h4>
        </div>
      )}
      <nav>
        {user && (
          <ul>
            {user.role === "Admin" && (
              <li>
                <a href='/usersPage' style={{ color: '#4A536B' }}>
                  <FaUser /> Utilisateurs {/* Icône d'utilisateur */}
                </a>
              </li>

            )}
            {(user.role === "Admin" || user.role === "Courtier") && (
              <li>
                <a href='/PublierPage' style={{ color: '#4A536B' }}>
                  <FaHome /> Biens Publier {/* Icône d'utilisateur */}
                </a>
              </li>
            )}
             {(user.role === "Admin" || user.role === "Courtier") && (
            <li>
              <a href='/en_attentePage' style={{ color: '#4A536B' }}>
                <FaHome /> Biens En attente
              </a>
            </li>
             )}
            {(user.role === "Admin" || user.role === "Courtier") && (
              <li>
                <a href='/commentaire' style={{ color: '#4A536B' }}>
                  <FaComment /> Commentaires {/* Icône d'utilisateur */}
                </a>
              </li>

            )}
            {(user.role === "Secrétaire") && (
              <li>
                <a href='/estimationsPage' style={{ color: '#4A536B' }}>
                  <FaCalculator /> Demandes d'estimation
                </a>
              </li>
            )}
            {(user.role != "Admin") && (
            <li>
              <a href='/recherchesPage' style={{ color: '#4A536B' }}>
                <FaSearch /> Demandes Recherche
              </a>
            </li>
            )}
            {(user.role === "Secrétaire") && (
              <li>
                <a href='/contactsPage' style={{ color: '#4A536B' }}>
                  <FaEnvelope /> Messages
                </a>
              </li>
            )}
            {(user.role === "Admin") && (
              <li>
                <a href='Dashbored' style={{ color: '#4A536B' }}>
                <BiStats />Tableau de bord
                </a>
              </li>
            )}
            <li>
              <a href='/'>
                <button onClick={LogOut} style={{ border: 'none', background: 'none', color: 'red', padding: '0px' }}>
                  <FaSignOutAlt /> {/* Icône de déconnexion */}
                  Se déconnecter
                </button>
              </a>

            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};



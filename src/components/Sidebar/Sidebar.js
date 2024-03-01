
import React from 'react';
import './sidebar.css'; // Import the CSS file
import { getData } from "../../utils/getData";
import { useState, useEffect } from "react";

 export const Sidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {

    getData({ setData, url: "/liste" });
   
}, [])
  return (
    <div className="sidebar">
      <div className="profile">
        <img src="/img/Capture d'écran 2023-10-04 211633.png" alt="Profile" />
        <h4>John Doe</h4>
      </div>
      <nav>
        { 
        data.map((items) =>
        <ul>
          <li>{items.name} </li>
          <li>Utilisateurs</li>
          <li>Abonnements</li>
        </ul>
        )
        }
      </nav>
    </div>
  );
};



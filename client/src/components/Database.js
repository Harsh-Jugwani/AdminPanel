import React, { useState,useEffect } from 'react';

const Databases = () => {
  const [databases, setDatabases] = useState([]);

  useEffect(() => {
    // Fetch databases from backend and set the state
  }, []);

  return (
    <div>
      <h2>Databases:-</h2>
      <ul>
        {databases.map(database => (
          <li key={database._id}>{database.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Databases;
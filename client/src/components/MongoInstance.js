import React, { useState, useEffect } from 'react';

const MongoInstances = () => {
  const [instances, setInstances] = useState([]);

  useEffect(() => {
    // Fetch MongoDB instances from backend and set to state
  }, []);

  return (
    <div>
      <h2>MongoDB Instances</h2>
      <ul>
        {instances.map(instance => (
          <li key={instance._id}>{instance.name} - {instance.host}:{instance.port}</li>
        ))}
      </ul>
    </div>
  );
};

export default MongoInstances;
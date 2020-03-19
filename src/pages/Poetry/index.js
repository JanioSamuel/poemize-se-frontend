import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

export default function Poetry(props) {
  const [poetry, setPoetry] = useState([]);
  const values = props.match.params;

  useEffect(() => {
    async function loadPoetry() {
      
      console.log(values);
      const response = await api.get(`/find/${values.id}`);

      setPoetry(response.data);
    }

    loadPoetry();
  }, [values]);

  
  return (
    <>
      <div className="container-poetry">
        <div className="title">
          <h1>{poetry.title}</h1>
        </div>
        <div className="poetry">
          <pre>{poetry.poetry}</pre>
        </div>
        <div className="author">
          <h3>{poetry.author}</h3>
        </div>
      </div>
    </>
  )
}
import React, { useState, useEffect } from 'react';
import api from '../../services/api';

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
      <h1>Title: {poetry.title}</h1>
      <h2>Poetry: {poetry.poetry}</h2>
      <h3>Author: {poetry.author}</h3>
    </>
  )
}
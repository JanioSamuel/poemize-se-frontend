import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import '../../App.css';

export default function Main() {
  const [poetrys, setPoetrys] = useState([]);

  useEffect(() => {
    async function loadPoetrys() {
      const response = await api.get('/');

      setPoetrys(response.data);
      console.log(response.data);
    }

    loadPoetrys();
  }, []);

  return (
    <>
    {poetrys.map(poetry => (
        <div className="content" key={poetry._id}>
          <ul className="poetry-list">
            <Link className="dec-none" to={`/poetry/${poetry._id}`}><p>{poetry.title}</p></Link>
          </ul>
        </div>
      ))}
      <Link to="/new">
        <button className="btn">+</button>
      </Link>
    </>
  )
}
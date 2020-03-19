import React, { useState } from 'react';
import api from '../../services/api';

import './styles.css';

export default function New({ history }) {
  const [title, setTitle] = useState('');
  const [poetry, setPoetry] = useState('');
  const [author, setAuthor] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      title,
      poetry,
      author
    }
    await api.post('/new', data);

    history.push('/');
  }

  return (
    <>
      <form className="container-new" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          placeholder="Título do seu texto top"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <label htmlFor="poetry">Poetry</label>
        <textarea
          id="poetry"
          rows={12}
          placeholder="Título do seu texto top"
          value={poetry}
          onChange={event => setPoetry(event.target.value)}
        />
        <label htmlFor="author">Author</label>
        <input
          id="author"
          placeholder="Título do seu texto top"
          value={author}
          onChange={event => setAuthor(event.target.value)}
        />
        <button type="submit" className="button">Cadastrar</button>
      </form>
    </>
  )
}
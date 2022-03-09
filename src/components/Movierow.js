import React from 'react'
import { useState } from 'react';

function Movierow({ title }) {

    const [movies, setMovies] = useState([]);

  return (
      <>
        <h2>{title}</h2>
        <div className='movieImages'></div>
      </>
  )
}

export default Movierow
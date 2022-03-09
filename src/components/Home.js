import React from 'react';
import Movierow from './Movierow';
import axios from '../axios';
import requests from '../requests';

function Home() {
  return (
    <div className='home'>
        <Movierow title={'Top Rated'} fetchUrl={requests.fecthTopRated}/>
    </div>
  )
}

export default Home
import React, { useEffect } from 'react'

import './styles/main.css';

import test_asset from './assets/test_asset.png';


function App({ currentPage = 'login', loadedData, store, reset }) {
  useEffect(() => {


  }, [currentPage])

  return (
    <div>
      Hello, i am the app. and i am realding as you go...
      here is a image to you to enjoy
      <img alt='' src={test_asset} />
    </div>
  );
}



export default App;


import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import React from 'react';
import Subreddits from './components/header/subreddits';

function App() {
  return (
    <>
      <Header />
      <Subreddits />
      <main>
        <p>list of articles</p>
      </main>
    </>
  );
}

export default App;

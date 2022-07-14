import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import React from 'react';
import Subreddits from './components/header/subreddits';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Header />
      <Subreddits />
      <Main />
    </>
  );
}

export default App;

import * as React from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { SiteBar } from '../components/SiteBar/SiteBar';
import { Header } from '../components/Header/Header';
import { MainBoard } from '../components/MainBoard/MainBoard';

function App() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <SiteBar />
      <MainBoard />
    </div>
  );
}

export { App };

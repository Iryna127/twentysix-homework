import React from 'react';
import './App.css';
import HomePage from './pages/homePage';
import PageEpisodes from './pages/pageEpisodes';
import PageHerous from './pages/pageHerous';
import Navigation from './components/navigationComponent';
import Heroes from './components/customHookOneHero';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character" element={<PageHerous />}>
            <Route path="character/:id" element={<Heroes />} />
          </Route>
          <Route path="/episodes" element={<PageEpisodes />}>
            {/*  <Route path='epesode' element={<Epesode/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

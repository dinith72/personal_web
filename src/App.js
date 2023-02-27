import "./App.scss";
import { PageNavbar } from "./components/PageNavBar";
import { HomePage }  from './components/HomePage';
import About from "./components/about/About";
import React from 'react';

function App() {
  return (
  <div >
    <PageNavbar />
    <HomePage id="home"/>
    <About id="about"/>
  </div>
  );
}

export default App;

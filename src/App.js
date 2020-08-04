import React from 'react';
import './App.css';
import ChocolatePizzaHeader from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import Article from './article';
import Ingredients from './ingredients.js';

function App() {
  return (
    <div className="App">
      <ChocolatePizzaHeader />
      <Main />
      <Article date="15 DEC 2013 / Deserts" />
      <Ingredients />
      <Footer author={`Vanessa Stevenson`} name="Ghost" />
      

    </div>
  );
}

export default App;




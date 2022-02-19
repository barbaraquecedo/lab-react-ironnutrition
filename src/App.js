import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodList from './components/FoodList'
import Search from './components/Search';

function App() {

  return (
    <main>
      <FoodList/>
    </main>
  );
}

export default App;

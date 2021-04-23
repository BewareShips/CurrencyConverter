import React from 'react';

import ItemExchange from './components/ItemExchange';
import ItemList from './components/ItemList';
import "./styles/app.scss"
function App() {
  return (
    <div className="app">
      <ItemList/>
      <ItemExchange/>
    </div>
  );
}

export default App;

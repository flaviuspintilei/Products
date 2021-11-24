import React from 'react';
import './App.css';
import productsData from './productsList';
import Products from "./Products.js"

function App() {
  const productsComponents = productsData.map(item =>
    <Products key={item.id} product={item} someCallback={this.someCallback}/>
  );

  return (
      <div>
          {productsComponents}
      </div>
  );
}

export default App;

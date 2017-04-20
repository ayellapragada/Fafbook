import React from 'react';
import Navbar from './navbar/navbar';

const App = ({ children  }) => (
  <div>
    <Navbar />
    { children }
  </div>
);

export default App;

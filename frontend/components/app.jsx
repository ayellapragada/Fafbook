import React from 'react';
import Navbar from './navbar/navbar';

const App = ({ children  }) => (
  <div>
    <Navbar />
    <div className="background-color-for-all">
      { children }
    </div>
  </div>
);

export default App;

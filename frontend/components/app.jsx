import React from 'react';
import Navbar from './navbar/navbar';
import DocumentTitle from 'react-document-title';

const App = ({ children  }) => (
  <div>
    <DocumentTitle title="Fafbook" />
    <Navbar />
    <div className="background-color-for-all">
      { children }
    </div>
  </div>
);

export default App;

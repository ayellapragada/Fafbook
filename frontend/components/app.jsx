import React from 'react';
import Navbar from './navbar/navbar';
import DocumentTitle from 'react-document-title';

const App = ({ children  }) => {
  return(
    <div>
      <DocumentTitle title="Fafbook" />
      <Navbar location={children.props.location.pathname} />
      <div className="background-color-for-all">
        { children }
      </div>
    </div>
  );
};

export default App;

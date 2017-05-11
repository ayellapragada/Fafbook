import React from 'react';
import Navbar from './navbar/navbar';
import DocumentTitle from 'react-document-title';
import Chatbar from './chat/chatbar';

const App = ({ children  }) => {
  return(
    <div>
      <DocumentTitle title="Fafbook" />
      <Navbar location={children.props.location.pathname} />
      <div className="background-color-for-all">
        { children }
      </div>
      <Chatbar />
    </div>
  );
};

export default App;

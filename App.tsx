import React from 'react';
import './index.scss';

//@ts-ignore
import Navbar from './components/Navbar.tsx'
//@ts-ignore
import Main from './components/Main.tsx'

function App() {

  return (
    <React.Fragment>
      <Navbar />
      <div id="main">
        <Main />
      </div>
    </React.Fragment>
  );
}

export default App;

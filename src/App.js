import React from 'react';
import './App.css';
import './Header';
import Header from './Header';
import Siderbar from './Siderbar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }, dispatch ] = useStateValue();
  

  return (
    <div className="app">

      {!user ? <Login /> : (
        <>
        <Header />

        <div className="app__body">
          <Siderbar />
          <Feed />
          {/* <Widgets /> */}
        </div>
        </>  
      )}     
    </div>
  );
}

export default App;

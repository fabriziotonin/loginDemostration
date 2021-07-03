import React, { useState } from 'react';
import LoginPage from './Components/loginPage/LoginPage';
import HomePage from './Components/homePage/HomePage';
import { UserProvider } from './Context/UserContext';
import './App.css';

function App() {
  // state that controls the user auth to logIn the page 
  const [user, setUser] = useState(false)
  return (
    
    <UserProvider>
     <React.Fragment>
     {!user?
     <LoginPage/>
     :
     <HomePage/>
    }
     </React.Fragment>
    </UserProvider>
  );
}

export default App;

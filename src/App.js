import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Board from './pages/Board';
import Create from './pages/Create';
import Search from './pages/Search';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import UserInfo from './components/UserInfo';

import { authService } from "./fBase";

import { Route, Routes, Link, Navigate } from "react-router-dom";

console.log(authService);

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if (user) {
        setIsLoggedIn(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, []);
  return (
    <div className="App">
      <Header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signIn">Sign In</Link></li>
            <li><Link to="/userInfo">User Info</Link></li>
            <li><Link to="/board">Board</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>
      </Header>
      <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/signIn" element={ <SignIn /> } />
          <Route path="/board" element={ <Board /> } />
          <Route path="/create" element={isLoggedIn ? <Create /> : <Navigate to="/signIn" />} />
          <Route path="/signIn" element={isLoggedIn ? <UserInfo /> : <Navigate to="/signIn" />} />
          <Route path="/search" element={ <Search /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

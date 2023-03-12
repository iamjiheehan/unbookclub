import React, { useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import Board from './pages/Board';
import Search from './pages/Search';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import { authService } from "./fBase";

import { Route, Routes, Link } from "react-router-dom";

console.log(authService);

function App() {

  console.log(authService.currentUser);
  const [isLoggedIn, setIsLogged] = useState(authService.currentUser);

  return (
    <div className="App">
      <Header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signIn">Sign In</Link></li>
            <li><Link to="/signUp">Sign Up</Link></li>
            <li><Link to="/board">Board</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
        </nav>
      </Header>
      <Routes>
          <Route path="/" element={ <Main /> } />
          <Route path="/signIn" element={ <SignIn /> } />
          <Route path="/signUp" element={ <SignUp /> } />
          <Route path="/board" element={ <Board /> } />
          <Route exact path="/create" element={isLoggedIn ? <create /> : <SignIn />} />
          <Route path="/search" element={ <Search /> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

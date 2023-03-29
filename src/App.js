import React, { useState } from "react";
import Header from "./components/Header";

import { SearchBoard, SearchBooks } from "./components/Search";
import Footer from "./components/Footer";
import Create from "./components/Create"
import SignIn from "./components/SignIn";

import Main from "./pages/Main";
import Board from "./pages/Board";
import UserInfo from "./pages/UserInfo";
import Books from "./pages/Books"
import Guide from "./pages/Guide";

import AuthContext from "contexts/AuthContext";
import AddedBooksContext from "contexts/AddedBooksContext";

import useAuth from "hooks/useAuth"; 
import { LoadingProvider, Loading } from "hooks/useLoading";

import { Route, Routes, Link, Navigate } from "react-router-dom";

function App() {
  const {
    init,
    isSignedIn,
    isSignedUp,
    userObj,
    setIsSignedUp,
    refreshUser,
  } = useAuth();

  const [addedBooks, setAddedBooks] = useState([]);

  return (
    <AuthContext.Provider value={{ isSignedIn, userObj, refreshUser }}>
      <LoadingProvider>
        <div className="App">
          <Header>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/signIn">Sign In</Link>
                </li>
                <li>
                  <Link to="/userInfo">User Info</Link>
                </li>
                <li>
                  <Link to="/board">Board</Link>
                </li>
                <li>
                  <Link to="/create">Create</Link>
                </li>
                <li>
                  <Link to="/search">SearchBoard</Link>
                </li>
                <li>
                  <Link to="/books">Books</Link>
                </li>
                <li>
                  <Link to="/guide">Guide</Link>
                </li>
              </ul>
            </nav>
          </Header>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/signIn"
              element={
                isSignedIn || isSignedUp ? (
                  <Navigate to="/userInfo" /> // Changed to Navigate to userInfo page
                ) : (
                  <SignIn setIsSignedUp={setIsSignedUp} />
                )
              }
            />
            <Route path="/board" element={<Board />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/books" element={<Books />} />
            <Route
              path="/create"
              element={
                isSignedIn || isSignedUp ? <Create /> : <Navigate to="/signIn" />
              }
            />
            <Route
              userObj = {userObj}
              element={isSignedIn ? <SignIn /> : <Navigate to="/userInfo" />}
            />
            <Route
              path="/userInfo"
              element={
                isSignedIn || isSignedUp ? <UserInfo /> : <Navigate to="/signIn" />
              }
            />
            <Route path="/search" element={<SearchBoard />} />
          </Routes>
          <Footer />
        </div>
      </LoadingProvider>
    </AuthContext.Provider>
  );
}

export default App;

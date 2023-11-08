import React, { useState }  from "react";

// 컴포넌트
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "components/Error404";

import Create from "./pages/Create"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Board from "./pages/Board";
import UserInfo from "./pages/UserInfo";
import SearchBooks from "./pages/Books"
import NewBooks from  "./pages/NewBooks"
import BestSellers from './pages/BestSellers'
import Guide from "./pages/Guide";

import AuthContext from "contexts/AuthContext";

// 커스텀 훅
import useAuth from "hooks/useAuth"; 

// 로딩페이지
import { LoadingProvider, Loading } from "hooks/useLoading";

import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const {
    init,
    isSignedIn,
    isSignedUp,
    userObj,
    setIsSignedUp,
    refreshUser,
  } = useAuth();

  const [searchResults, setSearchResults] = useState([]);

  const updateResults = (newResults) => {
    setSearchResults(newResults);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, userObj, refreshUser }}>
      <LoadingProvider>
        <Provider store={store}>
          <div className="App">
            <Header updateResults={updateResults}>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/signIn">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/signUp">Sign Up</Link>
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
                    <Link to="/books">Books</Link>
                  </li>
                  <li>
                    <Link to="/newbooks">newbooks</Link>
                  </li>
                  <li>
                    <Link to="/bestSellers">bestSellers</Link>
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
                    <Navigate to="/userInfo" /> 
                  ) : (
                    <SignIn setIsSignedUp={setIsSignedUp} />
                  )
                }
              />
              <Route path="/board" element={<Board />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/books" element={<SearchBooks searchResults={searchResults} setSearchResults={setSearchResults}/>} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/newbooks" element={<NewBooks />} />
              <Route path="/bestSellers" element={<BestSellers />} />
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
              <Route path="/*" element={<Error404 />} />
            </Routes>
            <Footer />
          </div>
        </Provider>
      </LoadingProvider>
    </AuthContext.Provider>
  );
}

export default App;

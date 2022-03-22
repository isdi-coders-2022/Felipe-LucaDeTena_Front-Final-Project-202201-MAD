import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './pages/createPage/createPage';
import Feed from './pages/feedPage/feedPage';
import Profile from './pages/profilePage/profilePage';
import Register from './pages/registerPage/registerPage';
// import NavBar from './components/nav-bar/nav-bar';
// import Register from './components/register/register';
// import LogIn from './components/login/login';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create" element={<Create />} />
                <Route path="/shop" element={<Profile />} />
                <Route path="/feed" element={<Feed />} />
            </Routes>
            {/* <LogIn /> */}
            {/* <Register /> */}
            {/* <NavBar /> */}
        </div>
    );
}

export default App;

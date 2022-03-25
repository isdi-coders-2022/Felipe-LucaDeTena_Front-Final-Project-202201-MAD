import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './pages/createPage/createPage';
import Feed from './pages/feedPage/feedPage';
import Profile from './pages/profilePage/profilePage';
import Register from './pages/registerPage/registerPage';
import Shop from './pages/shopPage/shopPage';
// import NavBar from './components/nav-bar/nav-bar';
import LogIn from './components/login/login';
import Popup from './components/popUp/popUp';
import Footer from './components/footer/footer';

function App() {
    const [loginPopUp, setLoginPopUp] = useState(false);

    const togglePopup = () => {
        setLoginPopUp(!loginPopUp);
    };

    return (
        <div className="App">
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/create" element={<Create />} />
                <Route
                    path="/shop"
                    element={<Shop togglePopup={togglePopup} />}
                />
                <Route path="/feed" element={<Feed />} />
            </Routes>

            <Popup trigger={loginPopUp}>
                <LogIn togglePopup={togglePopup} />
            </Popup>
            <Footer />
        </div>
    );
}

export default App;

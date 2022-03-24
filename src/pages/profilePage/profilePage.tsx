import React from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/main/profile/header';
import Main from '../../components/main/profile/main';
import './profile.scss';

function Profile() {
    return (
        <div className="profile__outer">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
export default Profile;

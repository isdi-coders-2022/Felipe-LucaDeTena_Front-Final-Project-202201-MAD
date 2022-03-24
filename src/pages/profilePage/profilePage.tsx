import React from 'react';
import Footer from '../../components/footer/footer';
import Form from '../../components/main/profile/form';
import Header from '../../components/main/profile/header';
import Main from '../../components/main/profile/main';
import Popup from '../../components/popUp/popUp';
import './profile.scss';

function Profile() {
    return (
        <div className="profile__outer">
            <Header />
            <Main />
            <Footer />
            <Popup trigger>
                <Form />
            </Popup>
        </div>
    );
}
export default Profile;

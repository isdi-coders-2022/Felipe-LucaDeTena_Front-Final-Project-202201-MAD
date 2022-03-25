import React, { useState } from 'react';
import Form from '../../components/main/profile/form';
import Header from '../../components/main/profile/header';
import Main from '../../components/main/profile/main';
import Popup from '../../components/popUp/popUp';
import './profile.scss';

function Profile() {
    const [buttonPopUp, setButtonPopUp] = useState(false);
    return (
        <div className="profile__outer">
            <Header setButtonPopUp={setButtonPopUp} />
            <Main />
            <Popup trigger={buttonPopUp}>
                <Form setButtonPopUp={setButtonPopUp} />
            </Popup>
        </div>
    );
}
export default Profile;

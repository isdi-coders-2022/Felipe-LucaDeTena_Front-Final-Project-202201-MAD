import React, { useEffect } from 'react';
import NavBar from '../../nav-bar/nav-bar';
// import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './header.scss';
import { loadUser } from '../../../redux/user/action-creators-';
import { getUser } from '../../../services/api/user-api';

function Header({ setButtonPopUp }: any) {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.loginRegister);

    useEffect(() => {
        getUser(userState).then(() => {
            dispatch(loadUser(userState));
        });
    }, []);

    return (
        <div className="header__container">
            <NavBar />
            <div className="header__profile">
                <img
                    className="header__profile__banner"
                    src="./placeholder.jpg"
                    alt="none"
                />
                <div className="data__container">
                    <div className="image__container">
                        <div className="circle">
                            <img
                                className="header__profile__img"
                                src={userState.profileImg}
                                alt="./profileholder"
                            />
                        </div>
                        <button
                            onClick={() => setButtonPopUp(true)}
                            type="button"
                            className="image__container__button"
                        >
                            {' '}
                            Edit profile
                        </button>
                    </div>
                    <div className="follower__container">
                        <p className="follower__name">{`${userState.name} ${userState.surName}`}</p>
                        <div className="follower__container-2">
                            <div className="follower__data">
                                <p className="follower__number">
                                    {userState.collections.length}
                                </p>
                                <p className="follower__text">posts</p>
                            </div>
                            <div className="follower__data">
                                <p className="follower__number">
                                    {userState.followers.length}
                                </p>
                                <p className="follower__text">followers</p>
                            </div>
                            <div className="follower__data">
                                <p className="follower__number">
                                    {userState.following.length}
                                </p>
                                <p className="follower__text">following</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="favourites">
                <span className="favourites__add">+</span>
                <div className="circle-2">
                    <img
                        className="favourites__img"
                        src="./register-pic.png"
                        alt="none"
                    />
                </div>
            </div>
            <div />
        </div>
    );
}
export default Header;

import React from 'react';
import NavBar from '../../nav-bar/nav-bar';
import './header.scss';

function Header() {
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
                                src="./profileholder.jpg"
                                alt=""
                            />
                        </div>
                        <button
                            className="image__container__button"
                            type="button"
                        >
                            {' '}
                            Edit profile
                        </button>
                    </div>
                    <div className="follower__container">
                        <p className="follower__name">Steve Jobs</p>
                        <div className="follower__container-2">
                            <div className="follower__data">
                                <p className="follower__number">69</p>
                                <p className="follower__text">posts</p>
                            </div>
                            <div className="follower__data">
                                <p className="follower__number">155.679</p>
                                <p className="follower__text">followers</p>
                            </div>
                            <div className="follower__data">
                                <p className="follower__number">666</p>
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

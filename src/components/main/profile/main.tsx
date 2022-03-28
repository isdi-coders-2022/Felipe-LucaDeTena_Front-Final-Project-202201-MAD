/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './header.scss';
import { loadUser } from '../../../redux/user/action-creators-';
import { getUser } from '../../../services/api/user-api';
import './main.scss';
import { deleteCollection } from '../../../services/api/collection-api';
import { removeCollection } from '../../../redux/collection/action-creators';

function Main() {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.loginRegister);

    useEffect(() => {
        getUser(userState).then(() => {
            dispatch(loadUser(userState));
            console.log(userState);
        });
    }, []);

    const handleClick = async (collection: any) => {
        deleteCollection(collection, userState).then(() => {
            dispatch(removeCollection(collection, userState));
        });
    };

    return (
        <div className="main__outer">
            <div className="main__container">
                <button className="main__button" type="button">
                    <span className="main__add">+</span>
                    Add a new wishlist
                </button>
                <div className="main__collection__container">
                    {userState.collections.map((collection: any) => (
                        <Link
                            className="main__link"
                            to={`/details/${collection._id}`}
                        >
                            <div className="main__collection">
                                <img
                                    className="main__collection__img"
                                    src={collection.img}
                                    alt="none"
                                />
                                <div className="overlay__d">
                                    <p className="overlay__delete">Delete</p>
                                    <button
                                        onClick={handleClick}
                                        type="button"
                                        className="overlay__delete__b"
                                    >
                                        x
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Main;

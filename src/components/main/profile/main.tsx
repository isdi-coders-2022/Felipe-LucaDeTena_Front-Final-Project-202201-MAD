import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './header.scss';
import { loadUser } from '../../../redux/user/action-creators-';
import { getUser } from '../../../services/api/user-api';
import './main.scss';

function Main() {
    const dispatch = useAppDispatch();
    const userState = useAppSelector((state: RootState) => state.loginRegister);

    useEffect(() => {
        getUser(userState).then(() => {
            dispatch(loadUser(userState));
        });
    }, []);

    return (
        <div className="main__outer">
            <div className="main__container">
                <button className="main__button" type="button">
                    <span className="main__add">+</span>
                    Add a new wishlist
                </button>
                <div className="main__collection__container">
                    <div className="main__collection">
                        <p>{userState.collections}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Main;

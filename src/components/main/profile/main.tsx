import React from 'react';
import './main.scss';

function Main() {
    return (
        <div className="main__outer">
            <div className="main__container">
                <button className="main__button" type="button">
                    <span className="main__add">+</span>
                    Add a new wishlist
                </button>
                <div className="main__collection__container">
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                    <img
                        className="main__collection"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                </div>
            </div>
        </div>
    );
}
export default Main;

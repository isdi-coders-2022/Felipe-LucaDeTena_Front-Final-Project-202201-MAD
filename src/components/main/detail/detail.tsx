import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './detail.scss';

function Detail() {
    return (
        <div className="detail__container">
            <div className="collection__container">
                <div className="collection__container__img">
                    <img
                        className="collection__img"
                        src="./collectionPlaceholder.png"
                        alt="none"
                    />
                </div>
                <div className="collection__text__container">
                    <h1 className="collection__text__name">Collection name</h1>
                    <p className="collection__text__p">Created by</p>
                    <p className="collection__text__p">user name</p>
                    <button className="collection__text__button" type="button">
                        Follow
                    </button>
                    <FontAwesomeIcon
                        className="collection__text__icon"
                        icon={faHeart}
                    />
                    <button className="collection__text__button" type="button">
                        Add to collection
                    </button>
                </div>
            </div>
            <div className="detail__br" />
            <div className="detail__items__container">
                <p className="detail__items__p">Shop the Pieces</p>
                <div className="detail__items__container__img">
                    <img
                        className="detail__items__img"
                        src="./sticker-1.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}
export default Detail;

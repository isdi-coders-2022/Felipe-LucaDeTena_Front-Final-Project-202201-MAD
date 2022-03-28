import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import './detail.scss';
import { getCollection } from '../../../services/api/collection-api';
import { ItemI } from '../../../interfaces/item-i';

function Detail() {
    const [collection, setCollection] = useState({
        _id: '',
        img: '',
        name: '',
        createdBy: { name: '', _id: '' },
        totalPrice: '',
        items: [],
        favourite: false,
        likes: 0,
    });

    const { id } = useParams();
    console.log(useParams());

    useEffect(() => {
        getCollection(id).then((resp: any) => {
            console.log(resp.data);
            setCollection(resp.data);
        });
    }, []);

    return (
        <div className="detail__container">
            <div className="collection__container">
                <div className="collection__container__img">
                    <img
                        className="collection__img"
                        src={collection.img}
                        alt="none"
                    />
                </div>
                <div className="collection__text__container">
                    <h1 className="collection__text__name">
                        {collection.name}
                    </h1>
                    <p className="collection__text__p">Created by</p>
                    <p className="collection__text__p">
                        {collection.createdBy.name}
                    </p>
                    <button className="collection__text__button" type="button">
                        Follow
                    </button>
                    <p className="collection__text__p">
                        Total price:
                        {collection.items.reduce(
                            (accum: Number, item: ItemI) =>
                                +accum + +item.price,
                            0
                        )}
                        $
                    </p>
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
                <div className="detail__items__container__items">
                    {collection.items.map((item: any) => (
                        <div className="detail__items__container__img">
                            {' '}
                            <a
                                href={item.shopUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    className="detail__items__img"
                                    src={item.img}
                                    alt="none"
                                />
                                <div className="overlay__details">
                                    <p className="overlay__details__p">
                                        {item.brand}
                                    </p>
                                    <p className="overlay__details__p">
                                        {item.price}$
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Detail;

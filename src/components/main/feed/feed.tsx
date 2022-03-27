/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../../services/api/collection-api';
import * as actions from '../../../redux/collection/action-creators';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import './feed.scss';

function FeedComponent() {
    const dispatch = useAppDispatch();
    const collectionState = useAppSelector(
        (state: RootState) => state.collections
    );

    useEffect(() => {
        api.getCollections().then(() => {
            dispatch(actions.loadCollections());
        });
    }, []);

    return (
        <div className="feedc__container">
            <div>
                <button className="feedc__button" type="button">
                    Trending
                </button>
                <button className="feedc__button" type="button">
                    Following
                </button>
            </div>
            <div className="feedc__container__images">
                {collectionState.collections.map(
                    (collection: any, i: number) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <div key={i} className="feedc__container__img">
                            {' '}
                            {/* <img
                                className="shp__img"
                                src={collection.img}
                                alt="none"
                            /> */}
                            <p>{collection.name}</p>
                            <div className="feedc__overlay">
                                <p className="feedc__overlay__p">
                                    {collection.name}
                                </p>
                                <p className="feedc__overlay__p">
                                    {collection.totalPrice}$
                                </p>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
export default FeedComponent;

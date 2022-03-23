/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItems } from '../../../services/api/item-api';
import loadItems from '../../../redux/item/action-creators';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';

function Feed() {
    return <div className="feed__container" />;
}
export default Feed;

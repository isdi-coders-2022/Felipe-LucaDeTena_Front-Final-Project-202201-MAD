import React from 'react';
import FeedComponent from '../../components/main/feed/feed';
import NavBar from '../../components/nav-bar/nav-bar';
import './feedPage.scss';

function Feed() {
    return (
        <div className="feed__container">
            <NavBar />
            <FeedComponent />
        </div>
    );
}
export default Feed;

import React from 'react';
import ShopComponent from '../../components/main/shop/shop';
import NavBar from '../../components/nav-bar/nav-bar';
import './shop.scss';

function Shop() {
    return (
        <div className="shop__container">
            <NavBar />
            <ShopComponent />
        </div>
    );
}
export default Shop;

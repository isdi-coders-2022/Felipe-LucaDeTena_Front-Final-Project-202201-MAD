import React from 'react';
import Detail from '../../components/main/detail/detail';
import NavBar from '../../components/nav-bar/nav-bar';
import './detailPage.scss';

function DetailPage() {
    return (
        <div className="detailpage__container">
            <NavBar />
            <Detail />
        </div>
    );
}
export default DetailPage;

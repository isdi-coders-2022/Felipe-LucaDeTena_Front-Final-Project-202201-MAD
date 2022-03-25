import React from 'react';
import Canvas from '../../components/main/create/canvas';
import NavBar from '../../components/nav-bar/nav-bar';
import './createPage.scss';

function Create() {
    return (
        <div className="create__container">
            <NavBar />
            <div className="canvas__container">
                <Canvas />
            </div>
        </div>
    );
}
export default Create;

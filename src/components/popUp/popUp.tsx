/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './popUp.scss';

function Popup(props: any) {
    return props.trigger ? (
        <div className="popup">
            <div className="popup-inner">{props.children}</div>
        </div>
    ) : (
        ('' as any)
    );
}
export default Popup;

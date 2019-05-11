import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="header-title-container">
            <h1 className="header-title">Lambda School</h1>
            <p className="time-stamp">@Lambda School · 11 may</p>
        </div>

    );
}

export default HeaderTitle;
import React from 'react';
import './Footer.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icon"><i className="far fa-comment"></i></div>
            <div className="footer-icon"><i className="fas fa-sync-alt"></i><span className="share-count">6</span></div>
            <div className="footer-icon"><i className="far fa-heart"></i><span className="like-count">4</span></div>
            <div className="footer-icon"><i className="far fa-envelope"></i></div>
        </div>
    );
}

export default Footer;
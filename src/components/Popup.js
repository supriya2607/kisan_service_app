import React from 'react';
import '../MarketLinkage.css';

function Popup({ onClose }) {
    return (
        <div className="popup">
            <div className="popcont">
                <span onClick={onClose} >x</span>
                <h3>Thank You For Your Order</h3>
                <p>For any enquiry please call us at <a href="tel:+918447836789">+91 8447836789</a></p>
                <a href="/" className="btn">Go To Home</a>
            </div>
        </div>
    );
}

export default Popup;

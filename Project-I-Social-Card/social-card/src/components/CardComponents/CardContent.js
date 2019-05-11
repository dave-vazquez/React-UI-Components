import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className="card-content-container">
            <h1 className="card-content-header">Get started with React</h1>
            <p className="card-content">React makes it painless to create interactive UIs. Design simple views for
            each state in your application</p>
            <a className="card-link" href="https://www.reactjs.org">reactjs.org</a>
        </div>
    )
}

export default CardContent;
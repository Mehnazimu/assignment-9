import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <div className='topic-div'>
            <div className='topic'>
                <img src={logo} alt="" />
                <h3>{name}</h3>
                <button className='btn'><Link to={`/${id}`}>Start Quiz</Link></button>
            </div>


        </div>
    );
};

export default Topic;
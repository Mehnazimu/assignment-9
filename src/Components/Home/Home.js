import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import home from './Home.css';

const Home = () => {
    const topics = useLoaderData([]);
   
    return (
        <div className='home'>

            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}
                    
                ></Topic>)
            }
        </div>
    );
};

export default Home;
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import home from './Home.css';

const Home = () => {
    const topics = useLoaderData([]);

    return (
        <div >
            <div >
                <h1 className='headline'>Test what you know!!!!!</h1>
                <p>Taking short Quiz is very helpful. It saves time and sharpen our knowledge also we can learn with fun</p>
            </div>

            <div className='home'>
                {
                    topics.data.map(topic => <Topic
                        key={topic.id}
                        topic={topic}

                    ></Topic>)
                }

            </div>
        </div>
    );
};

export default Home;
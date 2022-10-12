import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
     return (
        <div>
            <LineChart width={500} height={400} data={data.data}>
                <Line type="monotone" datakey="name"></Line>
                <Line type="monotone" datakey="total"></Line>
                <XAxis datakey="name"/>
                <YAxis datakey="total"/>

            </LineChart>


        </div>
    );
};

export default Statistics;
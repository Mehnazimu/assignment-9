import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';




const Statistics = () => {
    const data = useLoaderData();
    console.log(data.data);
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={data.data}
                    margin={{
                        top: 50,
                        right: 40,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="name" fill="#8884d8" />
                    <Bar dataKey="total" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default Statistics;
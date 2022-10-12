import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Quiz.css';

const Quiz = () => {
    const quizData = useLoaderData([]);
    const allQuestions = quizData.data.questions;


    return (
        <div className='quiz-div'>
            <div>
                <h1>Test what you know!!!!!</h1>
                <p>Taking short Quiz is very helpful. It saves time and sharpen our knowledge also we can learn with fun</p>
            </div>
            {
                allQuestions.map(questions => <Questions
                    key={questions.id}
                    questions={questions}
                ></Questions>)
            }

        </div>
    );
};

export default Quiz;
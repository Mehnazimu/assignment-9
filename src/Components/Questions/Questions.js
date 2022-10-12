import React, { useState } from 'react';
import Options from '../Options/Options';
import toast, { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineEye } from "react-icons/hi";
import './Questions.css'

const Questions = ({ questions }) => {
    const { id, question, correctAnswer, options } = questions;

    const showCorrectAnswer = () => {
        toast(correctAnswer);
    }

    const selectAnswer = event => {
        const target = event.target;
        const selectedAnswer = target.value;
        if (selectedAnswer === correctAnswer) {
            toast("correct answer!!!");
        }
        else {
            toast("wrong answer!!!");
        }


    }


    return (
        <div className='q-div'>
            <button onClick={showCorrectAnswer} className='eye-btn'><HiOutlineEye /></button><Toaster
                position="top-center"
                reverseOrder={false}
            />
            <h3>{question}</h3>
            <div>
                {
                    options.map(option => <Options
                        id={id}
                        option={option}
                        correctAnswer={correctAnswer}
                        selectAnswer={selectAnswer}

                    ></Options>)
                }


            </div>
        </div>

    );
};

export default Questions;
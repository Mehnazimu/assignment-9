import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from 'react-hot-toast'

import './Options.css';

const Options = ({ option, correctAnswer, selectAnswer }) => {


    return (
        <div className='options'>



            <input type="radio" name="question" id={option} value={option} onClick={selectAnswer} /><Toaster
                position="top-center"
                reverseOrder={false}
            />
            <label For={option}>{option}</label>




        </div>
    );
};

export default Options;
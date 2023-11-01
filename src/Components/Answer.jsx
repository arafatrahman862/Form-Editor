import React, { useEffect, useState } from 'react';
import FirstQuestionAnswer from './FirstQuestionAnswer';
import SecondQuestionAnswer from './SecondQuestionAnswer';
import ThirdQuestionAnswer from './ThirdQuestionAnswer';

const Answer = () => {

const [questions, setQuestions] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/question')
    .then(res => res.json())
    .then(data =>{
        setQuestions(data)
    })
},[])

// console.log(questions);

    return (
        <div className='mx-8 flex gap-4 mb-8'>
            <div className='w-[80%]'>
                <FirstQuestionAnswer questions={questions}></FirstQuestionAnswer>
                <SecondQuestionAnswer questions={questions}></SecondQuestionAnswer>
                <ThirdQuestionAnswer questions={questions}></ThirdQuestionAnswer>
            </div>
            <div className='w-[20%] border-2 border-blue-400 rounded-lg mt-8'>
                <p>2nd part</p>
            </div>
        </div>
    );
};

export default Answer;
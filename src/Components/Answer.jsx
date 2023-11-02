import React, { useEffect, useState } from 'react';
import FirstQuestionAnswer from './FirstQuestionAnswer';
import SecondQuestionAnswer from './SecondQuestionAnswer';
import ThirdQuestionAnswer from './ThirdQuestionAnswer';

const Answer = () => {

    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/question')
            .then(res => res.json())
            .then(data => {
                setQuestions(data)
            })
    }, [])

    // console.log(questions);

    return (
        <div >
            <div className='mx-8 flex gap-4 mb-8'>
                <div className='w-[80%]'>
                    <FirstQuestionAnswer questions={questions}></FirstQuestionAnswer>
                    <SecondQuestionAnswer questions={questions}></SecondQuestionAnswer>
                    <ThirdQuestionAnswer questions={questions}></ThirdQuestionAnswer>
                </div>
                <div className='w-[20%] border-2 border-blue-400 rounded-lg mt-8 p-4'>
                    <div>
                        <p>Filter</p>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>All</option>
                            <option>Question 1</option>
                            <option>Question 2</option>
                            <option>Question 3</option>
                           
                        </select>
                    </div>
                    <div className='border-2 mt-4 p-2 rounded-lg'>
                        <p>Questions</p>
                        <p>Answerd: </p>
                    </div>
                </div>
            </div>
            <button className='btn btn-primary text-center flex mx-auto mb-8'>Submit</button>
        </div>
    );
};

export default Answer;
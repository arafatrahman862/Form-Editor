import React, { useState } from 'react';
import { FORM_DATA } from "./QuestionForm";

export default () => {
    let { Comprehension } = FORM_DATA;
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };
    const handleClick = () => {
        Comprehension["Question"] = userInput;
    };



    return (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
            <div className='flex items-center '>
                <p className='text-lg w-[40%]'>Question 3.1</p>
                <p className='border-2 rounded-full p-2 bg-blue-400 text-center  font-semibold'>MCQ</p>
            </div>
            <div>
                <p>According to the passage, one key feature of the water cycle is that:</p>
                <div className='flex gap-3 py-3' >
                    <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => {
                        Comprehension["MCQ"] = "Option-1"
                    }} />
                    <input type='text' onChange={handleInputChange}
                        value={userInput} className="input input-bordered input-success w-1/2 " onClick={handleClick} />
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => {
                        Comprehension["MCQ"] = "Option-2"
                    }} />
                    <input type='text' className="input input-bordered input-success w-1/2 " onClick={() => {
                        Comprehension["Question"] = "Question-2"
                    }} />
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => {
                        Comprehension["MCQ"] = "Option-3"
                    }} />
                    <input type='text' className="input input-bordered input-success w-1/2 " onClick={() => {
                        Comprehension["Question"] = "Question-3"
                    }} />
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => {
                        Comprehension["MCQ"] = "Option-4"
                    }} />
                    <input type='text' className="input input-bordered input-success w-1/2 " onClick={() => {
                        Comprehension["Question"] = "Question-4"
                    }} />
                </div>
            </div>
        </div>
    );
};
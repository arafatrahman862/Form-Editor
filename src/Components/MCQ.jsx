import React from 'react';
import { FORM_DATA } from "./QuestionForm";

export default () => {
    let { Comprehension } = FORM_DATA;
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
                    <p>Water evaporates from the surface into the atmosphere.</p>
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => {
                        Comprehension["MCQ"] = "Option-2"
                    }} />
                    <p>Water only exists in liquid form.</p>
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => {
                        Comprehension["MCQ"] = "Option-3"
                    }} />
                    <p>Water moves from the surface to deep underground.</p>
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => {
                        Comprehension["MCQ"] = "Option-4"
                    }} />
                    <p>Water remains in the clouds forever.</p>
                </div>
            </div>
        </div>
    );
};
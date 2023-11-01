import React, { useState } from 'react';
import { FORM_DATA, setFormData } from "./QuestionForm";

export default () => {
    let { Comprehension } = FORM_DATA;
    return <div className='border-2 border-blue-400 rounded-lg p-4'>
        <div className='flex items-center '>
            <p className='text-lg w-[40%]'>Question 3.1</p>
            <p className='border-2 rounded-full p-2 bg-blue-400 text-center  font-semibold'>MCQ</p>
        </div>
        <div>
            <p>According to the passage, one key feature of the water cycle is that:</p>
            <div className='flex gap-3 py-3' >
                <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => Comprehension["INDEX"] = "A"} />
                <input type='text' className="input input-bordered input-success w-1/2 " onChange={setFormData(Comprehension, "A")} />
            </div>
            <div className='flex gap-3 py-3'>
                <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => Comprehension["INDEX"] = "B"} />
                <input type='text' className="input input-bordered input-success w-1/2 " onChange={setFormData(Comprehension, "B")} />
            </div>
            <div className='flex gap-3 py-3'>
                <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => Comprehension["INDEX"] = "C"} />
                <input type='text' className="input input-bordered input-success w-1/2 " onChange={setFormData(Comprehension, "C")} />
            </div>
            <div className='flex gap-3 py-3'>
                <input type="radio" name="radio-2" className="radio radio-primary" onClick={() => Comprehension["INDEX"] = "D"} />
                <input type='text' className="input input-bordered input-success w-1/2 " onChange={setFormData(Comprehension, "D")} />
            </div>
        </div>
    </div>
};
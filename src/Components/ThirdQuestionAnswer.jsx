import React from 'react';
import { ANSWER } from "./Answer";
import { setFormData } from "./QuestionForm";

export default ({ question }) => <div className='border-2 border-green-400 mt-8 rounded-lg w-full'>
    <div>
        <p className='p-2'>Question 3</p>
        <div className='pl-2'>
            <p>{question?.Comprehension.Passage}</p>
        </div>
    </div>
    <div className='p-2 border-2 border-blue-400 m-2 rounded-lg'>
        <div>
            <p className='p-2 text-lg '>Question 3.1</p>
            <p>According to the passage, one key feature of the water cycle is that:</p>
            <div>
                <div className='flex gap-3 my-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" value={0} onChange={setFormData(ANSWER.Comprehension, "selected")} />
                    <p>{question?.Comprehension.A}</p>
                </div>
                <div className='flex gap-3 my-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" value={1} onChange={setFormData(ANSWER.Comprehension, "selected")} />
                    <p>{question?.Comprehension.B}</p>
                </div>
                <div className='flex gap-3 my-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" value={2} onChange={setFormData(ANSWER.Comprehension, "selected")} />
                    <p>{question?.Comprehension.C}</p>
                </div>
                <div className='flex gap-3 my-3'>
                    <input type="radio" name="radio-4" className="radio radio-accent" value={3} onChange={setFormData(ANSWER.Comprehension, "selected")} />
                    <p>{question?.Comprehension.D}</p>
                </div>
            </div>
        </div>
    </div>
</div>
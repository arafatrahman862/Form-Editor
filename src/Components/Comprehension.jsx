import React from 'react';
import MCQ from './MCQ';
import { setFormData } from "./QuestionForm";

export default ({ FORM_DATA }) => {
    const { Comprehension } = FORM_DATA;
    return (
        <form className='mx-8 mb-8'>
            <div>
                <p className='text-lg py-2'>Question 3</p>
                <div className='flex justify-between  items-cente w-full'>
                    <div className='mb-4'>
                        <div className='w-full'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" name="passage" placeholder="Type passage here" className="input input-bordered" onChange={setFormData(Comprehension, "Passage")} />

                            </div>
                        </div>
                    </div>
                    <div className='mx-4'>
                        <p>Points</p>
                        <input type="number" placeholder="" className="input input-bordered w-[50%]" onChange={setFormData(Comprehension, "Points")} />
                    </div>
                </div>
                <MCQ FORM_DATA={FORM_DATA} />
            </div>
        </form>
    );
};

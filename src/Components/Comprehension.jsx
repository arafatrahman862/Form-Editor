import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import MCQ from './MCQ';

export default () => {
    const [value, setValue] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setValue(data)
        console.log(value.sentence);
    };

    return (
        <div className='mx-8 mb-8'>
            <div>
                <p className='text-lg py-2'>Question 3</p>
                <div className='flex justify-between  items-cente w-full'>
                    <form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
                        <div className='w-full'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                <input type="text" name="passage" {...register("passage")} placeholder="Type passage here" className="input input-bordered " />

                            </div>
                            <input className="btn btn-primary mt-10 " type="submit" value="save" />
                        </div>
                    </form>
                    <div >
                        <p>Points</p>
                        <input type="number" placeholder="" className="input input-bordered w-[50%] " />
                    </div>
                </div>
                <MCQ></MCQ>
            </div>
        </div>
    );
};

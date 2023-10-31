import React, { useState } from 'react';

import { useForm } from "react-hook-form"




const Cloze = () => {
    const [value, setValue] = useState("")
    const {
        register,
        handleSubmit,
       
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
       
        setValue(data)
        console.log(value.sentence);
      };
     
    return (
        <div className='border-2 border-blue-400 rounded-lg p-4 mx-8'>
         <div>
            <p className='py-2 text-lg'>Question 2</p>
         <div>
                <p>Preview*</p>
              
                <p className='px-8 py-4 border-2 rounded-lg w-1/2'>{value.sentence}</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='mb-4'>
                <div className='flex items-center gap-4 '>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Sentence*</span>
                    </label>
                    <input type="text" name="sentence" {...register("sentence")} placeholder="Underline the words here to convert them into blanks" className="input input-bordered " />
                   
                </div>
                <input  className="btn btn-primary mt-10 " type="submit" value="save" />
                </div>
            </form>

         </div>
        </div>
    );
};

export default Cloze;
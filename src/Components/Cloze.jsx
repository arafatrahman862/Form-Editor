import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { DragAbleItems } from './DragAbleItems';

export default () => {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        setValue(data)
        console.log('Save:', value.sentence);
    };

    const addSelectionText = () => {
        const text = getSelectionText();
        if (text) {
            setOptions([...options, text]);
        }
    }

    fetch('http://localhost:5000/clozer', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(value)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                form.reset()
            }
        })


    return (
        <div className='border-2 border-blue-400 rounded-lg p-4 mx-8'>
            <div className='flex items-center'>
                <p className='py-2 text-lg'>Question 2</p>
                <div >
                    <p>Points</p>
                    <input type="number"  placeholder="" className="input input-bordered w-[50%] " />
                </div>
            </div>
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
                    <input className="btn btn-primary mt-10 " type="submit" value="save" />
                    <button className="btn btn-primary mt-10" onClick={addSelectionText}>Mark Underline</button>
                </div>

                {
                    !!options.length &&

                    <ul class="menu bg-blue-400 w-56 rounded-box ">
                        <DragAbleItems id={"clozeOptions"}
                            items={options}
                            onDragEnd={setOptions}
                            child={(option, _index) => (<div className='flex gap-4 my-2'>
                                <a >{option}</a>

                                <input type="checkbox" {...register("options")} checked="checked" className="checkbox checkbox-accent" />
                            </div>)}
                        />

                    </ul>



                }
                <input className='btn btn-primary mt-4  text-center ' type="submit" value="submit" />
            </form>
        </div>
    );
};


function getSelectionText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        return document.selection.createRange().text;
    }
}


async function send(uri, data) {
    let req = await fetch(uri);
}
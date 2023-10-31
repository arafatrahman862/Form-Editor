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
        let text = getSelectionText();
        if (text) {
            setOptions([...options, text]);
        }
    }

    return (
        <div className='border-2 border-blue-400 rounded-lg p-4 mx-8'>
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
                    <input className="btn btn-primary mt-10 " type="submit" value="save" />
                    <button className="btn btn-primary mt-10" onClick={addSelectionText}>Mark Underline</button>
                </div>
            </form>
            {
                !!options.length && <ul class="menu bg-base-200 w-56 rounded-box">
                    <DragAbleItems id={"clozeOptions"}
                        items={options}
                        onDragEnd={setOptions}
                        child={(option, _index) => <li>
                            <a>{option}</a>
                        </li>}
                    />
                </ul>
            }
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
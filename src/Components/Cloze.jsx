import React, { useState } from 'react';
import { useForm } from "react-hook-form"
import { DragAbleItems } from './DragAbleItems';
import { setFormData } from './QuestionForm';

export default ({ FORM_DATA }) => {
    const [value, setValue] = useState("");
    const [options, setOptions] = useState([]);

    const { Cloze } = FORM_DATA;

    Cloze["sentence"] = value.sentence;
    Cloze["options"] = options;

    const { register, handleSubmit } = useForm();

    const onSave = (data) => {
        setValue(data)
        console.log('Save:', value.sentence);
    };

    const markUnderline = () => {
        const text = getSelectionText();
        if (text) {
            setOptions([...options, text]);
        }
    }

    return (
        <div className='border-2 border-blue-400 rounded-lg p-4 mx-8'>
            <div className='flex justify-between items-center'>
                <p className='py-2 text-lg'>Question 2</p>
                <div >
                    <p>Points</p>
                    <input type="number" placeholder="" className="input input-bordered w-[50%]" onChange={setFormData(Cloze, "Points")} />
                </div>
            </div>
            <div>
                <p>Preview*</p>
                <p className='px-8 py-4 border-2 rounded-lg w-1/2'>{value.sentence}</p>
            </div>

            <form onSubmit={handleSubmit(onSave)} className='mb-4'>
                <div className='flex items-center gap-4 '>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Sentence*</span>
                        </label>
                        <input type="text" name="sentence" {...register("sentence")} placeholder="Underline the words here to convert them into blanks" className="input input-bordered " />
                    </div>
                    <input className="btn btn-primary mt-10 " type="submit" value="save" />
                    <button className="btn btn-primary mt-10" onClick={markUnderline}>Mark Underline</button>
                </div>
                {
                    !!options.length && <ul className="menu bg-blue-400 w-56 rounded-box ">
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
            </form>
        </div>
    );
};


function getSelectionText() {
    let text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text
}

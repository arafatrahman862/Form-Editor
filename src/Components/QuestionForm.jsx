import React from 'react';
import Categorize from './Categorize';
import Cloze from './Cloze';
import Comprehension from './Comprehension';
import { send } from '../utils';

export function setFormData(dist, path) {
    return e => {
        dist[path] = e.currentTarget.value
    }
}

export default () => {
    const FORM_DATA = {
        Categorize: {},
        Cloze: {},
        Comprehension: {}
    }
    async function onSubmit() {
        console.log("FORM DATA:", JSON.stringify(FORM_DATA, null, 2));
        try {
            let data = await send("/question", FORM_DATA);
            console.log("Response:", data);
        } catch (error) {
            console.error(error)
        }
    }
    return <div className='mb-8'>
        <Categorize FORM_DATA={FORM_DATA} />
        <Cloze FORM_DATA={FORM_DATA} />
        <Comprehension FORM_DATA={FORM_DATA} />
        <button className='btn btn-primary mt-4  text-center flex mx-auto' onClick={onSubmit}>submit</button>
    </div>
}
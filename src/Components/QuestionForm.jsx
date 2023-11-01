import React from 'react';
import Categorize from './Categorize';
import Cloze from './Cloze';
import Comprehension from './Comprehension';
import { send } from '../utils';

export const FORM_DATA = {
    Categorize: {},
    Cloze: {},
    Comprehension: {}
}

export function setFormData(dist, path) {
    return e => {
        dist[path] = e.currentTarget.value
    }
}

async function onSubmit() {
    console.log("FORM DATA:", JSON.stringify(FORM_DATA, null, 2));
    // try {
    //     let data = await send("/question", FORM_DATA);
    //     console.log("Response:", data);
    // } catch (error) {
    //     console.error(error)
    // }
}

export default () => <div className='mb-8'>
    <Categorize />
    <Cloze />
    <Comprehension />
    <button className='btn btn-primary mt-4  text-center flex mx-auto' onClick={onSubmit}>submit</button>
</div>
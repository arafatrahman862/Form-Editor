import React, { useEffect, useState } from 'react';
import FirstQuestionAnswer from './FirstQuestionAnswer';
import SecondQuestionAnswer from './SecondQuestionAnswer';
import ThirdQuestionAnswer from './ThirdQuestionAnswer';

export const ANSWER = {
    Categorize: {},
    Comprehension: {}
}

export default () => {
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const question = questions[questionIndex];

    useEffect(() => {
        fetch('http://localhost:5000/question')
            .then(res => res.json())
            .then(setQuestions)
            .catch(console.error)
    }, []);

    // console.log("Question:", JSON.stringify(question, null, 2));

    function onSubmit() {
        console.log(JSON.stringify(ANSWER, null, 2));
    }

    return (
        questions.length == 0 ? <></> :
            <div >
                <div className='mx-8 flex gap-4 mb-8'>
                    <div className='w-[80%]'>
                        <FirstQuestionAnswer question={question}></FirstQuestionAnswer>
                        <SecondQuestionAnswer question={question}></SecondQuestionAnswer>
                        <ThirdQuestionAnswer question={question}></ThirdQuestionAnswer>
                    </div>
                    <div className='w-[20%] border-2 border-blue-400 rounded-lg mt-8 p-4'>
                        <div>
                            <p>Filter</p>
                            <select className="select select-bordered w-full max-w-xs" onChange={e => setQuestionIndex(e.currentTarget.selectedIndex - 1)}>
                                <option disabled>All</option>
                                {
                                    questions.map((v, i) => <option>{`${1 + i}. ${v._id}`}</option>)
                                }
                            </select>
                        </div>
                        {/* <div className='border-2 mt-4 p-2 rounded-lg'>
                        <p>Questions</p>
                        <p>Answerd: </p>
                    </div> */}
                    </div>
                </div>
                <button className='btn btn-primary text-center flex mx-auto mb-8' onClick={onSubmit}>Submit</button>
            </div>
    );
};

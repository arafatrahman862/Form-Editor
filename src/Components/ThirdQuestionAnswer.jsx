import React from 'react';

const ThirdQuestionAnswer = ({ questions }) => {
    return (
        <div className='border-2 border-green-400 mt-8 rounded-lg w-full'>
            <div>
                <p className='p-2'>Question 3</p>
                {
                    questions.map((question, index) => <div className='pl-2' key={index}>
                        {
                            <p>{question.Comprehension.Passage}</p>
                        }
                    </div>)
                }
            </div>
            <div className='p-2 border-2 border-blue-400 m-2 rounded-lg'>
                <div>
                    <p className='p-2 text-lg '>Question 3.1</p>
                    <p>According to the passage, one key feature of the water cycle is that:</p>

                    <div>
                        {

                            questions.map((question, index) => <div key={index}>

                                {

                                    <div>

                                        <div >
                                            <div className='flex gap-3 my-3'>
                                                <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                                                <p>{question.Comprehension.A}</p>
                                            </div>
                                            <div className='flex gap-3 my-3'>
                                                <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                                                <p>{question.Comprehension.B}</p>
                                            </div>
                                            <div className='flex gap-3 my-3'>
                                                <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                                                <p>{question.Comprehension.C}</p>
                                            </div>
                                            <div className='flex gap-3 my-3'>
                                                <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                                                <p>{question.Comprehension.D}</p>
                                            </div>

                                        </div>

                                    </div>
                                }
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdQuestionAnswer;
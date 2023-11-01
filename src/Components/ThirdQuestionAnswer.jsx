import React from 'react';

const ThirdQuestionAnswer = ({ questions }) => {
    return (
        <div className='border-2 border-green-400 mt-8 rounded-lg w-full h-56'>
            <div>
                <p className='p-2'>Question 3</p>
                {
                    questions.map((question, index) => <div key={index}>
                        {
                            <p>{question.Comprehension.Passage}</p>
                        }
                    </div>)
                }
            </div>
            <div>
                {
                    questions.map((question, index) => <div key={index}>
                        {

                            <div>
                                <p>According to the passage, one key feature of the water cycle is that:</p>
                               <div className='flex gap-3 my-3'>
                               <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                               <p>Water evaporates from the surface into the atmosphere.</p>
                               </div>
                               <div className='flex gap-3 my-3'>
                               <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                               <p>Water only exists in liquid form.</p>
                               </div>
                               <div className='flex gap-3 my-3'>
                               <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                               <p>Water moves from the surface to deep underground.</p>
                               </div>
                               <div className='flex gap-3 my-3'>
                               <input type="checkbox" checked="checked" className="checkbox checkbox-accent" />
                               <p>Water remains in the clouds forever.</p>
                               </div>
                            </div>
                        }
                    </div>)
                }
            </div>
        </div>
    );
};

export default ThirdQuestionAnswer;
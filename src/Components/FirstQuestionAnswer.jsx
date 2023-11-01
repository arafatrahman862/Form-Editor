import React from 'react';

const FirstQuestionAnswer = ({questions}) => {
    console.log(questions)
    return (
        <div className='border-2 border-green-400 mt-8 rounded-lg w-full h-56'>
            <p className='p-2'>Question 1</p>
            <div>
                <div>
{
    questions.map(question => <div>
        {}
    </div>)
}
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default FirstQuestionAnswer;
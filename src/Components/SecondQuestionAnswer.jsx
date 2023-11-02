import React from 'react';

const SecondQuestionAnswer = ({questions}) => {
    return (
        <div className='border-2 border-green-400 mt-8 rounded-lg w-full h-56 p-4'>
            <p className='p-2'>Question 2</p>
            <div >
{
    questions.map((question, index)=><div className='flex gap-4' key={index}>
        {
            question.Cloze.options.map((option, index)=><div className='border-2 rounded-lg px-6 py-3 bg-green-400 border-green-400' key={index}>
                <p >{option}</p>
            </div>)
        }
    </div>)
}
            </div>
            <div className='pt-4'>
            {
    questions.map((question, index)=><div key={index}>
        <p className='text-lg'>{question.Cloze.sentence}</p>
    </div>)
}
            </div>
        </div>
    );
};

export default SecondQuestionAnswer;
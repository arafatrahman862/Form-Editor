

import React from 'react';

const SecondQuestionAnswer = ({ question }) => {
    
    const options = question?.Cloze.options || [];
    const sentence = question?.Cloze.sentence || "";
    
    const conditionalSentence = sentence.split(' ').map((word, index) => {
      const matchingOption = options.find(option => option === word);
    
      if (matchingOption) {
        return (
          <div className='border-2 rounded-lg px-6 py-3 bg-green-400 border-green-400' key={index}>
           <p>______</p>
          </div>
        );
      } else {
        return (
          <p key={index}>{word}</p>
        );
      }
    });
    return (
        <div>
            <div className='border-2 border-green-400 mt-8 rounded-lg w-full h-56 p-4'>
    <p className='p-2'>Question 2</p>
    <div >
        <div className='flex gap-4'>
            {
                question?.Cloze.options.map((option, index) => <div className='border-2 rounded-lg px-6 py-3 bg-green-400 border-green-400' key={index}>
                    <p >{option}</p>
                </div>)
            }
        </div>
    </div>
    <div className='pt-4'>
        {/* <p className='text-lg'>{question?.Cloze.sentence}</p> */}
        <div className='flex gap-4'>{conditionalSentence}</div>
      <div className='pt-4'>
        <p className='text-lg'>{sentence}</p>
      </div>
    </div>
</div>
        </div>
    );
};

export default SecondQuestionAnswer;
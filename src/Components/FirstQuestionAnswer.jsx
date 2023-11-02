import React from 'react';

const FirstQuestionAnswer = ({ questions }) => {
    console.log(questions)

    const itemList = questions.flatMap((item) => {
        return item.Categorize.itemList.map((detail) => ({

            item: detail.Item
        }));
    });
    // console.log(itemList)
    return (
        <div className='border-2 border-green-400 mt-8 rounded-lg w-full pb-4'>
            <p className='p-2'>Question 1</p>
            <div className='flex items-center justify-center gap-3'>
                <div>
                <div className='flex gap-8 '>
                    {
                        itemList.map((Item, index) => <div className='border-2 rounded-lg px-8 py-4 bg-green-400 border-green-400' key={index}>
                            <p>{Item.item}</p>
                        </div>)
                    }
                </div>
                <div className='flex gap-8 pt-4'>
                   
                    {
                        questions.map((question, index) => <div className='flex gap-8' key={index}>
                          
                            {
                                question.Categorize.inputList.map((input, index)=><div className='border-2 rounded-lg  bg-blue-400 border-blue-400 w-full h-36' key={index}>
                                    <p className='border-2 m-2 px-6 rounded-lg border-green-400' >{input.Category}</p>
                                </div>)
                            }
                        </div>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default FirstQuestionAnswer;
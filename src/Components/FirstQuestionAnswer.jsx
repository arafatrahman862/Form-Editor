import React from 'react';

export default ({ question }) => {
    return (
        <div className='border-2 border-green-400 mt-8 rounded-lg w-full pb-4'>
            <p className='p-2'>Question 1</p>
            <div className='flex items-center justify-center gap-3'>
                <div>
                    <div className='flex gap-8 '>
                        {
                            question?.Categorize.itemList.map((input, index) => <div draggable className='border-2 rounded-lg px-8 py-4 bg-green-400 border-green-400' key={index} onDragOver={(e) => { }}>
                                <p>{input.Item}</p>
                            </div>)
                        }
                    </div>
                    <div className='flex gap-8 pt-4'>
                        <div className='flex gap-8'>
                            {
                                question?.Categorize.inputList.map((input, index) => <div className='border-2 rounded-lg  bg-blue-400 border-blue-400 w-full h-36' key={index}>
                                    <p className='border-2 m-2 px-6 rounded-lg border-green-400' >{input.Category}</p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

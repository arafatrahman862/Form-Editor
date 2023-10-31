import React from 'react';

const MCQ = () => {
    return (
        <div className='border-2 border-blue-400 rounded-lg p-4'>
            <div className='flex items-center '>
                <p className='text-lg w-[40%]'>Question 3.1</p>
                <p className='border-2 rounded-full p-2 bg-blue-400 text-center  font-semibold'>MCQ</p>
            </div>
            <div>
                <p>According to the passage, one key feature of the water cycle is that:</p>
                <div className='flex gap-3 py-3' >
                    <input type="radio" name="radio-2" className="radio radio-primary" />
                    <p>Water evaporates from the surface into the atmosphere.</p>
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" />
                    <p>Water only exists in liquid form.</p>
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" />
                    <p>Water moves from the surface to deep underground.</p>
                </div>
                <div className='flex gap-3 py-3'>
                    <input type="radio" name="radio-2" className="radio radio-primary" />
                    <p>Water remains in the clouds forever.</p>
                </div>
            </div>
        </div>
    );
};

export default MCQ;
import React, { useState } from 'react';
import { DragAbleItems } from './DragAbleItems';

const Categorize = () => {
    const [inputList, setInputList] = useState([{ Category: "" }]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { Category: "" }]);
    };

    // ------------- Item -------------
    const [itemList, setItemList] = useState([{ Item: "" }]);

    const handleItemChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...itemList];
        list[index][name] = value;
        setItemList(list);
    };

    const handleItemRemoveClick = index => {
        const list = [...itemList];
        list.splice(index, 1);
        setItemList(list);
    };

    const handleItemAddClick = () => {
        setItemList([...itemList, { Category: "" }]);
    };

    return (
        <div className='mx-8 p-4 my-4 rounded-lg border-2 border-green-300'>
            <p className='py-3'>Question 1</p>
            <div className='flex gap-4'>
                <input type="text" placeholder="Descripton(Optional)" className="input input-bordered w-[80%] " />
                <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" />
            </div>

            <div>
                <div className='flex justify-between mt-4 items-center'>
                    <p className='text-lg'>Categories</p>
                    <div >
                        <p>Points</p>
                        <input type="number" placeholder="" className="input input-bordered w-[50%] " />
                    </div>
                </div>

                <DragAbleItems
                    id={"Category"}
                    items={inputList}
                    onDragEnd={setInputList}
                    child={(x, i) => {
                        return <div className="mb-2">
                            <input
                                name="Category"
                                placeholder="Category "
                                value={x.Category}
                                onChange={e => handleInputChange(e, i)}
                                className="file-input file-input-bordered file-input-success w-[20%] pl-2"
                            />
                            <div className="mt-4">
                                {inputList.length !== 1 && <button
                                    className="mr-4 btn btn-xs btn-success"
                                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                                {inputList.length - 1 === i && <button className='btn btn-xs btn-success' onClick={handleAddClick}>Add</button>}
                            </div>
                        </div>
                    }}
                />

            </div>
            <div className='flex '>
                <div className='w-[40%]'>
                    <p>Item</p>

                    <DragAbleItems
                        id={"Items"}
                        items={itemList}
                        onDragEnd={setItemList}
                        child={(x, i) => {
                            return <div className="my-2">
                                <input
                                    name="Item"
                                    placeholder="Item "
                                    value={x.Item}
                                    onChange={e => handleItemChange(e, i)}
                                    className="file-input file-input-bordered file-input-success w-[50%] pl-2"
                                />
                                <div className="mt-4">
                                    {itemList.length !== 1 && <button
                                        className="mr-4 btn btn-xs btn-success"
                                        onClick={() => handleItemRemoveClick(i)}>Remove</button>}
                                    {itemList.length - 1 === i && <button className='btn btn-xs btn-success' onClick={handleItemAddClick}>Add</button>}
                                </div>
                            </div>
                        }}
                    />
                </div>
                <div className='pb-8 '>
                    <p>Belongs To</p>
                    <select className="select select-accent w-full max-w-xs">
                        <option disabled selected>Choose</option>
                        {
                            inputList.map((x, _index) => <option>{x.Category}</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Categorize;



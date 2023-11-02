import React from 'react';
import { useEffect, useState } from 'react';
import { ANSWER } from "./Answer";

export default ({ question }) => {
    let [catalogList, setcatalogList] = useState([]);
    let [itemList, setItemList] = useState([]);

    useEffect(() => {
        setcatalogList(question?.Categorize.inputList);
        setItemList(question?.Categorize.itemList);
    }, [question]);

    ANSWER.Categorize["Answer"] = catalogList;

    return (
        <div className='border-2 border-green-400 mt-8 rounded-lg w-full pb-4'>
            <p className='p-2'>Question 1</p>
            <div className='flex items-center justify-center gap-3'>
                <div>
                    <div className='flex md:flex-row flex-col gap-8 '>
                        {
                            itemList.map((input, index) => <div draggable className='border-2 rounded-lg px-8 py-4 bg-green-400 border-green-400' key={index} onDragStart={(e) => {
                                e.dataTransfer.setData("itemList", index);
                            }}>
                                <p>{input.Item}</p>
                            </div>)
                        }
                    </div>
                    <div className='flex gap-8 pt-4'>
                        <div className='flex md:flex-row flex-col gap-8'>
                            {
                                catalogList.map((input, index) => <div
                                    key={index}
                                    className='border-2 rounded-lg  bg-blue-400 border-blue-400 w-full h-36'
                                    onDragOver={e => e.preventDefault()}
                                    onDrop={e => {
                                        let itemIndex = e.dataTransfer.getData("itemList");
                                        let v = itemList[itemIndex];
                                        catalogList[index]["Items"] ??= [];
                                        catalogList[index]["Items"].push(v.Item);
                                        setcatalogList([...catalogList]);

                                        let newItemList = itemList.filter((_, i) => itemIndex != i);
                                        console.log(itemIndex);
                                        setItemList(newItemList);
                                    }}
                                >
                                    <p className='border-2 m-2 px-6 rounded-lg border-green-400' >{input.Category}</p>
                                    {
                                        input?.Items?.map((v, i) => <p key={i} className='border-2 m-2 px-6 rounded-lg border-red-400' >{v}</p>)
                                    }
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


import React from 'react';

export function DragAbleItems({ id, items, onDragEnd, child }) {
    const onDragStart = (e, index) => {
        e.dataTransfer.setData(id, index);
    };
    function onDragOver(e) {
        e.preventDefault();
    }

    const onDrop = (e, newIndex) => {
        const oldIndex = e.dataTransfer.getData(id);
        const newItems = [...items];
        const [draggedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, draggedItem);
        onDragEnd(newItems);
    };
    return <>
        {items.map((item, index) => <div draggable onDragStart={(e) => onDragStart(e, index)}
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, index)}
            children={child(item, index)} />
        )}
    </>;
}

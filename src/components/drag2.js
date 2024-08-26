import React from 'react';
import { useDrag } from 'react-dnd';

export const Drag2 = ({ item, style, icon, onClick }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'ITEM',
        item: { id: item.id, text: item.text, ...item},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
  
    return (
        <div
            // onClick={() => handleOnClick()}
            ref={drag}
            className={`${style} ${isDragging ? 'opacity-50' : ''}`}>
            {item.text}
           
        </div>
    );
};

import React from 'react';
import { useDrag } from 'react-dnd';
import Icon from './Icon';

export const DraggableItem = ({ item, style, icon, onClick }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'ITEM',
        item: { id: item.id, text: item.text, ...(item?.value ? { value: item?.value } : {}) },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    });
    const handleOnClick = () => {
        // console.log('item:', item)
        if (item.value) {
            onClick(item)
        } else {
            alert("Enter Value")
        }
    }
    return (
        <div
            onClick={() => handleOnClick()}
            ref={drag}
            className={`${style} ${isDragging ? 'opacity-50' : ''}`}>
            {item.text}
            {icon && <Icon name={icon} size={15} className="text-white mx-2 border-2px mt-1" />}
        </div>
    );
};

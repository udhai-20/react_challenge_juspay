import React from 'react';
import { useDrop } from 'react-dnd';

export default function MidArea({ items, onDrop }) {
  const [{ isOver }, drop] = useDrop({
    accept: 'ITEM',
    drop: (item) => {
      onDrop(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`flex-1 h-full overflow-auto p-2 ${isOver ? 'bg-green-100' : 'bg-gray-100'}`}
    >
      <div>Mid area</div>
      <div>
        {items.map((item) => (
          <div key={item.id} className={`flex flex-row flex-wrap`}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

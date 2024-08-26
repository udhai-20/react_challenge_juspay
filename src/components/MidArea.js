import React from 'react';
import { Drag2 } from './drag2';
import { useModAreaActions } from './useMidAreaAction';

export default function MidArea({ items, onDrop, setItems, runActions, groups, setGroups }) {
  const { drop, handleClearActions, handleRunGroup, isOver } = useModAreaActions({ onDrop, setItems, runActions, setGroups, groups })

  return (
    <div
      ref={drop}
      className={`flex-1 h-full overflow-auto p-2 ${isOver ? 'bg-green-100' : 'bg-gray-100'}`}
    >
      <div className='text-lf font-bold text-gray-800 text-center'>Mid area</div>
      <div>
        <button onClick={handleClearActions} className='border border-blue-500 p-2 bg-blue-500 text-white float-right'>Clear Selected Action</button>
      </div>
      <div>
        <div className='text-lg font-bold text-gray-800 p-4 bg-gray-100 rounded-md shadow-sm'>All Action History</div>
        {items.map((item, index) => (
          <Drag2 key={item.id} item={{ id: index + 1, text: item.text, itemIndex: index }} style={`inline-block flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer mr-2 mb-2 ml-2`} />
        ))}
        {groups.map((group, index) => (
          <div id={`group-${index}`} key={index} className="group mb-4 p-2 border border-gray-300 bg-white rounded">
            <div className="flex justify-between items-center">
              <span>Group {index + 1}</span>
              <button onClick={() => handleRunGroup(index)} className='border border-green-500 p-1 bg-green-500 text-white'>
                Run Group {index + 1}
              </button>
            </div>
            <div className="mt-2">
              {group.items.map((item, groupIndex) => (
                <Drag2 key={item.id} item={{ id: index + 1, text: item.text, groupIndex: groupIndex }} style={`inline-block flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer mr-2 mb-2 ml-2`} />
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { DraggableItem } from "./draggable";
import { actions } from "../utils/util";

export const Motion = ({ onDrop }) => {
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const handleDrop = (item) => {
    onDrop(item);
  };
  return (
    <>
      {actions && actions?.map((action) => (
        <DraggableItem
          key={action.id}
          item={action}
          style="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          icon={action.icon}
          onClick={() => handleDrop(action)}
        />
      ))}
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={xValue}
            onChange={(e) => setXValue(e.target.value)}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded"
            placeholder="Set X"
          />
          <DraggableItem
            key="set_x"
            item={{ id: 'Set_X', text: `Set X: ${xValue}`, value: xValue }}
            style="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
            onClick={() => handleDrop({ id: 'Set_X', text: `Set X: ${xValue}`, value: xValue })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            value={yValue}
            onChange={(e) => setYValue(e.target.value)}
            className="w-16 px-2 py-1 text-sm border border-gray-300 rounded"
            placeholder="Set Y"
          />
          <DraggableItem
            key="set_y"
            item={{ id: 'Set_Y', text: `Set Y: ${yValue}`, value: yValue }}
            style="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
            onClick={() => handleDrop({ id: 'Set_Y', text: `Set Y: ${yValue}`, value: yValue })}
          />
        </div>
      </div>
    </>
  );
};

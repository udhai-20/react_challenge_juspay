import React,{ useState } from "react";
import { DraggableItem } from "./draggable"

export const Motion=({onDrop})=>{
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    return<>
     <DraggableItem
        key="move10steps"
        item={{ id: 'move10steps', text: 'Move 10 steps' ,value:"10 steps"}}
        style={"flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"}
        onClick={onDrop}
      />
      <DraggableItem
        key="tur_left"
        item={{ id: 'Turn_Left', text: 'Turn 15 degree' ,value:"rotate" }}
        style={"flex flex-row flex-wrap  bg-blue-500 text-white px-2  py-1 my-2 text-sm cursor-pointer"}
        icon={"undo"}
        onClick={onDrop}
      />
      <DraggableItem
        key="tur_right"
        item={{ id: 'Turn_Right', text: 'Turn 15 degree',value:"rotate" }}
        style={"flex flex-row flex-wrap  bg-blue-500 text-white px-2  py-1 my-2 text-sm cursor-pointer"}
        icon={"undo"}
        onClick={onDrop}
      />
      <DraggableItem
        key="random"
        item={{ id: 'Random_pt', text: 'Go to random point' ,value:"random"}}
        style={"flex flex-row flex-wrap  bg-blue-500 text-white px-2  py-1 my-2 text-sm cursor-pointer"}
        onClick={onDrop}
      />
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
            style={"flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"}
            onClick={onDrop}
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
            style={"flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"}
            onClick={onDrop}
          />
        </div>
      </div>
    </>
}
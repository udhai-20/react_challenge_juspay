import React from "react";
import Icon from "./Icon";
import { Motion } from "./motion";
import { Looks } from "./looks";
import { useSidebarAction } from "./useSidebarActions";

export default function Sidebar({ action, onDrop, handleImmediateAction, setGroups, setItems, items, groups }) {
  const { drop, isOver, handleActions } = useSidebarAction({ onDrop, handleImmediateAction, setGroups, setItems, items, groups });
  return (
    <div ref={drop} className={`w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200 ${isOver ? 'bg-green-100' : 'bg-gray-100'}`}>
      <div className="font-bold"> {"Events"} </div>
      <div onClick={() => action()} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Replay "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked Actions"}
      </div>
      <div className="font-bold "> {"Motion"} </div>
      <Motion onDrop={handleActions} />
      <div className="font-bold mt-2"> {"Looks"} </div>
      <Looks handleActions={handleActions} />
    </div>
  );
}

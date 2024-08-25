import React, { useState } from "react";
import Icon from "./Icon";
import { Motion } from "./motion";
import { DraggableItem } from "./draggable";

export default function Sidebar({ action, onDrop }) {
  const [message, setMessage] = useState("")
  const [duration1, setDuration1] = useState(0)
  const [duration2, setDuration2] = useState(0)
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [scaleSprite, setScaleSprite] = useState(1);


  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <div onClick={action} className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When "}
        <Icon name="flag" size={15} className="text-green-600 mx-2" />
        {"clicked"}
      </div>
      <div className="flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When this sprite clicked"}
      </div>
      <div className="font-bold "> {"Motion"} </div>
      <Motion onDrop={onDrop} />
      <div className="font-bold mt-2"> {"Looks"} </div>
      <div className="flex flex-col w-full  mt-2 space-y-2 bg-green-100 border border-green-300 rounded p-4">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
          placeholder="Message"
        />
        <DraggableItem
          key="set_x"
          item={{ id: 'looks_message', text: `Say: ${message}`, value: message }}
          style={"flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"}
          onClick={onDrop}
        />
      </div>
      <div className="flex flex-col w-full mt-2 space-y-2 bg-green-100 border border-green-300 rounded p-4">
        <input
          value={message2}
          onChange={(e) => setMessage2(e.target.value)}
          className="w-auto px-2 py-1 text-sm border border-gray-300 rounded"
          placeholder="Message"
        />
        <input
          type="number"
          value={duration1}
          onChange={(e) => setDuration1(e.target.value)}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
          placeholder="Time (s)"
        />
        <DraggableItem
          key="set_x"
          item={{ id: 'looks_message_time', text: `Say: ${message2} for ${duration1}s`, value: { message: message2, duration: duration1 } }}
          style="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
          onClick={onDrop}
        />
      </div>
      <div className="flex flex-col w-full mt-2 space-y-2 bg-green-100 border border-green-300 rounded p-4">
        <input
          value={message3}
          onChange={(e) => setMessage3(e.target.value)}
          className="w-auto px-2 py-1 text-sm border border-gray-300 rounded"
          placeholder="Message"
        />
        <input
          type="number"
          value={duration2}
          onChange={(e) => setDuration2(e.target.value)}
          className="w-20 px-2 py-1 text-sm border border-gray-300 rounded"
          placeholder="Time (s)"
        />
        <DraggableItem
          key="set_x"
          item={{ id: 'looks_think_time', text: `Think: ${message3} for ${duration2}s`, value: { message: message3, duration: duration2 } }}
          style="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
          onClick={onDrop}
        />
      </div>
      <div className="flex flex-col w-full  mt-2 space-y-2 bg-green-100 border border-green-300 rounded p-4">
        <input
          type="number"
          value={scaleSprite}
          onChange={(e) => setScaleSprite(e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
          placeholder="size"
        />
        <DraggableItem
          key="scale_size"
          item={{ id: 'looks_Size_Change', text: `Change Size: ${scaleSprite}`, value: scaleSprite }}
          style={"flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"}
          onClick={onDrop}
        />
      </div>
      <DraggableItem
        key="Reset_Size"
        item={{ id: 'looks_Size_Reset', text: `Reset Size`, value: 1 }}
        style="flex mt-3 flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
        onClick={onDrop}
      />
      <DraggableItem
        key="costume#change"
        item={{ id: 'looks_costume_change', text: `Change Costume`, value: { message: "switch" } }}
        style="flex mt-3 flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
        onClick={onDrop}
      />
      <DraggableItem
        key="show#hide#sprite"
        item={{ id: 'toggle#sprite', text: `Toggle (Show/Hide)`, value: { message: "Toggle" } }}
        style="flex mt-3 flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
        onClick={onDrop}
      />
    </div>
  );
}

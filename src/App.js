import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";

export default function App() {
  const [items, setItems] = useState([]);
  const [history, setHistory] = useState([]);

  const handleDrop = (item) => {
    console.log('item:', item);
    setItems((prevItems) => [...prevItems, item]);
  };
  const runActions = () => {
    // alert("check")
    items.forEach((action) => {
      console.log('items:', items);
      if (action.id === 'move10steps') {
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      } else if (action.id === "Turn_Left") {
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }
      else if (action.id === "Turn_Right") {
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }
      else if (action.id === "Random_pt") {
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }else if(action.id==="Set_X"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }else if(action.id==="Set_Y"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }else if(action.id==="looks_message"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }else if(action.id==="looks_message_time"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }else if(action.id==="looks_think_time"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }else if(action.id==="toggle#sprite"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }
      else if(action.id==="looks_costume_change"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }
      else if(action.id==="looks_Size_Change"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }
      else if(action.id==="looks_Size_Reset"){
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);
      }
      // Handle other actions similarly
    });
  };
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <Sidebar action={runActions} onDrop={handleDrop} /> <MidArea items={items} onDrop={handleDrop} />
        </div>
        <div className="w-1/3 h-screen overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
      {/* <div className="fixed bottom-0 left-0 p-4 bg-white border-t border-gray-200 w-full">
        <button className="p-2 bg-green-500 text-white">Replay Last Action</button>
      </div> */}
    </div>
  );
}

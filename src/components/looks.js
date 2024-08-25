import React, { useState } from "react";
import { DraggableItem } from "./draggable";
import { useLookAction } from "./useLookAction";

export const Looks = ({ handleActions }) => {
    const { actions } = useLookAction()
    return (
        <div className="space-y-4">
            {actions.length && actions.map((action) => (
                <div
                    key={action.id}
                    className="flex flex-col w-full mt-2 space-y-2 bg-green-100 border border-green-300 rounded p-4"
                >
                    {action.inputFields.map((input, index) => (
                        <input
                            key={index}
                            type={input.type}
                            value={input.value}
                            onChange={(e) => input.onChange(e.target.value)}
                            className="w-full px-2 py-1 text-sm border border-gray-300 rounded"
                            placeholder={input.placeholder}
                        />
                    ))}
                    <DraggableItem
                        key={action.id}
                        item={{ id: action.id, text: action.text, value: action.value }}
                        style="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer"
                        onClick={handleActions}
                    />
                </div>
            ))}
        </div>
    );
};

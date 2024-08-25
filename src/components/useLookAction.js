
import React, { useState } from "react";
export const useLookAction = () => {
    const [message, setMessage] = useState("");
    const [duration1, setDuration1] = useState(0);
    const [duration2, setDuration2] = useState(0);
    const [message2, setMessage2] = useState("");
    const [message3, setMessage3] = useState("");
    const [scaleSprite, setScaleSprite] = useState(1);

    const actions = [
        {
            id: "looks_message",
            text: `Say: ${message}`,
            value: message,
            inputFields: [
                { type: "text", value: message, onChange: setMessage, placeholder: "Message" },
            ],
        },
        {
            id: "looks_message_time",
            text: `Say: ${message2} for ${duration1}s`,
            value: { message: message2, duration: duration1 },
            inputFields: [
                { type: "text", value: message2, onChange: setMessage2, placeholder: "Message" },
                { type: "number", value: duration1, onChange: setDuration1, placeholder: "Time (s)" },
            ],
        },
        {
            id: "looks_think_time",
            text: `Think: ${message3} for ${duration2}s`,
            value: { message: message3, duration: duration2 },
            inputFields: [
                { type: "text", value: message3, onChange: setMessage3, placeholder: "Message" },
                { type: "number", value: duration2, onChange: setDuration2, placeholder: "Time (s)" },
            ],
        },
        {
            id: "looks_Size_Change",
            text: `Change Size: ${scaleSprite}`,
            value: scaleSprite,
            inputFields: [
                { type: "number", value: scaleSprite, onChange: setScaleSprite, placeholder: "Size" },
            ],
        },
        {
            id: "looks_Size_Reset",
            text: "Reset Size",
            value: 1,
            inputFields: [],
        },
        {
            id: "looks_costume_change",
            text: "Change Costume",
            value: { message: "switch" },
            inputFields: [],
        },
        {
            id: "toggle#sprite",
            text: "Toggle (Show/Hide)",
            value: { message: "Toggle" },
            inputFields: [],
        },
    ];

    return {
        actions, scaleSprite, message3, message2, duration2, duration1, message, setScaleSprite, setMessage3, setMessage2, setDuration2, setDuration1, setMessage
    }

}
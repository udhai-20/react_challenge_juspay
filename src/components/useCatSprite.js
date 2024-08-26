import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
export const useCatSprite = () => {
    const [actionQueue, setActionQueue] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [msg, setMsg] = useState("");
    const [thinkMsg, setThinkMsg] = useState(false);
    const [costume, setCostume] = useState(false);
    const [toggleSprite, setToggleSprite] = useState(true);
    const spriteRef = useRef();
    const messageRef = useRef();
    const [zIndex, setZIndex] = useState(1);
    const moveSprite = (steps) => {
        if (spriteRef.current) {
            const sprite = spriteRef.current;
            setIsAnimating(true);
            gsap.to(sprite, {
                x: `+=${steps}`,
                duration: 1,
                ease: "power1.out",
                onComplete: () => {
                    setIsAnimating(false);
                    processNextAction(); 
                }
            });
        }
    };
    const rotateSprite = (angle) => {
        if (spriteRef.current) {
            const sprite = spriteRef.current;
            setIsAnimating(true);
            gsap.to(sprite, {
                rotation: `+=${angle}`,
                duration: 1,
                ease: "power1.out",
                onComplete: () => {
                    setIsAnimating(false);
                    processNextAction();
                }
            });
        }
    };

    const randomSprite = (x, y = 0) => {
        // console.log("inside gsap random", spriteRef.current);
        if (spriteRef.current) {
            // console.log("check########################")
            const sprite = spriteRef.current;
            setIsAnimating(true);
            gsap.to(sprite, {
                x: `${x}px`,
                y: `${y}px`,
                duration: 1,
                ease: "power1.out",
                onUpdate: () => console.log('Animating...'),
                onComplete: () => {
                    setIsAnimating(false);
                    processNextAction(); 
                }
            });
        }
    }

    const handleAction = (event) => {
        const action = event.detail;
        // console.log('action:', action);
        if (action.id === 'move10steps') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'move', value: 10 }]);
        } else if (action.id === 'Turn_Left') {

            setActionQueue((prevQueue) => [...prevQueue, { type: 'rotate', value: -15 }]);
        } else if (action.id === 'Turn_Right') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'rotate', value: 15 }]);
        }
        else if (action.id === 'Random_pt') {
            // console.log("check###4")
            const maxX = 500;
            const minX = 10;
            const maxY = 150;
            const minY = 10;
            const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
            const randomY = Math.floor(Math.random() * (maxY - minY + 1)) + minY;
            // console.log('randomX:', randomX),
                // console.log('randomY:', randomY)
            setActionQueue((prevQueue) => [...prevQueue, { type: 'random_pt_move', x: randomX, y: randomY }]);
        } else if (action.id === 'Set_X') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'set_x', x: action.value }]);
        } else if (action.id === 'Set_Y') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'set_y', y: action.value }]);
        } else if (action.id === 'looks_message') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'look_msg', msg: action.value }]);
        }
        else if (action.id === 'looks_message_time') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'look_msg_time', msg: action.value.message, time: action.value.duration }]);
        } else if (action.id === 'looks_think_time') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'look_think_time', msg: action.value.message, time: action.value.duration }]);
        } else if (action.id === 'looks_costume_change') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'look_costume_change', msg: action.value.message, }]);
        } else if (action.id === 'toggle#sprite') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'toggle', msg: action.value.message, }]);
        }
        else if (action.id === 'looks_Size_Change') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'scale#sprite', scale: action.value }]);
        }
        else if (action.id === 'looks_Size_Reset') {
            setActionQueue((prevQueue) => [...prevQueue, { type: 'reset#sprite', scale: 1 }]);
        }
    };

    const sayMsg = (msg, delay, think) => {
        // console.log('think:', delay,think);
        setIsAnimating(true);
        setMsg(msg);
        if (delay) {
            if (think) {
                setThinkMsg(true);
            } else {
                setThinkMsg(false);
            }
            setTimeout(() => {
                setIsAnimating(false);
                setMsg("");
                processNextAction();
                setThinkMsg(false);
            }, delay ? delay * 1000 : 0);
        } else {
            // setThinkMsg(false); 
            setTimeout(() => {
                setThinkMsg(false);
                setIsAnimating(false);
                processNextAction();
            }, 1000)
            // setThinkMsg(false)
        }
    };

    const scaleUpSprite = (scale, reset) => {

        setIsAnimating(true);
        gsap.to("#sprite_svg", {
            scale: reset ? 1 : scale, transformOrigin: "center center", duration: 1, onComplete: () => {
                setIsAnimating(false);
                processNextAction(); 
            }
        });
    }
    const processNextAction = () => {
        // console.log(actionQueue.length, isAnimating)
        if (actionQueue.length > 0 && !isAnimating) {
            const nextAction = actionQueue.shift();
            // console.log('nextAction:', nextAction);
            if (nextAction.type === 'move') {
                moveSprite(nextAction.value);
            } else if (nextAction.type === 'rotate') {
                rotateSprite(nextAction.value);
            } else if (nextAction.type === "random_pt_move") {
                randomSprite(nextAction.x, nextAction.y);
            } else if (nextAction.type === "set_x") {
                randomSprite(nextAction.x);
            }
            else if (nextAction.type === "set_y") {
                randomSprite(0, nextAction.y);
            }
            else if (nextAction.type === "look_msg") {
                sayMsg(nextAction.msg);
            }
            else if (nextAction.type === "look_msg_time") {
                sayMsg(nextAction.msg, nextAction.time);
            }
            else if (nextAction.type === "look_think_time") {
                sayMsg(nextAction.msg, nextAction.time, "think");
            }
            else if (nextAction.type === "look_costume_change") {
                setCostume(!costume)
            }
            else if (nextAction.type === "toggle") {
                setToggleSprite(!toggleSprite)
            } else if (nextAction.type === "scale#sprite") {
                scaleUpSprite(nextAction.scale);
            } else if (nextAction.type === "reset#sprite") {
                scaleUpSprite(nextAction.scale, "reset");
            }

            setActionQueue([...actionQueue]);
        }
    };
    // console.log('costume:############***********************************************', costume)
    useEffect(() => {
        window.addEventListener('execute-action', handleAction);
        return () => {
            window.removeEventListener('execute-action', handleAction);
        };
    }, []);


    const handleDragStart = () => {
        setZIndex(1000);
    };

    const handleDragStop = () => {
        setZIndex(1);
    };
    useEffect(() => {
        processNextAction(); // Process any actions that are added to the queue//
        // console.log('actionQueue:-----------------------------------', actionQueue);    
    }, [actionQueue]);

    return {
        msg, messageRef, thinkMsg, toggleSprite, handleDragStart, handleDragStop, costume,spriteRef
    }
}
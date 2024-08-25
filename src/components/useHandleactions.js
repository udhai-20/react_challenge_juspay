import { useState } from "react";

export const useHandleActions = () => {
    const [items, setItems] = useState([]);
    const [groups, setGroups] = useState([]);
    const handleDrop = (item) => {
        //   console.log('item:-------77777', item);
        setItems((prevItems) => [...prevItems, item]);
    };
    // console.log('items:', items);
    const handleTrigger = (action) => {
        const event = new CustomEvent('execute-action', { detail: action });
        window.dispatchEvent(event);     
    }
    const handleImmediateAction = (action) => {
        handleTrigger(action);
    };
    const runActions = (items) => {
        // console.log('items:------------------11111', items);
        items?.forEach((action) => {
            handleTrigger(action);
        });
    };
    const handleRunGroup = (groupIndex) => {
        // console.log('groupIndex:', groupIndex);
        const group = groups[groupIndex];
        // console.log('group:', group);
        if (group?.items?.length) {
            runActions(group?.items);
        }
    };
    const handleSidebarAction = () => {
        // loop through all groups and run the actions in each group //    
        if (items?.length) {
            runActions(items)
        } else if (groups?.length) {
            groups.forEach((group, index) => {
                handleRunGroup(index);
            });
        } else {
            alert("Select Actions")
        }
    };

    return { handleDrop, handleImmediateAction, handleSidebarAction, handleDrop, items, groups, setItems, setGroups, handleRunGroup }
}
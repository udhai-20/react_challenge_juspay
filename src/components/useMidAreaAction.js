import { useDrop } from "react-dnd";
import React from 'react';
export const useModAreaActions = ({ onDrop, setItems, runActions, setGroups, groups }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'ITEM',
        drop: (item, monitor) => {
            // console.log('item:', item);
            const dropPosition = monitor.getClientOffset();
            const getGroupIndex = groups.findIndex((grp) => {
                const getGrpElem = document.getElementById(`group-${grp.index}`)
                if (getGrpElem) {
                    const rect = getGrpElem.getBoundingClientRect();
                    return (
                        dropPosition.x >= rect.left &&
                        dropPosition.x <= rect.right &&
                        dropPosition.y >= rect.top &&
                        dropPosition.y <= rect.bottom
                    );
                }
                return false;
            })
            if (getGroupIndex !== -1) {
                const newGrp = [...groups];
                newGrp[getGroupIndex].items.push(item);
                setGroups(newGrp);

            } else {
                const newGrp = {
                    index: groups.length,
                    items: [item]
                }
                setGroups([...groups, newGrp]);
            }
            console.log('dropPosition:', dropPosition)

            onDrop(item);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    const handleClearActions = () => {
        alert("All previously selected actions have been cleared. Confirm?");
        setItems([]);
        setGroups([]);
    }
    const handleRunGroup = (groupIndex) => {
        const group = groups[groupIndex];
        console.log('group:', group)
        if (group?.items?.length) {
            runActions(group?.index);
        }
    };

    return {
        handleClearActions, handleRunGroup, isOver, drop
    }
}
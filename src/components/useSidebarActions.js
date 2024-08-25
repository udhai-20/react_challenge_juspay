import { useDrop } from "react-dnd";
import React from "react";
export const useSidebarAction = ({ onDrop, handleImmediateAction, setGroups, setItems, items, groups }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'ITEM',
        drop: (item) => {
            if (item.itemIndex !== undefined) {
                const newItems = [...items];
                newItems.splice(item.itemIndex, 1);
                setItems(newItems);
            } else {
                const newGroups = [...groups];
                newGroups[item.groupIndex].items.splice(item.itemIndex, 1);
                if (newGroups[item.groupIndex].items.length === 0) {
                    newGroups.splice(item.groupIndex, 1);
                    newGroups.forEach((group, index) => {
                        group.index = index;
                    });
                };
                setGroups(newGroups);
            }

        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });
    const handleActions = (item) => {
        handleImmediateAction(item)
        onDrop(item);
    }

    return {
        handleActions, isOver, drop
    }
}
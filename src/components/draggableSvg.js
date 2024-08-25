import { useDrag } from "react-dnd";
import React from "react";
export const DraggableSvg=({src,id,props})=>{
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'SVG',
        item: { id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
      return (
        <svg
          ref={drag}
          id={id}
          style={{ opacity: isDragging ? 0.5 : 1 ,cursor:"pointer"}}
          {...props}
        >
          {src}
        </svg>
      );
}
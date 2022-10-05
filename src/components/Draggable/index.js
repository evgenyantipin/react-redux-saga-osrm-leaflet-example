import React from "react";

const Draggable = ({ resizableRef }) => {
  const [initialPos, setInitialPos] = React.useState(null);
  const [initialSize, setInitialSize] = React.useState(null);

  const handleDragStart = (e) => {
    if (resizableRef?.current) {
      setInitialPos(e.clientX);
      setInitialSize(resizableRef.current.offsetWidth);
    }
  };

  const handleDrag = (e) => {
    if (resizableRef?.current) {
      resizableRef.current.style.width = `${
        parseInt(initialSize) + parseInt(e.clientX - initialPos)
      }px`;
      resizableRef.current.style.minWidth = `${
        parseInt(initialSize) + parseInt(e.clientX - initialPos)
      }px`;
      resizableRef.current.style.maxWidth = `${
        parseInt(initialSize) + parseInt(e.clientX - initialPos)
      }px`;
    }
  };
  return (
    <div
      className="Draggable"
      draggable="true"
      onDragStart={handleDragStart}
      onDrag={handleDrag}
    />
  );
};

export default Draggable;

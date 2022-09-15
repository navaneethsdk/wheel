import React from "react";

const Note = ({ note, setSelectedNote, setShowEditNote }) => {
  const handleClick = () => {
    setSelectedNote(note);
    setShowEditNote(true);
  };
  return (
    <div
      className="order-none box-border flex h-40 w-[200em] min-w-full flex-none flex-grow-0 flex-col items-start self-stretch rounded-sm border border-solid border-[#d8dcde] bg-white p-4 shadow-[0_1px_4px_-1px_rgba(28,48,74,0.12)]"
      onClick={handleClick}
    >
      {note.title} <br /> {note.description}
    </div>
  );
};

export default Note;

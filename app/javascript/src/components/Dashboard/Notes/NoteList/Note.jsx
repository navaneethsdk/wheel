import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Avatar, Tooltip, Tag } from "@bigbinary/neetoui";

import DropDownNote from "./DropDownNote";

const Note = ({
  note,
  setSelectedDeleteNoteIds,
  setSelectedNote,
  setShowEditNote,
  setShowDeleteAlert,
}) => {
  const handleEditClick = () => {
    setSelectedNote(note);
    setShowEditNote(true);
  };
  const handleDeleteClick = () => {
    setSelectedDeleteNoteIds([note.id]);
    setShowDeleteAlert(true);
  };
  return (
    <div className="notes-font order-none mb-4 box-border flex h-40 flex-none flex-grow-0 flex-col items-start self-stretch rounded-sm border border-solid border-[#d8dcde] bg-white p-4 shadow-[0_1px_4px_-1px_rgba(28,48,74,0.12)]">
      <div className="border-b pb-3">
        <div className="flex w-323 flex-row" id="title-menu">
          <div className="order-none flex h-6 w-318 flex-none flex-grow-0 items-center self-stretch text-base font-semibold not-italic leading-6 text-gray-800">
            {note.title}
          </div>
          <div id="menu">
            <DropDownNote
              handleDeleteClick={handleDeleteClick}
              handleEditClick={handleEditClick}
            />
          </div>
        </div>
        <div className="order-1 flex h-10 w-323 flex-none flex-grow-0 items-center self-stretch text-sm font-normal not-italic leading-5 text-gray-600">
          {note.description}
        </div>
      </div>
      <div className="order-1 mt-3 mb-4 flex h-6 flex-none flex-grow-0 flex-row items-center self-stretch p-0">
        <div className="order-none flex h-5 flex-none flex-grow flex-col items-start p-0">
          <Tag
            className="bg-gray-100 text-gray-600"
            label="Getting Started"
            size="small"
            style="primary"
            type="solid"
          />
        </div>
        <div className="order-1 flex h-6 w-40 flex-none flex-grow-0 flex-row items-center p-0">
          <div className="order-none flex h-4 w-32 flex-none flex-grow-0 flex-row items-center p-0">
            <Clock
              className="order-none mr-1.5 h-3 w-3 flex-none flex-grow-0"
              color="#68737D"
              size={16}
            />
            <Tooltip content="Wednesday, 10:30PM" position="bottom">
              <p className="order-1 flex h-4 w-32 flex-none flex-grow-0 items-center text-right text-xs font-normal not-italic leading-4 text-gray-600">
                Drafted 2 hours ago
              </p>
            </Tooltip>
          </div>
          <Avatar
            size="small"
            user={{
              imageUrl: "https://i.pravatar.cc/300",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;

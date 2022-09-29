import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tooltip, Tag } from "neetoui";

import DropdownWrapper from "./DropdownWrapper";

import { timeToTooltipContentFormat, findRelativeTime } from "../utils";

const Note = ({
  note,
  setNoteToBeDeleted,
  setNoteToBeEdited,
  setShowEditNote,
  setShowDeleteAlert,
}) => {
  const handleEdit = () => {
    setNoteToBeEdited(note);
    setShowEditNote(true);
  };
  const handleDelete = () => {
    setNoteToBeDeleted(note);
    setShowDeleteAlert(true);
  };

  return (
    <div className="notes-card order-none mb-4 box-border flex h-40 flex-none flex-grow-0 flex-col items-start self-stretch rounded-sm border border-solid bg-white p-4">
      <div className="border-b pb-3">
        <div className="flex flex-row" id="title-menu">
          <div className="w-title order-none flex h-6 flex-none flex-grow-0 items-center self-stretch text-base font-semibold not-italic leading-6 text-gray-800">
            {note.title}
          </div>
          <DropdownWrapper
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
        <div className="order-1 flex h-10 w-full flex-none flex-grow-0 items-center self-stretch text-sm font-normal not-italic leading-5 text-gray-600">
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
        <div className="order-1 flex h-6 flex-none flex-grow-0 flex-row items-center p-0">
          <div className="order-none flex h-4 flex-none flex-grow-0 flex-row items-center p-0">
            <Clock
              className="order-none mr-1.5 h-3 w-3 flex-none flex-grow-0"
              color="#68737D"
              size={16}
            />
            <Tooltip
              content={timeToTooltipContentFormat(note.createdAt)}
              position="bottom"
            >
              <p className="order-1 flex h-4 flex-none flex-grow-0 items-center text-right text-xs font-normal not-italic leading-4 text-gray-600">
                Created {findRelativeTime(note.createdAt)}
              </p>
            </Tooltip>
          </div>
          <Avatar
            className="ml-2"
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

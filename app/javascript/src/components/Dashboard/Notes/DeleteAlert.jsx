import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  noteToBeDeleted,
  setNoteToBeDeleted,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy({ ids: [noteToBeDeleted.id] });
      onClose();
      setNoteToBeDeleted({});
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      className="delete-alert"
      closeButton={false}
      isSubmitting={deleting}
      message={`Are you sure you want to continue deleting "${noteToBeDeleted.title}"? This cannot be undone.`}
      size="large"
      style="text"
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;

import React, { useState } from "react";

import { Alert } from "neetoui";

import contactApi from "apis/contact";

const DeleteAlert = ({
  refetch,
  onClose,
  contactToBeDeleted,
  setContactToBeDeleted,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await contactApi.destroy();
      onClose();
      setContactToBeDeleted({});
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
      message={`Are you sure you want to continue deleting "${contactToBeDeleted.name}"? This cannot be undone.`}
      size="large"
      style="text"
      title="Delete Contact"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;

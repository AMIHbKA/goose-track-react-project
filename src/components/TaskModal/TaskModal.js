import { Modal } from 'components';
import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';
import { useState } from 'react';

export const TaskModal = onShowModal => {
  return (
    <Modal onActive={onShowModal}>
      <AddOrEditTaskForm onActive={onShowModal} />
    </Modal>
  );
};

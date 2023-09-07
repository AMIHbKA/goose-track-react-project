import { Modal } from 'components';
import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';

export const TaskModal = onShowModal => {
  return (
    <Modal onActive={onShowModal}>
      <AddOrEditTaskForm onActive={onShowModal} />
    </Modal>
  );
};

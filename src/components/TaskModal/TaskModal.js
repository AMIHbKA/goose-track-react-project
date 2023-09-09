import { Modal } from 'components';
import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';

export const TaskModal = ({ isShow, ...props}) => {
  return (
    <>
      {isShow && (
        <Modal onActive={isShow}>
          <AddOrEditTaskForm onActive={isShow} {...props} />
        </Modal>
      )}
    </>
  );
};

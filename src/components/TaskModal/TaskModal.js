// import { AddTaskForm } from 'components/Forms/AddTaskForm/AddTaskForm'
import { Modal } from 'components';
import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';
import { useState } from 'react';

export const TaskModal = () => {
const [showModal, setShowModal] = useState(false);
const onShowModal = () => {
setShowModal(s => !s);
};

return (
    <>
    <button onClick={onShowModal}>Open Modal</button>
    {showModal && (
        <Modal onActive={onShowModal}>
          <AddOrEditTaskForm onActive={onShowModal}/>
        </Modal>
      )}
    
    </>
)
};
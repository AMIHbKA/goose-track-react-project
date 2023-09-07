import { PlusCircleIcon } from 'UI';
import {
  ColumnHeadBarContainer,
  ColumnHeadBarButtons,
} from './ColumnHeadBarStyled';
import { useTheme } from 'styled-components';
import { useMobile } from 'hooks';
import { useState } from 'react';
import { Modal } from 'components';
import { AddOrEditTaskForm } from 'components/Forms/AddOrEditTaskForm/AddOrEditTaskForm';

const ColumnHeadBar = ({ stage }) => {
  const {
    colors: { mainText },
  } = useTheme();

  const [showModal, setShowModal] = useState(false);

  const isMobile = useMobile();

  const onShowModal = () => {
    setShowModal(s => !s);
  };

  const status = stage.split(' ').join('-').toLowerCase()

  return (
    <ColumnHeadBarContainer>
      {stage}
      <ColumnHeadBarButtons onClick={onShowModal}>
        <PlusCircleIcon size={isMobile ? 22 : 24} stroke={mainText} />
      </ColumnHeadBarButtons>
      {showModal && (
            <Modal onActive={onShowModal} >
              <AddOrEditTaskForm
                onActive={onShowModal}
                option="add"
                // date={date}
                status={status}
                
              />
            </Modal>
          )}
    </ColumnHeadBarContainer>
  );
};

export default ColumnHeadBar;

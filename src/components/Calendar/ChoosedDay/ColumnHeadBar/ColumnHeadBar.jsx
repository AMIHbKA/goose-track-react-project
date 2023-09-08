import { PlusCircleIcon } from 'UI';
import {
  ColumnHeadBarContainer,
  ColumnHeadBarButtons,
} from './ColumnHeadBarStyled';
import { useTheme } from 'styled-components';
import { useMobile } from 'hooks';
import { useState } from 'react';
import { TaskModal } from 'components';

const ColumnHeadBar = ({ stage, status }) => {
  const {
    colors: { mainText },
  } = useTheme();

  const [isShow, setIsShow] = useState(false);

  const isMobile = useMobile();

  const onShowModal = () => {
    setIsShow(!isShow);
  };

  // const status = stage.split(' ').join('-').toLowerCase()

  return (
    <ColumnHeadBarContainer>
      {stage}
      <ColumnHeadBarButtons onClick={onShowModal}>
        <PlusCircleIcon size={isMobile ? 22 : 24} stroke={mainText} />
      </ColumnHeadBarButtons>
      {isShow && (
            <TaskModal isShow={onShowModal} 
            option="add"
            status={status} />
          )}
    </ColumnHeadBarContainer>
  );
};

export default ColumnHeadBar;

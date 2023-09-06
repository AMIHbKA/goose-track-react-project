import { PlusCircleIcon } from 'UI';
import {
  ColumnHeadBarContainer,
  ColumnHeadBarButtons,
} from './ColumnHeadBarStyled';
import { useTheme } from 'styled-components';
import { useMobile } from 'hooks';

const ColumnHeadBar = ({ stage }) => {
  const {
    colors: { mainText },
  } = useTheme();

  const isMobile = useMobile();

  return (
    <ColumnHeadBarContainer>
      {stage}
      <ColumnHeadBarButtons>
        <PlusCircleIcon size={isMobile ? 22 : 24} stroke={mainText} />
      </ColumnHeadBarButtons>
    </ColumnHeadBarContainer>
  );
};

export default ColumnHeadBar;

import { PlusCircleIcon } from 'UI';
import ColumnHeadBarStyled from './ColumnHeadBarStyled';
import { useTheme } from 'styled-components';
import { useMobile } from 'hooks';

const ColumnHeadBar = ({ stage }) => {
  const {
    colors: { mainText },
  } = useTheme();

  const isMobile = useMobile();

  return (
    <ColumnHeadBarStyled>
      {stage}
      <PlusCircleIcon size={isMobile ? 22 : 24} stroke={mainText} />
    </ColumnHeadBarStyled>
  );
};

export default ColumnHeadBar;

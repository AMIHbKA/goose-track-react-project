import { Modal } from 'components';
import { RefreshModalStyled } from './RefreshModalStyled';
import rocketGoose from '../../UI/images/Auth/RocketGoose_TransBG.gif';

export const RefreshModal = ({ onActive }) => {
  return (
    <Modal onActive={onActive} onEsc={false} btnClose={false}>
      {/* <RefreshModalStyled></RefreshModalStyled> */}
      <button>???</button>
      <img src={rocketGoose} alt="goose on the rocket" />
    </Modal>
  );
};

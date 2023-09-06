import { Modal } from 'components';
import { RefreshModalStyled } from './RefreshModalStyled';
import rocketGoose from '../../UI/images/Auth/RocketGoose_TransBG.gif';

export const RefreshModal = ({ onActive }) => {
  return (
    <Modal onActive={() => true} onEsc={false} btnClose={false}>
      <button>asdflkjasdf</button>
      <button>asdflkjasdf</button>
      <button>asdflkjasdf</button>
      <img src={rocketGoose} alt="goose on the rocket" />
    </Modal>
  );
};

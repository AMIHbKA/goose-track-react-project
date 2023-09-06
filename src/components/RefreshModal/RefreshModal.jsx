import { Modal } from 'components';
import rocketGoose from '../../UI/images/Auth/RocketGoose_TransBG.gif';

export const RefreshModal = ({ onActive }) => {
  return (
    <Modal onActive={() => true} onEsc={false} btnClose={false}>
      <img src={rocketGoose} alt="goose on the rocket" />
    </Modal>
  );
};

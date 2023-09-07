import { useRef } from 'react';
import Popup from 'reactjs-popup';
//

export const PopUpStateMenu = () => {
  const ref = useRef();
  const openTooltip = () => {
    ref.current.open();
    console.log('click');
  };
  const closeTooltip = () => {
    ref.current.close();
    console.log('click');
  };
  const toggleTooltip = () => {
    ref.current.toggle();
    console.log('click');
  };

  return (
    <div>
      <button type="button" className="button" onClick={openTooltip}>
        open
      </button>
      <button type="button" className="button" onClick={closeTooltip}>
        close
      </button>

      <button type="button" className="button" onClick={toggleTooltip}>
        toggle
      </button>
      <Popup
        ref={ref}
        trigger={
          <button type="button" className="button">
            I am the trigger
          </button>
        }
      >
        <div>
          <button>Somieb</button>
        </div>
      </Popup>
    </div>
  );
};

import { useRef } from 'react';
import Popup from 'reactjs-popup';
//

export const PopUpStateMenu = () => {
  const ref = useRef();
  const openTooltip = () => {
    ref.current.open();
  };
  const closeTooltip = () => {
    ref.current.close();
  };
  const toggleTooltip = () => {
    ref.current.toggle();
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

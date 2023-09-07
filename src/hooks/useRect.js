import { useState, useRef, useEffect } from 'react';
import { debounce } from 'utilities';

const useEffectInEvent = (event, update, debounceDelay) => {
  useEffect(() => {
    const handleResize = debounceDelay
      ? debounce(update, debounceDelay)
      : update;

    handleResize();

    window.addEventListener(event, handleResize);

    return () => {
      window.removeEventListener(event, handleResize);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useRect = (
  event = 'resize',
  debounceDelay = 0,
  updateDelay = 0
) => {
  const [rect, setRect] = useState({ height: 0, width: 0, x: 0, y: 0 });

  const ref = useRef(null);

  const update = () => {
    if (updateDelay) {
      setTimeout(set, updateDelay);
    } else {
      set();
    }
  };

  const set = () => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) {
      return;
    }

    setRect({
      height: rect.height,
      width: rect.width,
      x: rect.x,
      y: rect.y,
    });
  };

  useEffectInEvent(event, update, debounceDelay);

  return [rect, ref];
};

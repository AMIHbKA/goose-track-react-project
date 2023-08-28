import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { BurgerMenuStyled, Overlay } from './BurgerMenu.styled';

export const BurgerMenu = ({ ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { onActive, children } = props;

  const handleClick = event => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      props.onActive();
    }
  };

  useEffect(() => {
    const onEscKey = event => {
      if (event.code !== 'Escape') {
        return;
      }

      onActive();
    };

    document.addEventListener('keydown', onEscKey);
    document.documentElement.style.overflowY = 'hidden';
    setTimeout(() => {
      setIsOpen(true);
    }, 100);

    return () => {
      document.removeEventListener('keydown', onEscKey);
      document.documentElement.style.overflowY = 'auto';
    };
  }, [onActive]);

  const menuClassName = isOpen ? 'menu-open' : 'menu-closed';
  return createPortal(
    <Overlay
      onClick={handleClick}
      className={menuClassName}
      $backdrop={props.backdrop}
    >
      <BurgerMenuStyled className={menuClassName}>{children}</BurgerMenuStyled>
    </Overlay>,
    document.body
  );
};

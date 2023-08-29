import { useEffect, useState } from 'react';

import { MenuIcon, MoonIcon, SunIcon } from 'UI';
import { Modal } from 'components';
import {
  FeedBackButtonStyled,
  Header,
  HeaderPanel,
  IconsButton,
  MenuIconStyled,
  UserInfo,
  UserName,
  UserPanel,
  UserPhoto,
} from './HeaderLayoutStyled';
import { BurgerMenuPanel } from 'components/BurgerMenuPanel/BurgerMenuPanel';

export const HeaderLayout = ({ currentTheme, switchTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);
  const showBurgerMenu = () => {
    setBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };
  const onShowModal = () => {
    setShowModal(s => !s);
  };

  useEffect(() => {
    // Обработчик события изменения размера окна
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Добавляем обработчик события при монтировании компонента
    window.addEventListener('resize', handleResize);

    // Убираем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header>
        {isBurgerMenuOpen && (
          <BurgerMenuPanel closeBurgerMenu={closeBurgerMenu} />
        )}
        <HeaderPanel>
          <MenuIconStyled onClick={showBurgerMenu}>
            {
              <MenuIcon
                size={24}
                stroke={currentTheme === 'light' ? '#343434' : 'white'}
              />
            }
          </MenuIconStyled>

          <UserPanel>
            <FeedBackButtonStyled
              padonShowModal={onShowModal}
              boxShadow={false}
            >
              Feedback
            </FeedBackButtonStyled>
            {showModal && (
              <Modal onActive={onShowModal}>
                <div
                  style={{
                    height: 250,
                    aspectRatio: 4 / 3,
                    border: '1px solid black',
                    borderRadius: 5,
                  }}
                >
                  Modalka
                </div>
              </Modal>
            )}
            <UserInfo>
              <IconsButton onClick={switchTheme} aria-label="Switch Theme">
                {currentTheme === 'light' ? (
                  <MoonIcon size={24} />
                ) : (
                  <SunIcon size={24} />
                )}
              </IconsButton>
              <UserName>UserName</UserName>
              <UserPhoto />
            </UserInfo>
          </UserPanel>
        </HeaderPanel>
      </Header>
    </>
  );
};

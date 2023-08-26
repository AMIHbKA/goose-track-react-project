import { Suspense, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { MenuIcon, MoonIcon, SunIcon } from 'UI';
import { Container, Modal } from 'components';
import { Button, Header, IconsButton, UserInfo } from './Layout.styled';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { CloseButton } from 'components/BurgerMenu/BurgerMenu.styled';

export const Layout = ({ currentTheme, switchTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const showBurgerMenu = () => {
    console.log('click showBurgerMenu');
    setBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    console.log(isBurgerMenuOpen);
    setBurgerMenuOpen(false);
  };
  const onShowModal = () => {
    setShowModal(s => !s);
  };

  return (
    <>
      <Header>
        {isBurgerMenuOpen && (
          <BurgerMenu onActive={closeBurgerMenu}>
            <div
              style={{
                display: 'flex',
                gap: 25,
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 64,
              }}
            >
              <div style={{ display: 'flex' }}>
                <p>logo</p>
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    lineHeight: 1.375,
                    color: '#3E85F3',
                    textShadow:
                      '0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07)',
                  }}
                >
                  GooseTrack
                </p>
              </div>
              <CloseButton size="24" type="button" onClick={closeBurgerMenu} />
            </div>
            <p style={{ marginBottom: 24 }}>User Panel</p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <Link to="/account" onClick={closeBurgerMenu}>
                Account Page
              </Link>
              <Link to="/calendar" onClick={closeBurgerMenu}>
                Calendar Page
              </Link>
              <Link to="/statistics" onClick={closeBurgerMenu}>
                Statistics Page
              </Link>
            </nav>
          </BurgerMenu>
        )}
        <div
          style={{
            display: 'flex',
            gap: 24,
            justifyContent: 'space-between',
            width: '100%',
            outline: '2px solid purple',
          }}
        >
          <IconsButton onClick={showBurgerMenu}>
            {
              <MenuIcon
                size={24}
                stroke={currentTheme === 'light' ? '#343434' : 'white'}
              />
            }
          </IconsButton>
          <div style={{ display: 'flex', gap: 24 }}>
            <Button onClick={onShowModal}>Feedback</Button>
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
              <p>UserName</p>
              <div></div>
            </UserInfo>
          </div>
        </div>
      </Header>
      <main
        style={{
          paddingRight: 20,
          paddingLeft: 20,
          paddingBottom: 20,
        }}
      >
        <Container outline>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};

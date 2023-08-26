import { Suspense, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { MenuIcon, MoonIcon, SunIcon } from 'UI';
import { Container, Modal } from 'components';
import { Button, Header, IconsButton, UserInfo } from './Layout.styled';

export const Layout = ({ currentTheme, switchTheme }) => {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = () => {
    setShowModal(s => !s);
  };

  return (
    <>
      <Header>
        {/* <div>
          <div style={{ display: 'flex', gap: 20 }}>
            <p>logo</p>
            <p>GooseTrack</p>
          </div>
          <nav>
            <Link to="/account">Account Page</Link>
            <Link to="/calendar">Calendar Page</Link>
            <Link to="/statistics">Statistics Page</Link>
          </nav>
        </div> */}
        <div
          style={{
            display: 'flex',
            gap: 24,
            justifyContent: 'space-between',
            width: '100%',
            outline: '2px solid purple',
          }}
        >
          <IconsButton>
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
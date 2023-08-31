import { useState } from 'react';

import { MenuIcon, MoonIcon, SunIcon } from 'UI';
import { Modal } from 'components';
import {
  FeedBackButtonStyled,
  Header,
  HeaderPanel,
  IconsButton,
  MenuIconStyled,
  PageTitle,
  UserInfo,
  UserName,
  UserPanel,
  UserPhoto,
} from './HeaderLayoutStyled';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { MenuPanel } from 'components/MenuPanel/MenuPanel';
import { useWindowWidth } from 'hooks/useWindowWidth';
import { FeedbackModal } from './FeedbackModal/FeedbackModal';

export const HeaderLayout = ({ currentTheme, switchTheme, currentReview }) => {
  const [showModal, setShowModal] = useState(false);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();

  const showBurgerMenu = () => {
    setBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };
  const onShowModal = () => {
    console.log(1);
    setShowModal(s => !s);
  };

  const handleCancel = () => {
    setShowModal(s => !s);
  };

  return (
    <>
      <Header>
        {windowWidth < 1024 && isBurgerMenuOpen && (
          <BurgerMenu onActive={closeBurgerMenu}>
            <MenuPanel closeBurgerMenu={closeBurgerMenu} />
          </BurgerMenu>
        )}

        <HeaderPanel>
          {windowWidth >= 1024 && <PageTitle>Page Title</PageTitle>}
          {windowWidth < 1024 && (
            <MenuIconStyled onClick={showBurgerMenu}>
              {
                <MenuIcon
                  size={24}
                  stroke={currentTheme === 'light' ? '#343434' : 'white'}
                />
              }
            </MenuIconStyled>
          )}

          <UserPanel>
            <FeedBackButtonStyled onClick={onShowModal} boxShadow={false}>
              Feedback
            </FeedBackButtonStyled>
            {showModal && (
              <Modal onActive={onShowModal}>
                {/* <div
                  style={{
                    height: 250,
                    aspectRatio: 4 / 3,
                    border: '1px solid black',
                    borderRadius: 5,
                  }}
                > */}
                <FeedbackModal
                  ctheme={currentTheme}
                  onCancel={handleCancel}
                  initialReview={currentReview}
                />
                {/* </div> */}
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

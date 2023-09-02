import { useState } from 'react';

import { MenuIcon } from 'UI';
import { Modal, ThemeToggler } from 'components';
import {
  FeedBackButtonStyled,
  Header,
  HeaderPanel,
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
                <FeedbackModal
                  ctheme={currentTheme}
                  onCancel={handleCancel}
                  initialReview={currentReview}
                />
              </Modal>
            )}
            <UserInfo>
              <ThemeToggler />
              <UserName>UserName</UserName>
              <UserPhoto />
            </UserInfo>
          </UserPanel>
        </HeaderPanel>
      </Header>
    </>
  );
};

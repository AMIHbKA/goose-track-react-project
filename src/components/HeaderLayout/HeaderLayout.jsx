import { useContext, useState } from 'react';

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
import { FeedbackModal } from './FeedbackModal/FeedbackModal';
import { useWindowSize } from 'hooks';
import { ThemeContext } from 'styled-components';

export const HeaderLayout = ({ currentTheme, currentReview }) => {
  const [showModal, setShowModal] = useState(false);
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const theme = useContext(ThemeContext);

  const showBurgerMenu = () => {
    setBurgerMenuOpen(true);
  };

  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };
  const onShowModal = () => {
    setShowModal(s => !s);
  };

  const handleCancel = () => {
    setShowModal(s => !s);
  };

  return (
    <>
      <Header>
        {width < 1024 && isBurgerMenuOpen && (
          <BurgerMenu onActive={closeBurgerMenu}>
            <MenuPanel closeBurgerMenu={closeBurgerMenu} />
          </BurgerMenu>
        )}

        <HeaderPanel>
          {width >= 1024 && <PageTitle>Page Title</PageTitle>}
          {width < 1024 && (
            <MenuIconStyled onClick={showBurgerMenu}>
              {<MenuIcon size={24} stroke={theme.colors.mainText} />}
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

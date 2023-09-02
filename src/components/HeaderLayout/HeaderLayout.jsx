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
import { MenuPanel } from 'components/MenuPanel/MenuPanel';
import { FeedbackModal } from './FeedbackModal/FeedbackModal';
import { useWindowSize } from 'hooks';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useTheme } from 'styled-components';

export const HeaderLayout = ({ currentTheme, currentReview }) => {
  const userName = useSelector(selectUser).userData?.name;
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const {
    breakpoints: { laptop },
    colors: { mainText },
  } = useTheme();
  const laptopValue = parseInt(laptop);

  const onShowMenu = () => {
    setIsMenuOpen(s => !s);
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
        {width < laptopValue && (
          <MobileMenu onClose={onShowMenu} isOpen={isMenuOpen}>
            <MenuPanel closeBurgerMenu={onShowMenu} />
          </MobileMenu>
        )}

        <HeaderPanel>
          {width >= laptopValue && <PageTitle>Page Title</PageTitle>}
          {width < laptopValue && (
            <MenuIconStyled onClick={onShowMenu}>
              {<MenuIcon size={24} stroke={mainText} />}
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
              <UserName>{userName && userName}</UserName>
              <UserPhoto />
            </UserInfo>
          </UserPanel>
        </HeaderPanel>
      </Header>
    </>
  );
};

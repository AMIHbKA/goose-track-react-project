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
import { useLocation } from 'react-router';
import { LanguageButton } from 'components/LanguageButton/LanguageButton';
import { useTranslation } from 'react-i18next';

export const HeaderLayout = ({ currentTheme, currentReview }) => {
  const { t } = useTranslation();

  const { user, avatarUrl } = useSelector(selectUser);
  const currentPage = useLocation().pathname;
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

  const pageTitle = currentPage => {
    if (currentPage.startsWith('/account')) {
      return 'User Profile';
    }

    if (currentPage.startsWith('/calendar')) {
      return 'Calendar';
    }

    if (currentPage.startsWith('/statistics')) {
      return 'Statistics';
    }

    return 'GooseTrack';
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
          {width >= laptopValue && (
            <PageTitle>{pageTitle(currentPage)}</PageTitle>
          )}
          {width < laptopValue && (
            <MenuIconStyled onClick={onShowMenu}>
              {<MenuIcon size={24} stroke={mainText} />}
            </MenuIconStyled>
          )}

          <UserPanel>
            <FeedBackButtonStyled onClick={onShowModal} boxShadow={false}>
              {t('headerLayout.feedbackButton')}
            </FeedBackButtonStyled>
            <LanguageButton />
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
              <UserName>{user}</UserName>
              <UserPhoto>
                <img src={avatarUrl} alt="user avatar" />
              </UserPhoto>
            </UserInfo>
          </UserPanel>
        </HeaderPanel>
      </Header>
    </>
  );
};

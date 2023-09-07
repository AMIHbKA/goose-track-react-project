import React from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleButton } from './LanguageButton.styled';
import '../../i18n';

export const LanguageButton = () => {
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);

    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <div>
      {localStorage.getItem('i18nextLng') === 'en' && (
        <ToggleButton type="button" onClick={() => changeLanguage('uk')}>
          UA
        </ToggleButton>
      )}
      {localStorage.getItem('i18nextLng') === 'uk' && (
        <ToggleButton type="button" onClick={() => changeLanguage('en')}>
          EN
        </ToggleButton>
      )}
    </div>
  );
};

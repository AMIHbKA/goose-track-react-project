import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ToggleButton } from './LanguageButton.styled';
import '../../i18n';

export const LanguageButton = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <div>
      {selectedLanguage === 'en' && (
        <ToggleButton type="button" onClick={() => changeLanguage('uk')}>
          Українська
        </ToggleButton>
      )}
      {selectedLanguage === 'uk' && (
        <ToggleButton type="button" onClick={() => changeLanguage('en')}>
          English
        </ToggleButton>
      )}
    </div>
  );
};

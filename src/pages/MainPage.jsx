import { Modal } from 'components';
import { FeedbackModal } from 'components/HeaderLayout/FeedbackModal/FeedbackModal';
import { AuthSection, Description, ReviewSlider } from 'components/Main';
import React from 'react';

export const MainPage = () => {
  return (
    <>
      <AuthSection />
      {/* <Modal>
        <FeedbackModal />
      </Modal> */}
      <Description />
      <ReviewSlider />
    </>
  );
};

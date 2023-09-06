import React, { useRef, useState } from 'react';
import {
  Img,
  Input,
  Label,
  Wrap,
  MainWrapper,
  AddIcon,
} from 'components/AvatarUploader/AvatarUploader.styled';

export const AvatarUploader = ({ imageUrl, setAvatar }) => {
  const [imagePreview, setImagePreview] = useState(imageUrl || '');

  // console.log('imageUrl', imageUrl);

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    setAvatar('avatar', selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
    // setFileImage(selectedFile);
  };

  return (
    <MainWrapper>
      <Wrap>
        <Img src={imagePreview || imageUrl} alt="Avatar Preview" />
      </Wrap>

      <Label htmlFor="add-image">
        <AddIcon />
      </Label>
      <Input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        id="add-image"
        name="avatar"
        // ref={avatarFileRef}
      />
    </MainWrapper>
  );
};

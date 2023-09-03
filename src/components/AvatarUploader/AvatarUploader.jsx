import React, { useState } from 'react';
import { Img, Input, Label, Wrap, MainWrapper, AddIcon } from 'components/AvatarUploader/AvatarUploader.styled';

export const AvatarUploader = ({ imageUrl, setFileImage }) => {
    const [imagePreview, setImagePreview] = useState(imageUrl || '');

  const handleImageChange = e => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) {
      return;
    }

    const imageUrl = URL.createObjectURL(selectedFile);

    setImagePreview(imageUrl);
    setFileImage(selectedFile);
  };

  return (
    <MainWrapper>
      <Wrap>
        <Img src={imagePreview} alt="Avatar Preview" />
      </Wrap>

      <Input
        type="file"
        onChange={handleImageChange}
        accept="image/*"
        id="add-image"
        name="avatar"
      />
      <Label htmlFor="add-image">
        <AddIcon />
      </Label>
    </MainWrapper>
  );
};
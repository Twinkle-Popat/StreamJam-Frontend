import React from 'react'

const ValidateAvatarURL = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;

  return regex.test(url);
}

export const avatarURLValidationMessage = "Avatar URL must be a valid URL."

export default ValidateAvatarURL
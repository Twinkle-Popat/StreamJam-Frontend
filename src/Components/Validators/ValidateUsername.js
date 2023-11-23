import React from 'react'

const ValidateUsername = (username) => {
 //valid if 3 to 8 characters with no space
  const regex = /^\S{3,8}$/;
  return regex.test(username);
}
 export default ValidateUsername

export const validusernamemessage = "Username must be 3 to 8 characters with no space";
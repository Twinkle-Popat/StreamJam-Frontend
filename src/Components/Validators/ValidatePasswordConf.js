import React from 'react'

export const ValidatePasswordConf = (pass,confpass) => {
  return pass === confpass;
}

export const validpasswordconfmessage = "Password and confirm password must match";
import React from 'react'

export const ValidatePassword = (password) => {
    
    const regex = /^\S{6,12}$/;
    return regex.test(password);
}

export const validpasswordmessage = "Password must be 6 to 12 characters with no space";
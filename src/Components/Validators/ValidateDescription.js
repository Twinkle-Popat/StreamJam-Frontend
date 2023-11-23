import React from 'react'

const ValidateDescription = (description) => {
  return description.length>=3 && description.length<=200;
}

export const descriptionValidationMessage = "Description must be between 3 and 200 characters long."

export default ValidateDescription
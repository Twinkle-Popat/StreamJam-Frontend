
export const ValidateEmail = (email) => {
  const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}

export const validemailmessage = "Email must be valid";

const getPasswordRandom = (length: number):string => {
  const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = '';

  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random()*characters.length));
  }

  return password.substring(0, length);
}

export default getPasswordRandom
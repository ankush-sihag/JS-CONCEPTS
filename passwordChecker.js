// const password = "Hello123";

// const hasUpperCase = /[A-Z]/.test(password);

// const hasLowerCase = /[a-z]/.test(password);

// const hasNumber = /[0-9]/.test(password);

// if (
//   password.length >= 8 &&
//   hasUpperCase &&
//   hasLowerCase &&
//   hasNumber
// ) {
//   console.log("Strong Password");
// } else {
//   console.log("Weak Password");
// }

// console.log(password.length);

const password = "AnkushSihag28";

const hasUppercase = /[A-Z]/.test(password);

const hasLowercase = /[a-z]/.test(password);

const hasNumber = /[0-9]/.test(password);

if (
  password.length>=9 &&
  hasUppercase&&
  hasLowercase&&
  hasNumber
) {
  console.log('Good Password')
} else {
  console.log('Week Password')
};
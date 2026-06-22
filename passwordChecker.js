const password = "Hello123";

const hasUpperCase = /[A-Z]/.test(password);

const hasLowerCase = /[a-z]/.test(password);

const hasNumber = /[0-9]/.test(password);

if (
  password.length >= 8 &&
  hasUpperCase &&
  hasLowerCase &&
  hasNumber
) {
  console.log("Strong Password");
} else {
  console.log("Weak Password");
}

console.log(password.length);
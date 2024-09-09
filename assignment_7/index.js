let emailId = "psakari123@gmail.com";

// Solution 1

function protectEmail(email) {
  let secureEmail = "";
  let arr = email.split("@");
  secureEmail = arr[0].substring(0, arr[0].length / 2) + "...@" + arr[1];

  return secureEmail;
}

const protectedEmail = protectEmail(emailId);
console.log(protectedEmail);

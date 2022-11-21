
function auth(_username, _password) {
  let correctUsername = "student@mail.com";
  let correctPassword = "discovery";

  return _username === correctUsername && _password === correctPassword;
}

function main(_numAttempts) {
  let ctrAttempts = _numAttempts;
  let flagOk = false;
  do {
    let username = prompt("Enter a username or email");
    let password = prompt("Enter a password");

    if (auth(username, password)) {
      flagOk = true;

      alert(`Successfully login.`);
    } else {
      ctrAttempts -= 1;

      alert(`Login failed. You now have ${ctrAttempts} attempts left.`);
    }
  } while (ctrAttempts > 0 && !flagOk);

}

let attempts = 3;
main(attempts);

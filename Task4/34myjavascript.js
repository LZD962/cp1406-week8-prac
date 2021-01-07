let message = "Hello!";
alert(message);
message = "What is your name";
let userName = prompt(message);
alert("You said: " + userName);

if (userName.length < 2) {
  userName = prompt("Please enter a user name that has more than one letter.");

  while (userName.length < 2){
    userName = prompt("Please enter a user name that has more than one letter.");
  }

  if (userName.length < 2){
    alert("I see you are using an initial");
  }
  else{
    alert("Your userName is now updated");
  }
}
else{
  alert("Your username was accepted on the first try!");
}

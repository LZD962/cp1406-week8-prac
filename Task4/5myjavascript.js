let message = "Hello!";
alert(message);
message = "What is your father's name";
let userName = prompt(message);
alert("Your father's name is: " + userName);

if (userName.length < 2) {
  userName = prompt("Please enter a name that has more than one letter.");

  while (userName.length < 2){
    userName = prompt("Please enter a name that has more than one letter.");
  }

  if (userName.length < 2){
    alert("I see you are using an initial");
  }
  else{
    alert("Your father's name is now updated");
  }
}
else{
  alert("Your father's name was accepted on the first try!");
}



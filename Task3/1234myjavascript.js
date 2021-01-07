let message = "Hello!";
alert(message);
message = "What is your name";
let userName = prompt(message);
alert("You said: " + userName);

if (userName.length < 2) {
  userName = prompt("Please enter a user name that has more than one letter.");
  alert("This time You entered: " + userName);
}
else{
  alert("Your username was accepted on the first try!");
}

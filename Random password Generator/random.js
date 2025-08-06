const passwordbox = document.getElementById("password");
const length = 12;

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+";

const allchars = uppercase + lowercase + numbers + symbols;

function createpassword(){
  let password = "";
  password += uppercase[Math.floor(Math.random()*uppercase.length)];
  password += lowercase[Math.floor(Math.random()*lowercase.length)];
  password += numbers[Math.floor(Math.random()*numbers.length)];
  password += symbols[Math.floor(Math.random()*symbols.length)];

  while(length > password.length){
    password += allchars[Math.floor(Math.random()*allchars.length)];
  }
  passwordbox.value = password;
}

function copy(){
  passwordbox.select();
  document.execCommand("copy");
  
}
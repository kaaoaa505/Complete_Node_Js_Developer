function findUser(user) {
  return `User found: ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: "Khaled",
  lastName: "Allam",
};

const user = findUser(userData);

/*
After some time when the function is called repeatedly, 
V8 engine assume or act smart and just equals the repeated function calls 
to what the function returns 
to save time and improve the efficiency or speed.
*/
for (let index = 0; index < 1000000; index++) {
  console.log(user);
}

/* Exercise 1: Dynamic Array Mapping
Exercise
You have an array of user objects where each user has firstName and lastName properties. Write a function that generates an array of full names (e.g., ["John Doe", "Jane Smith"]). */

//REFACTOR THE CODE BELOW
const users = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jane', lastName: 'Smith' },
];

/* const fullNames = [];
for (let i = 0; i < users.length; i++) {
  fullNames.push(`${users[i].firstName} ${users[i].lastName}`);
} */

  const generateFullNames = (users) => {
    return users.map(user => `${user.firstName} ${user.lastName}`);
  };
  
  export default generateFullNames;
  
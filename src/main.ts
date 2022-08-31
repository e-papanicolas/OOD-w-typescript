class Human {
  fullName: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public favoriteColor: string
  ) {
    this.fullName = `${firstName} ${lastName}`;
    this.favoriteColor = favoriteColor;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function helloWorld(person: Person) {
  return `Hello ${person.firstName}`;
}

let user = { firstName: 'Eleni', lastName: 'Papanicolas' };

console.log(helloWorld(user));

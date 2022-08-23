// Object.defineProprty()  =>

const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN",
    writable: false,
  };

  Object.defineProperty(person, "year", {
      value:"2008",
      writable:true,
    })
  person.year='2022'
  console.log(person.year);

// console.log(person.firstName);

// false=> it wont change it will keep 2008 as it is
// true=>  it will change 2008 to 2022
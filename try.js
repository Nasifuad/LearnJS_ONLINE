const student = [
  { name: "nasif fuad", age: 24, school: "SMA" },
  { name: "ABS", age: 30, school: "JJS" },
  { name: "ABS", age: 20, school: "JJS" },
  { name: "ABS", age: 40, school: "JJS" },
  { name: "ABS", age: 33, school: "JJS" },
  { name: "ABS", age: 31, school: "JJS" },
];

const id = student.map((s) => s.name);
const ids = student.filter((s) => s.age < 40);
console.log(ids);

const students = {
  name: "nasif",
  age: 24,
  school: "SMA",
};
const ToJson = JSON.stringify(students);
console.log(ToJson);

const blah = {
  name: "nasif",
  age: 24,
  salary: 25000,
  fullname: function () {
    console.log(this.name, this.age);
  },
  cost: function (cost) {
    this.salary = this.salary - cost;
  },
};
blah.cost(1999);
blah.cost(1999);
blah.cost(1999);
blah.cost(1999);
console.log(blah);

function Post_Method(postInfo) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const newobj = {
    title: "ASUS",
    body: "A super fast computer",
    id: 301192093941
}
    
Post_Method(newobj)

 let users = [{ name: "Dima", age: 25}, { name: "Katy", age: 19}, { name: "Artem", age: 35},];
 console.log("Перед изменением:");

 for (let user of users)
 {
    console.log(user.name);
 }

 for (let user of users)
 {
    user.age +=1;
 }
 console.log("После изменения:");

 for (let user of users)
 {
    console.log(`${user.name} теперь ${user.age} лет`);
 }
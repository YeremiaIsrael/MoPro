let people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i <= numbers.length; i++) {
       console.log(numbers[i]);
}
people.forEach(item=>console.log(item))
people.shift()
people.pop()
people.unshift('Matt')
people('angge')
for(i = 0; i< people.length;i++){
    if(people[i]===”Mary”){
      break;
    }
}
people.slice(2)
people.slice(2,1, "Elizabeth", "Arite");
const withBob = people.concat("Bob");
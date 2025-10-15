//part one 
var numArray = []
for (var i =0 ; i<11; i++){
    numArray.push(i);
}
console.log (numArray);

var numArray = []
for (var i = 1 ; i<11; i++){
    numArray.push(i);
}
console.log (numArray);


var numArray = [1,2,3]
for (var i =1 ; i<11; i++){
    numArray.push(3);
}
console.log (numArray);

var numArray = [1,2,3]
for (var i = 0 ; i<11; i= i+1){
    numArray.push(3);
}
console.log (numArray);

var numArray = [1,2]
for (var i = 0 ; i<11; i= i+1){
    numArray.push(2);
}
console.log (numArray);

var numArray = [1,2]
for (var i =1 ; i<11; i++){
    numArray.push(2);

//parttwo
var friends = ["Christina", "Monica","Rachel", "Braedon", "Matthew", "Jeorgia", "Trinity","Alex","Samantha","Dexter"];
console.log(friends);
var duck = [ "Zen","Shade","Blade"]
friends[8]= duck[2];
friends[9]= duck[1];
friends[7]= duck[0];

console.log(friends);
console.log(friends.length);
console.log(friends.sort());
console.log(friends.toString());
}

//partthree
var si= ["pencil", "paper", "pen", "scissors","laptop","markers", "crayons","waterbottle", "backpack", "lunchbox"];
console.log(si);
console.log(si.length);
console.log(si.split(""))

si.pop();
console.log(si);
console.log(si.length);

si.push("notebook");
console.log(si);
console.log(si.length);

si.shift();
console.log(si);
console.log(si.length);

si.unshift("eraser")
console.log(si);
console.log(si.length);

//partfour
var hi = []
console.log(hi);
// empty array
for (var i =0 ; i<11; i++){
    hi.push(i);
}
console.log(hi);
console.log(hi.length);
// first loop

for (var i =0 ; i<11; i++){
    hi[i] = "hello";
}
console.log(hi);
// second loop

for (var i = 10 ; i > -1; i--){
//   hi.pop();
    hi.shift("")
    hi.push("-")
}
console.log(hi);
console.log(hi.toString());
// third loop


(numArray);

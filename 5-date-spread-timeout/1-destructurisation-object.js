const obj = {
    username: "user1",
    age: 30, 
    sex: "male"
};

const {username, age, sex} = obj;
console.log(username);
console.log(age);
console.log(sex);

const {heigth = 200, weight = 100, gender} = {gender: "helicopter"};

console.log(weight);
console.log(heigth);
console.log(gender);

const {weight: w, heigth: h, gender:g } = {weight: 100, heigth: 200, gender: "helicopter"};
console.log(w);
console.log(h);
console.log(g);
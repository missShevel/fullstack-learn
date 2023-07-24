const arr1 = ['Apple', 'Cat', 'Banana', 'Orange'];
const arr2 = ['Apple', 'Cat', 'Banana', 'Orange'];
const arr3 = ['Apple', 'Cat', 'Banana', 'Orange'];

arr1.splice(1);
console.log(arr1);

arr2.splice(1, 1);
console.log(arr2);

arr3.splice(1, 1, 'Milk', 'Kiwi', 'Чисник');
console.log(arr3);

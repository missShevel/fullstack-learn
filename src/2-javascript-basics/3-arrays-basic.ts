const myList: Array<string> = ['Apple', 'Cat', 'Banana', 'Orange']; /// ???
console.log(myList);

const removedElement = myList.pop()
console.log(myList);

if (removedElement) myList.unshift(removedElement);
console.log(myList);

myList.shift();
console.log(myList);

removedElement && myList.push(removedElement);
console.log(myList);

export {}
const arr: string[] = [
  "apple",
  "apple",
  "orange",
  "orange",
  "apple",
  "pear",
  "apple",
  "pear",
  "orange",
  "pear",
  "banana",
];

arr.sort();
type Comparator = (el: string) => boolean;
const equalToFirstElement: Comparator = (el) => el === arr[0];

const result: { fruit: string; count: number }[] = [];
while (arr.length > 0) {
  const filteredPart = arr.filter(equalToFirstElement);
  result.push({
    fruit: filteredPart[0],
    count: filteredPart.length,
  });
  arr.splice(0, filteredPart.length);
}
result.sort((a, b) => b.count - a.count);

console.log(result);

export {};

const map = new Map();
map.set("banana", 1);
map.set("orange", 2);
map.set("kiwi", 5);

console.log(map.get("banana"));
console.log(map.get("apple"));

console.log(map.has("banana"));
console.log(map.has("apple"));

map.delete("kiwi");
console.log(map.size);
map.clear();
console.log(map);
const set: Set<string | object> = new Set(["tomato", "apple", "kiwi"]);

console.log(set);
set.add("orange");
set.add({ name: "Peter" });
console.log(set);

set.delete("tomato");
console.log(set.has("apple"));
console.log(set.has("Peter"));

set.clear();
console.log(set);

export {};

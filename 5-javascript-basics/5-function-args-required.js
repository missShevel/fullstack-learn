function printHello(name1, name2, ...names) {
    console.log("Welcome", name1);
    console.log("Goodbye", name2);
    names.forEach(name => console.log("Hello", name));
}

printHello("Mama", "Papa", "George", "Linda");

printHello("Pepa");
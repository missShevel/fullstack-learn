function printHello(name1: string, name2: string, ...names: string[]) {
    console.log("Welcome", name1);
    console.log("Goodbye", name2);
    names.forEach(name => console.log("Hello", name));
}

printHello("Mama", "Papa", "George", "Linda");

// printHello("Pepa");

export {}
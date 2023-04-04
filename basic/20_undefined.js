let name;
if (name === undefined) {
    console.info("UNDEFINED");
} else {
    console.info("DEFINED");
}

const names = ["SYAIFUL", "WULAN", "ABIZAR"];
if (names[3] == undefined) {
    console.info("ARRAY UNDEFINDED");
} else {
    console.info("ARRAY DEFINED");
}

const person = {};

if (person.name == undefined) {
    console.info("OBJECT UNDEFINED");
} else {
    /**
     * const person = {
     * name : "SYAIFUL",
     * }
     * */
    console.info("OBJECT DEFINED");
}
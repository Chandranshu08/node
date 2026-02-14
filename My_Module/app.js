const fs = require ("fs");
const command = process.argv[2];

if (command === "write") {
    fs.writeFile("data.txt", "Hello, World!", (err) => {
        if (err) return console.log("Error writing file:", err);
        console.log("File written successfully.");
    });
} else if (command === "read") {
    fs.readFile("data.txt", "utf8", (err, data) => {
        if (err) return console.log("Error reading file:", err);
        console.log("File contents:", data);
    });
}
else if (command === "append") {
    fs.appendFile("data.txt", "\nNew line added", (err) => {
        if (err) return console.log("Error appending file:", err);
        console.log("Data appended successfully.");
    });     
}
else if (command === "delete") {
    fs.unlink("data.txt", (err) => {
        if (err) return console.log("Error deleting file:", err);
        console.log("File deleted successfully.");
    });
} else {
    console.log("invalid command");
}
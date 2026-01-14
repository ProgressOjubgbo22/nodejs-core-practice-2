const fs = require("fs");

// ================= Create a directory =================
// fs.mkdir(path, callback)

fs.mkdir("myDirectory", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Directory created");
});

// ================= Check if directory exists =================
// fs.existsSync(path)

if (fs.existsSync("myDirectory")) {
    console.log("Directory exists");
}

// ================= Read directory contents =================
// fs.readdir(path, callback)

fs.readdir("myDirectory", (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Directory contents:", files);
});

// ================= Rename directory =================
// fs.rename(oldPath, newPath, callback)

fs.rename("myDirectory", "myDirectory2", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Directory renamed");
});

// ================= Directory information =================
// fs.stat(path, callback)

fs.stat("myDirectory2", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Stats:", stats);
    console.log("Is directory?", stats.isDirectory());
});

// ================= Delete directory =================
// fs.rmdir(path, callback) → works only if directory is empty

fs.rmdir("myDirectory2", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Directory deleted");
});

// If directory is not empty:
// fs.rm("myDirectory2", { recursive: true }, callback);

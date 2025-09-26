const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const folderPath = path.join(__dirname, "files");

// Ensure "files" folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

function menu() {
  console.log("\n===== TEXT FILE MANAGER =====");
  console.log("1. Create File");
  console.log("2. Read File");
  console.log("3. Append to File");
  console.log("4. Delete File");
  console.log("5. List All Files");
  console.log("6. Search Text in File");
  console.log("7. Rename File");
  console.log("8. Exit");

  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        rl.question("Enter file name: ", (file) => {
          rl.question("Enter content: ", (content) => {
            fs.writeFileSync(path.join(folderPath, file), content);
            console.log("File created successfully!");
            menu();
          });
        });
        break;

      case "2":
        rl.question("Enter file name: ", (file) => {
          const filePath = path.join(folderPath, file);
          if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, "utf8");
            console.log("\nFile Content:\n" + data);
          } else {
            console.log("File not found!");
          }
          menu();
        });
        break;

      case "3":
        rl.question("Enter file name: ", (file) => {
          const filePath = path.join(folderPath, file);
          if (fs.existsSync(filePath)) {
            rl.question("Enter text to append: ", (content) => {
              fs.appendFileSync(filePath, "\n" + content);
              console.log("File updated successfully!");
              menu();
            });
          } else {
            console.log("File not found!");
            menu();
          }
        });
        break;

      case "4":
        rl.question("Enter file name: ", (file) => {
          const filePath = path.join(folderPath, file);
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log("File deleted successfully!");
          } else {
            console.log("File not found!");
          }
          menu();
        });
        break;

      case "5":
        const files = fs.readdirSync(folderPath);
        if (files.length > 0) {
          console.log("\nFiles in folder:");
          files.forEach((f, i) => console.log(`${i + 1}. ${f}`));
        } else {
          console.log("No files found.");
        }
        menu();
        break;

      case "6":
        rl.question("Enter file name: ", (file) => {
          const filePath = path.join(folderPath, file);
          if (fs.existsSync(filePath)) {
            rl.question("Enter text to search: ", (text) => {
              const data = fs.readFileSync(filePath, "utf8");
              if (data.includes(text)) {
                console.log(`Text "${text}" found in file.`);
              } else {
                console.log(`Text "${text}" not found.`);
              }
              menu();
            });
          } else {
            console.log("File not found!");
            menu();
          }
        });
        break;

      case "7":
        rl.question("Enter old file name: ", (oldFile) => {
          rl.question("Enter new file name: ", (newFile) => {
            const oldPath = path.join(folderPath, oldFile);
            const newPath = path.join(folderPath, newFile);
            if (fs.existsSync(oldPath)) {
              fs.renameSync(oldPath, newPath);
              console.log("File renamed successfully!");
            } else {
              console.log("File not found!");
            }
            menu();
          });
        });
        break;

      case "8":
        console.log("Exiting...");
        rl.close();
        break;

      default:
        console.log("Invalid choice!");
        menu();
    }
  });
}

menu();

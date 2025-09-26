const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Store watchers for multiple files
const watchers = new Map();

// Function to start watching a file
function startWatching(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log("File does not exist. Please try again.");
    return;
  }

  if (watchers.has(filePath)) {
    console.log(`Already watching ${filePath}`);
    return;
  }

  const watcher = fs.watch(filePath, (eventType, filename) => {
    if (filename && eventType === 'change') {
      console.log(`File "${filename}" has changed.`);
    }
  });

  watchers.set(filePath, watcher);
  console.log(`Started watching ${filePath}`);
}

// Function to stop watching a file
function stopWatching(filePath) {
  if (watchers.has(filePath)) {
    watchers.get(filePath).close();
    watchers.delete(filePath);
    console.log(`Stopped watching ${filePath}`);
  } else {
    console.log(`Not watching ${filePath}`);
  }
}

// Prompt for user input
function promptUser() {
  console.log("\nCommands:");
  console.log("watch <file_path>  → Start watching a file");
  console.log("stop <file_path>   → Stop watching a file");
  console.log("list               → List all watched files");
  console.log("quit               → Exit program\n");

  rl.question("> ", (input) => {
    const [command, ...args] = input.trim().split(" ");
    const filePath = args.join(" ");

    switch (command.toLowerCase()) {
      case 'watch':
        startWatching(filePath);
        break;
      case 'stop':
        stopWatching(filePath);
        break;
      case 'list':
        if (watchers.size === 0) console.log("No files being watched.");
        else console.log("Watching files:", [...watchers.keys()]);
        break;
      case 'quit':
        // Close all watchers before exiting
        watchers.forEach(w => w.close());
        console.log("Exiting program.");
        rl.close();
        process.exit(0);
        break;
      default:
        console.log("Unknown command. Try again.");
    }

    // Prompt again
    promptUser();
  });
}

// Start program
promptUser();

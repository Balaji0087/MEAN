const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let timer = null;

function startTimer(interval) {
  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    console.log(`Timer triggered every ${interval} seconds`);
  }, interval * 1000);
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    console.log("Timer stopped.");
  }
}

// Interactive loop
function promptUser() {
  rl.question("Enter command (start <sec>/stop/quit): ", input => {
    const [command, arg] = input.split(" ");
    if (command === "start") startTimer(Number(arg));
    else if (command === "stop") stopTimer();
    else if (command === "quit") {
      stopTimer();
      rl.close();
      process.exit(0);
    }
    promptUser();
  });
}

promptUser();

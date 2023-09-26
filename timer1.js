const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Please provide one or more time delays (in milliseconds).");
  process.exit(1);
}

args.forEach(timer => {
  if (timer < 0 || isNaN(timer)) {
    console.log(`${timer} is not a valid positive integer. Please provide your timers as positive integers (in milliseconds).`);
  } else {
    setTimeout(() => {
      process.stdout.write("BEEP");
      process.stdout.write('\u0007');
    }, timer)
  }
});
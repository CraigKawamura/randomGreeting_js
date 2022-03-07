const greeting = (num) => {
  if (num === 1) {
    console.log("Hello, how are you doing today?");
  } else if (num === 2) {
    console.log("Greetings to you!");
  } else if (num === 3) {
    console.log("Hi!");
  }
}


let num = Math.floor(Math.random() * 3);

greeting(num);
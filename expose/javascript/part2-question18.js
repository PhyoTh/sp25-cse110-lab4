function print_current_time() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

setInterval(print_current_time, 1 * 1000);

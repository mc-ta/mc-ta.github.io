var counter = 1;

const myInterval2 = setInterval(nav2, 5000);

function nav2() {
  document.getElementById('radio-2' + counter).checked = true;
  counter++;
  if(counter > 7) {
      counter = 1;
  }
}
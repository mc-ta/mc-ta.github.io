var counter = 1;

const myInterval = setInterval(nav1, 5000);

function nav1() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4) {
      counter = 1;
  }
}
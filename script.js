function closeCookie(element) {
  element.remove();
}

function changeTemp(element) {
  temps = [high1, low1, high2, low2, high3, low3, high4, low4]
  for (var i=0; i<temps.length; i++) {
    element = temps[i];
    var cels = element.innerText;
    var fehran = 1.8*cels + 32;
    element.innerText = Math.round(fehran);
  }
  
}
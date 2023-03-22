// Close the cookies window
function closeCookie(element) {
  element.remove();
}

// Change temperatures from celsius to fahrenheit
function changeTemp(dropdown) {
  var temps = [high1, low1, high2, low2, high3, low3, high4, low4]
  for (var i=0; i<temps.length; i++) {
    if (dropdown.value === "fahrenheit") {
      var element = temps[i];
      var cels = element.innerText;
      var fehran = 1.8*cels + 32;
      element.innerText = Math.round(fehran);
    } else {
      var element = temps[i];
      var fehran = element.innerText;
      var cels = (fehran - 32)*.556
      element.innerText = Math.round(cels);
    }
  } 
}
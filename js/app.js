
const gallery = document.getElementById("gallery");

window.onmousemove = (e)=>{
  
  // graving the mouse positions
  const mouseX = e.clientX,
        mouseY = e.clientY;
  // multiplay with the window height and width to get decimal value
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

  // cutting the with and the height from the gallery
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

  // geting the x, y value where to display the window
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
    

  //animation
  gallery.animate({
    transform : `translate(${panX}px,${panY}px)`
  }, {
    duration: 4000,
    fill: "forwards",
    easing: "ease-in"
  });
}






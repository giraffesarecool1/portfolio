let i=0

while (i<3) {

const myTarget = document.getElementsByClassName('grabbable')[i];
myTarget.scrollTop = 100;
myTarget.scrollLeft = 150;


let currentPosition = {
  top: 0,
  left: 0,
  x: 0,
  y: 0
};

const mouseDownHandler = function(e) {
console.log('Mouse down event', myTarget.scrollLeft, myTarget.scrollTop, e.clientX, e.clientY)
  currentPosition = {
    // The current scroll 
    left: myTarget.scrollLeft,
    top: myTarget.scrollTop,
    // Get the current mouse position
    x: e.clientX,
    y: e.clientY,
  };
  
  

  document.addEventListener('mousemove', mouseMoveHandler);
  document.addEventListener('mouseup', mouseUpHandler);
};

const mouseMoveHandler = function(e) {
console.log('Mouse Move', e.clientX, e.clientY)
  // How far the mouse has been moved
  const dx = e.clientX - currentPosition.x;
  const dy = e.clientY - currentPosition.y;

  // Scroll the element
  myTarget.scrollTop = currentPosition.top - dy;
  myTarget.scrollLeft = currentPosition.left - dx;
};


const mouseUpHandler = function() {
  myTarget.style.cursor = 'grab';
  myTarget.style.removeProperty('user-select');
  
  document.removeEventListener('mousemove', mouseMoveHandler)
};

console.log('MyTarget', myTarget)
myTarget.addEventListener('mousedown', mouseDownHandler)
i++;
}
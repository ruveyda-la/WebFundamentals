function disappear (elemclass) {
    var element= document.querySelector(elemclass);
    element.remove();
}

function hoveronimg (element) {
    element.setAttribute('src', 'succulents-2.jpg');
  }

function hoveroutimg (element) {
    element.setAttribute ('src' , 'succulents-1.jpg')
}
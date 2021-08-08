let imageDisplay = document.getElementById('displayPage');
let i = 0;

let images = [
  'image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg'
];

imageDisplay.style.background = `url(./images/${images[0]})`;

imageDisplay.style.height = "400px";
imageDisplay.style.width = "550px";
imageDisplay.style.border = "5px solid black";

document.getElementById("rightImg").addEventListener('click', function(){
i++;
if(i >= 4){
  i--
}
  imageDisplay.style.background = `url(./images/${images[i]})`
}
)

document.getElementById("leftImg").addEventListener('click', function(){
  i--;
  if(i < 0){
    i++
  }
    imageDisplay.style.background = `url(./images/${images[i]})`
  
  })


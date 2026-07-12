//sample 2

var imageArray = ["assets/image1.jpg","assets/image2.jpg","assets/image3.jpg"];
var index= 0;


function rotateImage() {
	document.querySelector("img").setAttribute("src",imageArray[index]);
	index++;
	if(index >= imageArray.length) {
		index=0;
	}	
}

setInterval(rotateImage, 3000);

console.log ("hello world")
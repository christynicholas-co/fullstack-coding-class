console.log ("hello world")

var images = ["assets/One.jpeg", "assets/Two.jpeg", "assets/Three.jpeg", "assets/Four.jpeg", "assets/Five.jpeg", "assets/Six.jpeg"];
var index = 1; //stops 1st pic from showing twice 

 document.querySelector("#nextImage").addEventListener("click", function()
 {
     var nextImage = images[index];
     document.querySelector("img").setAttribute ("src", nextImage);
     index++;
     if(index >= images.length){
          index = 0;
     }
 })

 var images2 = ["assets/Six.jpeg", "assets/Five.jpeg", "assets/Four.jpeg", "assets/Three.jpeg", "assets/Two.jpeg", "assets/One.jpeg"];
 var indexOne = 1; //stops 1st pic from showing twice 
 
  document.querySelector("#previousImage").addEventListener("click", function()
  {
      var previousImage = images2[indexOne];
      document.querySelector("img").setAttribute ("src", previousImage);
      indexOne++;
      if(indexOne >= images2.length){
           indexOne = 0;
      }
  })
  

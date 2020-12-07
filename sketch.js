//Create variables here
var database

var foods

var dog1image,dog2image

function preload()
{
  
  dog1image = loadImage("dogImg.png")
  dog2image = loadImage("dogImg1.png")
	//load images here
}

function setup() {
  createCanvas(800, 700);
 database = firebase.database()
 dog = createSprite(400,350,150,150)
 dog.addImage(dog1image);
 dog.scale = 0.4
  
 food = database.ref("food")
 food.on("value",readstock)
}


function draw() {  
background("green")

if(keyDown(UP_ARROW)){

 writestock(foods)
 dog.addImage(dog2image);
}
fill(255)
text(15)
text("food remaning : " + foods,150,200)
text("Press up arrow to feed the dog",150,220)


  drawSprites();
  //add styles here

}


function readstock(data){

foods = data.val()

}

function writestock(x){

if(x<=0){
  x=0
}
else{
  x=x-1
}
database.ref("/").update({
  food:x
})


}

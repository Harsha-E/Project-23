var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var end, won; 
var endimg, wonimg;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	wonimg=loadImage("won.jpg");
	endimg=loadImage("lose.png");
}

function keyPressed() {

	if(keyCode === RIGHT_ARROW && packageSprite.y ==200){
		   helicopterSprite.x = helicopterSprite.x + 20;
		   console.log(packageSprite.x);
	}
	
    else if(keyCode === LEFT_ARROW && packageSprite.y ==200){
		   helicopterSprite.x = helicopterSprite.x - 20;
		   console.log(packageSprite.x);

	}

	else if (keyCode === DOWN_ARROW) {
			
		if(packageSprite.x >= 320 && packageSprite.x <= 460 ){
			Matter.Body.setStatic(packageBody,false);	
			if(packageSprite.isTouching(boxBase)){
	//		won =createSprite(width/2, height/2 , 10,10);
	//		won.addImage(wonimg);
	//		won.scale = 1;	
			}
			


		}
		
		else if(packageSprite.x <= 320 || packageSprite.x >= 460 ){
				end =createSprite(width/2, height/2 , 10,10);
				end.addImage(endimg);
				end.scale = 1;
				end.x= random(50,750);
				end.y= random(50,700);		
				
		}
	
	}

	if(packageSprite.x >= 320 && packageSprite.x <= 460 ){

		if(packageSprite.isTouching(boxBase)){
			won =createSprite(width/2, height/2 , 70,70);
			won.addImage(wonimg);
			
			won.x= random(50,750);
			won.y= random(50,700);		
		}
	}

}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100;
 	boxY=610;

///////////////////////////////////////
 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , { isStatic:true} );
 	World.add(world, boxLeftBody);
///////////////////////////////////////
 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);
///////////////////////////////////////
 	boxrightSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxrightSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , { isStatic:true} );
 	World.add(world, boxRightBody);
///////////////////////////////////////

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

	///////////////////////////////////

	packageSprite.x = helicopterSprite.x;

	///////////////////////////////////


	
  drawSprites();
}



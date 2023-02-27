const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;



var backgroundImg;
var cat, cat_falling;
var catimg;
var rope,rope2;
var tabla, tabla_con,tabla_con2;
var wood;

function preload () {
  backgroundImg = loadImage("./assets/background1.png");
  catimg = loadImage("./assets/gatoo.png");
  wood = loadImage ("./assets/wood.png");

}

function setup (){
var canvas = createCanvas(280, 300);

  engine = Engine.create();
  world = engine.world;

  var tabla_options = {

    restitution: 0.8
  }


  
  rope = new Rope(7,{x:100,y:30});
  rope2 = new Rope(7,{x:200,y:30});

  cat = Bodies.circle(200,200,20);
  tabla = Bodies.rectangle(300, 200, 10, 10);
  Matter.Composite.add(rope.body,tabla);
  Matter.Composite.add(rope2.body,tabla);

  tabla_con = new Link(rope,tabla);
  tabla_con2 = new Link(rope2,tabla);

}

function draw (){
  background(180);
  image(backgroundImg, 0, 0,width, height);

  push();
  //imageMode(CENTER);
  if(tabla!=null){
    image(wood,tabla.position.x,tabla.position.y,100,20);
    image(wood,tabla.position.x,tabla.position.y,100,20);
  }

  if(cat!=null){
    image(catimg,cat.position.x,cat.position.y,50,50);
  }
  pop();


  tabla_con.depth = rope.depth;
  tabla_con.depth = tabla_con.depth+1;

  rope.show();
  rope2.show();
  Engine.update(engine);

}
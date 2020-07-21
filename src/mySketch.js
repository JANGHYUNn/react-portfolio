// *********************************************
//
//   WANDERING PARTICLES
//   by André Casey, 2017
//   www.andrecasey.com
//  
//   Adaptation of the particles example from 
//   sketch.js by Justin Windle into Processing
//   using p5js. 
//   https://github.com/soulwire/sketch.js
//
// *********************************************


// ----------------------------------------
// Configuration
// ----------------------------------------
export default function sketch(p) {
// GLOBALS
let MAX_PARTICLES = 170;
//let COLORS = [ '#31CFAD', '#ADDF8C', '#FF6500', '#FF0063', '#520042', '#DAF7A6' ];
let COLORS = [ '#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900', '#FF4E50', '#F9D423' ];
//let COLORS = [ '#581845', '#900C3F', '#C70039', '#C70039', '#FFC300', '#DAF7A6' ];
//let COLORS = [ 'rgba(49,207,173,.7)', 'rgba(173,223,140,.7)', 'rgba(255,101,0,.7)', 'rgba(255,0,99,.7)', 'rgba(82,0,66,.7)' ];

//ARRAYS
let particles = [];
let pool = [];

//letIABLES
let wander1 = 0.5;
let wander2 = 2.0;
let drag1 = .9;
let drag2 = .99;
let force1 = 2;
let force2 = 8;
let theta1 = -0.5;
let theta2 = 0.5;
let size1 = 5;
let size2 = 180;
let sizeScalar = 0.97;


// ----------------------------------------
// Particle Functions
// ----------------------------------------

 p = (x,y,size) => {
    this.alive = true;
    this.size = size || 10;
    this.wander = 0.15;
    this.theta = this.random( this.TWO_PI );
    this.drag = 0.92;
    this.color = '#fff';
  	this.location = this.createVector(x || 0.0, y || 0.0);
	this.velocity = this.createVector(0.0, 0.0);
}
p.move = () => {
    this.location.add(this.velocity);
  	this.velocity.mult(this.drag);
    this.theta += this.random( theta1, theta2 ) * this.wander;
    this.velocity.x += this.sin( this.theta ) * 0.1;
    this.velocity.y += this.cos( this.theta ) * 0.1;
    this.size *= sizeScalar;
    this.alive = this.size > 0.5;
}
p.show = () => {
  //arc( this.location.x, this.location.y, this.size, 0, TWO_PI );
  this.fill( this.color );
  this.noStroke();
  this.ellipse(this.location.x,this.location.y, this.size, this.size);
}

 p.spawn = (x,y) => {
    let particle, theta, force;
    if ( particles.length >= MAX_PARTICLES ) {
        pool.push( particles.shift() );
    }
    particle = new p.Particle(this.mouseX, this.mouseY, this.random(size1,size2));
    particle.wander = this.random( wander1, wander2 );
    particle.color = this.random( COLORS );
    particle.drag = this.random( drag1, drag2 );
    theta = this.random( this.TWO_PI );
    force = this.random( force1, force2 );
  	particle.velocity.x = this.sin( theta ) * force;
    particle.velocity.y = this.cos( theta ) * force;
    particles.push( particle );
}
p.update = () => {
    let i, particle;
    for ( i = particles.length - 1; i >= 0; i-- ) {
        particle = particles[i];
        if ( particle.alive ) {
          particle.move();
        } else {
          pool.push( particles.splice( i, 1 )[0] );
        }
    }
}
p.moved = () => {
    let particle, max, i;
    max = this.random( 1, 4 );
    for ( i = 0; i < max; i++ ) {
      this.spawn( this.mouseX, this.mouseY );
    }
}


// ----------------------------------------
// Runtime
// ----------------------------------------

p.setup = () => {
	p.createCanvas(this.windowWidth, this.windowHeight);
}

p.draw = () =>{
	p.update();
    this.drawingContext.globalCompositeOperation = 'normal';
  	p.background(0);
 	this.drawingContext.globalCompositeOperation = 'lighter';
	for (let i = particles.length - 1; i >= 0; i--) {
    	p[i].show();
    }
}

p.mouseMoved = () =>{
   p.moved();
}

p.touchMoved = () =>{
    p.moved();
}

}
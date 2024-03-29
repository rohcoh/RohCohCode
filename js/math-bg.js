var canvas = document.getElementById("myCanvas");
canvas.style.zIndex = "-3";
var c = canvas.getContext("2d");
const SCALE = 0.25;
const TWO_PI = Math.PI * 2;
const HALF_PI = Math.PI / 2;
c.fillStyle = "#ACB4BF";
c.fillRect(0,0,window.innerWidth,window.innerHeight);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// ["#caf0f8","#90e0ef"],//good
// ["#bee9e8","#62b6cb"],//meh
// ["#BBE7FE","#68BBE3"],//good
// ["#BFD7ED","#60A3D9"],
// ["#AACDE5","#6CC4DC"],
//lightest to darkest
var colorP=[
//  ["#90e0ef","#48cae4","#0096c7"],
//  ["#caf0f8","#00b4d8","#0077b6"],
//  ["#d9eeec","#64b2cd","#3c70a4"],
    ["#2B6684","#032E42","#0A1417"]
    
];

//credit to Zevan for base blob code
class Blob {
  constructor(r,segments, br) {
    this.wobbleIncrement = 0;
    // use this to change the size of the blob
    this.radius = r;
    // think of this as detail level
    // number of conections in the `bezierSkin`
    this.segments = segments;
    this.step = HALF_PI / this.segments;
    this.anchors = [];
    this.radii = [];
    this.thetaOff = [];

    const bumpRadius = br;
    const halfBumpRadius = bumpRadius / 2;

    for (let i = 0; i < this.segments + 2; i++) {
      this.anchors.push(0,0);
      this.radii.push(Math.random() * bumpRadius - halfBumpRadius);
      this.thetaOff.push(Math.random() * TWO_PI);
    }

    this.theta = 0;
    this.thetaRamp = 0;
    this.thetaRampDest = 12;
    this.rampDamp = 25;
  }
  update(color) {
    this.thetaRamp += (this.thetaRampDest - this.thetaRamp) / this.rampDamp;
    this.theta += 0.03;

    this.anchors = [0, this.radius];
    for (let i = 0; i <= this.segments + 2; i++) {
      const sine = Math.sin(this.thetaOff[i] + this.theta + this.thetaRamp);
      const rad = this.radius + this.radii[i] * sine;
      const theta = this.step * i;
      const x = rad * Math.sin(theta);
      const y = rad * Math.cos(theta);
      this.anchors.push(x, y);
    }

    c.save();
    c.translate(0,0);
    c.scale(SCALE, SCALE);
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(0, 0);
    bezierSkin(this.anchors, false);
    c.lineTo(0, 0);
    c.fill();
    c.restore();
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var randomP = getRandomInt(colorP.length);

var blobs = [];
var multiplySeg=8;
var multiplyRadius=1200;


if(window.innerWidth <= 620){
  multiplySeg=5;
  multiplyRadius=600;
  loopNum=2;
}
for(var i = colorP[randomP].length; i >= 0; i--)
{
  var b = new Blob((multiplyRadius*i),i*multiplySeg,200);
  blobs.push(b);
}

function loop() {

  c.fillStyle = "#77b2d0";
  c.fillRect(0,0,window.innerWidth,window.innerHeight);

  for(var i = 0; i < colorP[randomP].length; i++){
    blobs[i].update(colorP[randomP][i]);
  }
  window.requestAnimationFrame(loop);
}
loop();

// array of xy coords, closed boolean
function bezierSkin(bez, closed = true) {
  const avg = calcAvgs(bez);
  const leng = bez.length;

  if (closed) {
    c.moveTo(avg[0], avg[1]);
    for (let i = 2; i < leng; i += 2) {
      let n = i + 1;
      c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }
    c.quadraticCurveTo(bez[0], bez[1], avg[0], avg[1]);
  } else {
    c.moveTo(bez[0], bez[1]);
    c.lineTo(avg[0], avg[1]);
    for (let i = 2; i < leng - 2; i += 2) {
      let n = i + 1;
      c.quadraticCurveTo(bez[i], bez[n], avg[i], avg[n]);
    }
    c.lineTo(bez[leng - 2], bez[leng - 1]);
  }
}

// create anchor points by averaging the control points
function calcAvgs(p) {
  const avg = [];
  const leng = p.length;
  let prev;

  for (let i = 2; i < leng; i++) {
    prev = i - 2;
    avg.push((p[prev] + p[i]) / 2);
  }
  // close
  avg.push((p[0] + p[leng - 2]) / 2, (p[1] + p[leng - 1]) / 2);
  return avg;
}
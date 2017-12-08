let Vector = require("vectorjs"),
    math_funcs = require("./math_func");

module.exports = function Particle(canvas, ctx, x, y, exploder, rgb){
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.lifespan = 1;
    this.rgb = rgb;
    this.pos = new Vector(this.x, this.y);
    if(!exploder){
        this.vel = new Vector(0, -math_funcs.getRandomNum(9, 15));
    }else{
        this.vel = new Vector(math_funcs.getRandomNum(-15, 15), math_funcs.getRandomNum(-12,12));
    }
    this.acc = new Vector(0, 0);

    this.show = () => {
        this.ctx.beginPath();
        if(exploder){
            this.ctx.fillStyle = "rgba("+this.rgb+", "+this.lifespan+")";
        }else{
            this.ctx.fillStyle = "rgb("+this.rgb+")";
        }
        this.ctx.arc(this.pos.x, this.pos.y, 4, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }
    this.applyForce = (force) => {
        this.acc = Vector.add(this.acc,force);
    }
    this.update = () => {
        this.ctx.clearRect(this.pos.x-8, this.pos.y-8, 16, 16);
        if(exploder){
            this.vel = Vector.mul(this.vel, 0.9);
            this.lifespan -= 0.03;
        }
        this.vel = Vector.add(this.vel,this.acc);
        this.pos = Vector.add(this.pos,this.vel);
        this.acc = Vector.mul(this.acc,0);
    }
    this.done = () =>{
        if(this.lifespan <= 0){

            return true;
        }
    }
}


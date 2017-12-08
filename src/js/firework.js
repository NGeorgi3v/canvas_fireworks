let Particle = require("./particle"),
    Vector = require("vectorjs"),
    math = require("./math_func");
const gravity = new Vector(0, 0.2);
module.exports = function Firework(opt){
    this.rgb = math.getRandomNum(0, 255) + ", " + math.getRandomNum(0, 255) + ", " + math.getRandomNum(0, 255);
    this.firework = new Particle(opt.canvas,opt.ctx, math.getRandomNum(4, opt.canvas.width-4), opt.canvas.height,false, this.rgb);
    this.exploded = false;
    this.particles = [];
    this.update = () =>{
        if(!this.exploded){
            this.firework.applyForce(gravity);
            this.firework.update();
            if(this.firework.vel.y >= 0){
                this.exploded = true;
                this.explode();
            }
        }
        for(let i = this.particles.length-1; i >= 0; i--){
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if(this.particles[i].done()){
                this.particles.splice(i, 1);
            }
        }
    }
    this.done = () =>{
        if(this.exploded && this.particles.length == 0){
            return true;
        }
    }
    this.show = () =>{
        if(!this.exploded){
            this.firework.show();
        }
        for(let i = this.particles.length-1; i >= 0; i--){
            this.particles[i].show();
        }
    }
    this.explode = () =>{
        for(let i = 0; i<=100; i++){
            let p = new Particle(opt.canvas,opt.ctx, this.firework.pos.x, this.firework.pos.y, true, this.rgb);
            this.particles.push(p);
        }
    }
}
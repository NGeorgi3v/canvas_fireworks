let Vector = require("vectorjs"),
    Particle = require("./particle"),
    Firework = require("./firework"),
    canvas = document.getElementById("fireworks"),
    ctx    = canvas.getContext("2d"),
    animationEnabled = true;
const WIDTH  = Math.max(document.documentElement.clientWidth, window.innerWidth),
      HEIGHT = Math.max(document.documentElement.clientHeight, window.innerHeight);

module.exports = function Game(){
    this.init = () => {
        canvas.setAttribute("width", WIDTH-6);
        canvas.setAttribute("height", HEIGHT-6);
        this.fireworks = [];
    }
    this.start = () => {
        requestAnimationFrame(this.loop);
        
    }
    this.loop = () => {
        if(Math.random(1) < 0.03){
            this.fireworks.push(new Firework({canvas: canvas, ctx: ctx}));
        }
        for(let i = this.fireworks.length-1; i>=0; i--){
            this.fireworks[i].update();
            this.fireworks[i].show();
            if(this.fireworks[i].done()){
                this.fireworks.splice(i, 1);
            }
        }
        if(animationEnabled)
            requestAnimationFrame(this.loop);
    }
    this.pause = () => {
        animationEnabled = false;
    }
}
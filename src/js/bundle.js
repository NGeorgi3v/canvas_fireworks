/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function(){
    let Game = __webpack_require__(3),
        myGame = new Game();

        myGame.init();
        myGame.start();
        document.body.onkeyup = function(e){
            if(e.keyCode == 32){
                myGame.pause();
            }
        };
}());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var RAD = 180 / Math.PI;

var Vector = (function () {

  /**
   * Constructor for the Vector class
   *
   * @param {Number =} x
   * @param {Number =} y
   * @return {Vector} A vector of `x` and `y`
   */

  function Vector() {
    var x = arguments[0] === undefined ? 0 : arguments[0];
    var y = arguments[1] === undefined ? x : arguments[1];
    return (function () {
      _classCallCheck(this, Vector);

      this.x = x;
      this.y = y;
    }).apply(this, arguments);
  }

  _createClass(Vector, [{
    key: 'add',

    /*
       Class math aliases
     */

    value: function add(b) {
      return Vector.add(this, b);
    }
  }, {
    key: 'sub',
    value: function sub(b) {
      return Vector.sub(this, b);
    }
  }, {
    key: 'mul',
    value: function mul(b) {
      return Vector.mul(this, b);
    }
  }, {
    key: 'div',
    value: function div(b) {
      return Vector.div(this, b);
    }
  }, {
    key: 'lenSq',
    value: function lenSq() {
      return Vector.lenSq(this);
    }
  }, {
    key: 'len',
    value: function len() {
      return Vector.len(this);
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      return Vector.normalize(this);
    }
  }, {
    key: 'angle',
    value: function angle(b) {
      return Vector.angle(this, b);
    }
  }, {
    key: 'angleRad',
    value: function angleRad(b) {
      return Vector.angleRad(this, b);
    }
  }, {
    key: 'angleDeg',
    value: function angleDeg(b) {
      return Vector.angleDeg(this, b);
    }
  }, {
    key: 'clone',
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: 'equals',
    value: function equals(b) {
      return Vector.equals(this, b);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '' + this.x + ',' + this.y;
    }
  }], [{
    key: 'add',

    /*
       Static math functions
     */

    /**
     * Add two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the sum of the vectors
     */

    value: function add(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x + b.x;
      var y = a.y + b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'sub',

    /**
     * Subtract two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the result of subtracting `b` form `a`
     */

    value: function sub(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x - b.x;
      var y = a.y - b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'mul',

    /**
     * Multiply two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the product of the vectors
     */

    value: function mul(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x * b.x;
      var y = a.y * b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'div',

    /**
     * Divide two vectors. If a `b` is a number, create
     * a `Vector` from it.
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number} | number} b
     * @return {Vector} the result of dividing `a` with `b`
     */

    value: function div(a, b) {
      if (typeof b === 'number') b = new Vector(b);

      var x = a.x / b.x;
      var y = a.y / b.y;

      return new Vector(x, y);
    }
  }, {
    key: 'len',

    /**
     * Get the length of a vector
     *
     * @param {Vector | {x: number, y: number}} a
     * @return {Number} the length of vector `a`
     */

    value: function len(a) {
      var x = a.x * a.x;
      var y = a.y * a.y;

      return Math.sqrt(x + y);
    }
  }, {
    key: 'lenSq',

    /**
     * Get the length squared of a vector. Usefull for
     * comparing two vectors
     *
     * @param {Vector | {x: number, y: number}} a
     * @return {Number} the length squared of vector `a`
     */

    value: function lenSq(a) {
      var x = a.x * a.x;
      var y = a.y * a.y;

      return x + y;
    }
  }, {
    key: 'normalize',

    /**
     * Normalize a vector
     *
     * @param {Vector | {x: number, y: number}} a
     * @return {Vector} the vector `a` normalized
     */

    value: function normalize(a) {
      var mag = Vector.len(a);

      return new Vector(a.x / mag, a.y / mag);
    }
  }, {
    key: 'angle',

    /**
     * Get the angle between two vectors in degress
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the degree between the two vectors
     */

    value: function angle(a, b) {
      return Vector.angleDeg(a, b);
    }
  }, {
    key: 'angleRad',

    /**
     * Get the radian angle between two vectors
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the angle between the two vectors
     */

    value: function angleRad(a, b) {
      return Math.acos(Vector.angleCos(a, b));
    }
  }, {
    key: 'angleDeg',

    /**
     * Get the angle between two vectors in degress
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the degree between the two vectors
     */

    value: function angleDeg(a, b) {
      return Vector.angleRad(a, b) * RAD;
    }
  }, {
    key: 'angleCos',

    /**
     * Get the angle between two vectors in cosin
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the angle between the two vectors before `Math.acos()`
     */

    value: function angleCos(a, b) {
      var magA = Vector.len(a);
      var magB = Vector.len(b);

      var dot = Vector.mul(a, b);

      return (dot.x + dot.y) / (magA * magB);
    }
  }, {
    key: 'dot',

    /**
     * Get the dot product of two vectors
     *
     * @param {Vector | {x: number, y: number}} a
     * @param {Vector | {x: number, y: number}} b
     * @return {Number} the dot product
     */

    value: function dot(a, b) {
      var magA = Vector.len(a);
      var magB = Vector.len(b);

      return Math.acos(Vector.mul(a, b) / (magA * magB));
    }
  }, {
    key: 'random',

    /*
       Helper methods
     */

    value: function random() {
      var min = arguments[0] === undefined ? 0 : arguments[0];
      var max = arguments[1] === undefined ? min + 1 : arguments[1];
      return (function () {
        var x = Math.random() * (max - min) + min;
        var y = Math.random() * (max - min) + min;

        return new Vector(x, y);
      })();
    }
  }, {
    key: 'clone',
    value: function clone(a) {
      return new Vector(a.x, a.y);
    }
  }, {
    key: 'equals',
    value: function equals(a, b) {
      return a.x === b.x && a.y === b.y;
    }
  }]);

  return Vector;
})();

// Convertion from ES6 to factory. Code stolen from `https://github.com/timoxley/to-factory`

var VectorFactory = function VectorFactory(x, y) {
  return new Vector(x, y);
};

VectorFactory.__proto__ = Vector;
VectorFactory.prototype = Vector.prototype;

exports['default'] = VectorFactory;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let Vector = __webpack_require__(1),
    math_funcs = __webpack_require__(5);

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



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

let Vector = __webpack_require__(1),
    Particle = __webpack_require__(2),
    Firework = __webpack_require__(4),
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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let Particle = __webpack_require__(2),
    Vector = __webpack_require__(1),
    math = __webpack_require__(5);
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {getRandomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

/***/ })
/******/ ]);
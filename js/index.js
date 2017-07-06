/* Space Invaders Game
 * By Mohammed Ajao
*/


//Helper functions

//Screen

function Screen(width, height){
     this.canvas = document.createElement("canvas");
     this.canvas.width = this.width = width;
     this.canvas.height = this.height = height;
     this.ctx = this.canvas.getContext("2d");

     document.body.appendChild(this.canvas);
};

Screen.prototype.clear = function(){
     this.ctx.clearRect(0,0, this.width, this.height);
};
Screen.prototype.drawSprite = function(sp, x, y){
     this.ctx.drawImage(sp.img, sp.x, sp.y, sp.w, sp.h, x, y, sp.w, sp.h);
};

//Sprite
function Sprite(img, x, y, w, h){
     this.img = img;
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;
};

//Input Handeler
function InputHandeler(){
     this.down = {};
     this.pressed = {};
     var _this = this;
     document.addEventListener("keydown", function(event){
          _this.down[event.keyCode] = true;
     });
     document.addEventListener("keyip", function(event){
          delete _this.down[event.keyCode];
          delete _this.pressed[event.keyCode];
     });
};

InputHandeler.prototype.isDown = function(keyCode){
     return this.down[code];
};

InputHandeler.prototype.isPressed = function(keyCode){
     if(this.pressed[keyCode]){
          return false;
     } else if (this.down[keyCode]){
          return this.pressed[code] = true;
     }
     return false;
};

function Plane() {
  this.flying = true;
}

Plane.prototype.landed = function() {
  this.flying = false;
};

Plane.prototype.takeoff = function() {
  this.flying = true;
};

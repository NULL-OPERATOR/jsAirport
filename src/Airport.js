function Airport(input) {
  this.planes = [];
  this.limit = input;
}
// var planes = [];
Airport.prototype.land = function(plane) {
  if (this.planes.length  >= this.limit) {
    throw new Error("Airport is full");
  }
  else {
    return this.planes.push(plane);
  }

};

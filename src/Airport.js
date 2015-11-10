function Airport() {
  this.planes = [];
}
// var planes = [];
Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

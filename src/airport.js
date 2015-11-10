function Airport(input) {
  this.planes = [];
  this.limit = input;
  this.weather = new Weather;
}
// var planes = [];
Airport.prototype.land = function(plane) {
  if (this.weather.checkWeather() === false) {
    throw new Error("is stormy");
  }
  else if (this.planes.length  >= this.limit) {
    throw new Error("Airport is full");
  }
  else {
    return this.planes.push(plane);
  }

};

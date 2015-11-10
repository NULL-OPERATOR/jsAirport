function Airport(input, weather) {
  this.planes = [];
  this.limit = input;
  this.weather = weather || new Weather();
}

Airport.prototype.land = function(plane) {
  if (this.weather.checkWeather() === false) {
    throw new Error("is stormy");
  }
  else if (this.planes.length  >= this.limit) {
    throw new Error("Airport is full");
  }
  else {
    this.planes.push(plane);
    this.planes[0].landed();
  }

};

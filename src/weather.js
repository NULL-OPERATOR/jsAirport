function Weather() {
}

Weather.prototype.checkWeather = function() {
  return  (Math.random() * 10 > 7);
};

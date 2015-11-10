describe("airport", function(){
  var airport;
  var plane;
  var weather;


  beforeEach(function() {
    airport = new Airport(1, weather)
    weather = jasmine.createSpyObj('weather',['checkWeather']);
    spyOn(wheather, 'checkWeather').and.returnValue(true);

    // sunny = jasmine.createSpyObj('sunny', ['checkWeather']);
    // sunny.checkWeather(false);
    // stormy = jasmine.createSpyObj('stormy', ['checkWeather']);
    // stormy.checkWeather(false);
    // // // stormy = jasmine.createSpyOn('weather', 'check_weather');
    // // stormy.check_weather(false);
    // airport = new Airport(2, sunny);
    // airport2 = new Airport(2, stormy);
  });

  it("has an empty array of planes", function(){
    expect(airport.planes).toEqual([]);
  });
  it("can land a plane", function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it("has a default limit of planes", function() {
    expect(airport.limit).toEqual(1);
  });

  it("cannot land when the airport is full", function() {
    airport.land(plane);
    expect( function() {airport.land(plane);}).toThrowError("Airport is full");
  });

  it("can land when the weather is sunny", function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
    });

  it("cannot land when the weather is stormy", function(){
    // sunny.checkWeather(false);
    airport2.land(plane);
    expect( function() {airport2.land(plane);}).toThrowError("is stormy");
    });
});

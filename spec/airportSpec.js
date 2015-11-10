describe("airport", function(){
  var airport;
  var plane;
  var weather;


  beforeEach(function() {
    // plane = { flying: function(){}};
    weather = { checkWeather: function(){}};
    airport = new Airport(1, weather);

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
    spyOn(weather, 'checkWeather').and.returnValue(false);
    expect( function() {airport.land(plane);}).toThrowError("is stormy");
    });
});

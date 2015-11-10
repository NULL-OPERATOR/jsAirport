describe("airport", function(){
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    // plane = new Plane();
  });

  it("has an empty array of planes", function(){
    expect(airport.planes).toEqual([]);
  });
  it("can land a plane", function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it("has a default limit of planes", function() {
    airportLimiter = new Airport(2);
    expect(airportLimiter.limit).toEqual(2);
  });

  it("cannot land when the airport is full", function() {
    airportFull = new Airport(1);
    airportFull.land(plane);
    expect( function() {airportFull.land(plane);}).toThrowError("Airport is full");
  });
});

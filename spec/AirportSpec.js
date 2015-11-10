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
});

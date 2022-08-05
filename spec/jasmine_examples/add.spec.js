describe('spyOn() Demo. Season', function () {
  let Season = require('../../lib/jasmine_examples/add.js');
  it('should be Summer', function () {
    var s = new Season();
    s.getNextSeason();
    expect(s.season).toEqual('Summer');
  });
  it('should be Summer', function () {
    var s = new Season();
    s.getNextSeason();
    expect(s.season).toEqual('Spring');
  });
});
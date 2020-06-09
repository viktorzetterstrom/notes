const todaysDate = require("../todays-date");

it("returns a string with todays date on the formate yyyy-mm-dd", () => {
  const fakeCurrentDate = new Date("2020-01-01T11:01:58.135Z");
  const realDate = Date;

  global.Date = class extends Date {
    constructor() {
      return fakeCurrentDate;
    }
  };

  expect(todaysDate()).toEqual("2020-01-01");
  global.date = realDate;
});

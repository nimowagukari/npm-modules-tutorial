const echo = require("./index");

const echoMock = jest.fn(echo);
test.each([
  [0, "hoge"],
  [1, 123],
  [2, true],
])("echo input value", (i, a) => {
  expect(echoMock(a)).toBe(echoMock.mock.calls[i][0]);
});

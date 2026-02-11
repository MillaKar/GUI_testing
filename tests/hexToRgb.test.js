//Tests check that the hex values are correctly converted to RGB.
const hexToRgb = require("../src/routes/utils/hex_to_rgb");

test("#FF0000 is red", () => {
    expect(hexToRgb("#FF0000")).toEqual({r:255, g:0, b:0});
});

test("#00FF00 is green", () => {
    expect(hexToRgb("#00FF00")).toEqual({r:0, g:255, b:0});
});

test("#0000FF is blue", () => {
    expect(hexToRgb("#0000FF")).toEqual({r:0, g:0, b:255});
});

test("Invalid hex, throws error", () => {
    expect(() => hexToRgb("ZZZZZZ")).toThrow();
});



//Tests for the API endpoint /api/hex-to-rgb.
//Ensures taht the API returns correct JSON and HTTP status codes.
const request = require("supertest");
const app = require("../src/app");

test("API converts hex to rgb", async () => {
    const res = await request(app).get("/api/hex-to-rgb?hex=FF0000");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({
        hex: "FF0000",
        rgb: {r: 255, g: 0, b: 0 }
    });
});

test("Invalid hex returns 400", async () => {
    const res = await request(app).get("/api/hex-to-rgb?hex=ZZZZZZ");
    expect(res.statusCode).toBe(400);
});
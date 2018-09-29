import request from "supertest";
import app from "../src/app";

describe("GET /srv/health", () => {
  it("should return 200 OK", done => {
    request(app)
      .get("/srv/health")
      .expect(200, done);
  });
});

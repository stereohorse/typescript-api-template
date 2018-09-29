import { Request, Response, Next } from "restify";

export function reportHealth(req: Request, res: Response, next: Next) {
  res.json(200, { status: "UP" });
  return next();
}

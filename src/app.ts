import { createServer, plugins } from "restify";
import { reportHealth } from "./controllers/operations";
import { createLogger } from "bunyan";
import config from "config";

const api = createServer({
  log: createLogger({
    name: config.get("app.name"),
    level: config.get("log.level")
  })
});

api.pre(plugins.pre.sanitizePath());
api.use(plugins.bodyParser());
api.use(plugins.requestLogger());

api.get("/srv/health", reportHealth);

export default api;

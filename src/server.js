import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT } = process.env;

polka()
  .use(compression({ threshold: 0 }), sapper.middleware())
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });

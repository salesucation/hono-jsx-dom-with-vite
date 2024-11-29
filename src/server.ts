import { serve, ServerType } from "@hono/node-server"
import app from './index'
import { serveStatic } from "@hono/node-server/serve-static"

app.use("/*", serveStatic({ root: "public/"})) // path must end with '/'
app.use("/src/*", serveStatic(({ root: "./", mimes: {
    tsx: 'text/javascript',
    ts: 'text/javascript',
  }}as any))) // path must end with '/'
declare global {
    var server: ServerType;
}

if(globalThis.server){
    await globalThis.server.close();
}

globalThis.server = serve({ ...app, port: 4000 }, info => {
    console.log(`Listening on http://localhost:${info.port}`);
  });
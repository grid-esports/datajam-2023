import { WebSocketServer } from "ws";
import jsonlFile from "jsonl-db";
import { glob } from "glob";

const wss = new WebSocketServer({
  port: 8080,
});

wss.on("connection", async function connection(ws, req) {
  ws.on("ping", () => {
    ws.pong();
  });
  
  console.log(req.url);

  const jsfiles = await glob(`**/${req.url}_events.jsonl`, {
    ignore: "node_modules/**",
  });

  console.log('Emitting', jsfiles[0]);
  const eventsFile = jsonlFile(jsfiles[0]);
  eventsFile.read((line) => ws.send(JSON.stringify(line)));
});

import { ConfBot } from "./bot";
import { QnAMaker } from "botbuilder-ai"
import { IQnAService, BotConfiguration } from "botframework-config"
import * as restify from "restify";
import { BotFrameworkAdapter } from "botbuilder";
import { config } from "dotenv"

config();

// const botConfig = BotConfiguration.loadSync("../test.bot", process.env.BOT_FILE_SECRET)

const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log(`${server.name} listening on ${server.url}`);
});

const adapter = new BotFrameworkAdapter({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

const qnaMaker = new QnAMaker({
  knowledgeBaseId: process.env.KBID,
  endpointKey: process.env.QNA_ENDPOINTKEY,
  host: process.env.QNA_HOST
})

// console.log('qnaMaker', qnaMaker)

const echo: ConfBot = new ConfBot(qnaMaker);

server.post("/api/messages", (req, res) => {
  adapter.processActivity(req, res, async (context) => {
    await echo.onTurn(context);
  });
});

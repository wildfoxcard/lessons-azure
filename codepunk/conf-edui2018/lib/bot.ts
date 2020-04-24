import { TurnContext } from "botbuilder";
import { QnAMaker } from "botbuilder-ai";

export class ConfBot {
  private _qnaMaker: QnAMaker;
  constructor(qnaMaker: QnAMaker) {
    this._qnaMaker = qnaMaker;
  }

  async onTurn(context: TurnContext) {
    if (context.activity.type === "message") {
      let qnaResults;
      try {
        // console.log('context', context.activity)
        qnaResults = await this._qnaMaker.generateAnswer(context.activity.text);
        // const qnaResults = await this._qnaMaker.generateAnswer(context.activity.text).catch(err => console.log(err))
        console.log("qnaResults", qnaResults);
      } catch (ex) {
        console.log(ex.message);
      }
      if (qnaResults.length > 0) {
        await context.sendActivity(qnaResults[0].answer);
      }
    } else {
      await context.sendActivity(`${context.activity.type} event detected`);
    }
  }
}

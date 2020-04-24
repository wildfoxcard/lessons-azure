# Typescript - The basics

from youtube playlist:

https://www.youtube.com/watch?v=Pp_Fmh80bU4&list=PLz6hh7iUxR22NewUgZjhQxYL7iL6lAmUM&index=1

### notes from video:

#### Video 1

This video was an introduction to the project that codepunk is going to build.

#### Video 2

This video is about starting to build a bot from strach. It uses bash commands for dependencies.

```json
{
  "dependencies": {
    "@types/restify": "^8.4.2",
    "botbuilder": "^4.8.0",
    "restify": "^8.5.1",
    "typescript": "^3.8.3"
  }
}
```

#### Video 3

Completion of a echo bot project.

#### Video 4

This video is about upgrade the bot framework to version 4

#### Video 5

This video is about using chat down. It is apart of  the botframework cli now.

[Bot Framework CLI](https://github.com/microsoft/botframework-cli)

```bash
npm i -g @microsoft/botframework-cli
```

[Generating chatdown](https://github.com/microsoft/botframework-cli/blob/master/packages/chatdown/README.md#bf-chatdownconvert)

```bash
cd ./transcripts
bf chatdown:convert --in ./*.chat --out ./
```

#### Video 6

This video is about ludown for qna maker.

Generating Ludown

```bash
cd ./luis
bf qnamaker:convert --in=./qna.lu --out=./
```

init qna maker.

```bash
bf qnamaker:init
```

Create knowledge base

```bash 
bf qnamaker:kb:create --in=./qna.json
```

Publish Knowledge Base

```bash
bf qnamaker:kb:publish --kbId=***Replace with id from "bf qnamaker:kb:list"**
```

#### Video 7

This video is about creating a luis service.

```bash
cd ./luis
bf luis:convert --in=edui2018.lu --out=./
```

#### Video 8

This video is about creating a bot file.

It seems deprecated.

```bash
npm install -g msbot
msbot init
```

#### Video 9

This video is about adding QNA maker to your chatbot



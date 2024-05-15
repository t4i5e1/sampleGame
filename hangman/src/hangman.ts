console.log("GAME START");

import rawData from "./data/questions.test.json"

interface Question {
    word: string;
    hint: string;
}

//Question[]型を指定
const questions: Question[] = rawData; //jsonから読み込んだデータを代入

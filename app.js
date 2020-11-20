const quizData = [
    {
        question: "龍が如く6の主人公は？",
        a: "真島　五郎",
        b: "秋山　駿",
        c: "冴島　大河",
        d: "桐生　一馬",
        correct: "d"
    }, {
        question: "銀魂の第1回人気キャラ投票第１位は？",
        a: "坂田　銀時",
        b: "志村　新八",
        c: "土方十四郎",
        d: "沖田総悟",
        correct: "a"
    }, {
        question: "約束のネバーランドで最も早く出荷されたのは？",
        a: "エマ",
        b: "ノーマン",
        c: "レイ",
        d: "フィル",
        correct: "b"
    }, {
        question: "進撃の巨人の鎧の巨人の正体は？",
        a: "エレン",
        b: "アルミン",
        c: "ベルトルト",
        d: "ライナー",
        correct: "d"
    }, {
        question: "進撃の巨人の正体は？",
        a: "エレン",
        b: "ミカサ",
        c: "ライナー",
        d: "ジャン",
        correct: "a"
    }
];
const answersEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function getSelected() {
    let answer = undefined;

    // answers.forEach(function(item) {console.log(item.value)})と同じ
    answersEls.forEach((answerEl) => {
        // answer.checked === trueと同じ意味
        // console.log(answer.checked)は選択された場所にはtrue、それ以外はfalseとなる
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
        return answer;
};

function deselectAnswers() {
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
        quiz.innerHTML = `<h2 style="center">正答数は${score}/${quizData.length}で</h2> <h2 style="text-align: center;">正解率は<span style="color: red">${(score / quizData.length) * 100}%</span>です</h2> <button onclick="location.reload()">Reload</button>`;
    }
    }

});

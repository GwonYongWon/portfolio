let scoreResult1;
let scoreResult2;
let scoreResult3;
let scoreResult4;
let scoreResult5;
let scoreResult6;
let scoreResult7;

function keyup1() {
  let input1 = document.querySelector("#input1");
  let span1 = document.querySelector("#span1");
  if (isNaN(input1.value) == true) {
    alert("숫자만 입력하세요");
    input1.value = null;
  }
  if (input1.value < 0 || input1.value > 100) {
    alert("숫자만 입력하세요");
    input1.value = null;
  }
  scoreResult1 = input1.value;
}

function keyup2() {
  let input2 = document.querySelector("#input2");
  let span2 = document.querySelector("#span2");
  if (isNaN(input2.value) == true) {
    alert("숫자만 입력하세요");
    input2.value = null;
  }
  if (input2.value < 0 || input2.value > 100) {
    alert("숫자만 입력하세요");
    input2.value = null;
  }
  if (input2.value == "") {
    span2.style.display = "none";
    return;
  }
  scoreResult2 = input2.value;
}
function keyup3() {
  let input3 = document.querySelector("#input3");
  let span3 = document.querySelector("#span3");
  if (isNaN(input3.value) == true) {
    alert("숫자만 입력하세요");
    input3.value = null;
  }
  if (input3.value < 0 || input3.value > 100) {
    alert("숫자만 입력하세요");
    input3.value = null;
  }
  scoreResult3 = input3.value;
}
function keyup4() {
  let input4 = document.querySelector("#input4");
  if (isNaN(input4.value) == true) {
    alert("숫자만 입력하세요");
    input4.value = null;
  }
  if (input4.value < 0 || input4.value > 100) {
    alert("숫자만 입력하세요");
    input4.value = null;
  }
  scoreResult4 = input4.value;
}
function keyup5() {
  let input5 = document.querySelector("#input5");
  if (isNaN(input5.value) == true) {
    alert("숫자만 입력하세요");
    input5.value = null;
  }
  if (input5.value < 0 || input5.value > 100) {
    alert("숫자만 입력하세요");
    input5.value = null;
  }
  scoreResult5 = input5.value;
}
function keyup6() {
  let input6 = document.querySelector("#input6");
  if (isNaN(input6.value) == true) {
    alert("숫자만 입력하세요");
    input6.value = null;
  }
  if (input6.value < 0 || input6.value > 100) {
    alert("숫자만 입력하세요");
    input6.value = null;
  }
  scoreResult6 = input6.value;
}
function keyup7() {
  let input7 = document.querySelector("#input7");
  if (isNaN(input7.value) == true) {
    alert("숫자만 입력하세요");
    input7.value = null;
  }
  if (input7.value < 0 || input7.value > 100) {
    alert("숫자만 입력하세요");
    input7.value = null;
  }
  scoreResult7 = input7.value;
}

// function calculateTotalScore() {
//   const weights = [0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2];
//   const socore = [
//     scoreResult1,
//     scoreResult2,
//     scoreResult3,
//     scoreResult4,
//     scoreResult5,
//     scoreResult6,
//     scoreResult7,
//   ];
// }

function finalResultbtn() {
  const scoreResulta = 0.1;
  const scoreResultb = 0.1;
  const scoreResultc = 0.1;
  const scoreResultd = 0.1;
  const scoreResulte = 0.2;
  const scoreResultf = 0.2;
  const scoreResultg = 0.2;

  const a = scoreResult1 * scoreResulta;
  const b = scoreResult2 * scoreResultb;
  const c = scoreResult3 * scoreResultc;
  const d = scoreResult4 * scoreResultd;
  const e = scoreResult5 * scoreResulte;
  const f = scoreResult5 * scoreResultf;
  const g = scoreResult5 * scoreResultg;

  totalScore = a + b + c + d + e + f + g;

  const percentScore =
    (totalScore /
      (100 *
        (scoreResulta +
          scoreResultb +
          scoreResultc +
          scoreResultd +
          scoreResulte +
          scoreResultf +
          scoreResultg))) *
    100;

  list1.innerHTML = `종합 평가 점수: ${totalScore}점`;

  document.querySelector("#footer").style.display = "block";
}

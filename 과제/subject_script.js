// javascript 작성

// window.onload = function () {
//   let inputBoxes = document.querySelectorAll(".scoreinput");
//   for (let i = 0; i < inputBoxes.length; i++) {
//     inputBoxes[i].addEventListener("keyup", function () {
//       let span = document.querySelectorAll(".spandesu");

//       if (isNaN(inputBoxes[i].value) == true) {
//         alert("숫자를 입력하세요");
//         inputBoxes[i].value = null;
//       }
//       if (
//         parseInt(inputBoxes[i].value) < 0 ||
//         parseInt(inputBoxes[i].value) > 20
//       ) {
//         alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
//         inputBoxes[i].value = null;
//       }
//       if (inputBoxes[i].value == "") {
//         span[i].style.display = "none";
//         return;
//       }
//       span[i].style.display = "inline";
//       span[i].innerHTML = `[예상점수] ${inputBoxes[i].value * 5}점`;
//     });
//   }
// };

let scoreResult1;
let scoreResult2;
let scoreResult3;
let scoreResult4;
let scoreResult5;

function keyup1() {
  let input1 = document.querySelector("#input1");
  let span1 = document.querySelector("#span1");
  if (isNaN(input1.value) == true) {
    alert("숫자를 입력하세요");
    input1.value = null;
  }
  if (input1.value < 0 || input1.value > 20) {
    alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
    input1.value = null;
  }
  if (input1.value == "") {
    span1.style.display = "none";
    return;
  }
  span1.style.display = "inline";
  span1.innerHTML = `[예상점수] ${input1.value * 5}점`;
  scoreResult1 = input1.value * 5;
}

function keyup2() {
  let input2 = document.querySelector("#input2");
  let span2 = document.querySelector("#span2");
  if (isNaN(input2.value) == true) {
    alert("숫자를 입력하세요");
    input2.value = null;
  }
  if (input2.value < 0 || input2.value > 20) {
    alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
    input2.value = null;
  }
  if (input2.value == "") {
    span2.style.display = "none";
    return;
  }
  span2.style.display = "inline";
  span2.innerHTML = `[예상점수] ${input2.value * 5}점`;
  scoreResult2 = input2.value * 5;
}
function keyup3() {
  let input3 = document.querySelector("#input3");
  let span3 = document.querySelector("#span3");
  if (isNaN(input3.value) == true) {
    alert("숫자를 입력하세요");
    input3.value = null;
  }
  if (input3.value < 0 || input3.value > 20) {
    alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
    input3.value = null;
  }
  if (input3.value == "") {
    span3.style.display = "none";
    return;
  }
  span3.style.display = "inline";
  span3.innerHTML = `[예상점수] ${input3.value * 5}점`;
  scoreResult3 = input3.value * 5;
}
function keyup4() {
  let input4 = document.querySelector("#input4");
  let span4 = document.querySelector("#span4");
  if (isNaN(input4.value) == true) {
    alert("숫자를 입력하세요");
    input4.value = null;
  }
  if (input4.value < 0 || input4.value > 20) {
    alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
    input4.value = null;
  }
  if (input4.value == "") {
    span4.style.display = "none";
    return;
  }
  span4.style.display = "inline";
  span4.innerHTML = `[예상점수] ${input4.value * 5}점`;
  scoreResult4 = input4.value * 5;
}
function keyup5() {
  let input5 = document.querySelector("#input5");
  let span5 = document.querySelector("#span5");
  if (isNaN(input5.value) == true) {
    alert("숫자를 입력하세요");
    input5.value = null;
  }
  if (input5.value < 0 || input5.value > 20) {
    alert("각 과목당 맞춘 문제수(0~20)를 입력하세요");
    input5.value = null;
  }
  if (input5.value == "") {
    span5.style.display = "none";
    return;
  }
  span5.style.display = "inline";
  span5.innerHTML = `[예상점수] ${input5.value * 5}점`;
  scoreResult5 = input5.value * 5;
}

function finalResultbtn() {
  // 결과 확인 목록
  let list1 = document.querySelector("#list1");
  let list2 = document.querySelector("#list2");
  let final = document.querySelector("#final");

  //과목 평균
  let avg =
    (scoreResult1 + scoreResult2 + scoreResult3 + scoreResult4 + scoreResult5) /
    5;

  // 과락과목 수
  let count = 0;
  if (scoreResult1 < 40) {
    count++;
  }
  if (scoreResult2 < 40) {
    count++;
  }
  if (scoreResult3 < 40) {
    count++;
  }
  if (scoreResult4 < 40) {
    count++;
  }
  if (scoreResult5 < 40) {
    count++;
  }

  //  평균점수 과락된 과목 수
  list1.innerHTML = `평균: ${avg}`;
  list2.innerHTML = `과락된 과목 수: ${count}과목`;

  // 합격 불합격
  if (count != 0 || avg < 60) {
    final.innerHTML = "불합격";
  } else if (count == 0 && avg >= 60) {
    final.innerHTML = "합격";
  }

  //footer(결과창) 보여주기
  document.querySelector("#footer").style.display = "block";
}

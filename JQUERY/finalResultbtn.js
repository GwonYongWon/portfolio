function finalResultbtn() {
  // 결과 확인 목록
  let list1 = document.querySelector("#list1");

  //과목 평균
  let sum =
    scoreResult1 + scoreResult2 + scoreResult3 + scoreResult4 + scoreResult5;

  list1.innerHTML = `종합 평가 점수: ${sum}점`;

  //footer(결과창) 보여주기
  document.querySelector("#footer").style.display = "block";
}

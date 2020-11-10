window.onload = init;

function init(){
    var button = document.getElementById("option1")
    button.onclick = handleButtonClick_01;

    var button = document.getElementById("option2")
    button.onclick = handleButtonClick_02;

    var button = document.getElementById("option3")
    button.onclick = handleButtonClick_03;

    var button = document.getElementById("option4")
    button.onclick = handleButtonClick_04;

  console.log("скрипт подгрузился_01");
}

var ProgressValueVar = 0;

function handleButtonClick_01() {

  var div_01  =  document.getElementById("progr_001");
  ProgressValueVar = ProgressValueVar + 1;
  let ProgressAttribVar = "width: " + ProgressValueVar + "%"
  //div_01.setAttribute("style", "width: 60%");
  div_01.setAttribute("style", ProgressAttribVar);
  var div_02  =  document.getElementById("progr_001_label");
  let ProgressLabelVar = ProgressValueVar + "%"
  div_02.textContent=ProgressLabelVar;

  console.log("скрипт подгрузился_02");
  console.log(div_01);
  console.log(div_02);
}

function handleButtonClick_02() {

  var div_01  =  document.getElementById("progr_001");
  ProgressValueVar = ProgressValueVar + 3;
  let ProgressAttribVar = "width: " + ProgressValueVar + "%"
  //div_01.setAttribute("style", "width: 60%");
  div_01.setAttribute("style", ProgressAttribVar);
  var div_02  =  document.getElementById("progr_001_label");
  let ProgressLabelVar = ProgressValueVar + "%"
  div_02.textContent=ProgressLabelVar;

  console.log("скрипт подгрузился_03");
  console.log(div_01);
}

function handleButtonClick_03() {

  var div_01  =  document.getElementById("progr_001");
  ProgressValueVar = ProgressValueVar + 7;
  let ProgressAttribVar = "width: " + ProgressValueVar + "%"
  //div_01.setAttribute("style", "width: 60%");
  div_01.setAttribute("style", ProgressAttribVar);
  var div_02  =  document.getElementById("progr_001_label");
  let ProgressLabelVar = ProgressValueVar + "%"
  div_02.textContent=ProgressLabelVar;

  console.log("скрипт подгрузился_04");
  console.log(div_01);
}

function handleButtonClick_04() {

  var div_01  =  document.getElementById("progr_001");
  ProgressValueVar = 0;
  let ProgressAttribVar = "width: " + ProgressValueVar + "%"
  //div_01.setAttribute("style", "width: 60%");
  div_01.setAttribute("style", ProgressAttribVar);
  var div_02  =  document.getElementById("progr_001_label");
  let ProgressLabelVar = ProgressValueVar + "%"
  div_02.textContent=ProgressLabelVar;

  console.log("скрипт подгрузился_05");
  console.log(div_01);
}

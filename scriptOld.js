function mainJS() {
  createTable();
  disable();
  $("#r0c0").focus();
}

var tableWidth = 5;
var tableHeight = 5;
let r = 0;
let c = 0;
var rDisable = 1;
var id2 = "";


var r0c0 = "";
var r0c1 = "";
var r0c2 = "";
var r0c3 = "";
var r0c4 = "";

var r1c0 = "";
var r1c1 = "";
var r1c2 = "";
var r1c3 = "";
var r1c4 = "";

var r2c0 = "";
var r2c1 = "";
var r2c2 = "";
var r2c3 = "";
var r2c4 = "";

var r3c0 = "";
var r3c1 = "";
var r3c2 = "";
var r3c3 = "";
var r3c4 = "";

var r4c0 = "";
var r4c1 = "";
var r4c2 = "";
var r4c3 = "";
var r4c4 = "";

var fields = [
  [],
  []
]
var r0 = [];
var r1 = [];
var r2 = [];
var r3 = [];
var r4 = [];

var r0val = [];
var r1val = [];
var r2val = [];
var r3val = [];
var r4val = [];


var r0text = "";
var r1text = "";
var r2text = "";
var r3text = "";
var r4text = "";

function createTable() {
  for (r = 0; r < tableHeight; r++) {
    $("#tbl").append("<tr id='r" + r + "'></tr>");
    
    for (c = 0; c < tableWidth; c++) {                          /*" + "r" + r + "c" + c + "*/
      $("#r" + r).append("<td class='col'><input onchange='changeSelection(" + "r" + r + "c" + c + ");' onkeydown='getKey(" + "r" + r + "c" + c + ", true);getValues();' id='r" + r + "c" + c + "' class='input' type='input' required maxlength='1' value='" + "" + "'></btn></td>");
      /*document.addEventListener('keypress', (event) => {
        if(event.key && event.key != 'Enter' && event.key != ' ' && event.key != '.' && event.key != '/' && event.key != '{' && event.key != '}' && event.key != '(' && event.key != ')' && event.key != '[' && event.key != ']' && event.key != '1' && event.key != '2' && event.key != '3' && event.key != '4' && event.key != '5' && event.key != '6' && event.key != '7' && event.key != '8' && event.key != '9' && event.key != '0'){
          changeSelection("r" + r + "c" + c);
          
        }
      })*/
    }
  }
  
  
  /* Inputs */
  r0c0 = document.getElementById("r0c0");
  r0c1 = document.getElementById("r0c1");
  r0c2 = document.getElementById("r0c2");
  r0c3 = document.getElementById("r0c3");
  r0c4 = document.getElementById("r0c4");
  
  r1c0 = document.getElementById("r1c0");
  r1c1 = document.getElementById("r1c1");
  r1c2 = document.getElementById("r1c2");
  r1c3 = document.getElementById("r1c3");
  r1c4 = document.getElementById("r1c4");
  
  r2c0 = document.getElementById("r2c0");
  r2c1 = document.getElementById("r2c1");
  r2c2 = document.getElementById("r2c2");
  r2c3 = document.getElementById("r2c3");
  r2c4 = document.getElementById("r2c4");
  
  r3c0 = document.getElementById("r3c0");
  r3c1 = document.getElementById("r3c1");
  r3c2 = document.getElementById("r3c2");
  r3c3 = document.getElementById("r3c3");
  r3c4 = document.getElementById("r3c4");
  
  r4c0 = document.getElementById("r4c0");
  r4c1 = document.getElementById("r4c1");
  r4c2 = document.getElementById("r4c2");
  r4c3 = document.getElementById("r4c3");
  r4c4 = document.getElementById("r4c4");
  
  
  /* Rows */
  r0[0] = r0c0;
  r0[1] = r0c1;
  r0[2] = r0c2;
  r0[3] = r0c3;
  r0[4] = r0c4;
  
  r1[0] = r1c0;
  r1[1] = r1c1;
  r1[2] = r1c2;
  r1[3] = r1c3;
  r1[4] = r1c4;
  
  r2[0] = r2c0;
  r2[1] = r2c1;
  r2[2] = r2c2;
  r2[3] = r2c3;
  r2[4] = r2c4;
  
  r3[0] = r3c0;
  r3[1] = r3c1;
  r3[2] = r3c2;
  r3[3] = r3c3;
  r3[4] = r3c4;
  
  r4[0] = r4c0;
  r4[1] = r4c1;
  r4[2] = r4c2;
  r4[3] = r4c3;
  r4[4] = r4c4;
}

function disable() {/* rDisable = 1*/
  for (rDisable = rDisable; rDisable < tableHeight; rDisable++) {
    for (cDisable = 0; cDisable < tableWidth; cDisable++) {
      document.getElementById("r" + rDisable + "c" + cDisable).disabled = "true";
    }
  }
}

function getValues() {
  /* Rows Values */
  /* Rows Values */
  r0val[0] = r0c0.value;
  r0val[1] = r0c1.value;
  r0val[2] = r0c2.value;
  r0val[3] = r0c3.value;
  r0val[4] = r0c4.value;
  
  r1val[0] = r1c0.value;
  r1val[1] = r1c1.value;
  r1val[2] = r1c2.value;
  r1val[3] = r1c3.value;
  r1val[4] = r1c4.value;
  
  r2val[0] = r2c0.value;
  r2val[1] = r2c1.value;
  r2val[2] = r2c2.value;
  r2val[3] = r2c3.value;
  r2val[4] = r2c4.value;
  
  r3val[0] = r3c0.value;
  r3val[1] = r3c1.value;
  r3val[2] = r3c2.value;
  r3val[3] = r3c3.value;
  r3val[4] = r3c4.value;
  
  r4val[0] = r4c0.value;
  r4val[1] = r4c1.value;
  r4val[2] = r4c2.value;
  r4val[3] = r4c3.value;
  r4val[4] = r4c4.value;
  
  
  
  r0text = r0val[0] + r0val[1] + r0val[2] + r0val[3] + r0val[4];
  r1text = r1val[0] + r1val[1] + r1val[2] + r1val[3] + r1val[4];
  r2text = r2val[0] + r2val[1] + r2val[2] + r2val[3] + r2val[4];
  r3text = r3val[0] + r3val[1] + r3val[2] + r3val[3] + r3val[4];
  r4text = r4val[0] + r4val[1] + r4val[2] + r4val[3] + r4val[4];
}


function getKey(id, selection) {
  if(selection) { /* if selection == true */
      $("input").keypress(function(event){
        changeSelection(id);
        getValues();
    });
  }
}


function changeSelection(id) {
  id = id.id;
  setTimeout(() => {$("#" + id).parent().next().children().focus()}, 5);
  
  /*setTimeout(() => {
    if(r0text != "" && document.getElementById("r0c0").value != "" && document.getElementById("r0c1").value != "" && document.getElementById("r0c2").value != "" && document.getElementById("r0c3").value != "" && document.getElementById("r0c4").value != "") {
      r0[0].disabled = false;
      r0[1].disabled = false;
      r0[2].disabled = false;
      r0[3].disabled = false;
      r0[4].disabled = false;
      
      r1[0].disabled = false;
      r1[1].disabled = false;
      r1[2].disabled = false;
      r1[3].disabled = false;
      r1[4].disabled = false;
      
      r2[0].disabled = false;
      r2[1].disabled = false;
      r2[2].disabled = false;
      r2[3].disabled = false;
      r2[4].disabled = false;
      
      r3[0].disabled = false;
      r3[1].disabled = false;
      r3[2].disabled = false;
      r3[3].disabled = false;
      r3[4].disabled = false;
      
      r4[0].disabled = false;
      r4[1].disabled = false;
      r4[2].disabled = false;
      r4[3].disabled = false;
      r4[4].disabled = false;
      
      
    }
  }, 5);*/
  
  if(id == "r0c4") {
    if(r0text != "" && document.getElementById("r0c0").value != "" && document.getElementById("r0c1").value != "" && document.getElementById("r0c2").value != "" && document.getElementById("r0c3").value != "" && document.getElementById("r0c4").value != "") {
      r0[0].disabled = true;
      r0[1].disabled = true;
      r0[2].disabled = true;
      r0[3].disabled = true;
      r0[4].disabled = true;
      
      r1[0].disabled = false;
      r1[1].disabled = false;
      r1[2].disabled = false;
      r1[3].disabled = false;
      r1[4].disabled = false;
      
      r2[0].disabled = true;
      r2[1].disabled = true;
      r2[2].disabled = true;
      r2[3].disabled = true;
      r2[4].disabled = true;
      
      r3[0].disabled = true;
      r3[1].disabled = true;
      r3[2].disabled = true;
      r3[3].disabled = true;
      r3[4].disabled = true;
      
      r4[0].disabled = true;
      r4[1].disabled = true;
      r4[2].disabled = true;
      r4[3].disabled = true;
      r4[4].disabled = true;
      
      setTimeout(() => {
        $("#r1c0").focus();
      }, 5);
      
      /* TODO: check if in wordlist */
    }
  } else if(id == "r1c4") {
    if(r1text != "" && document.getElementById("r1c0").value != "" && document.getElementById("r1c1").value != "" && document.getElementById("r1c2").value != "" && document.getElementById("r1c3").value != "" && document.getElementById("r1c4").value != "") {
      r0[0].disabled = true;
      r0[1].disabled = true;
      r0[2].disabled = true;
      r0[3].disabled = true;
      r0[4].disabled = true;
      
      r1[0].disabled = true;
      r1[1].disabled = true;
      r1[2].disabled = true;
      r1[3].disabled = true;
      r1[4].disabled = true;
      
      r2[0].disabled = false;
      r2[1].disabled = false;
      r2[2].disabled = false;
      r2[3].disabled = false;
      r2[4].disabled = false;
      
      r3[0].disabled = true;
      r3[1].disabled = true;
      r3[2].disabled = true;
      r3[3].disabled = true;
      r3[4].disabled = true;
      
      r4[0].disabled = true;
      r4[1].disabled = true;
      r4[2].disabled = true;
      r4[3].disabled = true;
      r4[4].disabled = true;
      
      setTimeout(() => {
        $("#r2c0").focus();
      }, 5);
      
      /* TODO: check if in wordlist */
    }
  } else if(id == "r2c4") {
    if(r2text != "" && document.getElementById("r2c0").value != "" && document.getElementById("r2c1").value != "" && document.getElementById("r2c2").value != "" && document.getElementById("r2c3").value != "" && document.getElementById("r2c4").value != "") {
      r0[0].disabled = true;
      r0[1].disabled = true;
      r0[2].disabled = true;
      r0[3].disabled = true;
      r0[4].disabled = true;
      
      r1[0].disabled = true;
      r1[1].disabled = true;
      r1[2].disabled = true;
      r1[3].disabled = true;
      r1[4].disabled = true;
      
      r2[0].disabled = true;
      r2[1].disabled = true;
      r2[2].disabled = true;
      r2[3].disabled = true;
      r2[4].disabled = true;
      
      r3[0].disabled = false;
      r3[1].disabled = false;
      r3[2].disabled = false;
      r3[3].disabled = false;
      r3[4].disabled = false;
      
      r4[0].disabled = true;
      r4[1].disabled = true;
      r4[2].disabled = true;
      r4[3].disabled = true;
      r4[4].disabled = true;
      
      setTimeout(() => {
        $("#r3c0").focus();
      }, 5);
      
      /* TODO: check if in wordlist */
    }
  } else if(id == "r3c4") {
    if(r3text != "" && document.getElementById("r3c0").value != "" && document.getElementById("r3c1").value != "" && document.getElementById("r3c2").value != "" && document.getElementById("r3c3").value != "" && document.getElementById("r3c4").value != "") {
      r0[0].disabled = true;
      r0[1].disabled = true;
      r0[2].disabled = true;
      r0[3].disabled = true;
      r0[4].disabled = true;
      
      r1[0].disabled = true;
      r1[1].disabled = true;
      r1[2].disabled = true;
      r1[3].disabled = true;
      r1[4].disabled = true;
      
      r2[0].disabled = true;
      r2[1].disabled = true;
      r2[2].disabled = true;
      r2[3].disabled = true;
      r2[4].disabled = true;
      
      r3[0].disabled = true;
      r3[1].disabled = true;
      r3[2].disabled = true;
      r3[3].disabled = true;
      r3[4].disabled = true;
      
      r4[0].disabled = false;
      r4[1].disabled = false;
      r4[2].disabled = false;
      r4[3].disabled = false;
      r4[4].disabled = false;
      
      setTimeout(() => {
        $("#r4c0").focus();
      }, 5);
      
      /* TODO: check if in wordlist */
    }
  } else if(id == "r4c4") {
    if(r4text != "" && document.getElementById("r4c0").value != "" && document.getElementById("r4c1").value != "" && document.getElementById("r4c2").value != "" && document.getElementById("r4c3").value != "" && document.getElementById("r4c4").value != "") {
      r0[0].disabled = true;
      r0[1].disabled = true;
      r0[2].disabled = true;
      r0[3].disabled = true;
      r0[4].disabled = true;
      
      r1[0].disabled = true;
      r1[1].disabled = true;
      r1[2].disabled = true;
      r1[3].disabled = true;
      r1[4].disabled = true;
      
      r2[0].disabled = true;
      r2[1].disabled = true;
      r2[2].disabled = true;
      r2[3].disabled = true;
      r2[4].disabled = true;
      
      r3[0].disabled = true;
      r3[1].disabled = true;
      r3[2].disabled = true;
      r3[3].disabled = true;
      r3[4].disabled = true;
      
      r4[0].disabled = true;
      r4[1].disabled = true;
      r4[2].disabled = true;
      r4[3].disabled = true;
      r4[4].disabled = true;
      
      setTimeout(() => {
        $("#r0c0").focus();
      }, 5);
      
      /* TODO: check if in wordlist */
    }
  }
  
  /*id2 = id.slice(3,5);
  
  
  rDisable = 2;
  if (id2 == tableHeight - 1) {
    rDisable++;
    for (rDisable = rDisable; rDisable < tableHeight; rDisable++) {
    for (cDisable = 0; cDisable < tableWidth; cDisable++) {
      document.getElementById("r" + rDisable + "c" + cDisable).disabled = "true";
    }
  }
  }*/
}

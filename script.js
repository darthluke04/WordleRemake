let tableHeight = 5;
let tableWidth = 5;

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
}
createTable();
let field = [];
for(let r =0; r < tableHeight; r++){
    field.push([]);
    for(let c =0; c < tableWidth; c++){
        field[r].push(document.getElementById("r" + r + "c" + c));
    }
}
let values = []
for(let r =0; r < tableHeight; r++){
    values.push([]);
    for(let c =0; c < tableWidth; c++){
        values[r].push(document.getElementById("r" + r + "c" + c).values);
    }
}
function changeSelection(id) {

    setTimeout(() => {$("#" + id).parent().next().children().focus()}, 5);

}  
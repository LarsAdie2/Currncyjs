function swapStyleSheet(sheet) {
    
    document.getElementById("stylesheet").setAttribute("href", sheet);
    
}

function initate(item) {
    var style1 = document.getElementById("stylesheet1");
    var style2 = document.getElementById("stylesheet2");   
    if(item=='Def'){
        style1.onclick = swapStyleSheet("css/style.css");
    }
    if(item=='Dark'){
        style2.onclick = swapStyleSheet("css/style2.css");
    }
}

$("#design").on('change',function(){
   alert('a');
});
function ddd(item){
    if(item=="a"){
        $("#light").html('');
        $('#light').append('<button id="stylesheet1" onclick="initate(\'Def\');ddd(\'a\');">Default</button>');
    }
    if(item=="b"){
        $("#dark").html('');
        $('#dark').append('<button id="stylesheet1" onclick="initate(\'Dark\');ddd(\'b\');">Dark</button>');
    }
}

// Changes the stylesheet of the page 
function swapStyleSheet(sheet) {    
    $("#stylesheet").attr("href", sheet);
}

// Must be in the header to work
function initate(item) {
    var style1 =$("#stylesheet1");
    var style2 =$("#stylesheet2");   
    if(item=='Def'){
        style1.onclick = swapStyleSheet("css/style.css");
    }
    if(item=='Dark'){
        style2.onclick = swapStyleSheet("css/style2.css");
    }
}

// The above is the first time the page loads
// this is for all other times, removes the button and puts in another
function changeStyleSheet(item){
    if(item=="a"){
        $("#light").html('');
        $('#light').append('<button id="stylesheet1" onclick="initate(\'Def\');changeStyleSheet(\'a\');">Default</button>');
    }
    if(item=="b"){
        $("#dark").html('');
        $('#dark').append('<button id="stylesheet1" onclick="initate(\'Dark\');changeStyleSheet(\'b\');">Dark</button>');
    }
}

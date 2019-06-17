// A function to keep check on amount of rows
function amountOfRows(index){ 
    if(index!=""&&typeof(index)!="undefined"){
        if(index=='+'){
            var numberOfRow=0;
            var minAmount=parseInt($('#num2').val());          
            var maxAmount=parseInt($('#num2').val())+parseInt($('#maxRows option:selected').val());
            if(maxAmount>amount){
                maxAmount=amount;
                $('#num2').hide();
            }else{
                $('#num2').show();
            }
            if(minAmount<1){
                minAmount=0;
                $('#num1').hide();
            }else{
                $('#num1').show();
            }
            $('#num1').val(minAmount);
            $('#num2').val(maxAmount);
            $('#current').text(Number(minAmount+1)+' to '+maxAmount);
        }
        if(index=='-'){
            var numberOfRow=0;
            var minAmount=parseInt($('#num1').val())-parseInt($('#maxRows option:selected').val());
            if(minAmount<1){
                minAmount=0;
                $('#num1').hide();
            }else{
                $('#num1').show();
            }
            if(maxAmount>amount){
                maxAmount=amount;
                $('#num2').hide();
            }else{
                $('#num2').show();
            }
            var maxAmount=parseInt($('#num1').val());
            $('#num1').val(minAmount);
            $('#num2').val(maxAmount);
            $('#current').text(Number(minAmount+1)+' to '+maxAmount);
        }     
    }else{
        var numberOfRow=0;
        var maxAmount=parseInt($('#maxRows option:selected').val());
        if(maxAmount>amount){
            maxAmount=amount+1;
            $('#num2').hide();
        }else{
            $('#num2').show();
        }
        var minAmount=0;
        $('#num1').val(minAmount);
        $('#num2').val(maxAmount);
        $('#num1').hide();
        $('#current').text(' '+Number(minAmount+1)+' to '+maxAmount);
    }
    $('#ratioTable tbody tr').each(function(){
        if(numberOfRow<maxAmount&&numberOfRow>=minAmount){
            $(this).show();
        }else{
            $(this).hide();
        }
    numberOfRow++;
    });      
}

// Sorts rows, redirects
function sortFunction(){
    if($('#sortOrder').val()=='Asc'){
        sortRows(1,'Asc');
    }else if($('#sortOrder').val()=='Desc'){
        sortRows(1,'Desc');
    }else{
        sortRows(1,'Alpha');
    }
}

function sortRows(col,dir){
    $('#ratioTable tbody tr').show();
    var rows = $('#ratioTable tbody tr').get();
    var t;
    if(!dir || dir=='Desc') {
        t=-1;
    } else if(dir=='Asc') {
        t=1;
    }
    rows.sort(function(a, b) {
        if(dir=='Alpha'){
            var A = $(a).children('td').eq(0).text().toUpperCase();
            var B = $(b).children('td').eq(0).text().toUpperCase();
        }else{
            var A = Number($(a).children('td').eq(1).text().trim());
            var B = Number($(b).children('td').eq(1).text().trim());
        }
        if(A < B) {
            return -t;
        }
        if(A > B) {
            return t;
        }
    return 0;
    });
    $.each(rows, function(index, row) {
        $('#ratioTable').children('tbody').append(row);
    });
}
        
function countrysearch() {
    var value=$('#countrysearchinput').val().toUpperCase();
    var n="";
    $('#ratioTable tr').each(function(){
        if($(this).children(0).text().indexOf(value)>-1){
            $(this).show();
            n++;
        }else{
            $(this).hide();
        } 
    });
    $('#current').text(' '+1+' to '+n);
}
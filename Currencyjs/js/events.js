// set endpoint and your access key
// get the most recent exchange rates via the "latest" endpoint:
$('#getData').on('click',function(){
    var endpoint ='';
    if($('#dateinput').val()!=""){
        endpoint =$('#dateinput').val();
    }else{
        endpoint ='latest';
    }
    var access_key = 'f14f5c7f95305ad5b49ecd23504569bf';
    $.ajax({
        url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key,   
        dataType: 'jsonp',
        success: function(json) {
            $('#ratioDiv').html('');
            // Table frame
            var n='<table id="ratioTable" width="90%"><thead><tr><th width="45%">Country</th><th width="45%">Ratio</th></tr></thead><tbody>';
            // Using a global variable for this
            amount=0;
            // Rows of table
            $.each(json.rates, function( index, value ) {
                n+='<tr><td>'+index+'</td><td>'+value.toFixed(2)+'</td></tr>';
                amount++;
            });
        n+='</tbody></table>';
        // Write it in the div
        $('#ratioDiv').append(n);
        // sort the table
        sortFunction();
        // Amount of rows
        amountOfRows();
        $('#pagination').show();
        $('#countrysearch').show();
        }
    });
});

$('#maxRows,#sortOrder').on('change',function(){
    $('#countrysearchinput').val('');
    sortFunction();
    amountOfRows();
});
        
$('#countrysearchinput').on('keyup',function(){
    sortFunction();
    amountOfRows();
    if($(this).val()!=""){
        countrysearch();
    }
});

$('#num1,#num2').on('click',function(e){  
    sortFunction();
    if($(this).attr('id')=='num1'){
        amountOfRows('-');
    }
    if($(this).attr('id')=='num2'){
        amountOfRows('+');
    }   
});
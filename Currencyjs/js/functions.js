// A function to keep check on amount of rows
// This is the main function 
function amountOfRows(index){ 
    // index is empty if I havnt pressed Next or Prev
    // undefined is error handling, it should take the values + or -. 
    if(index!=""&&typeof(index)!="undefined"){
        // Add values
        if(index=='+'){
            // This is a counter
            var numberOfRow=0;
            // Put the value of next in the value of prev
            var minAmount=parseInt($('#num2').val());    
            // Add amount of shown rows and add that to next
            // This is one way to solve it there are of course many
            var maxAmount=parseInt($('#num2').val())+parseInt($('#maxRows option:selected').val());
            // We dont want next to go past the amount of value
            if(maxAmount>amount){
                maxAmount=amount;
                // No need to show next ehen there arent more
                $('#num2').hide();
            }else{
                $('#num2').show();
            }
            // This only happens the first time
            if(minAmount<1){
                minAmount=0;
                $('#num1').hide();
            }else{
                $('#num1').show();
            }
            // Add values to buttons and show row numbers
            $('#num1').val(minAmount);
            $('#num2').val(maxAmount);
            $('#current').text(Number(minAmount+1)+' to '+maxAmount);
        }
        if(index=='-'){
            // Press previous
            var numberOfRow=0;
            // Take number of rows minus the value in prev
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
            // next is the value in prev
            var maxAmount=parseInt($('#num1').val());
            $('#num1').val(minAmount);
            $('#num2').val(maxAmount);
            $('#current').text(Number(minAmount+1)+' to '+maxAmount);
        }     
    }else{
        // Every other use of amountofrows
        var numberOfRow=0;
        var maxAmount=parseInt($('#maxRows option:selected').val());
        // Must exceed amount to not show next
        if(maxAmount>amount){
            maxAmount=amount+1;
            $('#num2').hide();
        }else{
            $('#num2').show();
        }
        // doesnt show previous
        var minAmount=0;
        $('#num1').val(minAmount);
        $('#num2').val(maxAmount);
        $('#num1').hide();
        $('#current').text(' '+Number(minAmount+1)+' to '+maxAmount);
    }
    // Shows the values that are within min and max
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
// Asc - from lowest to highest
// Des - highest to lowest
// Alpha - after the country name
function sortFunction(){
    if($('#sortOrder').val()=='Asc'){
        sortRows(1,'Asc');
    }else if($('#sortOrder').val()=='Desc'){
        sortRows(1,'Desc');
    }else{
        sortRows(1,'Alpha');
    }
}

// Sort the rows 
function sortRows(col,dir){
    // Shows all rows for a short while since im working on all visible rows
    $('#ratioTable tbody tr').show();
    // Gets thes to a variable
    var rows = $('#ratioTable tbody tr').get();
    var t;
    if(!dir || dir=='Desc') {
        t=-1;
    } else if(dir=='Asc') {
        t=1;
    }
    // Compares two values and switches place if A is higher or lower than B
    // iterates until 0 is returned
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
    // Puts the row in the table
    // The next function makes sure I just show the amount I want
    $.each(rows, function(index, row) {
        $('#ratioTable').children('tbody').append(row);
    });
}
  
// A function to show search
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
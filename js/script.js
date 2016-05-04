$('#minus').click(function(){    
    var h = $('#chat-space').height()+'px';
    $('#chat-plus').hide('Drop');
    $('#chat-space').height(h);
    $('#foot').show();
});
$('#minus-back').click(function(){
    var h = $('#chat-space').height()+'px';  
    $('#chat-plus-back').hide('Drop');
    $('#chat-space').height(h);
    $('#foot-back').show();
})
$('#plus').click( function(){    
    $("#chat-minus").slideToggle( function(){
        $('#chat-plus').show('Scale'); //clip
        });
});
function hideShowCompenents  (id){ 
     if(document.getElementById(id).style.visibility == 'hidden' ){
         document.getElementById(id).style.visibility ='visible';
        }
        else if (document.getElementById(id).style.display=='none' ){
            document.getElementById(id).style.display ='block'; 
        }
        else {
            document.getElementById(id).style.visibility = 'hidden';
        }
};
$(document).ready(function(){     
    $('#chat-plus').css({'display': 'none'});
    $('#foot').css({'display': 'block'});
    $('#foot-back').css({'display': 'none'});
});
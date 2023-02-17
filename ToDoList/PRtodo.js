$(document).ready(function(){
    $('#error').append(`It is EMPTY`).fadeOut(-1000);
    $('#added').append(`Item Added`).fadeOut(-1000);
    $('#deleted').append(`Item Deleted`).fadeOut(-1000);
    $('#allDel').append(`All Items Deleted`).fadeOut(-1000);
    $("#btn").click(
        function(){
            var additem = $('input[name=inp]').val();
            console.log(additem)
            if(additem==""){
                $('#error').fadeIn().fadeOut(500);
            }
            else{
            $('ol').append('<li>'+additem+' </li>');
            $('#added').fadeIn().fadeOut(500);
            }
        }
    )

    $('input').focus(function(){
        $(this).val('');
    })

    $(document).on('dblclick','li',function(){
        $(this).remove();
        $('#deleted').fadeIn().fadeOut(500);
    });

    $(document).on('click','#clear',function(){
        $('li').fadeOut();
        $('#allDel').fadeIn().fadeOut(500);
    });

    $('ol').sortable();
})
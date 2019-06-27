var isMobile = false;

if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}



$('#round_table').hover(function () {
    $('#round_table').children('a').css({"display":"block"});
    $('#round_table').children('#eye_on').show().click(function () {
        $('#round_table').children('#eye_on').hide();
        $('#round_table').children('a').children('#shadow').css({"display":"block"});
        $('#round_table').children('#eye_off').show().click(function () {
            $('#round_table').children('#eye_off').hide();
            $('#round_table').children('a').children('#shadow').hide();
            $('#round_table').children('#eye_on').show();
        })
    });
});

$('#main_hall').hover(function () {
    $('#main_hall').children('a').css({"display":"block"});
    $('#main_hall').children('#eye_on').show().click(function () {
        $('#main_hall').children('#eye_on').hide();
        $('#main_hall').children('a').children('#shadow').css({"display":"block"});
        $('#main_hall').children('#eye_off').show().click(function () {
            $('#main_hall').children('#eye_off').hide();
            $('#main_hall').children('a').children('#shadow').hide();
            $('#main_hall').children('#eye_on').show();
        })
    });
});

$('#battle_field').hover(function () {
    $('#battle_field').children('a').css({"display":"block"});
    $('#battle_field').children('#eye_on').show().click(function () {
        $('#battle_field').children('#eye_on').hide();
        $('#battle_field').children('a').children('#shadow').css({"display":"block"});
        $('#battle_field').children('#eye_off').show().click(function () {
            $('#battle_field').children('#eye_off').hide();
            $('#battle_field').children('a').children('#shadow').hide();
            $('#battle_field').children('#eye_on').show();
        })
    });
});

$('#library_room').hover(function () {
    $('#library_room').children('a').css({"display":"block"});
    $('#library_room').children('#eye_on').show().click(function () {
        $('#library_room').children('#eye_on').hide();
        $('#library_room').children('a').children('#shadow').css({"display":"block"});
        $('#library_room').children('#eye_off').show().click(function () {
            $('#library_room').children('#eye_off').hide();
            $('#library_room').children('a').children('#shadow').hide();
            $('#library_room').children('#eye_on').show();
        })
    });
});

$('#pool_of_memory').hover(function () {
    $('#pool_of_memory').children('a').css({"display":"block"});
    $('#pool_of_memory').children('#eye_on').show().click(function () {
        $('#pool_of_memory').children('#eye_on').hide();
        $('#pool_of_memory').children('a').children('#shadow').css({"display":"block"});
        $('#pool_of_memory').children('#eye_off').show().click(function () {
            $('#pool_of_memory').children('#eye_off').hide();
            $('#pool_of_memory').children('a').children('#shadow').hide();
            $('#pool_of_memory').children('#eye_on').show();
        })
    });
});

$('#dungeon').hover(function () {
    $('#dungeon').children('a').css({"display":"block"});
    $('#dungeon').children('#eye_on').show().click(function () {
        $('#dungeon').children('#eye_on').hide();
        $('#dungeon').children('a').children('#shadow').css({"display":"block"});
        $('#dungeon').children('#eye_off').show().click(function () {
            $('#dungeon').children('#eye_off').hide();
            $('#dungeon').children('a').children('#shadow').hide();
            $('#dungeon').children('#eye_on').show();
        })
    });
});


if(!isMobile){

    $('#round_table').mouseleave(function () {
        $('#round_table').children('a').hide();
        $('#round_table').children('#eye_on').hide();
        if ($('#round_table').children('#eye_off').show()){
            $('#round_table').children('#eye_off').hide();
            $('#round_table').children('a').children('#shadow').hide();
        }
    });


    $('#main_hall').mouseleave(function () {
        $('#main_hall').children('a').hide();
        $('#main_hall').children('#eye_on').hide();
        if ($('#main_hall').children('#eye_off').show()){
            $('#main_hall').children('#eye_off').hide();
            $('#main_hall').children('a').children('#shadow').hide();
        }
    });

    $('#battle_field').mouseleave(function () {
        $('#battle_field').children('a').hide();
        $('#battle_field').children('#eye_on').hide();
        if ($('#battle_field').children('#eye_off').show()){
            $('#battle_field').children('#eye_off').hide();
            $('#battle_field').children('a').children('#shadow').hide();
        }
    });

    $('#library_room').mouseleave(function () {
        $('#library_room').children('a').hide();
        $('#library_room').children('#eye_on').hide();
        if ($('#library_room').children('#eye_off').show()){
            $('#library_room').children('#eye_off').hide();
            $('#library_room').children('a').children('#shadow').hide();
        }
    });

    $('#pool_of_memory').mouseleave(function () {
        $('#pool_of_memory').children('a').hide();
        $('#pool_of_memory').children('#eye_on').hide();
        if ($('#pool_of_memory').children('#eye_off').show()){
            $('#pool_of_memory').children('#eye_off').hide();
            $('#pool_of_memory').children('a').children('#shadow').hide();
        }
    });



    $('#dungeon').mouseleave(function () {
        $('#dungeon').children('a').hide();
        $('#dungeon').children('#eye_on').hide();
        if ($('#dungeon').children('#eye_off').show()){
            $('#dungeon').children('#eye_off').hide();
            $('#dungeon').children('a').children('#shadow').hide();
        }
    });
}
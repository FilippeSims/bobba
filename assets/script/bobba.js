	    $(function(){
        var x = 0;
        setInterval(function(){
            x+=1;
            $('#nuvens').css('background-position', x + 'px 0');
        }, 60);
    })
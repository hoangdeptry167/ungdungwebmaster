$(function(){
    $(window).scroll(function(event){

        var vitribody = $('html,body').scrollTop();
        console.log('vi tri body: ' + vitribody);
        if(vitribody > 0)
        {
            console.log('được rồi');
            $('.tongquat3').addClass('xuathientongquat3');
            
            $('.tongquat').addClass('bienmat');

            $('.tongquat2').addClass('xuathientongquat2');

            $('.menu').addClass('doimaumenu');


        }
        if(vitribody == 0){
            $('.tongquat').removeClass('bienmat');
            $('.tongquat3').removeClass('xuathientongquat3');
            $('.tongquat2').removeClass('xuathientongquat2');
            $('.menu').removeClass('doimaumenu');
        }
        if(vitribody > 0 && vitribody < 300)
        {
            $('.hinhtrongmuiten').addClass('dichlen');
            $('.hinhtrongmuiten').removeClass('dichxuong');
        }
        else{
            $('.hinhtrongmuiten').addClass('dichxuong');
        }
    })
})

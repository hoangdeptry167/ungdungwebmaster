
$(function(){

    new WOW().init();

    // add class vao ham 

    $('.nutbammenu').click(function (event) { 
        //code addClass day menu ra
        $('.menu').toggleClass('daymenura');

        $('.modau').toggleClass('daytheomenu');

        $('.momo').toggleClass('momoxuathien');

        $('.div3').toggleClass('daytheomenu');
    });


    $('.menu').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.modau').removeClass('daytheomenu');

        $('.momo').removeClass('momoxuathien');

        $('.div3').removeClass('daytheomenu');
    })

    $('.div3').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.div3').removeClass('daytheomenu');

        $('.modau').removeClass('daytheomenu');

        $('.momo').removeClass('momoxuathien');
    })

    $('.modau').click(function(event){
        $('.menu').removeClass('daymenura');

        $('.modau').removeClass('daytheomenu');
    })

    $('.momo').click(function (event) {
        $('.momo').removeClass('momoxuathien');
        
        $('.div3').removeClass('daytheomenu');
    })
    // hieu ứng scroll
    $('.menu2').click(function(event) {
        $('html,body').animate({scrollTop: 1},1400);

        $('.menu').addClass('daymenura');

        $('.tongquat').addClass('bienmat');

        $('.tongquat3').addClass('xuathientongquat3');
     });
     $('.nut_1').click(function(event){
        $('html,body').animate({scrollTop:1},500,"easeInOutSine");
     })

    

     $('.menu1').click(function(event) {
        $('html,body').animate({scrollTop: 0},1400);

        $('.tongquat').removeClass('bienmat');

        $('.menu').addClass('daymenura');

        $('.tongquat3').removeClass('xuathientongquat3');
     });

     $('.menu3').click(function(event){
         $('html,body').animate({scrollTop:1107},1400,"easeInOutSine");
     })
     $('.menu4').click(function(event) {
        $('html,body').animate({scrollTop:2750},1000,"easeInOutSine");
    })
    $('.hinhtrongmuiten').click(function(event){
        $('html,body').animate({scrollTop:1107},200,"easeInElastic");
    })
    
    //  Phần div tìm hiểu chung
    $('.chuyennoidung').click(function(event){
        $('.noidungtimhieuchung2').addClass('bienmatnoidung_1div2 flipOutY');
        $('.noidungtimhieuchung3').addClass('bienmatnoidung_1div2 fadeOutUp');
        $('.noidungtimhieuchung4').addClass('bienmatnoidung_1div2 fadeOutUp');
        $('.noidung_2div2').addClass('xuathien_2div2');
        $('.noidung_2div2').addClass('flipInX');
        $('.hinhnen_2div2').addClass('xuathien_2div2');
        $('.chuyennoidung').addClass('vohieuhoachuyennoidung');
        $('.chuyennoidung_1div2').removeClass('vohieuhoachuyennoidung');
    })

    $('.chuyennoidung_1div2').click(function(event){
        $('.noidungtimhieuchung2').removeClass('bienmatnoidung_1div2 flipOutY');
        $('.noidungtimhieuchung3').removeClass('bienmatnoidung_1div2 fadeOutUp');
        $('.noidungtimhieuchung4').removeClass('bienmatnoidung_1div2 fadeOutUp');
        $('.noidung_2div2').removeClass('xuathien_2div2');
        $('.noidung_2div2').removeClass('flipInX');
        $('.hinhnen_2div2').removeClass('xuathien_2div2');
        $('.chuyennoidung').removeClass('vohieuhoachuyennoidung');
        $('.chuyennoidung_1div2').addClass('vohieuhoachuyennoidung');
    })
})



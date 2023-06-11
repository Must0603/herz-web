window.onload = function(){
    $('body').addClass('loaded')
}

//====================
$(function(){
    if($('header').length > 0){
        $('header').load('/includes/user.header.html', function(){
            if(window.innerWidth < 1025){
                $('.gnb li > p').click(function(e){
                    e.preventDefault();
      
                    $(this).parents('li').toggleClass('active').siblings().removeClass('active')
                })
            }
        })
    }
    if($('footer').length > 0){
        $('footer').load('/includes/user.footer.html')
    }

})
//====================
//--- btn common
function btn_panel(){
    $('html, body, header .btn_panel').toggleClass('active')
}

//====================
function maxLeng(el, maxlength) {
    if (el.value.length > maxlength) {
        el.value = el.value.substr(0, maxlength);
    }

    $('.bx_phone + span.t_red').fadeOut(150)
}

function triggerClick(obj){
    $(obj).click()
}

function lb_chk(obj){
    if($(obj).is(':checked')){
        $(obj).parent('.lb_chk').addClass('active').siblings('.lb_chk').removeClass('active')
    }
}

//--- validation
function replaceKR(obj){
    obj.value = obj.value.replace(/[^A-Za-z0-9]/gi, '')
}
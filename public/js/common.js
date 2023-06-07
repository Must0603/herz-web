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
function triggerClick(obj){
    $(obj).click()
}

//--- validation
function replaceKR(obj){
    obj.value = obj.value.replace(/[^A-Za-z0-9]/gi, '')
}
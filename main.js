
let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.hide();



jQuery(function($) {
$(document).ready(function() {

$('.catalog_item').css('height', $(window).height() - 90);

$(document).on('click', '.openTab', function() {
    
    var thisTab = $(this).data('tab');
    var thisTabObject = $('.tab.tab_' + thisTab);
    if (!thisTabObject) {
        return false;
    }
    
    $('.tab').removeClass('tab_active')
    thisTabObject.addClass('tab_active');
    
    $('ul').find('li').removeClass('active');
    $(this).parent().addClass('active');
    
    return false;
    
});

$(document).on('click', '.openProduct', function() {
    
    $('.tab').removeClass('tab_active');
    $('.tab_product').addClass('tab_active');
    
    return false;
    
});

$(document).on('click', '.item_gradient', function() {
        
    $(this).parent().parent().addClass('open');
    $(this).remove();
    
    return false;
    
});

});
});

let minus = document.querySelectorAll('.item_qm')
let plus = document.querySelectorAll('.item_qp')
let num = document.querySelector('.item_q input')

plus.forEach(btn => {
    btn.onclick=()=>{
num.value++
    }
});
minus.forEach(btn => {
    btn.onclick=()=>{
num.value--
if (num.value <=0) {
    num.value=0
}
    }
});


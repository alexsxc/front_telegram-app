let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.hide();



jQuery(function ($) {
    $(document).ready(function () {

        $('.catalog_item').css('height', $(window).height() - 90);

        $(document).on('click', '.openTab', function () {

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

        $(document).on('click', '.openProduct', function () {

            $('.tab').removeClass('tab_active');
            $('.tab_product').addClass('tab_active');

            return false;

        });

        $(document).on('click', '.item_gradient', function () {

            $(this).parent().parent().addClass('open');
            $(this).remove();

            return false;

        });

    });
});

// modal
const modal = document.getElementById('myModal')
const closeModal = document.querySelector('.delete-btn')

function
    openModal() {
    modal.style.display = 'flex'
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}/* 
closeModal.onclick = function () {
    modal.style.display = 'none'
} */

// calc
let minus = document.querySelector('.white_min')
let plus = document.querySelector('.white_pl')
let main_goods = document.querySelectorAll(".openProduct")
let done_modal = document.querySelector('.contaienr')
let middle_add_btn = document.querySelector('.middle_add_btn')
let quantity_goods_btn = document.querySelector('.quantity_goods')
let num_goods_add_num = document.querySelector('.num_goods_add')
let left_back = document.querySelector('.left_back')
let fixed_done_manipulator = document.querySelector('.fixed_done_manipulator')

middle_add_btn.onclick = () => {
    middle_add_btn.style.display = "none"
    quantity_goods_btn.style.display = "flex"
}

plus.onclick = () => {
    num_goods_add_num.innerHTML++
}

minus.onclick = () => {
    num_goods_add_num.innerHTML--
    if (num_goods_add_num.innerHTML <= 0) {
        num_goods_add_num.innerHTML = 1
    }
    console.log('click');
}

left_back.onclick = () => {
    done_modal.style.display = "block"
    fixed_done_manipulator.style.display = "none"
}
main_goods.forEach(btn => {
    btn.onclick = () => {
        done_modal.style.display = "none"
        fixed_done_manipulator.style.display = "flex"

    }
})



var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  let catalog_item= document.querySelectorAll('.item_length .item')
let num_goods = document.querySelector('.num_goods')

num_goods.innerHTML= catalog_item.length
  console.log(catalog_item);
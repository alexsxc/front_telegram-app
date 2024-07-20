let tg = window.Telegram.WebApp;
tg.expand();

jQuery(function($) {
    $(document).ready(function() {
        $('.catalog_item').css('height', $(window).height() - 90);

        $(document).on('click', '.openTab', function() {
            var thisTab = $(this).data('tab');
            var thisTabObject = $('.tab.tab_' + thisTab);
            if (!thisTabObject) {
                return false;
            }
            $('.tab').removeClass('tab_active');
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

        // Новый код jQuery для обработки кликов по элементам .item
        $(document).on('click', '.item_length .item', function() {
            $('.tab_orders').hide();
            $('.orders_open_window').show();
        });

        // Обработка клика по кнопке back___btn
        $(document).on('click', '.back___btn', function() {
            $('.orders_open_window').hide();
            $('.tab_orders').show();
            $('.fixed_done_manipulator_order').hide();
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

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}
closeModal.onclick = function() {
    modal.style.display = 'none'
}


// api for create product interface on backend
document.addEventListener('DOMContentLoaded', () => {
    const saveBtn = document.querySelector('.save-btn');
    const deleteBtn = document.querySelector('.delete-btn');

    saveBtn.addEventListener('click', () => {
        const productId = document.getElementById('product-id').textContent;
        const productName = document.getElementById('product-name').value;
        const price = document.getElementById('price').value;
        const discount = document.getElementById('discount').value;
        const quantity = document.getElementById('quantity').value;
        const managerApproval = document.getElementById('manager-approval').checked;
        const active = document.getElementById('active').checked;
        const description = document.getElementById('description').value;
        const photo = document.getElementById('photo').files[0];

        const formData = new FormData();
        formData.append('productId', productId);
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('discount', discount);
        formData.append('quantity', quantity);
        formData.append('managerApproval', managerApproval);
        formData.append('active', active);
        formData.append('description', description);
        formData.append('photo', photo);

        fetch('/api/products', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });

    deleteBtn.addEventListener('click', () => {
        document.getElementById('product-name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('discount').value = '';
        document.getElementById('quantity').value = '';
        document.getElementById('manager-approval').checked = false;
        document.getElementById('active').checked = false;
        document.getElementById('description').value = '';
        document.getElementById('photo').value = '';

        const editButtons = document.querySelectorAll('.btn.addToCart');
        const editForm = document.querySelector('.container');
        const saveBtn = document.querySelector('.save-btn');
        const deleteBtn = document.querySelector('.delete-btn');

        editButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const item = event.target.closest('.item');
                const title = item.querySelector('.item_title').textContent;
                const price = item.querySelector('.price').textContent.replace(' &#8381;', '').replace(' ', '');
                const oldPrice = item.querySelector('.old_price').textContent.replace(' &#8381;', '').replace(' ', '');
                const quantity = item.querySelector('.item_stock span').textContent;

                document.getElementById('product-name').value = title;
                document.getElementById('price').value = price;
                document.getElementById('discount').value = ((oldPrice - price) / oldPrice * 100).toFixed(2) + '%';
                document.getElementById('quantity').value = quantity;
                document.getElementById('description').value = title;

                editForm.style.display = 'block';
            });
        });
    });
});
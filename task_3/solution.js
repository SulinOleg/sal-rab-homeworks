function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

   let item = {id: 1, title: 'Пицца', count: 5, price: '500.00'};    
   let sum = item.count * item.price;
   let itemCountText = '' + item.count + ' x ' + item.price + ' ₽ = ' + sum + ' ₽';

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}

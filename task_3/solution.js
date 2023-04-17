function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины
   
   let sum = item.count * item.price;
   let itemCountText = '' + item.count + ' × ' + item.price + ' ₽ = ' + sum + ' ₽';

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}

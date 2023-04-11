function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная сумма для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    let shippingSum;// создайте переменную shippingSum
    if(sum == 0 || sum >= min) {
        shippingSum = 0; // то shippingSum присвоить значение 0
    } else shippingSum = shipping;
    
    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная сумма для скидки
    let discountPart = discount; // величина скидки в процентах

    let discountSum; // создайте переменную discountSum
    if(sum >= min) { // если productsSum больше или равно discountMinSum,
        discountSum = discount / 100 * sum; // то присвойте discountSum значение discountPart процентов от productsSum,
    } else discountSum = 0; // иначе присвойте discountSum значение 0
    
    
    return discountSum;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    let totalSum = sum - discountMinSum - discountPart + shippingFreeMinSum + shippingPrice;// прибавьте к totalSum значение shippingSum

    let freeShipping;// создайте переменную freeShipping
    freeShipping = false || shippingSum > 0; // запишите без использования if или любых других условий:
    // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}

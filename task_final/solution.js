
function sendRequest(name, phone, address, goods, sum) {
  let data = {goods: [], order: {}};
  
  let countOfGoods = goods.length;

  let goods = {title, count};

  for (let i = 0; i < countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
        data.goods.push(goods[i].count);
    }

    address = "" + "ул. " + address.street + "," + "дом  " + address.house + "," + address.entrance + " подъезд" + "," + address.floor + " этаж" + "," + "кв " + address.flat;
    data.order.address = address
    data.order.sum = sum;
    data.client = name + " " + phone;

    let jsonData = JSON.stringify({data});

    return jsonData;
}

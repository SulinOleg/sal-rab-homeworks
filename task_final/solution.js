
 {
    data: {
      client: "Иван +7(987)65-43-210",
      order: {
        address: "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв. 53",
        sum: 900
       },
       goods: [
         {
           title: "Пицца",
           count: 2
         }
      ]
    }
 };

function sendRequest(name, phone, address, goods, sum) {
    let data = {
      client: {
        name,
        phone
      },
      order: {
        address = {
          street,
          house,
          entrance,
          floor,
          flat,
        },
        sum
      },
      goods: [
        title,
        count
      ]
  };

    let countOfGoods = goods.length;

    for (let i = 0; i <= countOfGoods; i += 1) {
        data.goods.push(goods[i].title);
    }

    data.order.address = "" + "ул. " + street + "," + "дом  " + house + "," + entrance + " подъезд" + "," + floor + " этаж" + "," + "кв " + flat;
    data.order.sum = sum;
    data.client = "" + name + " " + phone;

    let jsonData = JSON.stringify({data});

    return jsonData;
}
let objects = [
    { name: 'Кирилл', surname: 'Кириллов' },
    { name: 'Влад', surname: 'Владович' },
    { name: 'Игорь', surname: 'Игорович' }
    ]

let keys = Object.keys(objects);
let values = Object.values(objects);
let entries = Object.entries(objects);

entries.map(([index, item]) => console.log(index, item));
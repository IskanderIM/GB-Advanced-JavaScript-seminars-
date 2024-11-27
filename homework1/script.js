//task 1
const albums = [{
    title: "Mutter",
    artist: "Rammstein",
    year: "2001",
},

{
    title: "Krylia",
    artist: "Nautilus Pompilius",
    year: "1996",
},

{
    title: "Hypnotize",
    artist: "System of a Down",
    year: "2006",
},
];

const musicCollection = {
    albums: [...albums],
    [Symbol.iterator]: function () {
        let countAlbums = 0;
        return {
            next: () => {
                if (countAlbums >= this.albums.length) {
                    return { done: true };
                } else {
                    return {
                        value: this.albums[countAlbums++],
                        done: false,
                    };
                }
            },
        };
    },
};
for (const albums of musicCollection) {
    console.log(`${albums.title} - ${albums.artist} (${albums.year})`);
}

//task 2
// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

let cooks = new Map();
cooks.set("Виктор", "Пицца").set("Ольга", "Суши").set("Дмитрий", "Десерты");

console.log(`Виктор - специализация: ${cooks.get("Виктор")}`);
console.log(`Ольга - специализация: ${cooks.get("Ольга")}`);
console.log(`Дмитрий - специализация: ${cooks.get("Дмитрий")}`);
console.log();

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

let dishes = new Map();
dishes
    .set("Пицца 'Маргарита'", "Виктор")
    .set("Пицца 'Пепперони'", "Виктор")
    .set("Суши 'Филадельфия'", "Ольга")
    .set("Суши 'Калифорния'", "Ольга")
    .set("Тирамису", "Дмитрий")
    .set("Чизкейк", "Дмитрий");

console.log(`Пицца "Маргарита" - повар: ${dishes.get("Пицца 'Маргарита'")}`);
console.log(`Пицца "Пепперони" - повар: ${dishes.get("Пицца 'Пепперони'")}`);
console.log(`Суши "Филадельфия" - повар: ${dishes.get("Суши 'Филадельфия'")}`);
console.log(`Суши "Калифорния" - повар: ${dishes.get("Суши 'Калифорния'")}`);
console.log(`Тирамису - повар: ${dishes.get("Тирамису")}`);
console.log(`Чизкейк - повар: ${dishes.get("Чизкейк")}`);
console.log();

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

//заказы всех клиентов
let orders = new Map();

//заказ первого клиента
let guest1 = { name: "Алексей" };
let guestOrder1 = new Set();
guestOrder1.add("Пиццу 'Пепперони'").add("Тирамису");

//заказ второго клиента
let guest2 = { name: "Мария" };
let guestOrder2 = new Set();
guestOrder2.add("Суши 'Калифорния'").add("Пиццу 'Маргарита'");

//заказ третьего клиента
let guest3 = { name: "Ирина" };
let guestOrder3 = new Set();
guestOrder3.add("Чизкейк");

// добавляем заказы клиентов в список
orders
    .set(guest1, guestOrder1)
    .set(guest2, guestOrder2)
    .set(guest3, guestOrder3);

console.log(`Клиент ${guest1.name} заказал: ${[...orders.get(guest1)]}`);
console.log(`Клиент ${guest2.name} заказала: ${[...orders.get(guest2)]}`);
console.log(`Клиент ${guest3.name} заказала: ${[...orders.get(guest3)]}`);
import { faker } from "@faker-js/faker";

const products = [
  {
    id: faker.random.numeric(5),
    name: "Apple Watch",
    model: "Series 5 SE",
    imgURL: require("./assets/images/apple-watch.png"),
    rate: faker.datatype.number({ max: 10 }) / 2,
    price: faker.commerce.price(),
    description: faker.random.words(200),
  },
];

export default products;

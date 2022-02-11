import { PizzaList } from "./PizzaList";

test("the pizza data is correct", () => {
  expect(PizzaList).toMatchSnapshot();
  expect(PizzaList).toHaveLength(4);
  expect(PizzaList.map((Pizza) => Pizza.name)).toEqual([
    "Chicago Pizza",
    "Neapolitan Pizza",
    "New York Pizza",
    "Sicilian Pizza",
  ]);
});

for (let i = 0; i < PizzaList.length; i += 1) {
  it(`pizza[${i}] should have properties (id, name, image, desc, price)`, () => {
    expect(PizzaList[i]).toHaveProperty("id");
    expect(PizzaList[i]).toHaveProperty("name");
    expect(PizzaList[i]).toHaveProperty("image");
    expect(PizzaList[i]).toHaveProperty("desc");
    expect(PizzaList[i]).toHaveProperty("price");
  });
}

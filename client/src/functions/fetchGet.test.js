import fetchGet from "./fetchGet";
jest.mock("./fetchGet", () => () => {
   jest.fn(() => {
    Promise.resolve({
      json: () => Promise.resolve({ data: { name: "nick"}}),
    });
  });
});

it("should make a get api call", async () => {
  const data = await fetchGet();
  console.log(data)
  expect(data).not.toBeNull();
});

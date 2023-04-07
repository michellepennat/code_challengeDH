import { ProductApi } from "./api";
describe("Api", () => {
  it("Get product info", async () => {
    const products = await ProductApi.getProducts();
    expect(products.length > 0).toBeTruthy();
  });
});

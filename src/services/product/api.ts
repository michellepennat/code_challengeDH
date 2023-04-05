export class ProductApi {
  static getProducts = (): Promise<any> =>
    new Promise((resolve, reject): any => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch(
        `https://6222994f666291106a29f999.mockapi.io/api/v1/products`,
        requestOptions
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
}

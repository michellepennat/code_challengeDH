import { render, screen } from "@testing-library/react-native";
import Header from "./components/header";
import PointBox from "./components/point-box";

describe("PointBox", () => {
  it("Should render text", () => {
    render(<PointBox total={100} />);
    const titleElement = screen.getByText("Diciembre");
    // const textUser = screen.getByText("Ruben Rodriguez");
    expect(titleElement).toBeDefined();
    // expect(textUser).toBeDefined();
  });

  //   it('Should render product', () => {
  //     render(
  //       <ModalProduct
  //         productDetail={productDetail[0]}
  //         productDescription={productDescription[0]}
  //         open={true}
  //         onOk={() => {}}
  //         onCancel={() => {}}
  //         footer={false}
  //       />
  //     );
  //     const nameProduct = screen.getByText(productDetail[0].title);
  //     const descriptionProduct = screen.getByText(
  //       productDescription[0].plain_text
  //     );

  //     expect(nameProduct).toBeInTheDocument();
  //     expect(descriptionProduct).toBeInTheDocument();
  //   });

  //   it('Should render free shipping', () => {
  //     render(
  //       <ModalProduct
  //         productDetail={productDetail[0]}
  //         productDescription={productDescription[0]}
  //         open={true}
  //         onOk={() => {}}
  //         onCancel={() => {}}
  //         footer={false}
  //       />
  //     );
  //     const freeShipping = screen.getByText('Envío gratis');

  //     expect(freeShipping).toBeInTheDocument();
  //   });

  //   it('Should render description', () => {
  //     render(
  //       <ModalProduct
  //         productDetail={productDetail[1]}
  //         productDescription={productDescription[1]}
  //         open={true}
  //         onOk={() => {}}
  //         onCancel={() => {}}
  //         footer={false}
  //       />
  //     );
  //     const description = productDescription[1].plain_text;
  //     const empty = screen.getByText('No existe descripción de este producto.');

  //     expect(description === '' && empty).toBeTruthy();
  //   });

  //   it('Should render button buy', async () => {
  //     render(
  //       <ModalProduct
  //         productDetail={productDetail[1]}
  //         productDescription={productDescription[1]}
  //         open={true}
  //         onOk={() => {}}
  //         onCancel={() => {}}
  //         footer={false}
  //       />
  //     );
  //     const buyButton = screen.getByText('Comprar');
  //     fireEvent.click(buyButton);
  //     const bougthAlert = await screen.getByText(/Has comprado con éxito/);

  //     expect(bougthAlert).toBeInTheDocument();
  //   });

  //   it('Should render button close', async () => {
  //     render(
  //       <ModalProduct
  //         productDetail={productDetail[1]}
  //         productDescription={productDescription[1]}
  //         open={true}
  //         onOk={() => {}}
  //         onCancel={() => {}}
  //         footer={false}
  //       />
  //     );
  //     const closeButton = screen.getByLabelText('Close');
  //     fireEvent.click(closeButton);
  //     const modal = await screen.getByRole('dialog');

  //     expect(modal).toBeTruthy();
  //   });
});

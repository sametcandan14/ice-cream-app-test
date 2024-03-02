import { render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/* get find query 

get başta varsa
find sonradan geliyorsa (async)- ne zaman geleceği belli değil
query element dom da yok ve koşula göre gelecekse kullanılır.

*/

test("APIden her bir çeşit için ekrana bir kart basılır.", async () => {
  render(<Scoops />);

  const images = await screen.findAllByRole("img", { name: "çeşit" });

  expect(images).toHaveLength(4);
});

describe("Dondurma çeşitlerinde ekleme ve sıfırlama işlemini kontrol etme", () => {
  test("Çeşit eklemenin toplam fiyata yansıması", async () => {
    const user = userEvent.setup();
    render(<Scoops />);

    const total = screen.getByRole("heading", { name: /Dondurma Ücreti:/i });

    const buttons = await screen.findAllByRole("button", { name: "Ekle" });

    await user.click(buttons[0]);

    expect(total).toHaveTextContent("20");

    await user.dblClick(buttons[1]);

    expect(total).toHaveTextContent("60");
  });

  test("Çeşit sıfırlamanın toplama yansıması", async () => {
    const user = userEvent.setup();
    render(<Scoops />);

    const total = screen.getByRole("heading", { name: /Dondurma Ücreti:/i });
    const buttonsAdd = await screen.findAllByRole("button", { name: "Ekle" });
    const buttonsReset = await screen.findAllByRole("button", {
      name: "Sıfırla",
    });

    await user.click(buttonsAdd[2]);
    await user.dblClick(buttonsAdd[3]);

    expect(total).toHaveTextContent("60");

    await user.click(buttonsReset[2]);
    expect(total).toHaveTextContent("40");

    await user.click(buttonsReset[3]);
    expect(total).toHaveTextContent("0");
  });
});

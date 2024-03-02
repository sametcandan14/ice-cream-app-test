import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("sosların ekleme çıkarma işleminin toplam fiyata olan etkisi", async () => {
  const user = userEvent.setup();
  render(<Toppings />);

  const total = screen.getByRole("heading", { name: /Sos Ücreti:/i });

  const cherryCheck = await screen.findByRole("checkbox", {
    name: /Cherries/i,
  });

  await user.click(cherryCheck);

  expect(total).toHaveTextContent("3");

  const mochiCheck = await screen.findByRole("checkbox", { name: /Mochi/i });

  await user.click(mochiCheck);

  expect(total).toHaveTextContent("6");

  await user.click(cherryCheck);

  expect(total).toHaveTextContent("3");

  await user.click(mochiCheck);

  expect(total).toHaveTextContent("0");
});
